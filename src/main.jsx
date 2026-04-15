import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './Layout/RootLayout'
import Homepage from './pages/homepage/homepage';
import Timeline from  './pages/timeline/timeline' ;
import StatsBoard from './pages/StatsBoard/StatsBoard';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: "timeline",
        element: <Timeline />
      },
      { 
        path: "StatsBoard",
        element: <StatsBoard /> 
      },

    ],
    errorElement: <NotFoundPage />
  },
]);

createRoot(document.getElementById('root')).render(

  <StrictMode>

   <RouterProvider router={router} />,

  </StrictMode>,

)
