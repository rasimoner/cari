import { RouterItemsModel } from "@app/router-items-model.interface";
import { PAGEICONS } from "@/assets/using-icons.const";

export const ROUTER_ITEMS: RouterItemsModel[] = [
  { title: "Anasayfa", icon: PAGEICONS.icon_page_home, path: "/" },
  {
    title: "Hakkımızda",
    icon: PAGEICONS.icon_page_information,
    path: "/about",
  },
  {
    title: "Kullanıcılar",
    icon: PAGEICONS.icon_page_users,
    path: "/users",
  },
  { title: "Hesabım", icon: PAGEICONS.icon_page_account, path: "/about" },
];
