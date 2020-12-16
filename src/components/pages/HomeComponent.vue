<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <users-component :user-detail="userDetail" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UsersComponent from "@/components/pages/UsersComponent.vue";
import { UsersDetailModel } from "@/models/users-detail-model.interface";

@Component({
  components: { UsersComponent },
})
export default class HomeComponent extends Vue {
  name: string = "HomeComponent";

  userDetail: UsersDetailModel[] = [
    {
      title: "Cari",
      subTitle: "App",
    },
  ];
}
</script>

<style scoped />
