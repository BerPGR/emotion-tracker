import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Welcome from "../pages/Welcome";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/welcome" element={<Welcome/>}/>
            </Routes>
        </BrowserRouter>
    )
}