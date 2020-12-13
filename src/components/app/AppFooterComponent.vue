<template>
  <v-card>
    <v-footer :padless="!padLess" :absolute="absolute" :fixed="!fixed">
      <v-card flat tile width="100%" class="red lighten-1 text-center">
        <v-card-text>
          <v-btn
            v-for="item in routerItems"
            :key="item.icon"
            class="mx-6"
            icon
            @click="navigate(item.functionId)"
          >
            <v-icon size="24px">{{ item.icon }}</v-icon>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-footer>
    <br />
    <br />
    <br />
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import router from "@/router";
import { RouterItemsModel } from "@/components/app/router-items-model.interface.ts";
import { EnumRouterItems } from "@/components/app/router-items.enum.ts";

@Component
export default class AppFooterComponent extends Vue {
  name: string = "AppFooterComponent";

  routerItems: RouterItemsModel[] = [
    {
      title: "Anasayfa",
      icon: "mdi-home",
      functionId: EnumRouterItems.MainPage,
    },
    {
      title: "Hakkımızda",
      icon: "mdi-email",
      functionId: EnumRouterItems.About,
    },
    {
      title: "Kullanıcılar",
      icon: "mdi-calendar",
      functionId: EnumRouterItems.Users,
    },
    {
      title: "Hesabım",
      icon: "mdi-chevron-up-box",
      functionId: EnumRouterItems.ToPageUp,
    },
  ];

  padLess: boolean = false;
  absolute: boolean = false;
  fixed: boolean = false;

  navigate(functionId: EnumRouterItems) {
    this.pageUp();
    this.navigatePage(functionId);
  }

  navigatePage(functionId: EnumRouterItems) {
    if (functionId == EnumRouterItems.ToPageUp) return;

    const targetPage: string = this.findTargetPage(functionId);
    if (this.$store.getters.getCurrentPage == targetPage) return;

    this.toTargetPage(targetPage);
  }

  toTargetPage(page: string) {
    this.$store.dispatch("changeCurrentPage", page);
    router.replace(this.$store.getters.getCurrentPage);
  }

  findTargetPage(functionId: EnumRouterItems) {
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

  pageUp() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
</script>

<style scoped />
