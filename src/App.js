import React from "react";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import { SignIn, SignUp } from './_pages/auth'

import { TopLoaderProvider } from "_contexts/TopLoaderProvider";
import { GoogleOAuthProvider } from '@react-oauth/google';
const clientId = "996420354509-0d4trcb21bdo1tm9k6jc5d95ootgf7h5.apps.googleusercontent.com";

const router = createHashRouter([
  {
    path: "/",
    element: <SignUp />,
  }, 
  {
    path: "/signin",
    element: <SignIn />,
  },
]);



function App() {
  return (
    <React.Fragment>
      <GoogleOAuthProvider clientId={clientId}>
        
        <TopLoaderProvider>
          <RouterProvider router={router} />
        </TopLoaderProvider>

      </GoogleOAuthProvider>
    </React.Fragment>
  );
}

export default App;
