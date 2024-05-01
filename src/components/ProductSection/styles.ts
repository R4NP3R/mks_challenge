import styled from "styled-components";

export const ProductSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  max-width: 1024px;
  width: 100%;
  margin: 0px auto;
  margin-top: 116px;
  column-gap: 22px;
  row-gap: 32px;
`

export const ProductContainer = styled.div`
  position: relative;
  background-color: #fff;
  width: 220px;
  height: 285px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px 0px #00000022;
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
  }

  .product-description {
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    margin-bottom: 12px;
  }

`

export const ProductImage = styled.div`
  width: 100%;
  margin-top: 18px;
  margin-bottom: 14px;
  display: flex;
  justify-content: center;
`

export const BuyButton = styled.button`
  position: absolute;
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
