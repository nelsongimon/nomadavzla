import { persist, createJSONStorage } from "zustand/middleware";
import { create } from "zustand";
import { Agency } from "@/types";
import toast from "react-hot-toast";
import { toastStyle } from "@/lib/utils";

interface SelectedAgencyStore {
  selectedAgency: Agency | null;
  setSelectedAgency: (agency: Agency) => void;
}

const useSelectedAgency = create<SelectedAgencyStore>((set) => ({
  selectedAgency: null,
  setSelectedAgency: (agency: Agency) => {
    set({ selectedAgency: agency });
    toast.success("¡Esta sucursal fue seleccionada!", toastStyle);
  }
}));

// const useSelectedAgency = create(
//   persist<SelectedAgencyStore>((set) => ({
//     selectedAgency: null,
//     setSelectedAgency: (agency: Agency) => {
//       set({ selectedAgency: agency });
//       toast.success("¡Esta sucursal fue seleccionada!", toastStyle);
//     }
//   }), {
//     name: "selected-agency-storage",
//     storage: createJSONStorage(() => localStorage)
//   })
// );

export default useSelectedAgency;