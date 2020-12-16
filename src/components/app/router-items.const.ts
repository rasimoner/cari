import { RouterItemsModel } from "@app/router-items-model.interface";

export const ROUTER_ITEMS: RouterItemsModel[] = [
  { title: "Anasayfa", icon: "mdi-home-city", path: "/" },
  { title: "Hakkımızda", icon: "mdi-information", path: "/about" },
  {
    title: "Kullanıcılar",
    icon: "mdi-account-group-outline",
    path: "/users",
  },
  { title: "Hesabım", icon: "mdi-account", path: "/about" },
];
