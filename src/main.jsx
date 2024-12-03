import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import ContextProviders from './ContextProviders/ContextProviders.jsx'
import { Helmet } from 'react-helmet'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ContextProviders>
          <RouterProvider router={router}></RouterProvider>
      </ContextProviders>
  </StrictMode>,
)
