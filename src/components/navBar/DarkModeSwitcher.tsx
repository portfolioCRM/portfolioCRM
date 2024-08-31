"use client";
import { Switch } from "@material-tailwind/react";
import { useTheme } from "next-themes";

import { ChangeEvent, useEffect, useState } from "react";
export function DarkModeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  function handleMode(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }
  useEffect(() => {
    setMounted(true);
    setTheme("light");
  }, []);
  if (!mounted) return null;
  return (
    <Switch
      onChange={handleMode}
      crossOrigin={() => {}}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      color="orange"
      defaultChecked={theme === "light"}
    />
  );
}
