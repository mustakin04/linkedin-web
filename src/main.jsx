import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Registration from './Pages/Registration/Registration';
import Login from './Pages/Login/Login';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
  {
    path:"/registration",
    element: <Registration></Registration>
  },
  {
    path:"/login",
    element: <Login></Login>
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
