<template>
    <v-sheet
            class="overflow-hidden"
    >
        <v-container>
            <v-row
                    align="center"
                    justify="center"
            >
                <v-btn
                        style="border-radius: 5px"
                        color="pink"
                        dark
                        @click.stop="drawer = !drawer"
                >
                    {{setActivePageName()}}
                </v-btn>
            </v-row>
        </v-container>

        <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
        >
            <v-list-item>
                <v-list-item-avatar>
                    <v-img src="../../assets/cariler.png" height="65" width="126"/>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>Cari App</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider/>

            <v-list dense>

                <v-list-item
                        v-for="item in routerItems"
                        :key="item.title"
                        @click="onUrlChange(item.path)"
                        link
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-sheet>
</template>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {RouterItemsModel} from "@/components/app/router-items-model.interface.ts";

    @Component
    export default class AppNavBarComponent extends Vue {
        name: string = "AppNavBarComponent";
        drawer: boolean = false;
        routerItems: RouterItemsModel[] = [
            {title: 'Anasayfa', icon: 'mdi-home-city', path: '/'},
            {title: 'Hakkımızda', icon: 'mdi-information', path: '/about'},
            {title: 'Kullanıcılar', icon: 'mdi-account-group-outline', path: '/about'},
            {title: 'Hesabım', icon: 'mdi-account', path: '/about'}
        ];

        setActivePageName(){
            let pageName = this.routerItems.find(
                x => x.path == this.$store.getters.getCurrentPage
            );
            if (pageName){
                return pageName.title;
            }
        }
        onUrlChange(path: string) {
            if (path == this.$store.getters.getCurrentPage){
                return;
            }
            this.$store.dispatch('changeCurrentPage', path);
            this.$router.replace(path);
        }
    }
</script>

<style scoped>

</style>