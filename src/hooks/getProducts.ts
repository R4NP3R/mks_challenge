import { useQuery } from "@tanstack/react-query"
import axios, { AxiosPromise } from "axios"
import { ProductsResponse } from "../interface/Products"

const fetchProducts = async (sortBy: string, orderBy: String): AxiosPromise<ProductsResponse> => {
  const response = await axios.get<ProductsResponse>(`https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=${sortBy}&orderBy=${orderBy}`)
      return response
}

export const getProducts = (sortBy: string, orderBy: String) => {
  const query = useQuery({
    queryKey: ['products'],
    queryFn: () => fetchProducts(sortBy, orderBy)
  })

  return {
    ...query,
    data: query.data?.data,
    products: query.data?.data.products
  }
}