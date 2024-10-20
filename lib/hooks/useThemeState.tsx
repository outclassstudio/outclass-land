"use client";

import useThemeStore from "@/store/store";
import { useEffect } from "react";

export const useThemeEffect = () => {
  const { setLightMode, setDarkMode } = useThemeStore();

  const saveTheme = (theme: string) => {
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (!theme || theme === "light") {
      setLightMode();
    } else {
      setDarkMode();
    }
    saveTheme(theme || "light");
  }, []);
};
