import AppleWatch from '../../assets/apple-watch.png'
import shoppingBag from '../../assets/shopping-bag.svg'
import * as S from './styles'

export const ProductSection = () => {
  return (
    <S.ProductSection className='container'>
    {Array.from({length: 8}).map((_, i)=> (
      
      <S.ProductContainer key={i}>
        <S.ProductDetails>
        <S.ProductImage>
          <img src={AppleWatch} alt="Product Image" />
        </S.ProductImage>
          <div className='product-info'>
            <p>Apple Watch Series 4 GPS</p>
            <span>R$399</span>
          </div>
          <p className='product-description'>Redesigned from scratch and completely revised.</p>
        </S.ProductDetails>
        <S.BuyButton>
          <img src={shoppingBag} alt="" />
          <p>COMPRAR</p>
        </S.BuyButton>
      </S.ProductContainer>

    ))}
    </S.ProductSection>
  )
}