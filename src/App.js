import React from "react";
import {
  createHashRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";


import Header from "_components/Dashboard/Header/Header";
import Sidebar from "_components/Dashboard/Sidebar/Sidebar";

import { SignIn, SignUp } from './_pages/auth'

import { TopLoaderProvider } from "_contexts/TopLoaderProvider";
import { PortalsProvider } from "_contexts/PortalsProvider";
import { GoogleOAuthProvider } from '@react-oauth/google';

import Board from "_pages/home/Board/Board";

import useDecodeToken from "_hooks/useDecodeToken";

const clientId = "996420354509-0d4trcb21bdo1tm9k6jc5d95ootgf7h5.apps.googleusercontent.com";

const NoDashboardLayout = () => {
  return (
    <Outlet />
  )
}


const WithDashboardLayout = () => {
  const token = useDecodeToken();

  return (
    <React.Fragment>
      <Header />
      <div className="container">
          <Sidebar userInfo={token} />
          <main className="content">
          <Outlet />
          </main>
      </div>
    </React.Fragment>
  )
}


const router = createHashRouter([
  {
    path: "/",
    element: <NoDashboardLayout />,
    children: [
        {
          path: "/",
          element: <SignUp />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/signin",
          element: <SignIn />,
        },
      ],
      errorElement: <div>Error</div>
  }, 
  {
    path: "/home",
    element: <WithDashboardLayout />,
    children: [
      {
        path: "/home/board",
        element: <Board />,
      },
      {
        path: "/home/settings",
        element: <div>settings</div>,
      },
    ],
    errorElement: <div>Error</div>
  },
  
]);



function App() {
  return (
    <React.Fragment>
      <GoogleOAuthProvider clientId={clientId}>
        
        <PortalsProvider>
          <TopLoaderProvider>
            <RouterProvider router={router} />
          </TopLoaderProvider>
        </PortalsProvider>

      </GoogleOAuthProvider>
    </React.Fragment>
  );
}

export default App;
