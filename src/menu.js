/**
 * MenuModel API from primereact
 * id 	string	null Unique identifier of the menuitem. (not part of version 8 but very useful)
 * label	string	null Text of the item.
 * icon	any	null	Icon of the item. It can be a string, JSX.Element or method.
 * command	function	null	Callback to execute when item is clicked.
 * url	string	null	External link to navigate when item is clicked.
 * items	array	null	An array of children menuitems.
 * expanded	boolean	false	Visibility of submenu.
 * disabled	boolean	false	When set as true, disables the menuitem.
 * visible	boolean	true	When set as false, hides the menu item.
 * target	string	null	Specifies where to open the linked document.
 * separator	boolean	false	Defines the item as a separator.
 * style	object	null	Inline style of the menuitem.
 * className	string	null	Style class of the menuitem.
 * template	any	null
 */

import { matchPath } from "react-router";
import publicPath from "./utils/public-path";

const template = (item, options) => {
  const isExactMatch = matchPath(window.location.pathname, { path: item.id, exact: true });
  const isRelativeMatch = matchPath(window.location.pathname, { path: item.id });
  return (
    /* custom element */
    <a
      href="#"
      className={
        options.className +
        `${isExactMatch ? " route-is-exact-match" : ""}${
          isRelativeMatch ? " route-is-relative-match" : ""
        }${item.id === `${publicPath}/` ? " is-home" : ""}`
      }
      target={item.target}
      onClick={options.onClick}
    >
      {item.icon !== undefined ? <span className={options.iconClassName}></span> : null}
      <span className={options.labelClassName}>{item.label}</span>
      {options.submenuIconClassName && Array.isArray(item.items) ? (
        <span class={options.submenuIconClassName}></span>
      ) : null}
    </a>
  );
};
const menu = (navigateFactory) => [
  {
    label: "Home",
    id: `${publicPath}/`,
    icon: "pi pi-home",
    command: navigateFactory(`/`),
    template: template,
  },
  {
    label: "Stats",
    id: `${publicPath}/statistics`,
    icon: "pi pi-chart-bar",
    template: template,
    items: [
      {
        label: "Quarterly reports",
        id: `${publicPath}/statistics/quarterly-reports`,
        command: navigateFactory(`/statistics/quarterly-reports`),
        template: template,
        items: [
          {
            label: "Human resources",
            id: `${publicPath}/statistics/quarterly-reports/human-resources`,
            command: navigateFactory(`/statistics/quarterly-reports/human-resources`),
            template: template,
          },
          {
            label: "Research",
            id: `${publicPath}/statistics/quarterly-reports/research`,
            command: navigateFactory(`/statistics/quarterly-reports/research`),
            template: template,
          },
        ],
      },
      {
        label: "Profits",
        id: `${publicPath}/statistics/profits`,
        command: navigateFactory(`/statistics/profits`),
        template: template,
      },
    ],
  },
  {
    label: "Settings",
    id: `${publicPath}/settings`,
    icon: "pi pi-sliders-h",
    command: navigateFactory(`/settings`),
    template: template,
  },
];

export default menu;
