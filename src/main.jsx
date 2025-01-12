import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
            <div>
              <RouterProvider router={router} />
            </div>
          </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
