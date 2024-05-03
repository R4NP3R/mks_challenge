import { QueryClientProvider } from "@tanstack/react-query"
import { fireEvent, render, screen } from "@testing-library/react"
import { SideBar } from "."
import { CartProvider } from "../../context/CartContext"
import { queryClient } from "../../services/queryClients"
import { ProductSection } from "../ProductSection"

const renderProductSection = () => (
  render(
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <SideBar/>
        <ProductSection/>
      </CartProvider>
    </QueryClientProvider>
  )
)

describe('testing SideBar component', () => {
  it ('should Sidebar button is working', () => {
    const { getByTestId } = renderProductSection()
    const sidebarButton = getByTestId('cart-button')

    fireEvent.click(sidebarButton)

    expect(screen.getByText('Finalizar Compra'))
  })
})