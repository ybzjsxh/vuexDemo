import Vue from "vue";
import Router from "vue-router";
import Login from "@/views/Login";
import Main from "@/views/Main";
import store from "../store";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: Login
    },
    {
      path: "/login",
      name: "login",
      redirect: "/"
    },
    {
      path: "/main",
      name: "Main",
      meta: {
        requireAuth: true
      },
      component: Main
    }
  ]
});

router.beforeEach((to, from, next) => {
  console.log(store);
  if (to.meta.requireAuth) {
    if (store.state.global.token) {
      next();
    } else {
      next({ path: "/", query: { redirect: to.fullPath } });
    }
  } else {
    next()
  }
});

export default router;
