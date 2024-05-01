import { useState } from 'react';
import cartIcon from '../../assets/CartIcon.svg';
import closeCartIcon from '../../assets/Close_cart.svg';
import appleWatch from '../../assets/apple-watch.png';
import * as S from './styles';

export const SideBar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);


  if (!sideBarOpen) {
    return (
      <S.CartButton onClick={() => setSideBarOpen(true)}>
      <img src={cartIcon} alt="Cart Icon" />
      <span>0</span>
    </S.CartButton>
    )
  }

  return (
    <>
    <S.Sidebar>
      <S.SidebarHeader>
        <span>Carrinho <br/>
          de Compras</span>
        <S.CloseIcon 
        onClick={() => setSideBarOpen(false)}
        src={closeCartIcon} 
        alt="Close Cart Icon" />
      </S.SidebarHeader>
      <S.SidebarBody>
        {Array.from({length: 2}).map((_, i) => (
          <S.SidebarProduct key={i}>
          <S.CloseIcon 
          src={closeCartIcon}
          smallicon
          alt="Close Cart Icon" />
          <S.SidebarProductImage>
            <img src={appleWatch} alt="" />
          </S.SidebarProductImage>
          <S.SidebarProductName>Apple Watch Series 4 GPS</S.SidebarProductName>
          <S.SidebarProductQuantity>
            <span>Qtd:</span>
            <S.SidebarProductQuantitySelector>
              <span>-</span>
              <span className='productQuantity'>1</span>
              <span>+</span>
            </S.SidebarProductQuantitySelector>
          </S.SidebarProductQuantity>
          <S.SidebarProductPrice>R$399</S.SidebarProductPrice>
        </S.SidebarProduct>
        ))}
      </S.SidebarBody>
      <S.SidebarProductFooter>
        <S.SidebarProductsTotalPrice>
          <span>Total:</span>
          <span>R$798</span>
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