<template>
  <v-app app>
    <v-row class="flex-child">
      <v-col class="d-flex" cols="0" md="0">
        <app-nav-bar/>
      </v-col>
      <v-col class="d-flex" cols="12" md="12">
        <router-view/>
      </v-col>
    </v-row>
    <app-footer/>
  </v-app>
</template>


<script lang="ts">
  import AppNavBarComponent from "@/components/app/AppNavbarComponent.vue";
  import {Component, Vue} from "vue-property-decorator";
  import AppFooter from "@/components/app/AppFooterComponent.vue";

  @Component({
    components: {
      "app-footer": AppFooter,
      "app-nav-bar": AppNavBarComponent
    }
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
