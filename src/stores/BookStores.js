import axios from "axios";
import create from "zustand";

export const useBookStore = create((set) => ({
  count: 0,
  inc: () => set(state => ({ count: state.count + 1})),
  books: [
    { id: "1", name: "Aaron Saunders", section: "advanced" },
    { id: "2", name: "Andrea Saunders", section: "beginners" },
    { id: "3", name: "Bill Smith", section: "beginners" },
    { id: "4", name: "John Chambers", section: "beginners" },
    { id: "5", name: "Joe Johnson", section: "advanced" },
  ],
  comments: [],
  getCommentsByBookId: async (bookId) => 
  {
    set({ loading: true });
    const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
    set({comments: response.data, loading: false })
  },
  addBook: (book) =>
    set((state) => ({
      books: [...state.books, { ...book, id: state.books.length + 1}],
    })),
}));
