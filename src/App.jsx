import BookLayout from "pages/Book";
import BookDetails from "pages/Book/BookDetails";
import Books from "pages/Book/Books";
import AppLayout from "pages/Layout";
import NotFound from "pages/NotFound";
import Profile from "pages/Profile";
import PrivateRoute from "components/PrivateRoute";
import { AuthProvider } from "context/Auth/AuthContext";
import AuthLayout from "pages/Auth/Layout";
import Login from "pages/Auth/Login";

const { CssBaseline } = require("@mui/material");
const { ThemeModeProvider } = require("context/Theme/ThemeContext");
const { BrowserRouter, Routes, Route } = require("react-router-dom");

const App = () => {
  return (
    <AuthProvider>
      <ThemeModeProvider>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="book" element={<BookLayout />}>
                <Route index element={<Books />} />
                <Route path="details/:id" element={<BookDetails />} />
              </Route>
              <Route
                path="profile"
                element={<PrivateRoute><Profile /></PrivateRoute>}
              />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/auth" element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeModeProvider>
    </AuthProvider>
  );
};

export default App;

const Home = () => {
  return <div>Home Page</div>;
};
