import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Dex } from "../pages/Dex";
import { Detail } from "../pages/Detail";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="dex" element={<Dex />} />
                {/* 디테일 페이지 차이는 파라미터 방식이 아닌 queryString 으로 구분 */}
                <Route path="pokemon-detail" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
