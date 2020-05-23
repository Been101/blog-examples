import Vue from "vue";
import VueRouter from "vue-router";
import Form from "../views/Form.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/form",
    name: "Form",
    component: Form
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      auth: true
    },
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Home,
        meta: {
          auth: true
        }
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// router.beforeEach((to, from, next) => {
//   console.log(to)
//   if (to.meta.auth) {
//     if (window.isLogin) {
//       next()
//     } else {
//       next(`/login?redirect=${to.fullPath}`)
//     }
//   } else {
//     next()
//   }
// })
const whiteList = ["/login"];
router.beforeEach((to, from, next) => {
  console.log(to);
  if (localStorage.getItem("token")) {
    if (to.path === "/login") {
      next("/");
    } else {
      next();
    }
  } else {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next(`/login?redirect=${to.fullPath}`);
    }
  }
});

export default router;
