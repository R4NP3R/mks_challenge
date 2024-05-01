export interface Products {
  id:	number
  name:	string
  brand:	string
  description:string
  photo: string
  price: number
}

export interface ProductsResponse {
  count: number
  products: Products[]
}
