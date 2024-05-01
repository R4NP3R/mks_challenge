import styled from "styled-components";

interface Props {
  smallicon?: boolean
}

export const CartButton = styled.button`
  position: fixed;
  right: 65px;
  top: 25px;
  background-color: #fff;
  width: 90px;
  cursor: pointer;
  height: 45px;
  border-radius: 8px;
  border: none;
  padding: 14px;
  display: flex;
  align-items: center;

  img {
    margin-right: 16px;
  }

  span {
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
  }
`

export const CloseIcon = styled.img<Props>`
  cursor: pointer;
  position: ${(props)=> props.smallicon ? 'absolute' : ''};
  top: ${(props)=> props.smallicon ? '-5px' : ''};
  right: ${(props)=> props.smallicon ? '-5px' : ''};
  width: ${(props)=> props.smallicon  ? '18px' : '38px'};
`

export const Sidebar = styled.div`
  background-color: #0F52BA;
  position: fixed;
  right:0;
  width: 490px;
  height: 100%;
  z-index: 3;
  box-shadow: -5px 0px 6px 0px #00000021;
  padding: 36px 0px 36px 36px;
`

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 64px;
  position: relative;


  span {
    text-align: left;
    width: 180px;
    color: #fff;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
  }

  img {
    position: absolute;
    right: 36px;
  }
`

export const SidebarBody = styled.div`
  padding: 12px 0px;
  width: 100%;
  height: 60vh;
`

export const SidebarProduct = styled.div`
  background-color: #fff;
  width: 400px;
  height: 105px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  position: relative;
  padding: 12px;
  margin-bottom: 22px;

`

export const SidebarProductImage = styled.div`
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`

export const SidebarProductName = styled.span`
  margin-left: 22px;
  color:#2C2C2C;
  width: 112px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`


export const SidebarProductQuantity = styled.div`
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 50px;
  span {
    font-weight: 400;
    font-size: 10px;
    line-height: 6px;
  }
  
`

export const SidebarProductQuantitySelector = styled.div`
  width: 60px;
  height: 24px;
  margin-top: 4px;
  border: 1px solid;
  border-radius: 4px;
  border-color: #BFBFBF;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    cursor: pointer;
    padding: 0px 6px;
    text-align: center;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
  }

  .productQuantity {
    cursor: all-scroll;  
    border-left: 1px solid #BFBFBF;
    border-right: 1px solid #BFBFBF;

  }
`

export const SidebarProductPrice = styled.span`
  margin-left: 40px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
`

export const SidebarProductFooter = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0px;
  left: 0px;
`

export const SidebarProductsTotalPrice = styled.div`
  width: 100%;
  display: flex;
  padding: 36px 0px;
  justify-content: space-between;
  background-color: #0F52BA;
    span {
    color: #fff;
    font-weight: 700;
    font-size: 28px;
    line-height: 16px;
    margin: 0px 48px;
}
`

export const FinalizePurchaseButton = styled.button`
  color: #fff;
  background-color: #000;
  cursor: pointer;
  width: 100%;
  padding: 40px 0px;
  font-weight: 700;
  font-size: 28px;
  line-height: 16px;
  border: none;
`

export const OpacityBackground = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
  width: 100%;
  height: 100%;

`