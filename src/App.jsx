import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import ErrorRoute from "./pages/errorRoute";
import { ForgotPassPages } from "./pages/ForgotPassPages";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import ExpensesPage from "./pages/expenses";
import GoalPage from "./pages/goals";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const RequiredAuth = ({children}) => {
    return isLoggedIn ? children : <Navigate to="/login" />
  };

  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <RequiredAuth><DashboardPage/> </RequiredAuth>,
      errorElement: <ErrorRoute/>
    },
    {
      path: "/login",
      element: <SignInPage/>,
      
    },
    {
      path: "/register",
      element: <SignUpPage/>
    },
    {
      path: "/forgotpassword",
      element: <ForgotPassPages/>
    },
    {
      path: "/balance",
      element: <RequiredAuth><BalancePage/></RequiredAuth>
    },
    {
      path: "/expenses",
      element: <RequiredAuth><ExpensesPage/></RequiredAuth>
    },
    {
      path: "/goals",
      element: <RequiredAuth><GoalPage/></RequiredAuth>
    }
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
