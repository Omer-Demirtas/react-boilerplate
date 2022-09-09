import React from "react";
import { Button, createTheme } from "@mui/material";
import { ThemeModeProvider } from "../../context/Theme/ThemeContext";
import Header from "../../components/Header";
import { Stack } from "@mui/system";

const Main = () => {
  return (
    <ThemeModeProvider>
      <Header />
      <Stack>
        <Button variant="outlined" color="primary">
          ASD
        </Button>
      </Stack>
    </ThemeModeProvider>
  );
};

export default Main;
