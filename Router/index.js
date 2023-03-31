import {createRouter,createWebHistory} from "vue-router";
import addTeacher from "../src/components/AddTeacher.vue";
import addGuides from "../src/components/AddGrades.vue";
import AddParent from "../src/components/AddParent.vue";
import Card from "../src/components/Card.vue";
import Data from "../src/components/Data.vue";
import Word from "../src/components/Word.vue";
const routes = [
    {
        path: "/",
        component: Card
    },
    {
        path: "/data",
        component: Data,
        meta:{transition:'anim'}
    },
    {
        path: "/AddParent",
        component: AddParent
    },
    {
        path: "/AddTeacher",
        component: addTeacher
    },
    {
        path: "/AddGrades",
        component: addGuides
    },
    {
        path: "/word",
        component: Word
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router