import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLayout from './components/Layout/AdminLayout';
import Dashboard from './pages/Dashboard';
import HomeSlides from './pages/HomeSlider';
import CategoryList from './pages/CategoryList';
import SubCategoryList from './pages/SubCategoryList';
import BannerList from './pages/BannerList';
import BannerList2 from './pages/BannerList2';
import BlogList from './pages/BlogList';
import ManageLogo from './pages/ManageLogo';
import AddBlog from './pages/AddBlog';
import AddBanner from './pages/AddBanner';
import AddHomeBanner from './pages/AddHomeBanner';
import HomeBannerSlide from './pages/HomeBannerSlide';
import AddCategory from './pages/AddCategory';
import AddSubCategory from './pages/AddSubCategory';
import AddProductRAMS from './pages/AddProductRAMS';
import AddProductWeight from './pages/AddProductWeight';
import AddProductSize from './pages/AddProductSize';
import AddProduct from './pages/AddProduct';
import ProductList from './pages/ProductList';
import UserList from './pages/UserList';
import RecentOrders from './pages/RecentOrders';
import ProfilePage from './pages/ProfilePage';
import Login from './pages/Login';

const router = createBrowserRouter([

  // FULL SCREEN ROUTE (NO SIDEBAR)
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/add-blog",
    element: <AddBlog />
  },
  {
    path: "/add-home-banner",
    element: <AddHomeBanner />
  },
  {
    path: "/add-banner-2",
    element: <AddBanner />
  },
  {
    path: "/add-banner",
    element: <HomeBannerSlide />
  },
  {
    path: "/add-category",
    element: <AddCategory />
  },
  {
    path: "/add-subcategory",
    element: <AddSubCategory />
  },
  {
    path: "/add-product",
    element: <AddProduct />
  },

  // DASHBOARD ROUTES (WITH SIDEBAR)
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "home-banners",
        element: <HomeSlides />
      },
      {
        path: "category-list",
        element: <CategoryList />
      },
      {
        path: "subcategory-list",
        element: <SubCategoryList />
      },
      {
        path: "banner-list",
        element: <BannerList />
      },
      {
        path: "banner-list-2",
        element: <BannerList2 />
      },
      {
        path: "blog-list",
        element: <BlogList />
      },
      {
        path: "manage-logo",
        element: <ManageLogo />
      },
      {
        path: "/product-ram",
        element: <AddProductRAMS />
      },
      {
        path: "/product-weight",
        element: <AddProductWeight />
      },
      {
        path: "/product-size",
        element: <AddProductSize />
      },
      {
        path: "/product-list",
        element: <ProductList />
      },
      {
        path: "/users",
        element: <UserList />
      },
      {
        path: "/orders",
        element: <RecentOrders />
      },
      {
        path: "/profile",
        element: <ProfilePage />
      },

    ]
  }

]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;