import { createContext, useState } from "react";
import { Product } from "../interface/Products";

type ProductsCartContext = {
  cartProducts: Product[]
  addProduct: (product: Product, productId: number) => void
  removeProduct: (productId: number) => void
  handleUpdateItem: (product: Product, method: string) => number | undefined
}

export const CartContext = createContext<ProductsCartContext>({} as ProductsCartContext);


export const CartProvider = ({children}: {children: React.ReactNode}) => {
  const [cartProducts, setCartProducts] = useState<Product[]>([])

  function handleUpdateItem (product: Product, method: string) {
    let productQuantity = product.quantity
      if (method === 'increase') {      
        productQuantity += 1
      }  
      if (method === 'decrease') {
        if (productQuantity === 1) {
          return;
        }
        productQuantity -= 1
      } 
      
    const newProductQuantity = product.quantity = productQuantity;
    return newProductQuantity
  }

  function addProduct(product: Product, productId: number) {
    const existsProduct = cartProducts.find((product) => product.id === productId)

    if (product.id === existsProduct?.id) {
      return alert('Item já está no carrinho')
    } else {
      setCartProducts((prev) => [...prev, product]);
    }   

  }

  function removeProduct(productId: number) {
    const newCart = cartProducts.filter((product) => product.id !== productId);

    setCartProducts(newCart);
  }

  const value = {
    cartProducts,
    addProduct,
    removeProduct,
    handleUpdateItem
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
