import { motion } from "framer-motion";
import styled from "styled-components";

export const ProductOrderBy = styled.div`
  max-width: 1024px;
  margin: 0px auto;
  padding-top: 40px;  
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: center;

  span {
    margin-left: 12px;
    margin-right: 4px;
  }
`

export const ProductSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  max-width: 1024px;
  margin: 0px auto;
  padding-top: 40px;
  padding-bottom: 46px;
  column-gap: 22px;
  row-gap: 32px;

  @media (max-width: 420px) {
    width: 70%;
    padding-top: 86px;
    padding-bottom: 46px;
  }
`

export const ProductContainer = styled(motion.div)`
  position: relative;
  background-color: #fff;
  width: 230px;
  height: 310px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 2px 8px 0px #00000022;

  @media (max-width: 420px) {
    width: 100%;
    height: 320px;
  }
`

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 14px;
  
  .product-info {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    
    p {
      display: flex;
      margin-right: 10px;
      align-items: center;
      width: 124px;
      height: 38px;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
    }

    span {
      background-color: #373737;
      padding: 4px 6px;
      color: #fff;
      border-radius: 6px; 
      font-weight: 700;
      font-size: 16px;
      line-height: 16px;

    }

    @media (max-width: 420px) {
    justify-content: space-between;
  }
  }

  .product-description {
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    margin-bottom: 12px;
  }

`

export const ProductImage = styled.div`  
  margin-top: 18px;
  margin-bottom: 14px;
  display: flex;
  justify-content: center;
  img {
    height: 140px;
  }
`

export const BuyButton = styled(motion.button)`
  position: absolute;
  cursor: pointer;
  bottom: 0px;
  background-color: #0F52BA;
  width: 100%;
  height: 32px;
  border: none;
  border-radius: 0px 0px 8px 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 12px;
    height: 14px;
    margin-right: 14px;
  }

  p {
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
  }


`


