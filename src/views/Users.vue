<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <ras-table-component
          :headers="headers"
          :items="getItems()"
          :table-title="tableTitle"
        >
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)"> edit </v-icon>
            <v-icon small class="mr-2" @click="deleteItem(item)">
              delete
            </v-icon>
          </template>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on"
                >New Item</v-btn
              >
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ modalFormTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.name"
                        label="Dessert name"
                      />
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.calories"
                        label="Calories"
                      />
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.fat" label="Fat (g)" />
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.carbs"
                        label="Carbs (g)"
                      />
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.protein"
                        label="Protein (g)"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer />
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </ras-table-component>
        <users-component :user-detail="details" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UsersComponent from "@/components/pages/UsersComponent.vue";
import { UsersDetailModel } from "@/models/users-detail-model.interface";
import RasTableComponent from "@/components/_rasComps/ras-table-comp/rasTableComponent.vue";
import { RasTableHeaders } from "@/components/_rasComps/ras-table-comp/ras-table-headers.interface";
import { RasTableModel } from "@/models/ras-table-model.interface";
import { SAMPLE_TABLE_DATA } from "@/mockDatas/sample-datas.const";

@Component({
  components: {
    RasTableComponent,
    "users-component": UsersComponent,
  },
})
export default class Users extends Vue {
  name: string = "Users";
  dialog: boolean = false;
  editedIndex: number = -1;
  details: UsersDetailModel[] = [
    {
      title: "12",
      subTitle: "Files",
    },
    {
      title: "2GB",
      subTitle: "Used",
    },
    {
      title: "24,6$",
      subTitle: "Spent",
    },
  ];
  headers: RasTableHeaders[] = [
    {
      text: "Dessert (100g serving)",
      align: "left",
      value: "name",
    },
    { text: "Calories", value: "calories" },
    { text: "Fat (g)", value: "fat" },
    { text: "Carbs (g)", value: "carbs" },
    { text: "Protein (g)", value: "protein" },
    { text: "Iron (%)", value: "iron" },
    { text: "Actions", value: "action", sortable: false },
  ];
  tableTitle: string = "User Formu";
  items: RasTableModel[] = [];
  editedItem: RasTableModel = {
    name: "",
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0,
  };
  defaultItem: RasTableModel = {
    name: "",
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0,
  };

  get modalFormTitle() {
    return this.editedIndex === -1 ? "New Item" : "Edit Item";
  }

  close() {
    this.dialog = false;

    setTimeout(() => {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    }, 300);
  }

  save() {
    if (this.editedIndex > -1) {
      Object.assign(this.items[this.editedIndex], this.editedItem);
    } else {
      this.items.push(this.editedItem);
    }
    this.close();
  }

  editItem(item: RasTableModel) {
    this.editedIndex = this.items.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialog = true;
  }

  deleteItem(item: RasTableModel) {
    const index = this.items.indexOf(item);
    confirm("Are you sure you want to delete this item?") &&
      this.items.splice(index, 1);
  }

  getItems() {
    return SAMPLE_TABLE_DATA;
  }
}
</script>
<style scoped />
