<script setup>
import { ref } from "vue"
import UzbekchaFetch from "axios"

const datas = ref();
UzbekchaFetch.get("https://rbs.algorithmic.uz/api/Grades", {
    headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
}).then(res => datas.value = res.data)


</script>
<template>
    <Header></Header>
    <div class="container mt-4 row gap-5 m-auto">
        <div class="card mt-5 shadow-lg pt-4" v-for="data in datas">
            <div class="text-center">{{ data.name }}</div>
            <div class="badge bg-secondary fs-6 shadow">class </div>
            <div class="card-body d-flex justify-content-between">
                <a href="#" class="btn btn-primary">subject</a>
                <a href="#" class="btn btn-primary">students</a>
            </div>
        </div>
    </div>
</template>
<style></style>