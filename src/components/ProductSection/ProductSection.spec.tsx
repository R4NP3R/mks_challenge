import { QueryClientProvider } from "@tanstack/react-query"
import { render, screen, waitFor } from "@testing-library/react"
import { ProductSection } from "."
import { queryClient } from "../../services/queryClients"


const renderProductSection = () => (
  render(
    <QueryClientProvider client={queryClient}>
      <ProductSection/>
    </QueryClientProvider>
))

describe('testing ProductionSection component', () => {  

  it('should ProductionSection have a loading screen', () => {
    renderProductSection();

    expect(screen.getByTestId('loading'))
  })

  it('should ProductionSection have a product', async () => {
    renderProductSection();

    await waitFor(() => {
      expect(screen.getByText('AirPods'))
      expect(screen.getByText('R$1000'))
    })
  })

})