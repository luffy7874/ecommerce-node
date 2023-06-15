import Login from "./authentication/login";
import Category from "./pages/category";
import AddCategory from "./pages/category/add";
import EditCategory from "./pages/category/edit";
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
    {
        type : "private",
        key : "edit-category",
        path : "/edit/category/:id",
        component : <EditCategory />
    },
]

export default routes;