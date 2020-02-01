<template>
    <div>
        <img slot="image"
             src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
             alt="..."/>
        <div class="author">
            <a href="#">
                <img class="avatar border-gray" src="img/faces/face-3.jpg" alt="..."/>

                <h4 class="title">Mike Andrew<br/>
                    <small>michael24</small>
                </h4>
            </a>
        </div>
        <p class="description text-center"> "Lamborghini Mercy <br>
            Your chick she so thirsty <br>
            I'm in that two seat Lambo"
        </p>
        <div slot="footer" class="text-center d-flex justify-content-center">
            <button href="#" class="btn btn-simple"><i class="fa fa-facebook-square"/></button>
            <button href="#" class="btn btn-simple"><i class="fa fa-twitter"/></button>
            <button href="#" class="btn btn-simple"><i class="fa fa-google-plus-square"/></button>
        </div>
    </div>
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