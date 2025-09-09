import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Statistics from './Components/Statistics/Statistics';
import ProductsDetails from './Components/ProductsDetails/ProductsDetails';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:
      [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'dashboard',
          element: <Dashboard></Dashboard>
        },
        {
          path: 'statistics',
          element: <Statistics></Statistics>

        },
        {
          path: '/products/:productId',
          element: <ProductsDetails></ProductsDetails>,
          loader: () =>fetch('/fakedata.json')

        }
      ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
