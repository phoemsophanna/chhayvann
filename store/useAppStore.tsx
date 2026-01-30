import { create } from "zustand";

type AppStoreState = {
  general: any,
  services: any,
  contact: any,
  loaded: any,
  setGeneral: any,
  setServices: any,
  setContact: any,
  setLoaded: any,
  setLoadedFalse: any,
  modal:any,
}

export const useAppStore = create<AppStoreState>((set) => ({
  general: {},
  services: [],
  contact: {},
  loaded: false,
  modal: false,

  setGeneral: (general: any) => set({ general }),
  setServices: (services: any) => set({ services }),
  setContact: (contact: any) => set({ contact }),
  setLoaded: () => set({ loaded: true }),
  setLoadedFalse: () => set({loaded: false}),
  setModal: (modal: any) => set({ modal }) 
}));