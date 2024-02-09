import { create } from "zustand";

interface LangToggleState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const useLangToggle = create<LangToggleState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useLangToggle;
