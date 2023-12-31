import { create } from "zustand";
import { Product } from "@/types";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "react-hot-toast";
import { toastStyle } from "@/lib/utils";

interface FavoriteStore {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useFavorite = create(
  persist<FavoriteStore>((set, get) => ({
    items: [],
    addItem: (data: Product) => {
      const currentItems = get().items;
      const existingItem = currentItems.find((item) => item.id === data.id);

      if (existingItem) {
        return toast.error("Ya en Favoritos", toastStyle);
      }

      set({ items: [...get().items, data]});
      toast.success("Agregado a Favoritos", toastStyle);
    },
    removeItem: (id: string) => {
      set({ items: [...get().items.filter((item) => item.id !== id)]});
    toast.success("Eliminado de Favoritos", toastStyle);
    }, 
    removeAll: () => set({ items: [] })
  }), {
    name: "favorite-storage",
    storage: createJSONStorage(() => localStorage)
  })
);

export default useFavorite;