import { createRouter, createWebHashHistory } from "vue-router";
import Contact from './components/Contact.vue';
import Home from './components/Home.vue';
import Joke from './components/Joke.vue';
import Projects from './components/Projects.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/contact', component: Contact },
        { path: '/projects', component: Projects },
        { path: '/joke', component: Joke },
    ]
})

export default router;