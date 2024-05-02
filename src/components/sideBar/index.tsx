import { useContext, useEffect, useState } from 'react';
import cartIcon from '../../assets/CartIcon.svg';
import closeCartIcon from '../../assets/CloseIcon.svg';
import { CartContext } from '../../context/CartContext';
import { Product } from '../../interface/Products';
import * as S from './styles';

export const SideBar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const {cartProducts, removeProduct, handleUpdateItem} = useContext(CartContext)
  const [productsInfo, setProductInfo] = useState(1);
  function totalPrice() {
    let sum = 0
    
    for (let product of cartProducts) {
      sum += product.price * product.quantity
    }
    return sum
  }

  function totalItensCart() {
    let sum = 0
    
    for (let product of cartProducts) {
      sum += product.quantity
    }
    return sum
  }

  useEffect(()=> {}, [productsInfo])

  function updateProductInfo(product: Product, method: string) {
    
    handleUpdateItem(product, method)
    setProductInfo((product) => product + 1)
  }
  
  if (!sideBarOpen) {
    return (
      <S.CartButton onClick={() => setSideBarOpen(true)}>
      <img src={cartIcon} alt="Cart Icon" />
      <span>{totalItensCart()}</span>
    </S.CartButton>
    )
  }  

  return (
    <>
    <S.Sidebar>
      <S.SidebarHeader>
        <span>
          Carrinho
          <br/>
          de Compras          
        </span>
        <S.CloseIcon onClick={() => setSideBarOpen(false)}
            src={closeCartIcon} 
            alt="Close Cart" />
      </S.SidebarHeader>
      <S.SidebarBody>
        {cartProducts.map((product, i) => (
          <S.SidebarProduct key={i}>
          <S.CloseIcon 
            smallicon 
            src={closeCartIcon}  
            onClick={()=> removeProduct(product.id)} 
          />
          <S.SidebarProductImage>
            <img src={product.photo} alt={product.name} />
          </S.SidebarProductImage>
          <S.SidebarProductName>{product.name}</S.SidebarProductName>
          <S.SidebarProductInfo>
          <S.SidebarProductQuantity>
            <span className='text'>Qtd:</span>
            <S.SidebarProductQuantitySelector>
              <button onClick={() => updateProductInfo(product, 'decrease')}>-</button>
              <span className='productQuantity'>{product.quantity}</span>
              <button onClick={() => updateProductInfo(product, 'increase')}>+</button>
            </S.SidebarProductQuantitySelector>
          </S.SidebarProductQuantity>
          <S.SidebarProductPrice>R${Math.ceil(product.price * product.quantity)}</S.SidebarProductPrice>
          </S.SidebarProductInfo>
        </S.SidebarProduct>
        ))}
      </S.SidebarBody>
      <S.SidebarProductFooter>
        <S.SidebarProductsTotalPrice>
          <span>Total:</span>
          <span>R$ {totalPrice()}</span>
        </S.SidebarProductsTotalPrice>
        <S.FinalizePurchaseButton>
          Finalizar Compra
        </S.FinalizePurchaseButton>
      </S.SidebarProductFooter>
    </S.Sidebar>
    <S.OpacityBackground onClick={() => setSideBarOpen(false)}/>
    </>  

  )
}