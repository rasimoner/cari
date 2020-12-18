import { RouterItemsModel } from "@/components/app/router-items-model.interface";
import { PAGEICONS } from "@/assets/using-icons.const";
import { EnumRouterItems } from "@/components/app/router-items.enum";

export const APP_ROUTER_ITEMS: RouterItemsModel[] = [
  {
    title: "Anasayfa",
    icon: PAGEICONS.icon_page_home,
    functionId: EnumRouterItems.MainPage,
  },
  {
    title: "Hakkımızda",
    icon: PAGEICONS.icon_page_information,
    functionId: EnumRouterItems.About,
  },
  {
    title: "Kullanıcılar",
    icon: PAGEICONS.icon_page_users,
    functionId: EnumRouterItems.Users,
  },
  {
    title: "Hesabım",
    icon: PAGEICONS.icon_page_toPageUp,
    functionId: EnumRouterItems.ToPageUp,
  },
];
