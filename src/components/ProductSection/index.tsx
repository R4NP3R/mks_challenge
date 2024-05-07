
import { AnimatePresence, motion } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { getProducts } from '../../hooks/getProducts';
import { Product } from '../../interface/Products';
import { LoadingSkeleton } from '../SkeletonLoading';
import * as S from './styles';


export const ProductSection = () => {
  const { addProduct } = useContext(CartContext);
  const [orderBy, setOrderBy] = useState('ASC')
  const [sortBy, setSortBy] = useState('name')
  const {products, isLoading, refetch } = getProducts(sortBy, orderBy)


  const productImageMotion = {
    productRest: { scale: 1, y: 0},
    productAnimation: { scale: 1.02, y: -10}
  }

  useEffect(()=> {
    refetch()
  }, [orderBy, sortBy])

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
    <div>
    <S.ProductOrderBy className="container">
      <div>
      <span>Ordernar por:</span>
      <select onChange={(e) => setOrderBy(e.target.value)}>
        <option value="ASC">Crescente</option>
        <option value="DESC">Decrescente</option>
      </select>
      </div>
      <div>
      <span>Organizar por:</span>
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="name">Nome</option>
        <option value="price">Preço</option>
      </select>
      </div>
    </S.ProductOrderBy>
    <S.ProductSection data-testid="list-products">
    <AnimatePresence>
    {products?.map((product)=> (      
      <S.ProductContainer 
      initial="productAnimation"
      animate="productRest"
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
    </AnimatePresence>
    </S.ProductSection>
    </div>
  )
}