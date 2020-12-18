import { EnumRouterItems } from "@/components/app/router-items.enum";

export abstract class AppRouterHelper {
  static findTargetPage(functionId: EnumRouterItems): string {
    let routeName: string = "/";

    switch (functionId) {
      case EnumRouterItems.MainPage:
        return routeName;
      case EnumRouterItems.Users:
        return `${routeName}users`;
      case EnumRouterItems.MyAccounts:
      case EnumRouterItems.About:
        return `${routeName}about`;
      default:
        return routeName;
    }
  }

  static pageUp() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
