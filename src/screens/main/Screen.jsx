import React from "react";
import { Button, createTheme, CssBaseline, Stack } from "@mui/material";
import { ThemeModeProvider } from "../../context/Theme/ThemeContext";
import Header from "components/Header";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <ThemeModeProvider>
      <CssBaseline />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Layout</div>} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<div>Contact</div>} />
          <Route path="*" element={<div>No Page</div>} />
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

export default Main;
