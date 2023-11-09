import { create } from "zustand";

interface FilterSidebarStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useFilterSidebar = create<FilterSidebarStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useFilterSidebar;