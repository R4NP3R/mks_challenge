import { motion } from "framer-motion";
import styled from "styled-components";

interface Props {
  smallicon?: boolean
  quantity?: number
}

export const CartButton = styled.button`
  position: absolute;
  z-index: 3;
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

    @media (max-width: 420px) {
    width: 12px;
    margin: 0px 8px;
    }
  }

  span {
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;

    @media (max-width: 420px) {
    font-size: 12px;
    }
  }

  @media (max-width: 420px) {
    position: fixed;
    width: 52px;
    height: 26px;
    padding:0px;
    right: 24px;
    top: 18px;
  }
`

export const Sidebar = styled(motion.div)`
  background-color: #0F52BA;
  position: fixed;
  right:0;
  top: 0;
  height: 100%;
  z-index: 3;
  box-shadow: -5px 0px 6px 0px #00000021;
`

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 64px;
  position: relative;
  margin: 36px 0px 0px 36px;


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

    @media (max-width: 420px) {
      right: 15px;
    }
  }

  @media (max-width: 420px) {
    margin-bottom: 12px;
  }

`

export const SidebarBody = styled.div`
  margin: 36px 0px 36px 36px;
  padding: 12px 0px;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 65vh;
`

export const SidebarProduct = styled(motion.div)`
  background-color: #fff;
  width: 400px;
  height: 105px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  position: relative;
  padding: 12px;
  margin-bottom: 22px;

  @media (max-width: 420px) {
    width: 250px;
    height:220px;
    display: flex;
    flex-direction: column;
    padding: 22px 12px;
  }

`

export const SidebarProductImage = styled.div`
  width: 80px;
  height: 100%;
  margin-right: 12px;
  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 420px) {
    width: 100;
    height: 100px;

  }
`

export const SidebarProductName = styled.span`
  margin-right: 12px;
  color:#2C2C2C;
  width: 112px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  @media (max-width: 420px) {
    width: 100%;
  }
`
export const SidebarProductInfo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 420px) {
    width: 100%;
    justify-content: space-between;
  }
`

export const SidebarProductQuantity = styled.div`
  margin-right: 14px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 60px;
  height: 40px;
  .text {
    font-weight: 400;
    font-size: 10px;
    line-height: 6px;
    @media (max-width: 420px) {
      display: none;
    }
  }

  @media (max-width: 420px) {
    margin: 0;
    }
  
`

export const SidebarProductQuantitySelector = styled.div<Props>`
  width: 60px;
  height: 24px;
  margin-top: 4px;
  border: 1px solid;
  border-radius: 4px;
  border-color: #BFBFBF;
  display: flex;
  justify-content: center;
  align-items: center;

  button, span{
    cursor: pointer;
    padding: 0px 4px;
    background-color: transparent;
    text-align: center;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    border: none;
    width: 100%;
  }
    @media (max-width: 420px) {
    font-size: 20px;
    line-height: 24px;
    padding: 0px 8px;
  }
  .productQuantity {
    border-left: 1px solid #BFBFBF;
    border-right: 1px solid #BFBFBF;

  }

  @media (max-width: 420px) {
    width: 98px;
    height: 34px;
  }
`

export const SidebarProductPrice = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  width: 100%;

  @media (max-width: 420px) {
    width: 84px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #373737;
    color: white;
    border-radius: 4px;
  }
`

export const SidebarProductFooter = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0px;
  left: 0px;
`

export const SidebarProductsTotalPrice = styled(motion.div)`
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

    @media (max-width: 420px) {
      margin: 0px 28px;
  }
}

@media (max-width: 420px) {
    height: 65px;
    padding: 25px 0px;
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

  @media (max-width: 420px) {
    height: 65px;
    padding: 20px 0px;
    font-size: 20px;
  }
`

export const CloseIcon = styled(motion.img)<Props>`
  cursor: pointer;
  position: ${(props) => props.smallicon ? 'absolute' : ''};
  top: ${(props) => props.smallicon ? '-5px' : ''};
  right: ${(props) => props.smallicon ? '-5px' : ''};
  width: ${(props) => props.smallicon  ? '18px' : '38px'};

  @media (max-width: 420px) {
    right: ${(props) => props.smallicon ? '-5px' : ''};
    width: ${(props) => props.smallicon  ? '25px' : '45px'};
  }
`

export const OpacityBackground = styled(motion.div)`
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0);
  z-index: 2;
  width: 100%;
  height: 100%;

`