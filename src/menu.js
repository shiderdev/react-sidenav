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
const menu = (navigateFactory) => [
  {
    label: "Home",
    id: "/",
    icon: "pi pi-home",
    command: navigateFactory("/"),
  },
  {
    label: "Stats",
    id: "/statistics",
    icon: "pi pi-chart-bar",
    command: navigateFactory("/statistics"),
    expanded: true,
    items: [
      {
        label: "Quarterly reports",
        id: "/statistics/quarterly-reports",
        // icon: "pi pi-calendar",
        command: navigateFactory("/statistics/quarterly-reports"),
        expanded: true,
        items: [
          {
            label: "Human resources",
            id: "/statistics/quarterly-reports/human-resources",
            // icon: "pi pi-calendar",
            command: navigateFactory("/statistics/quarterly-reports/human-resources"),
          },
          {
            label: "Research",
            id: "/statistics/quarterly-reports/research",
            // icon: "pi pi-calendar",
            command: navigateFactory("/statistics/quarterly-reports/research"),
            expanded: true,
          },
        ],
      },
      {
        label: "Profits",
        id: "/statistics/annual-profit",
        command: navigateFactory("/statistics/annual-profit"),
      },
    ],
  },
  {
    label: "Settings",
    id: "/settings",
    icon: "pi pi-sliders-h",
    command: navigateFactory("/settings"),
  },
];

export default menu;
