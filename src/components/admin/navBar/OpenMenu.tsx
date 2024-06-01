"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { useTranslation } from "../../../../i18n/client";
import { Dispatch, SetStateAction } from "react";

interface OpenMenuI {
  /**
   * Function to set the state of the sidebar.
   */
  readonly setSidebarOpen: Dispatch<SetStateAction<boolean>>;

  /**
   * Boolean indicating if the sidebar is open.
   */
  readonly sidebarOpen: boolean;
}

/**
 * Component that renders a button to open or close the sidebar.
 *
 * @param {OpenMenuI} props - The props for the component.
 * @param {Dispatch<SetStateAction<boolean>>} props.setSidebarOpen - Function to set the state of the sidebar.
 * @param {boolean} props.sidebarOpen - Boolean indicating if the sidebar is open.
 * @returns {JSX.Element} The rendered component.
 */
export function OpenMenu({
  setSidebarOpen,
  sidebarOpen,
}: OpenMenuI): JSX.Element {
  const { t } = useTranslation();
  return (
    <Button
      color="white"
      size="sm"
      className="!fixed bottom-4 left-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      onClick={() => {
        setSidebarOpen(!sidebarOpen);
      }}
      placeholder={""}
    >
      <Image
        width={128}
        height={128}
        className={`w-5 h-5 ${!sidebarOpen ? "" : "-rotate-90"}`}
        alt="Material Tailwind"
        src="/image/menu.png"
      />
      {t(!sidebarOpen ? "menu.open" : "menu.close")}
    </Button>
  );
}
