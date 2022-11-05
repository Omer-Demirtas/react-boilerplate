import create from "zustand";

export const useBookStore = create((set) => ({
  students: [
    { id: "1", name: "Aaron Saunders", section: "advanced" },
    { id: "2", name: "Andrea Saunders", section: "beginners" },
    { id: "3", name: "Bill Smith", section: "beginners" },
    { id: "4", name: "John Chambers", section: "beginners" },
    { id: "5", name: "Joe Johnson", section: "advanced" },
  ],
}));
