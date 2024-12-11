import About from "./About";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Navigate to="/home" replace />}></Route>
                        <Route path="home" element={<h1>Home</h1>}></Route>
                        <Route path="pag1" element={<h1>Pág 1</h1>}></Route>
                        <Route path="pag2" element={<h1>Pág 2</h1>}></Route>
                        <Route path="about" element={<About />}></Route>
                        <Route path="*" element={<h1>Error 404 :c</h1>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router;