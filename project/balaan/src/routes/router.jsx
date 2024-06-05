import { createBrowserRouter, Outlet } from "react-router-dom";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import LogInPage from "../pages/LogInPage";
import SignUpPage from "../pages/SignUpPage";
import Header from "./../components/Header";

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <hr />
        <Outlet />
      </div>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/log-in", element: <LogInPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
    ],
  },
]);

export default router;
