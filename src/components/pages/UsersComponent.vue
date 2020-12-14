<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-container v-for="item in userDetail" :key="item.title">
          <v-row align="center" justify="center">
            {{ item.title }} / {{ item.subTitle }}
          </v-row>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { UsersDetailModel } from "@/models/users-detail-model.interface";

@Component
export default class UsersComponent extends Vue {
  name: string = "UsersComponent";

  @Prop() readonly userDetail: UsersDetailModel[] | undefined;
}
</script>

<style scoped />
