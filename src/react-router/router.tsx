import {createBrowserRouter} from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout.tsx';
import MainPage from '../components/pages/Main/Main.page.tsx';
import AdminLayout from '../components/layouts/AdminLayout/AdminLayout.tsx';
import Profile from '../components/pages/[Admin]/Profile/Profile.tsx';
import Settings from '../components/pages/[Admin]/Settings/Settings.tsx';
import Dashboard from '../components/pages/[Admin]/Dashboard/Dashboard.tsx';
import ShopPage from '../components/pages/Shop/Shop.page.tsx';
import CartPage from '../components/pages/Cart/Cart.page.tsx';
import ProductsManagement from "../components/pages/[Admin]/Products/ProductsManagement.tsx";
import UsersManagement from "../components/pages/[Admin]/Users/UsersManagement.tsx";
import {NotFoundErrorPage} from "../components/pages/Errors";
import ProtectedByRole from "./ProtectedByRole.tsx";
import ProtectedByAuth from "./ProtectedByAuth.tsx";
import AuthLayout from "../components/layouts/AuthLayout/AuthLayout.tsx";
import Register from "../components/pages/[UserAuth]/Register/Register.tsx";
import Login from "../components/pages/[UserAuth]/Login/Login.tsx";
import Refresh from "../components/pages/[UserAuth]/Refresh/Refresh.tsx";
import ProductDescription from "../components/pages/ProductDescription/ProductDescription.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    errorElement: <NotFoundErrorPage/>,
    children: [
      {
        path: '',
        element: <MainPage/>,
      },
      {
        path: 'shop',
        element: <ShopPage/>,
      },
      {
        path: 'cart',
        element: <CartPage/>,
      },
      {
        path: 'shop/pizza/:name',
        element: <ProductDescription/>,
      }
    ],
  },
  {
    path: 'admin',
    element:
      <ProtectedByRole
        role="ADMIN"
        children={<AdminLayout/>}
      />,
    errorElement: <NotFoundErrorPage/>,
    children: [
      {
        index: true,
        element: <Dashboard/>,
      },
      {
        path: 'products',
        element: <ProductsManagement/>
      },
      {
        path: 'users',
        element: <UsersManagement/>
      },
      {
        path: 'profile',
        element: <Profile/>,
      },
      {
        path: 'settings',
        element: <Settings/>,
      },
    ],
  },
  {
    path: 'auth',
    element: <ProtectedByAuth children={<AuthLayout/>}/>,
    errorElement: <NotFoundErrorPage/>,
    children: [
      {
        path: 'register',
        element: <Register/>,
      },
      {
        path: 'login',
        element: <Login/>,
      },
      {
        path: 'refresh',
        element: <Refresh/>,
      },
      {
        path: 'activate',
        element: <Refresh/>,
      },
      {
        path: 'change-password',
        element: <Refresh/>,
      },
    ]
  },
],);
//{basename: import.meta.env.BASE_URL}
export default router;
