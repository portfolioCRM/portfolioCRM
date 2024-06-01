"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { useTranslation } from "../../i18n/client";
import { SettingMenu } from "./setting/MenuSettings";
export function FixedPlugin() {
  const { t } = useTranslation();
  return (
    <div className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50">
      <SettingMenu />
    </div>
  );
}
