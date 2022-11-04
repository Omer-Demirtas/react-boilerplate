
# Hooks

## Custom hooks
We can use custom hooks to achive functionalty to our project. For example in this project, i use a LocalStorage custom hooks to handle Local Storage. 

## Use Ref 

## Use Context

useContext hook uses to create a context for application for example theme, user context.
and create a custom hooks to use it. 
For example we create a hook ThemeContextjsx and then create a custom hook to use it easyly.
```
export const useThemeContext = () => {
  return useContext(ThemeContext);
};
```

## useCallback
useCallback is used to memoize functions,
```
```