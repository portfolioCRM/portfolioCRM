"use client"
import React, { ForwardRefExoticComponent } from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { DarkModeSwitcher } from "./DarkModeSwitcher";
import Link from "next/link";
import { useTranslation } from "../../../i18n/client";

interface NAV_MENU_I {
  name: string;
  icon: ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref">>;
  href: string
}

/**
 * Define the navigation menu items
 * @type
 * @returns 
 */
const NAV_MENU: NAV_MENU_I[] = [
  {
    name: "Preview",
    icon: RectangleStackIcon,
    href: "/",
  },
  {
    name: "Settings",
    icon: UserCircleIcon,
    href: "/setting",

  },
  {
    name: "Docs",
    icon: CommandLineIcon,
    href: "https://github.com/RaedRdhaounia/portfolio",
  },
];

interface NavItemProps {
  readonly children: React.ReactNode;
  readonly href: string;
}

/**
 * Props for the NavItem component.
 * 
 * @typedef {Object} NavItemProps
 * @property {React.ReactNode} children - The content to be displayed inside the nav item.
 * @property {string} [href] - The URL to navigate to when the nav item is clicked.
 */

/**
 * NavItem component - Represents a single navigation item.
 * 
 * @param {NavItemProps} props - The props for the NavItem component.
 * @returns {JSX.Element} The rendered NavItem component.
 */
function NavItem({ children, href }: NavItemProps): JSX.Element {
  return (
    <li>
      <Link
        href={href}
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Link>
    </li>
  );
}

/**
 * AdminNavBar component - Represents the admin navigation bar.
 * 
 * @returns {JSX.Element} The rendered AdminNavBar component.
 */

export default function AdminNavBar(): JSX.Element {
  const {t} = useTranslation()
  const [open, setOpen] = React.useState(false);

  /**
   * Toggles the open state of the navigation bar.
   */
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    /**
     * Closes the navigation bar if the window is resized to a width greater than or equal to 960px.
     */
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar
      onPointerEnterCapture={()=> {console.log("first")}}
      onPointerLeaveCapture={() => {}}
      placeholder={""}
      shadow={false}
      fullWidth 
      className="border-0 sticky top-0 z-50"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* app name */}
        <Typography
          onPointerEnterCapture={()=> {}}
          onPointerLeaveCapture={() => {}}
          placeholder={""}
          color="blue-gray"
          className="text-lg font-bold uppercase"
        >
          {t("app_name")}
        </Typography>
        {/* Navigation items for larger screens */}
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
        {/* Dark mode switcher for larger screens */}
        <div className="hidden items-center gap-2 lg:flex">
          <DarkModeSwitcher/>
        </div>
        {/* Menu button for smaller screens */}
        <IconButton
          onPointerEnterCapture={()=> {}}
          onPointerLeaveCapture={() => {}}
          placeholder={""}
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      {/* Collapsible menu for smaller screens */}
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem href={href} key={name}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}
