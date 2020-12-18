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
import { AppRouterHelper } from "@/components/app/helper/app-router.helper.ts";
import { APP_ROUTER_ITEMS } from "@/components/app/helper/app-router-items.const";

@Component
export default class AppFooterComponent extends Vue {
  name: string = "AppFooterComponent";

  routerItems: RouterItemsModel[] = APP_ROUTER_ITEMS;

  padLess: boolean = false;
  absolute: boolean = false;
  fixed: boolean = false;

  navigate(functionId: EnumRouterItems) {
    AppRouterHelper.pageUp();
    this.navigatePage(functionId);
  }

  navigatePage(functionId: EnumRouterItems) {
    if (functionId == EnumRouterItems.ToPageUp) return;

    const targetPage: string = AppRouterHelper.findTargetPage(functionId);
    if (this.isTargetEqualCurrentPage(targetPage)) return;

    this.toTargetPage(targetPage);
  }

  isTargetEqualCurrentPage(targetPage: string): boolean {
    return this.$store.getters.getCurrentPage == targetPage;
  }

  toTargetPage(page: string) {
    this.$store.dispatch("changeCurrentPage", page);
    router.replace(this.$store.getters.getCurrentPage);
  }
}
</script>

<style scoped />
