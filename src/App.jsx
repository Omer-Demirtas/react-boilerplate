import { AuthProvider } from "context/Auth/AuthContext";
import { Routes } from "Routes";
const { CssBaseline } = require("@mui/material");
const { ThemeModeProvider } = require("context/Theme/ThemeContext");
const { useRoutes, BrowserRouter } = require("react-router-dom");

const App = () => {
  return (
    <AuthProvider>
      <ThemeModeProvider>
        <CssBaseline />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeModeProvider>
    </AuthProvider>
  );
};

const Router = () => 
{
  return useRoutes(Routes);
}

export default App;
