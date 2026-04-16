import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './Layout/RootLayout';
import Timeline from './pages/timeline/timeline';
import StatsBoard from './pages/StatsBoard/StatsBoard';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import FriendDetails from './pages/FriendDetails/FriendDetails';
import Homepage from './pages/Homepage/Homepage';


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

