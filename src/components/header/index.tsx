import CartIcon from '../../assets/CartIcon.svg'
import * as S from './styles'

export const Header = () => {
  return (
    <S.Header>
      <S.Tittle>
        MKS 
        <span>Sistemas</span>
      </S.Tittle>
      <S.CartButton>
        <img src={CartIcon} alt="" />
        <span>0</span>
      </S.CartButton>
    </S.Header>
  )
}