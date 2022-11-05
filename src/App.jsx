import { AuthProvider } from "context/Auth/AuthContext";
import { Routes } from "Routes";
import { useNotifyStore } from "stores/NotifyStore";
const { CssBaseline } = require("@mui/material");
const { ThemeModeProvider } = require("context/Theme/ThemeContext");
const { useRoutes, BrowserRouter } = require("react-router-dom");

const App = () => {
  const notify = useNotifyStore((s) => s.notify);
  return (
    <AuthProvider>
      <ThemeModeProvider>
        <CssBaseline />
        <BrowserRouter>

          <Router />
        {notify ? <h1>There is a Notify</h1> : <h1>There is no any Notify</h1>}
    
        </BrowserRouter>
      </ThemeModeProvider>
    </AuthProvider>
  );
};

const Router = () => {
  return useRoutes(Routes);
};

export default App;
