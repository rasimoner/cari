<template>
    <v-container>
        <v-layout>
            <v-flex xs12>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class HomeComponent extends Vue {
        name: string = "HomeComponent"
    }
</script>


<style scoped/>