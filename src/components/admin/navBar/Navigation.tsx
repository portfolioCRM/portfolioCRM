import MenuGroup from "./MenuGroup";
import { AdminMenuList } from "../../../../config/admin/menuItems";
import { useTranslation } from "../../../../i18n/client";

interface NavigationProps {
  /**
   * Current pathname of the application.
   */
  readonly pathname: string;
}

/**
 * Component that renders the navigation menu.
 *
 * @param {NavigationProps} props - The props for the component.
 * @param {string} props.pathname - Current pathname of the application.
 * @returns {JSX.Element} The rendered navigation component.
 */
export default function Navigation({ pathname }: NavigationProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <nav className="mt-3 py-4 px-4 lg:mt-9 lg:px-6">
      {AdminMenuList(t).map((group) => (
        <MenuGroup
          key={group.title}
          title={group.title}
          items={group.items}
          pathname={pathname}
        />
      ))}
    </nav>
  );
}
