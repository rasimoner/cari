<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <ras-table-component :headers="headers"/>
        <users-component :user-detail="details" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UsersComponent from "@/components/UsersComponent.vue";
import { UsersDetailModel } from "@/models/users-detail-model.interface";
import RasTableComponent from "@/components/rasComp/rasTableComponent.vue";
import { RasTableHeaders } from "@/components/rasComp/ras-table-comp/ras-table-headers.interface";

@Component({
  components: {
    RasTableComponent,
    "users-component": UsersComponent
  }
})
export default class Users extends Vue {
  name: string = "Users";
  details: UsersDetailModel[] = [
    {
      title: "12",
      subTitle: "Files"
    },
    {
      title: "2GB",
      subTitle: "Used"
    },
    {
      title: "24,6$",
      subTitle: "Spent"
    }
  ];
  headers: RasTableHeaders[] = [
    {
      text: "Dessert (100g serving)",
      align: "left",
      value: "name"
    },
    { text: "Calories", value: "calories" },
    { text: "Fat (g)", value: "fat" },
    { text: "Carbs (g)", value: "carbs" },
    { text: "Protein (g)", value: "protein" },
    { text: "Iron (%)", value: "iron" },
    { text: "Actions", value: "action", sortable: false }
  ];
}
</script>
<style scoped />
