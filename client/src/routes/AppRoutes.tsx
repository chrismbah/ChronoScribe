import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HomeSpinner } from "../components/Spinner";

export default function AppRoutes() {
  const Home = lazy(() => import("../pages/Home"));
  const Register = lazy(() => import("../pages/auth/Register"));
  const Login = lazy(() => import("../pages/auth/Login"));
  const WritePost = lazy(() => import("../pages/WritePost"));
  const Post = lazy(() => import("../pages/Post"));
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/post/:id",
          element: <Post />,
        },
        {
          path: "/write-post",
          element: <WritePost />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <Suspense fallback={<HomeSpinner />}>
      <RouterProvider router={routes}></RouterProvider>;
    </Suspense>
  );
}
