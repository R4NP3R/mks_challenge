import styled from "styled-components";


export const Header = styled.header`
  background-color: #0F52BA;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0px 65px;
  justify-content: space-between;

`

export const Tittle = styled.h1`
  color: #fff;
  font-size: 40px;
  line-height: 20px;
  font-weight: 600;
  

  span {
    font-size: 20px;
    font-weight: 300;
    margin-left: 8px;
  }
`

export const CartButton = styled.button`
  background-color: #fff;
  width: 90px;
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
