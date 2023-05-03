import Login from "./authentication/login";
import Dashboard from "./pages/dashboard";

const routes = [
    {
        path : "/",
        component : <Login />
    },
    {
        path : "/dashboard",
        component : <Dashboard />
    },
]

export default routes;