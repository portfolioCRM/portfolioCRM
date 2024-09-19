"use client";

import React from "react";
import {ThemeProvider as NextThemesProvider} from "next-themes";

export function Layout({ children }: { readonly children: React.ReactNode }) {
  return <NextThemesProvider>{children}</NextThemesProvider>;
}

export default Layout;
