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

    // const mediaCheck = window.matchMedia(
    //   "(prefers-color-scheme: dark)"
    // ).matches;

    // console.log("check last", mediaCheck);

    // if (theme !== "dark" && mediaCheck) {
    //   setDarkMode();
    //   saveTheme("dark");
    // } else if (theme === "dark" && !mediaCheck) {
    //   setLightMode();
    //   saveTheme("light");
    // }
    if (theme !== "dark") {
      setDarkMode();
      saveTheme("dark");
    } else if (theme === "dark") {
      setLightMode();
      saveTheme("light");
    }
  }, []);
};
