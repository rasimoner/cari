<template>
    <v-card>
        <v-footer
                :padless="!padless"
                :absolute="absolute"
                :fixed="!fixed"
        >
            <v-card
                    flat
                    tile
                    width="100%"
                    class="red lighten-1 text-center"
            >
                <v-card-text>
                    <v-btn
                            v-for="item in routerItems"
                            :key="item.icon"
                            class="mx-6"
                            icon
                            @click="navigate(item.functionId)"
                    >
                        <v-icon size="24px">{{ item.icon }}</v-icon>
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-footer>
    </v-card>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import router from '@/router';
    import {RouterItemsModel} from '@/components/app/router-items-model.interface.ts'

    @Component
    export default class AppFooterComponent extends Vue {
        name: string = "AppFooterComponent";

        routerItems: RouterItemsModel[] = [
            {title: 'Anasayfa', icon: 'mdi-home', functionId: 1},
            {title: 'Hakkımızda', icon: 'mdi-email', functionId: 2},
            {title: 'Kullanıcılar', icon: 'mdi-calendar', functionId: 3},
            {title: 'Hesabım', icon: 'mdi-chevron-up-box', functionId: 4}
        ];

        padless: boolean = false;
        absolute: boolean = false;
        fixed: boolean = false;

        navigate(functionId: number) {
            if (functionId == 4) {
                this.pageUp();
            }
            if (functionId == 1) {
                if (this.$store.getters.getCurrentPage == '/') {
                    return;
                }
                this.$store.dispatch('changeCurrentPage', '/');
                router.replace(this.$store.getters.getCurrentPage);
            }
        }

        pageUp() {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    }
</script>

<style scoped>

</style>