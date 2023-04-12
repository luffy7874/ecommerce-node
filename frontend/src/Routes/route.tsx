import HomePage from "../Index/HomePage";
import Products from "../Product/products";
import { RoutesType } from "../Types/types";

export const routes: RoutesType[] = [
    {
        key : "index",
        name : "index",
        path : "/",
        component : <HomePage />
    },
    {
        key : "products",
        name : "products",
        path : "/products",
        component : <Products />
    }
];