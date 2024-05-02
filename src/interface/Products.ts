export interface Product {
  id:	number
  name:	string
  brand:	string
  description:string
  photo: string
  price: number
  quantity: number
}

export interface ProductsResponse {
  count: number
  products: Product[]
}
