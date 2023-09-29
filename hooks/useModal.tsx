import { create } from 'zustand';

interface IModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useModal = create<IModal>(set => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
