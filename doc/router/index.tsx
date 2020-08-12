interface MenuItem {
  component: string;
  title: string;
}

const menuConfig: Array<MenuItem> = [
  {
    component: "icon",
    title: "icon 图标",
  },
  {
    component: "button",
    title: "button 按钮",
  },
  {
    component: "layout",
    title: "layout 布局",
  },
];

export default menuConfig;
