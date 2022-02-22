import {
  createRouter,
  createWebHistory
} from "vue-router"; 

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import( /* webpackChunkName: "home" */ "../layouts/BasicLayout.vue"),
    children: [
      {
        path: '/',
        name: 'MainLayout',
        component: () =>
          import( /* webpackChunkName: "home" */ "../layouts/MainLayout.vue"),
      },
      {
        path: '/oauth',
        name: 'GitHubOauth.vue',
        component: () =>
          import( /* webpackChunkName: "home" */ "../components/GitHubOauth.vue"),
      },

    ]
  } 

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.onError((error) => { 
  const pattern = "/Loading chunk (\d)+ failed/g";
  const isChunkLoadFailed = error.message.match(pattern);
  const targetPath = router.history.pending.fullPath;
  if (isChunkLoadFailed) {
    router.replace(targetPath);
  }
  // 当捕获到加载模块错误时，重新渲染该目标模块
})
export default router;