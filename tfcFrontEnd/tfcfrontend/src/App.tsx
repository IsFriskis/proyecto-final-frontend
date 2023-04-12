import React from "react";
import "./App.scss";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { HomePage } from "./modules/home/HomePage";
import { LoginPage } from "./modules/login/LoginPage";
import { NotFoundPage } from "./modules/notFound/NotFoundPage";
import { Layout } from "./modules/layout/Layout";
import { SearchPage } from "./modules/search/SearchPage";
import { AboutPage } from "./modules/about/AboutPage";

const ROUTES = [
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
];

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {ROUTES.map((ROUTE, i) => (
              <Route key={i} path={ROUTE.path} element={ROUTE.element} />
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
