import isPropValid from '@emotion/is-prop-valid'
import { QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { StyleSheetManager } from 'styled-components'
import { App } from './App.tsx'
import { queryClient } from './services/queryClients.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <App />
      </StyleSheetManager>
    </QueryClientProvider>
  </React.StrictMode>,
)
