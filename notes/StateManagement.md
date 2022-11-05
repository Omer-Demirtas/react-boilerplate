
# State Management
* Context API
* Redux
* Recoil 
* Zustand

## Zustand

Zustand is easy to use library for state management. 

to istall it. ```npm i zustand```

for the basic initialition.

```
import create from "zustand";

export const useBookStore = create((set) => ({
  books: [...],
  addBook: (book) => {...}
}));
```
and to use this store. and to use this state. 
```
const books = useBookStore(s => s.books);
```
> when you define this code. This component only re render if when the variable is used by component.

