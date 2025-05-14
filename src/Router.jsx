import { Route, Routes, BrowserRouter } from "react-router"
import HomePage from "./pages/HomePage";
import State from "./pages/State";
import NavBar from "./components/NavBar";
import Hover from "./pages/Hover";

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/state" Component={State} />
            <Route path="/hello" element={<div>
                <NavBar />
                <h1>Hello Word</h1>
                <p>lorem ipsum</p>
            </div>} />
            <Route path="/hover" Component={Hover} />
            <Route path="*" element={<h2><NavBar /> Page Not Found</h2>} />
        </Routes>
    </BrowserRouter>
}

export default Router