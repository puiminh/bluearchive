import { createRouter, createWebHistory } from 'vue-router';
import {} from 'vue';
// import TheNewVue from './components/TheNew.vue'
// import TheHomeVue from './components/TheHome.vue'
// import TheSystemVue from './components/TheSystem.vue'
// import TheCharacterVue from './components/TheCharacter.vue'

const TheHomeVue = import('./components/TheHome.vue');
const TheNewVue = import('./components/TheNew.vue');
const TheSystemVue = import('./components/TheSystem.vue');
const TheCharacterVue = import('./components/TheCharacter.vue');



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: TheHomeVue,
      
    },
    {
        path: '/system',
        component: TheSystemVue,
        
    },
    {
        path: '/news',
        component: TheNewVue,
        
    },
    {
        path: '/character/:id',
        component: TheCharacterVue,
        props: true,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: {}
    }

  ]
});

export default router;
