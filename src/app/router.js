import {computed, ref} from "vue";
import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/main-page.vue';
import BlogPage from '@/features/blog/blog.vue';
import NewsPage from '@/features/news/news.vue';
import WikiPage from "@/pages/wiki-page.vue";

const routes= [
    { path: '/main', name: 'MainPage', component: MainPage },
    { path: '/wiki', name: 'WikiPage', component: WikiPage },
    { path: '/blog', name: 'BlogPage', component: BlogPage },
    { path: '/news', name: 'NewsPage', component: NewsPage },
    {path: '/resources', name: 'Resources'}
]

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash
})

const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || '/'] || NotFound
})

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;
