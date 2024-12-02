import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { SearchProvider } from "./contexts/SearchContext";
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import HomePage from "./layout/HomePage";
import ResultsPage from "./layout/ResultsPage";
import "./styles/Styles.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <Header />
        <Routes>
          <Route>
            <Route path="/" element={<HomePage />} />
            <Route path="results" element={<ResultsPage />} />
          </Route>
        </Routes>
        <Footer />
      </SearchProvider>
    </BrowserRouter>
  </StrictMode>
);
