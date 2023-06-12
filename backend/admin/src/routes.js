import Login from "./authentication/login";
import Category from "./pages/category";
import AddCategory from "./pages/category/add";
import Dashboard from "./pages/dashboard";

const routes = [
    {
        type : "public",
        key : "login",
        path : "/",
        component : <Login />
    },
    {
        type : "private",
        key : "dashboard",
        path : "/dashboard",
        component : <Dashboard />
    },
    {
        type : "private",
        key : "category",
        path : "/category",
        component : <Category />
    },
    {
        type : "private",
        key : "add-category",
        path : "/add-category",
        component : <AddCategory />
    },
]

export default routes;