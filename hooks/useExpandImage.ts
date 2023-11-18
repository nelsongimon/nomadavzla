import { create } from "zustand";

interface ExpandImageStore {
  isOpen: boolean;
  image: string;
  onOpen: (image: string ) => void;
  onClose: () => void;
}

const useExpandImage = create<ExpandImageStore>((set) => ({
  isOpen: false,
  image: "",
  onOpen: (image: string) => set({ image, isOpen: true }),
  onClose: () => set({ isOpen: false })
}));

export default useExpandImage;