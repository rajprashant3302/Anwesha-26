import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AuthLayouts from "../layout/index";
import RegisterPage from "../pages/register/RegisterPage";
import LoginPage from "../pages/login/LoginPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // 👈 default page at "/"
        element: <h1 className="text-3xl p-5">Welcome to Anwesha 🚀</h1>,
      },
      {
        path: "register",
        element: (
          <AuthLayouts>
            <RegisterPage />
          </AuthLayouts>
        ),
      },
      {
        path: "login",
        element: (
          <AuthLayouts>
            <LoginPage />
          </AuthLayouts>
        ),
      },

      {
        path: "dashboard",
        element: <DashboardPage />,
      },
    ],
  },
]);

export default router;
