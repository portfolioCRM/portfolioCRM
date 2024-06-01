import MenuItem from './MenuItem';

interface MenuItemProps {
  /**
   * The URL the menu item links to.
   */
  readonly href: string;

  /**
   * The text to display for the menu item.
   */
  readonly text: string;
}

interface MenuGroupProps {
  /**
   * The title of the menu group.
   */
  readonly title: string;

  /**
   * The array of menu items in the group.
   */
  readonly items: MenuItemProps[];

  /**
   * The current pathname of the application.
   */
  readonly pathname: string;
}

/**
 * Component that renders a group of menu items.
 *
 * @param {MenuGroupProps} props - The props for the component.
 * @param {string} props.title - The title of the menu group.
 * @param {MenuItemProps[]} props.items - The array of menu items in the group.
 * @param {string} props.pathname - The current pathname of the application.
 * @param {function} props.handleHiddenItems - Function to handle hidden items based on the path.
 * @returns {JSX.Element} The rendered menu group component.
 */
export default function MenuGroup({
  title,
  items,
  pathname,
}: MenuGroupProps): JSX.Element {
  return (
    <div>
      <h3 className="mb-4 ml-4 text-sm font-semibold text-primary uppercase">
        {title}
      </h3>
      <ul className="mb-6 flex flex-col gap-1.5">
        {items.map((item) => (
          <MenuItem
            key={item.href}
            href={`admin/${item.href}`}
            pathname={pathname}
            text={item.text}
          />
        ))}
      </ul>
    </div>
  );
}
