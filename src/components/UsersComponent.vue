<template>
    <v-container>
        <v-layout>
            <v-flex xs12>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {UsersDetailModel} from "@/models/users-detail-model.interface";

    @Component
    export default class UsersComponent extends Vue {
        name: string = "UsersComponent";

        @Prop() private userDetail!: UsersDetailModel;


    }
</script>

<style scoped>

</style>