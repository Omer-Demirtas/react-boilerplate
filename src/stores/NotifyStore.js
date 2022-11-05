import create from "zustand";

export const useNotifyStore = create((set) => ({
    notify: false, 
    count: 5,
    inc: () => set(state => ({ count: state.count + 1 })),
    getNotify: () => set({ notify: true})
}));
