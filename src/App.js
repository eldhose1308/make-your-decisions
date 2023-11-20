import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { SignIn, SignUp } from './_pages/auth'
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = "996420354509-0d4trcb21bdo1tm9k6jc5d95ootgf7h5.apps.googleusercontent.com";
const router = createBrowserRouter([
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
        <RouterProvider router={router} />
        </GoogleOAuthProvider>
    </React.Fragment>
  );
}

export default App;
