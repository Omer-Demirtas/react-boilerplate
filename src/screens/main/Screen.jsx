import React from "react";
import { Button, createTheme, CssBaseline, Stack } from "@mui/material";
import { ThemeModeProvider } from "../../context/Theme/ThemeContext";
import Header from "components/Header";
import BasicCard from "./BasicCard";

const Main = () => {
  return (
    <ThemeModeProvider>
      <CssBaseline />
      <Header />
      <Stack
        sx={{
          bgcolor: "secondary.main",
        }}
      >
        <Button variant="outlined" color="primary">
          ASD
        </Button>
        <BasicCard />
      </Stack>
    </ThemeModeProvider>
  );
};

export default Main;
