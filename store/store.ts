import { create } from "zustand";

export interface ThemeState {
  isDark: boolean;
  setLightMode: () => void;
  setDarkMode: () => void;
  dateStore: Schedule[];
  addSchedule: (data: any) => void;
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

  dateStore: [
    {
      date: "2024-10-16",
      time: "09:00",
    },
    {
      date: "2024-10-16",
      time: "15:00",
    },
  ],
  addSchedule: (data: Schedule) => {
    set((state) => ({
      dateStore: [...state.dateStore, data],
    }));
  },
}));

export default useThemeStore;
