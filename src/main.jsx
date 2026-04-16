import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './Layout/RootLayout';
import Timeline from './pages/timeline/timeline';
import FriendDetails from './pages/FriendDetails/FriendDetails';
import StatsBoard from './pages/StatsBoard/StatsBoard';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Homepage from './pages/homepage/Homepage';
import { Toaster } from "react-hot-toast";


import { TimelineProvider } from './context/TimelineContext';

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
    <TimelineProvider>
      <RouterProvider router={router} />
       <Toaster position="top-center" />
    </TimelineProvider>
  </StrictMode>
);



