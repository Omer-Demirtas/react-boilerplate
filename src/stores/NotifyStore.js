import create from "zustand";

export const useNotifyStore = create((set) => ({
    notify: false,
    message: "", 
    showNotify: () => set({ notify: true }),
    hideNotify: () => set({ notify: false })
}));
