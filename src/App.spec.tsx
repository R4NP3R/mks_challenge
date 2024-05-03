import { QueryClientProvider } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import { App } from "./App"
import { queryClient } from './services/queryClients'

describe('testing App component', () => { 

  it ('should app as rendering correctly', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App/>
      </QueryClientProvider>
    )

    expect(screen.getByText('MKS'))
    expect(screen.getByText('Sistemas'))
    expect(screen.getByText('MKS sistemas © Todos os direitos reservados'))
  })
})