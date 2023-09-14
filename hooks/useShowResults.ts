import { create } from "zustand";

interface ShowResultsStore {
  showResults: boolean;
  setShowResults: (value: boolean) => void;
}

const useShowResults = create<ShowResultsStore>((set) => ({
  showResults: false,
  setShowResults: (value) => set({ showResults: value })
}));

export default useShowResults;