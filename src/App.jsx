import Layout from "routes/Layout";

const { CssBaseline } = require("@mui/material");
const { ThemeModeProvider } = require("context/Theme/ThemeContext");
const { BrowserRouter, Routes, Route } = require("react-router-dom");

const App = () => {
  return (
    <ThemeModeProvider>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route
              path="*"
              element={
                <div
                  style={{
                    height: "100%",
                    textAlign: "center",
                    marginTop: "15%",
                  }}
                >
                  <h1 style={{ fontSize: 96 }}>Not Found</h1>
                </div>
              }
            />
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
