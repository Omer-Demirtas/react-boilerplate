
# useEffect
The Effect Hook lets you perform side effects in function components:

The default of useEffect render every component update and component initialize.
```
useEffect(() => {
    console.log(`init Counter : ${counter}`);
});
```

[] thanks to empty array parameters, components render only component initialize.
```
useEffect(() => {
    console.log(`Counter : ${counter}`);
}, []);
``` 

if we pass some args to useEffect array like [counter], this method run only this arg chnage 
```
useEffect(() => {
    console.log(`Counter : ${counter}`);
}, [counter]);
```