<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <home-component />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomeComponent from "@/components/pages/HomeComponent.vue";

@Component({
  components: {
    "home-component": HomeComponent,
  },
})
export default class Home extends Vue {
  name: string = "Home";
}
</script>
