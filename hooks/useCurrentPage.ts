import { create } from "zustand";

interface CurrentPageStore {
  page: number;
  updatePage: (page: number) => void;
}

const useCurrentPage = create<CurrentPageStore>((set) => ({
  page: 1,
  updatePage: (page) => set({ page }),
}));

export default useCurrentPage;