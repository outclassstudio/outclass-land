import { create } from "zustand";

export interface ThemeState {
  isDark: boolean;
  setLightMode: () => void;
  setDarkMode: () => void;
}

interface Schedule {
  date: string;
  time: string;
}

const useThemeStore = create<ThemeState>((set) => ({
  isDark: false,
  setLightMode: () => {
    document.documentElement.classList.remove("dark");
    set(() => ({
      isDark: false,
    }));
  },
  setDarkMode: () => {
    document.documentElement.classList.add("dark");
    set(() => ({
      isDark: true,
    }));
  },
}));

export default useThemeStore;
