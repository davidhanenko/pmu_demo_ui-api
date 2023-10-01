import { create } from 'zustand';

interface useTextInputProps {
  addMore: boolean;
  onAddMoreOpen: () => void;
  onAddMoreClose: () => void;
}

export const useTextInput = create<useTextInputProps>(
  set => ({
    addMore: false,
    onAddMoreOpen: () => set({ addMore: true }),
    onAddMoreClose: () => set({ addMore: false }),
  })
);
