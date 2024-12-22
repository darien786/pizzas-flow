import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PagePizza from "../pages/PagePizza";
import PageHamburguer from "../pages/PageHamburguer";
import PageHotDog from "../pages/PageHotDog";
import LayourHome from "../layouts/LayourHome";

export default function Router() {
    return (    
        <Routes>
            <Route path="/" element={<LayourHome />}>
                <Route index element={<Home />} />
                <Route path="/pizzas" element={<PagePizza />} />
                <Route path="/hamburguesas" element={<PageHamburguer />} />
                <Route path="/hot-dogs" element={<PageHotDog />} />
            </Route>
        </Routes>
    );
}
