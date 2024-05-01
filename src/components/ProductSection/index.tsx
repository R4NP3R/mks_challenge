
import shoppingBag from '../../assets/shopping-bag.svg';
import { getProducts } from '../../hooks/getProducts';
import { LoadingIcon } from '../loadingIcon';
import * as S from './styles';


export const ProductSection = () => {
  const {products, isLoading } = getProducts()
  
  if (isLoading) { return <LoadingIcon/> }

  return (
    
    <S.ProductSection className='container'>
    {products?.map((product)=> (
      
      <S.ProductContainer key={product.id}>
        <S.ProductDetails>
        <S.ProductImage>
          <img src={product.photo} alt="Product Image" />
        </S.ProductImage>
          <div className='product-info'>
            <p>{product.name}</p>
            <span>R${Math.trunc(product.price)}</span>
          </div>
          <p className='product-description'>{product.description}</p>
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