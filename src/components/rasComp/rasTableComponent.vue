<template>
    <v-app id="inspire">
        <v-card>
            <v-card-title>
                Nutrition
                <v-spacer/>
                <v-text-field
                        v-model="search"
                        append-icon="search"
                        label="Search"
                        single-line
                        hide-details
                />
            </v-card-title>
            <v-spacer/>
            <v-data-table
                    :headers="headers"
                    :items="items"
                    :options.sync="options"
                    :server-items-length="totalItems"
                    :search="search"
                    :loading="loading"
                    class="elevation-1"
            />
        </v-card>
    </v-app>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from "vue-property-decorator";
    import {RasTableModel} from "@/models/ras-table-model.interface";
    import {ResultRasTableModel} from "@/models/results/result-ras-table-model.interface";

    @Component
    export default class RasTableComponent extends Vue {
        name: string = "rasTableComponent";
        search: string = '';
        totalItems: number = 0;
        items: RasTableModel[] = [];
        loading: boolean = true;
        options: any = {};
        headers: any = [
            {
                text: 'Dessert (100g serving)',
                align: 'left',
                sortable: false,
                value: 'name',
            },
            {text: 'Calories', value: 'calories'},
            {text: 'Fat (g)', value: 'fat'},
            {text: 'Carbs (g)', value: 'carbs'},
            {text: 'Protein (g)', value: 'protein'},
            {text: 'Iron (%)', value: 'iron'},
        ];

        @Watch("search")
        @Watch("options", {deep: true, immediate: true})
        async handler() {
            // if (this.search != '' && this.search.length<3) {
            //     console.log("asd",this.search);
            //     return;
            // }
            await this.getDataFromApi()
                .then((res: ResultRasTableModel | any) => {
                    if (res.items && res.total) {
                        this.items = res.items;
                        this.totalItems = res.total;
                    }
                })
        }

        getDataFromApi() {
            return new Promise((resolve, reject) => {
                this.loading = true;
                const {sortBy, sortDesc, page, itemsPerPage} = this.options;

                // let items: RasTableModel[] = [];
                // if (this.items.length && this.search.length<3) {
                //     console.log("filterTime", this.search);
                //     items = this.items.filter(
                //         x => x.name.toLowerCase()
                //             .indexOf(this.search.toLowerCase()) > -1
                //     );
                // } else {
                //
                //     console.log("FirstTime",this.search);
                //     items = this.getItems();
                // }
                let items = this.getItems();
                // this.filterItems(items);
                items = this.getItems().filter(
                    x => x.name.toLowerCase()
                        .indexOf(this.search.toLowerCase()) > -1
                );
                let total = items.length;

                if (sortBy && sortBy.length === 1 && sortDesc.length === 1) {
                    items = items.sort((a: { [x: string]: any; }, b: { [x: string]: any; }) => {
                        const sortA = a[sortBy[0]];
                        const sortB = b[sortBy[0]];

                        if (sortDesc[0]) {
                            if (sortA < sortB) return 1;
                            if (sortA > sortB) return -1;
                            return 0
                        } else {
                            if (sortA < sortB) return -1;
                            if (sortA > sortB) return 1;
                            return 0
                        }
                    })
                }

                if (itemsPerPage && itemsPerPage > 0) {
                    items = items.slice((page - 1) * itemsPerPage, page * itemsPerPage)
                }

                setTimeout(() => {
                    this.loading = false;
                    resolve({
                        items,
                        total,
                    })
                }, 1000)

            })
        }

        getItems() {
            let tableModel: RasTableModel[] = [
                {
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    iron: '1%',
                },
                {
                    name: 'FoIce cream sandwich',
                    calories: 237,
                    fat: 9.0,
                    carbs: 37,
                    protein: 4.3,
                    iron: '1%',
                },
                {
                    name: 'Eclair',
                    calories: 262,
                    fat: 16.0,
                    carbs: 23,
                    protein: 6.0,
                    iron: '7%',
                },
                {
                    name: 'Cupcake',
                    calories: 305,
                    fat: 3.7,
                    carbs: 67,
                    protein: 4.3,
                    iron: '8%',
                },
                {
                    name: 'Gingerbread',
                    calories: 356,
                    fat: 16.0,
                    carbs: 49,
                    protein: 3.9,
                    iron: '16%',
                },
                {
                    name: 'Jelly bean',
                    calories: 375,
                    fat: 0.0,
                    carbs: 94,
                    protein: 0.0,
                    iron: '0%',
                },
                {
                    name: 'Lollipop',
                    calories: 392,
                    fat: 0.2,
                    carbs: 98,
                    protein: 0,
                    iron: '2%',
                },
                {
                    name: 'Honeycomb',
                    calories: 408,
                    fat: 3.2,
                    carbs: 87,
                    protein: 6.5,
                    iron: '45%',
                },
                {
                    name: 'Donut',
                    calories: 452,
                    fat: 25.0,
                    carbs: 51,
                    protein: 4.9,
                    iron: '22%',
                },
                {
                    name: 'KitKat',
                    calories: 518,
                    fat: 26.0,
                    carbs: 65,
                    protein: 7,
                    iron: '6%',
                },
            ];
            return tableModel;
        }
    }
</script>

<style scoped>

</style>