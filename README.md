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

## Importing a React component from src path

to make it, we have to create a file called ```jsconfig.json``` and fill that.

## .env file

This file can be used to config some property in application and define some variables.
Defining variable
```REACT_APP_KEY='EXAMPLE_KEY'``` 
Variable name must start with ```REACT_APP_``` tag.

## Router | React-Router-Dom

See the notss about [`Routing`](/notes/Router.md).