import { useQuery } from "@tanstack/react-query"
import axios, { AxiosPromise } from "axios"
import { ProductsResponse } from "../interface/Products"

const fetchProducts = async (): AxiosPromise<ProductsResponse> => {
  const response = await axios.get<ProductsResponse>('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=ASC')
      return response
}

export const getProducts = () => {
  const query = useQuery({
    queryKey: ['products'],
    queryFn: () => fetchProducts()
  })

  return {
    ...query,
    data: query.data?.data,
    products: query.data?.data.products
  }
}