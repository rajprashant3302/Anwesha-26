import { createBrowserRouter } from 'react-router-dom'
import App from "../App"
import RegisterPage from "../pages/register/RegisterPage"
import LoginPage from "../pages/login/LoginPage"
import AuthLayouts from '../layout'


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "register",
                element: <AuthLayouts><RegisterPage /></AuthLayouts>

            },
            {
                path: "login",
                element: <AuthLayouts><LoginPage/></AuthLayouts>
            }
        ]
    }
])

export default router