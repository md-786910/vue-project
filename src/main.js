import { createApp } from 'vue'

import App from './App.vue'

import router from './routes'
// import HeaderPage from "./components/HeaderPage"
// import HomePage from "./components/HomePage"
// import PostPage from "./components/PostPage"
// import HelloWorld from "./components/HelloWorld"

// add main.js page to under index.html
createApp(App).use(router).mount('#app')
