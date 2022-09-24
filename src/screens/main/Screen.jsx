import React from "react";
import { Button, createTheme, CssBaseline, Stack } from "@mui/material";
import { ThemeModeProvider } from "../../context/Theme/ThemeContext";
import Header from "components/Header";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <ThemeModeProvider>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="home" element={<Home />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeModeProvider>
  );
};

const Home = () => {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/home">Home</Link> | <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Main;
