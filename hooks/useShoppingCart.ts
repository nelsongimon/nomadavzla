import { persist, createJSONStorage } from "zustand/middleware";
import { create } from "zustand";
import { CartProduct } from "@/types";
import { toast } from "react-hot-toast";
import { toastStyle } from "@/lib/utils";


interface ShoppingCartStore {
  items: CartProduct[];
  addItem: (product: CartProduct) => void;
  removeItem: (id: string) => void;
  updateItem: (product: CartProduct) => void,
}

const useShoppingCart = create(
  persist<ShoppingCartStore>((set, get) => ({
    items: [],
    addItem: (product: CartProduct) => {  
      const currentItems = get().items;
      const existingItem = currentItems.find((item) => item.id === product.id);

      if (existingItem) {
        return toast.error("Ya en el Carrito", toastStyle);
      }

      set({ items: [...get().items, product]});
      toast.success("Agregado al Carrito", toastStyle);
    },
    removeItem: (id: string) => {
      set({ items: [...get().items.filter((item) => item.id !== id)]});
      toast.success("Eliminado del Carrito", toastStyle);
    },
    updateItem: (product: CartProduct) => {
      const updateItems = get().items.map((item) => {
        if (item.id === product.id) {
          return product;
        }
        return item;
      });
      set({ items: [...updateItems]});
    }
  }), {
    name: "shopping-cart-storage",
    storage: createJSONStorage(() => localStorage)
  })
);

export default useShoppingCart;