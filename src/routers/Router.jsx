import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import LayourHome from "../layouts/LayourHome";

export default function Router() {
    return (    
        <Routes>
            <Route path="/" element={<LayourHome />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    );
}
