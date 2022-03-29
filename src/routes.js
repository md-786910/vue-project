import { createWebHashHistory, createRouter } from "vue-router"

import HomePage from "./components/HomePage"
import PostPage from "./components/PostPage"
import HelloWorld from "./components/HelloWorld"

const routes = [

    { name: "HomePage", path: '/', component: HomePage },
    { name: "PostPage", path: '/services', component: PostPage },
    { name: "HelloWorld", path: '/blog', component: HelloWorld }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router