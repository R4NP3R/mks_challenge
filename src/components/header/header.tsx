import CartIcon from '../../assets/CartIcon.svg'
import * as S from './style'

export const Header = () => {
  return (
    <S.Header>
      <S.Tittle>
        MKS 
        <span>Sistemas</span>
      </S.Tittle>
      <S.CartButton>
        <img src={CartIcon} alt="" />
        <span>99+</span>
      </S.CartButton>
    </S.Header>
  )
}