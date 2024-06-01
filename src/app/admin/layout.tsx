"use client";
import { Layout } from "@/components";
import AdminNavBar from "@/components/navBar/AdminNavBar";
import Sidebar from "@/components/admin/navBar/SliderBar";
import { useState } from "react";
import { OpenMenu } from "@/components/admin/navBar/OpenMenu";

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <Layout>
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
    </Layout>
  );
}
