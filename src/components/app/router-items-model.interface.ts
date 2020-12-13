import { EnumRouterItems } from "@/components/app/router-items.enum";

export interface RouterItemsModel {
  title: string;
  icon: string;
  path?: string;
  functionId?: EnumRouterItems;
}
