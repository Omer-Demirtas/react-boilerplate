
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

> You have to define a new variable for each part of state
For example you shouldn't do this.
```
const [books, addBook] = useBookStore(s => ([s.books, s.addBook]));
``` 
When you use like this. Component re render unnecessary. 
For example, you define like this;
```
const [addBook] = useBookStore(s => ([s.addBook]));
``` 
now the component re render when the books state changes??
You should use it lile;
```
const addBook = useBookStore(s => (s.addBook));
``` 

Async

There is no any thing to do diffrent from normal function. 
```
getComments: async () => 
{
  const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
  set({comments: response.data})
},
```

> Component spliting is so importent for unnecessery component re-rendering.

Get

Get state outside of set function. 
We need state outside of set function ```set(state => {})```

```
const useBookStore = create((set, get) => ({
  state: 1,
  setState: () => 
  {
    const otherState = get().state;
  }

}));
```

using store method from other method. 

Store data can use with .getState().[method | field];

```
addBook: (book) => {
  ✅ const notify = useNotifyStore.getState().inc();
  
  console.log({ notify });
  set((state) => ({
    books: [...state.books, { ...book, id: state.books.length + 1}],
  }));
}
```

Middleware

The persist middleware enables you to store your Zustand state in a storage. (localStorage | AsyncStorage | IndexedDB ...)

usage:

```
import create from 'zustand'
import { persist } from 'zustand/middleware'

export const useUserStore = create(
  persist(
    (set, get) => ({ ... }),
    {
      name: 'food-storage', // key for state.
      getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
    }
  )
)
```
to use localStorage, you should remove ```getStorage``` key.