import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AuthLayouts from "../layout/index";
import RegisterPage from "../pages/register/RegisterPage";
import LoginPage from "../pages/login/LoginPage";
import EventPage from "../pages/events/EventPage";
import EventList from "../pages/events/EventList";
import DashboardPage from "../pages/dashboard/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,   // 👈 default page at "/"
        element: <h1 className="text-3xl p-5">Welcome to Anwesha 🚀</h1>
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
        path: "events",
        element: (
          <AuthLayouts>
            <EventList />
          </AuthLayouts>
        ),

      },
      {
        path: "/event/:id",
        element: (
          <AuthLayouts>
            <EventPage />
          </AuthLayouts>
        ),
      },
            {
        path: "/dashboard",
        element: (
          <AuthLayouts>
           <DashboardPage/>
          </AuthLayouts>
        ),
      },


    ],
  },
]);

export default router;
