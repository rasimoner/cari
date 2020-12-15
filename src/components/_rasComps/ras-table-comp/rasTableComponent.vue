<template>
  <v-card>
    <v-card-title>
      {{ tableTitle }}
      <v-spacer />
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      />
    </v-card-title>
    <v-spacer />
    <v-data-table
      :headers="headers"
      :items="filteredItems"
      :options.sync="options"
      :server-items-length="totalItems"
      :search="search"
      :loading="loading"
      class="elevation-1"
      :items-per-page="5"
    />
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { ResultRasTableModel } from "@/models/results/result-ras-table-model.interface";

@Component
export default class RasTableComponent extends Vue {
  name: string = "rasTableComponent";

  @Prop()
  readonly items: [] | undefined;
  @Prop()
  readonly headers: any;
  @Prop({ type: String, default: "Sample" }) readonly tableTitle:
    | string
    | undefined;

  search: string = "";
  totalItems: number = 0;
  loading: boolean = true;
  options: any = {};
  localItems: [] = [];
  filteredItems: [] = [];

  @Watch("search")
  @Watch("options", { deep: true, immediate: true })
  async handler() {
    await this.getTableActions().then((res: ResultRasTableModel | any) => {
      this.filteredItems = [];
      this.totalItems = 0;
      if (res.items.length > 0) {
        this.filteredItems = res.items;
        this.totalItems = res.total;
      }
    });
  }

  @Watch("items", { immediate: true })
  getTumItemsChanged() {
    if (this.items) return (this.localItems = this.items);
  }

  getTableActions() {
    return new Promise((resolve) => {
      this.loading = true;
      const { sortBy, sortDesc, page, itemsPerPage } = this.options;
      let items: any[] = [];
      items = this.localItems;
      items = items.filter(
        (x) => x.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      );
      let total = items.length;

      if (sortBy && sortBy.length === 1 && sortDesc.length === 1) {
        items = items.sort(
          (a: { [x: string]: any }, b: { [x: string]: any }) => {
            const sortA = a[sortBy[0]];
            const sortB = b[sortBy[0]];

            if (sortDesc[0]) {
              if (sortA < sortB) return 1;
              if (sortA > sortB) return -1;
              return 0;
            } else {
              if (sortA < sortB) return -1;
              if (sortA > sortB) return 1;
              return 0;
            }
          }
        );
      }
      if (itemsPerPage && itemsPerPage > 0) {
        items = items.slice((page - 1) * itemsPerPage, page * itemsPerPage);
      }

      setTimeout(() => {
        this.loading = false;
        resolve({
          items,
          total,
        });
      }, 1000);
    });
  }
}
</script>

<style scoped />
