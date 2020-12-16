<template>
  <v-app app>
    <app-nav-bar />

    <v-row class="flex-child">
      <v-col class="d-flex mt-7" cols="12" md="12">
        <router-view />
      </v-col>
    </v-row>

    <app-footer class="has-mobile-footer" />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppNavBarComponent from "@/components/app/AppNavbarComponent.vue";
import AppFooter from "@/components/app/AppFooterComponent.vue";

@Component({
  components: {
    "app-footer": AppFooter,
    "app-nav-bar": AppNavBarComponent,
  },
})
export default class App extends Vue {
  name: string = "App";
  title: string = "";

  constructor() {
    super();
    this.title = "Cari";
  }
}
</script>
<style scoped>
.has-mobile-footer {
  display: none;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .has-mobile-footer {
    display: block;
  }
}
</style>
