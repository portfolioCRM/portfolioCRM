"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { useTranslation } from "../../i18n/client";
export function FixedPlugin() {
  const { t } = useTranslation();
  return (
    <a href="#">
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        placeholder={""}
      >
        <Image
          width={128}
          height={128}
          className="w-5 h-5"
          alt="Material Tailwind"
          src="/image/up.png"
        />{" "}
        {t("arrow.up")}
      </Button>
    </a>
  );
}
