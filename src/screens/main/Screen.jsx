import React from "react";
import { Button, createTheme } from "@mui/material";
import { ThemeModeProvider } from "../../context/Theme/ThemeContext";
import Header from "../../components/Header";

const Main = () => {
  return (
    <ThemeModeProvider>
      <Header />
    </ThemeModeProvider>
  );
};

export default Main;
