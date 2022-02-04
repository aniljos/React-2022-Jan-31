import Login from "../components/auth/Login";
import Logout from "../components/auth/Logout";
import Counter from "../components/Counter";
import GadgetStore from "../components/gadgets/GadgetStore";
import Hello from "../components/Hello";
import ListProducts from "../components/products/ListProducts";

export const routes = [

    {
        name: "home",
        path: "/home",
        component: Hello,
        secure: false
    },
    {
        name: "counter",
        path: "/counter",
        component: Counter,
        secure: false
    },
    {
        name: "products",
        path: "/products",
        component: ListProducts,
        secure: true
    }
    ,
    {
        name: "gadgets",
        path: "/gedgets",
        component: GadgetStore,
        secure: true
    }
    ,
    {
        name: "login",
        path: "/login",
        component: Login,
        secure: false
    }
    ,
    {
        name: "logout",
        path: "/logout",
        component: Logout,
        secure: false
    }
]