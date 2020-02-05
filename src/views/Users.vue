<template>
    <v-container>
        <v-layout>
            <v-flex xs12>
                <users-component :details="details"/>
                <ras-table-component/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import UsersComponent from "@/components/UsersComponent.vue";
    import {UsersDetailModel} from "@/models/users-detail-model.interface";
    import RasTableComponent from "@/components/rasComp/rasTableComponent.vue";

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
                title: '12',
                subTitle: 'Files'
            },
            {
                title: '2GB',
                subTitle: 'Used'
            },
            {
                title: '24,6$',
                subTitle: 'Spent'
            }
        ]
    }

</script>
<style>

</style>
