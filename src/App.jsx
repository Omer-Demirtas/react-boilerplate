import { AuthProvider } from "context/Auth/AuthContext";
import { Routes } from "Routes";
import { useNotifyStore } from "stores/NotifyStore";
const { CssBaseline, Snackbar } = require("@mui/material");
const { ThemeModeProvider } = require("context/Theme/ThemeContext");
const { useRoutes, BrowserRouter } = require("react-router-dom");

const App = () => {
  const notify = useNotifyStore((s) => s.notify);
  const hideNotify = useNotifyStore((s) => s.hideNotify);

  return (
    <AuthProvider>
      <ThemeModeProvider>
        <CssBaseline />
        <BrowserRouter>
          <Router />
          <Snackbar
            open={notify}
            autoHideDuration={2000}
            
            onClose={hideNotify}
            message="Note archived"
          />
        </BrowserRouter>
      </ThemeModeProvider>
    </AuthProvider>
  );
};

const Router = () => {
  return useRoutes(Routes);
};

export default App;
