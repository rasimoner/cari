<template>
  <div class="overflow-hidden pb-3" :class="[{ sticky: !drawer }]">
    <div class="pl-3 ml-1 mt-1">
      <v-btn class="radius-5" color="pink" dark @click.stop="drawerChange">
        {{ setActivePageName() }}
      </v-btn>
    </div>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="../../assets/cariler.png" height="65" width="126" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>
            {{ appName }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="item in routerItems"
          :key="item.title"
          @click="onUrlChange(item.path)"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ROUTER_ITEMS } from "@/components/app/router-items.const";

@Component
export default class AppNavBarComponent extends Vue {
  name: string = "AppNavBarComponent";

  drawer: boolean = false;
  appName: string = "Cari App";

  get routerItems() {
    return ROUTER_ITEMS;
  }

  setActivePageName() {
    const pageName = this.routerItems.find(
      (x) => x.path == this.$store.getters.getCurrentPage
    );
    if (pageName) return pageName.title;
  }

  drawerChange() {
    this.drawer = !this.drawer;
  }

  onUrlChange(path: string) {
    if (path == this.$store.getters.getCurrentPage) return;

    this.$store.dispatch("changeCurrentPage", path);
    this.$router.replace(path);
  }
}
</script>

<style scoped>
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
}

.radius-5 {
  border-radius: 5px;
}
</style>
