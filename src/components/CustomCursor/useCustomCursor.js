import { create } from "zustand";

export const useCustomCursorText = create()((set) => ({
  cursorText: "",
  setCursorText: (newText) => set(() => ({ cursorText: newText })),
}));

export const useCustomCursorVariant = create()((set) => ({
  cursorVariant: "default",
  setCursorVariant: (newVariant) => set(() => ({ cursorVariant: newVariant })),
}));
