import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function SettingMenu() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const t = useTranslations();
  return (
    <Menu
      placement="top-end"
      open={openMenu}
      handler={setOpenMenu}
      allowHover
      offset={15}
    >
      <Link href={"#"}>
        <MenuHandler className="flex items-center justify-between">
          <MenuItem
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            placeholder={""}
            color="white"
            className="!fixed bottom-4 right-4 flex gap-1 pl-2 dark:text-black items-center border border-blue-gray-50"
          >
            <Image
              width={128}
              height={128}
              className="w-5 h-5"
              alt="Material Tailwind"
              src="/image/up.png"
            />{" "}
            {t("arrow.up")}
          </MenuItem>
        </MenuHandler>
      </Link>

      <MenuList
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        placeholder={""}
        className="w-4"
      >
        <MenuItem
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          placeholder={""}
        >
          edit
        </MenuItem>
        <MenuItem
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          placeholder={""}
        >
          theme
        </MenuItem>
        <MenuItem
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          placeholder={""}
        >
          language
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
