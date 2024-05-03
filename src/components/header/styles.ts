import styled from "styled-components";


export const Header = styled.header`
  width: 100%;
  z-index: 1;
  background-color: #0F52BA;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0px 65px;
  justify-content: space-between;

  @media (max-width: 420px) {
    position:fixed;
    height: 48px;
    padding: 30px 20px;
  }

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

  @media (max-width: 420px) {
    font-size: 32px;
  }
`
