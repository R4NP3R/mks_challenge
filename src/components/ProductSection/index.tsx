
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { getProducts } from '../../hooks/getProducts';
import { Product } from '../../interface/Products';
import { LoadingSkeleton } from '../SkeletonLoading';
import * as S from './styles';


export const ProductSection = () => {
  const {products, isLoading } = getProducts()
  const { addProduct } = useContext(CartContext);


  const productImageMotion = {
    productRest: { scale: 1, y: 0},
    productAnimation: { scale: 1.02, y: -10}
  }

  const addProductToCart = (product: Product) => {
    addProduct({
      id: product.id,
      name: product.name,
      brand: product.brand,
      description: product.description,
      photo: product.photo,
      price: product.price,
      quantity: 1
    }, product.id)
  }
    


  if (isLoading) { return <LoadingSkeleton/> }
  return (
    <S.ProductSection data-testid='list-products' className="container">
    {products?.map((product)=> (      
      <S.ProductContainer 
      initial="productRest"
      animate="productAnimation"
      whileHover={{scale: 1.01, y: -5, boxShadow: "6px 6px 12px 0px #00000022"}}
      transition={{duration: 0.3}} 
      key={product.id}>
        <S.ProductDetails>
        <S.ProductImage as={motion.div}  
        variants={productImageMotion}
        initial="productRest"
        >
          <img src={product.photo} alt="Product Image" />
        </S.ProductImage>
          <div className='product-info'>
            <p>{product.name}</p>
            <span>R${Math.trunc(product.price)}</span>
          </div>
          <p className="product-description">{product.description}</p>
        </S.ProductDetails>
        <S.BuyButton
          whileHover={{scale: 1.1}}
          onClick={() => addProductToCart(product)}>
            <img src="src/images/shopping-bag.svg" alt="" />
            <p>COMPRAR</p>
        </S.BuyButton>
      </S.ProductContainer>

    ))}
    </S.ProductSection>
  )
}