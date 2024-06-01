"use client";
import React, { useState } from "react";
import AdminNavBar from "../navBar/AdminNavBar";
import Sidebar from "./navBar/SliderBar";
import { OpenMenu } from "./navBar/OpenMenu";

export default function AuthLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <>
      <div className="flex flex-col">
        <div>
          <AdminNavBar />
          <div className="flex">
            <Sidebar
              setSidebarOpen={setSidebarOpen}
              sidebarOpen={sidebarOpen}
            />
            {children}
          </div>
        </div>
      </div>
      <OpenMenu setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
    </>
  );
}
