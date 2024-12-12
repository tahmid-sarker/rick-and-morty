import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DataProvider from './context/DataProvider.jsx'
import { RouterProvider } from 'react-router'
import { Router } from './router/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={Router}></RouterProvider>
    </DataProvider>
  </StrictMode>,
)