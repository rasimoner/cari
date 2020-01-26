<template>
    <v-container>
        <v-layout>
            <v-flex xs12>
                <h1 class="display-1">About Page</h1>
                <br>
                <about-component/>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script lang="ts">
    import AboutComponent from '@/components/AboutComponent.vue'
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        components: {
            "about-component": AboutComponent
        }
    })
    export default class About extends Vue {
        name: string = 'About';
    }
</script>