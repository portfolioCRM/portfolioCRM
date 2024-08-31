import Link from "next/link";

interface MenuItemProps {
  /**
   * The URL the menu item links to.
   */
  readonly href: string;

  /**
   * The current pathname of the application.
   */
  readonly pathname: string;

  /**
   * The text to display for the menu item.
   */
  readonly text: string;
}

/**
 * Component that renders an individual menu item.
 *
 * @param {MenuItemProps} props - The props for the component.
 * @param {string} props.href - The URL the menu item links to.
 * @param {string} props.pathname - The current pathname of the application.
 * @param {string} props.text - The text to display for the menu item.
 * @returns {JSX.Element} The rendered menu item component.
 */
export default function MenuItem({
  href,
  pathname,
  text,
}: MenuItemProps): JSX.Element {
  return (
    <li>
      <Link
        href={href}
        className={`capitalize group relative flex items-center gap-2.5 rounded-lg py-2 px-4 font-medium text-sm text-dark1 duration-300 ease-in-out hover:bg-gray-600 hover:text-white dark:hover:bg-meta-4 ${
          pathname.includes(href) && "bg-gray-600 dark:bg-meta-4 text-white"
        }`}
      >
        {text}
      </Link>
    </li>
  );
}
