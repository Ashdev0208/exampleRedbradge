<script setup>
import { ref } from "vue"
import { useRoute } from "vue-router";
let route = ref(useRoute().path);

</script>
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <div class="container-fluid p-3">
            <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>

            <div class="collapse  navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    <li class="nav-item navbar-brand px-3 rounded-1">#
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link first  px-3 rounded-1"
                            :class="`/` == route ? 'active' : ``">Teacher</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Grades" class="nav-link  px-3 rounded-1"
                            :class="`/Grades` == route ? 'active' : ``">Grades</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Parent" class="nav-link  px-3 rounded-1 "
                            :class="'/Parent' == route ? `active` : ``">Parents</router-link>
                    </li>
                </ul>

                <button class="btn btn-dark" type="button">
                    {{ route == "/" ? "home and Teacher" : route.slice(1)}}
                </button>
            </div>
        </div>
    </nav>

    <div class="input-container">
        <label for="input-field">Search Name</label>
        <div class="input-wrapper">
            <input type="text" id="input-field" name="input-field" placeholder="Type here..." />
            <span class="input-icon"><i class="fas fa-search"></i></span>
        </div>
    </div>
</template>
<style>
* {
    padding: 0;
    margin: 0;
    font-family: poppins;
}

.nav-link {
    color: #000;
    margin-left: 15px;
    box-shadow: rgb(204, 205, 205) 0px 10px 10px;
    transition: .6s ease all;
}


.active {
    color: rgb(255, 255, 255) !important;
    margin-top: -5px;
    background: rgb(165, 172, 183);
}

.input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 700px;
    margin: 0 auto;
}

label {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
}

.input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    border: 2px solid #e5e5e5;
    border-radius: 5px;
    background-color: #f8f8f8;
}

input[type="text"] {
    width: 100%;
    height: 40px;
    padding: 5px 10px;
    font-size: 16px;
    color: #333;
    background-color: transparent;
    border: none;
    outline: none;
}

.input-icon {
    position: absolute;
    right: 10px;
    font-size: 18px;
    color: #ccc;
}

.input-icon:hover {
    color: #0088cc;
}

.input-wrapper:focus-within {
    border-color: #0088cc;
}

.input-wrapper:focus-within input[type="text"] {
    color: #0088cc;
}

.input-wrapper:focus-within .input-icon {
    color: #0088cc;
}

.input-wrapper:hover {
    background-color: #f5f5f5;
}
</style>