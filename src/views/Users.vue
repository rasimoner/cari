<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <ras-table-component
          :headers="headers"
          :items="getItems()"
          :table-title="tableTitle"
        >
          <template v-slot:item.action="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              edit
            </v-icon>
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
import UsersComponent from "@/components/UsersComponent.vue";
import { UsersDetailModel } from "@/models/users-detail-model.interface";
import RasTableComponent from "@/components/rasComp/rasTableComponent.vue";
import { RasTableHeaders } from "@/components/rasComp/ras-table-comp/ras-table-headers.interface";
import { RasTableModel } from "@/models/ras-table-model.interface";

@Component({
  components: {
    RasTableComponent,
    "users-component": UsersComponent
  }
})
export default class Users extends Vue {
  name: string = "Users";
  dialog: boolean = false;
  editedIndex: number = -1;
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
  tableTitle: string = "User Formu";
  items: RasTableModel[] = [];
  editedItem: RasTableModel = {
    name: "",
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0
  };
  defaultItem: RasTableModel = {
    name: "",
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0
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
    let tableModel: RasTableModel[] = [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%"
      },
      {
        name: "FoIce cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: "1%"
      },
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: "7%"
      },
      {
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: "8%"
      },
      {
        name: "Gingerbread",
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: "16%"
      },
      {
        name: "Jelly bean",
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: "0%"
      },
      {
        name: "Lollipop",
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: "2%"
      },
      {
        name: "Honeycomb",
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: "45%"
      },
      {
        name: "Donut",
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: "22%"
      },
      {
        name: "KitKat",
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: "6%"
      }
    ];
    return tableModel;
  }
}
</script>
<style scoped />
