import { ThemeProvider } from "@emotion/react";
import { Button, createTheme } from "@mui/material";
import { lightBlue, orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: orange,
  },
});

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      ASD
      <Button variant="outlined" color="primary">
        ASD
      </Button>
    </ThemeProvider>
  );
};

export default Main;
