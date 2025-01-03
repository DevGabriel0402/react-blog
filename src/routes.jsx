import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { Article } from "./pages/Article";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/articles:id" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
};
