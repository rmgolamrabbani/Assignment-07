import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './Layout/RootLayout';
import Timeline from './pages/timeline/timeline';
import StatsBoard from './pages/statsboard/statsboard';
import NotFoundPage from './pages/notfoundpage/notfoundpage';
import FriendDetails from './pages/frienddetails/frienddetails';
import Homepage from './pages/homepage/homepage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: "/Friends/:friendId",
        element: <FriendDetails />
      },
      {
        path: "Timeline",
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
    <RouterProvider router={router} />
  </StrictMode>
);

