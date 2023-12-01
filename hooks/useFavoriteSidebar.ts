import { create } from "zustand";

interface FavoriteSidebarStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useFavoriteSidebar = create<FavoriteSidebarStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useFavoriteSidebar;

