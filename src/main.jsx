import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './Layout/RootLayout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
  },
]);

createRoot(document.getElementById('root')).render(

  <StrictMode>

   <RouterProvider router={router} />,

  </StrictMode>,

)
