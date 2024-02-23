import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { NotFound } from './pages/404'
import { Dashboard } from './pages/app/dashboard'
import { Orders } from './pages/app/orders/orders'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sing-up'
import { Privacy } from './pages/privacy'
import { Terms } from './pages/terms'

export const router = createBrowserRouter([
  {
    path: '/pizza-shop',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/pizza-shop',
        element: <Dashboard />,
      },
      {
        path: '/pizza-shop/orders',
        element: <Orders />,
      },
    ],
  },
  {
    path: '/pizza-shop',
    element: <AuthLayout />,
    children: [
      {
        path: '/pizza-shop/sign-in',
        element: <SignIn />,
      },
      {
        path: '/pizza-shop/sign-up',
        element: <SignUp />,
      },
      {
        path: '/pizza-shop/terms',
        element: <Terms />,
      },
      {
        path: '/pizza-shop/privacy',
        element: <Privacy />,
      },
    ],
  },
])
