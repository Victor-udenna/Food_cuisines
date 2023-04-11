import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
 <QueryClientProvider client={queryClient}>
  <App/>
 </QueryClientProvider>
 {/* <ReactQueryDevtools initialIsOpen={false}/> */}
  </React.StrictMode>,
)
