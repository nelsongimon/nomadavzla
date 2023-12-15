import { persist, createJSONStorage } from "zustand/middleware";
import { create } from "zustand";
import { PersonalInformation } from "@/types";

interface PersonalInformationStore {
  personalInformation: PersonalInformation | null;
  setPersonalInformation: (personalInformation: PersonalInformation) => void;
}

const usePersonalInformation = create(
  persist<PersonalInformationStore>((set) => ({
    personalInformation: null,
    setPersonalInformation: (personalInformation: PersonalInformation) => {
      set({ personalInformation });
    }
  }), {
    name: "personal-information-storage",
    storage: createJSONStorage(() => localStorage)
  })
);

export default usePersonalInformation;