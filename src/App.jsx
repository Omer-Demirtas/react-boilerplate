import BookLayout from "pages/Book";
import BookDetails from "pages/Book/BookDetails";
import Books from "pages/Book/Books";
import AppLayout from "pages/Layout";
import NotFound from "pages/NotFound";

const { CssBaseline } = require("@mui/material");
const { ThemeModeProvider } = require("context/Theme/ThemeContext");
const { BrowserRouter, Routes, Route } = require("react-router-dom");

const App = () => {
  return (
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
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeModeProvider>
  );
};

export default App;

const Home = () => {
  return <div>Home Page</div>;
};
