import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Reference from './views/Reference.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Reference
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./views/About.vue")
    },
    {
      path: "/devenez-membre",
      component: () => import("./views/Subscribe.vue")
    },
    {
      path: "/nous-contacter",
      component: () => import("./views/Contact.vue")
    },
    {
      path: "/evenements",
      component: () => import("./views/Events.vue")
    },
    {
      path: "/cabemery/accueil",
      component: () => import("./cabemery/Home.vue")
    },
    {
      path: "/multimedia",
      component: () => import("./views/Multimedia.vue")
    },
    {
      path: "/video/:id",
      component: () => import("./views/Video.vue")
    },
    {
      path: "/actualite",
      component: () => import("./views/News.vue")
    },
    {
      path: "**",
      redirect: "/"
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
