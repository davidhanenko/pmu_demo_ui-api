import { create } from 'zustand';

interface IModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useModal = create<IModalProps>(set => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
