import React from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import { useTranslation } from "../../../i18n/client";
import { useRouter } from "next/navigation";

export function SettingMenu() {
    const router = useRouter()
  const [openMenu, setOpenMenu] = React.useState(false);
  const { t } = useTranslation();
  return (
    <Menu
      placement="top-end"
      open={openMenu}
      handler={setOpenMenu}
      allowHover
      offset={15}

    >
      <MenuHandler className="flex items-center justify-between">
        <MenuItem
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          placeholder={""}
        >
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
        </MenuItem>
      </MenuHandler>
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
          onClick={()=> router.push("/login")}
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
