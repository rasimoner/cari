<template>
    <div>
        <v-app id="inspire">
            <div>
                <v-data-table
                        :headers="headers"
                        :items="items"
                        :options.sync="options"
                        :server-items-length="totalItems"
                        :loading="loading"
                        class="elevation-1"
                />
            </div>
        </v-app>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from "vue-property-decorator";
    import {RasTableModel} from "@/models/ras-table-model.interface";
    import {ResultRasTableModel} from "@/models/results/result-ras-table-model.interface";

    @Component
    export default class RasTableComponent extends Vue {
        name: string = "rasTableComponent"
        totalItems: number = 0;
        items: RasTableModel[] = [
            {
                name: '',
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0,
                iron: '',
            }
        ];
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

        @Watch("options", {deep: true, immediate: true})
        async handler() {
            await this.getDataFromApi()
                .then((res: ResultRasTableModel|any) =>
                {
                    if(res.items && res.total){
                        this.items = res.items;
                        this.totalItems = res.total;
                    }
                })
        }

        getDataFromApi() {
            this.loading = true;
            return new Promise((resolve, reject) => {
                const {sortBy, sortDesc, page, itemsPerPage} = this.options;

                let items = this.getItems();
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
            return [
                {
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    iron: '1%',
                },
                {
                    name: 'Ice cream sandwich',
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
            ]
        }
    }
</script>

<style scoped>

</style>