<template>
    <div>
        <users-component :details="details"/>
        <ras-table-component/>
    </div>
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


        // getClasses(index) {
        //     var remainder = index % 3
        //     if (remainder === 0) {
        //         return 'col-md-3 col-md-offset-1'
        //     } else if (remainder === 2) {
        //         return 'col-md-4'
        //     } else {
        //         return 'col-md-3'
        //     }
        // }

    }

</script>
<style>

</style>
