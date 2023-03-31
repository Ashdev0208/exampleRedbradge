<script>
import UzbekchaFetch from "axios";
import { ref } from "vue"

export default {

    setup() {
        UzbekchaFetch.post("https://rbs.algorithmic.uz/api/Authentication", {
            "userName": "string",
            "password": "string"
        }).then(res => {
            localStorage.setItem("token", res.data)
        });
        const datas = ref([])
        UzbekchaFetch.get("https://rbs.algorithmic.uz/api/Teachers", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
            }
        }).then(res => {
            res.data.forEach(item => {
                datas.value.push(item)
            })
        })

        return { datas }
    }
}
</script>

<template>
    <Header></Header>
    <div class="container mt-4 row gap-5 m-auto">
        <div class="card" v-for="(data, index) in datas" :key="data.id">
            <div class="card-header text-center">Featured</div>
            <div class="card-body">
                <h5 class="card-text">Username {{ data.userName }}</h5>
                <p class="card-title">Firstname {{ data.firstName }}</p>
                <p class="card-text">Lastname {{ data.lastName }}</p>
                <a href="#" class="btn btn-primary">Button</a>
            </div>
        </div>
    </div>
</template>
<style>
.card {
    width: 400px;
}
</style>