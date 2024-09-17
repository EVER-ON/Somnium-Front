import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/main-page.vue';
import BlogPage from '@/features/blog/blog.vue';
import NewsPage from '@/features/news/news.vue';

const routes = [
    { path: '/', name: 'MainPage', component: MainPage },
    { path: '/blog', name: 'BlogPage', component: BlogPage },
    { path: '/news', name: 'NewsPage', component: NewsPage },
    {path: '/recources', name: 'Resources'}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
