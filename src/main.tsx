import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import store from './Redux/store';
import {Provider} from "react-redux"
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
<Provider store={store}>
<QueryClientProvider client={queryClient}>
  <App/>
  <ReactQueryDevtools initialIsOpen={false} />
 </QueryClientProvider>
</Provider>
  </React.StrictMode>,
)
