import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import ErrorRoute from "./pages/errorRoute";
import { ForgotPw } from "./pages/ForgotPw";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import ExpensesPage from "./pages/Expenses"; // Import halaman Expenses

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
      errorElement: <ErrorRoute />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
    {
      path: "/forgotpassword",
      element: <ForgotPw />,
    },
    {
      path: "/balance",
      element: <BalancePage />,
    },
    {
      path: "/expenses", // Route untuk halaman Expenses
      element: <ExpensesPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
