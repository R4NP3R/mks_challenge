import { AnimatePresence, motion } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Product } from '../../interface/Products';
import * as S from './styles';

export const SideBar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const {cartProducts, removeProduct, handleUpdateItem} = useContext(CartContext)
  const [productsInfo, setProductInfo] = useState(1);
  const [cartProductsQuantity, setCartProductsQuantity] = useState(0)

  // used to update cart values
  useEffect(()=> {
    setCartProductsQuantity(totalItensCart())
  }, [productsInfo, cartProducts])
  
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

  function updateProductInfo(product: Product, method: string) {    
    handleUpdateItem(product, method)
    setProductInfo((product) => product + 1)
  }
  
  

  const basicAnimations = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  const sidebarAnimations = {
    close: {opacity: 0, width: 0, height: 0},
    open: {opacity: 1, width: 490, height: "100%"}
  }
  



  if (!sideBarOpen) {    
    return (
      <S.CartButton data-testid='cart-button' onClick={() => setSideBarOpen(true)}>
        <img
        src='src/images/CartIcon.svg' 
        alt="Cart Icon" />        
        <AnimatePresence initial={false}>
        <motion.span 
        key={cartProductsQuantity}
        initial={{opacity: 0, y: -15}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.3}}    
        >{cartProductsQuantity}</motion.span>
        </AnimatePresence>
      </S.CartButton>
    )
  }
  

  return (
    <AnimatePresence>
        <S.Sidebar 
        key="sidebar"
        variants={sidebarAnimations}
        initial="close"
        animate="open"
        exit="close"
        transition={{duration: 0.6}}
        >
          <S.SidebarHeader>
            <motion.span
            variants={basicAnimations}
            initial="hidden" 
            animate="visible"
            transition={{duration: 0.2, delay: 0.4}}
            >
              Carrinho
              <br/>
              de Compras          
            </motion.span>
            <S.CloseIcon
              onClick={() => {setSideBarOpen(false)}}
              src='src/images/CloseIcon.svg' 
              alt="Close Cart"
              variants={basicAnimations}
              initial="hidden" 
              animate="visible"
              transition={{duration: 0.6, delay: 0.2}}
              />
          </S.SidebarHeader>
          <S.SidebarBody>
            <AnimatePresence>
            {cartProducts.map((product) => (
              <S.SidebarProduct
              variants={{
                hidden: () => ({
                  opacity: 0,
                  x: 200,
                  transition: {duration: 0.6}
                }),
                rest: () => ({
                  opacity: 1,
                  x: 0,
                  transition: {duration: 0.4, delay: 0.4}
                }),
              }}
              key={product.id} 
              initial="hidden"
              animate="rest"
              exit="hidden"
              >
              <S.CloseIcon 
                smallicon 
                src='src/images/CloseIcon.svg' 
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
                  <button className='decrease'  onClick={() => updateProductInfo(product, 'decrease')}>-</button>
                  <AnimatePresence>
                  <span className='productQuantity'>
                    {product.quantity}
                  </span>
                  </AnimatePresence>
                  <button onClick={() => updateProductInfo(product, 'increase')}>+</button>
                </S.SidebarProductQuantitySelector>
              </S.SidebarProductQuantity>
              <S.SidebarProductPrice>R${Math.ceil(product.price * product.quantity)}</S.SidebarProductPrice>
              </S.SidebarProductInfo>
            </S.SidebarProduct>
            ))}
            </AnimatePresence>
          </S.SidebarBody>
          <S.SidebarProductFooter>
            <S.SidebarProductsTotalPrice>
              <motion.span 
              variants={basicAnimations}
              initial="hidden" 
              animate="visible" 
              transition={{delay: 0.6, duration: 0.4}}
              >
                Total:
              </motion.span>
              <motion.span
              variants={basicAnimations}
              initial="hidden" 
              animate="visible"
              transition={{delay: 0.6, duration: 0.6}}
              >
                R$ {totalPrice()}
              </motion.span>
            </S.SidebarProductsTotalPrice>
            <S.FinalizePurchaseButton>
              Finalizar Compra
            </S.FinalizePurchaseButton>
          </S.SidebarProductFooter>
        </S.Sidebar>
    <S.OpacityBackground initial={{opacity: 0}} animate={{opacity: 0.3}} transition={{duration: 1}} onClick={() => {setSideBarOpen(false)}}/>
    </AnimatePresence>  
  )
}
