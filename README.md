# React Boilerplate

## Contents

* Theme 

## Theming with MUI
Add ```<CssBaseline />``` under ```<ThemeProvider  />``` to change app background with light | dark mode

To change backgournd color of a mui component, use ```bgcolor``` prop of sx.
```
sx={{
    bgcolor: "secondary.main",
}}
```

### Importing a React component from src path
to make it, we have to create a file called ```jsconfig.json``` and fill that.