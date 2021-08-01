/*
 * @Author: Latte
 * @Date: 2021-07-28 23:23:02
 * @LAstEditors: Latte
 * @LastEditTime: 2021-07-30 00:11:09
 * @FilePath: \vite2-vue3-admin\src\router\index.js
 */

import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./../components/Home.vue";
import Welcome from "./../components/Welcome.vue";
import Login from "./../components/Login.vue";

const router = createRouter({
	history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
	routes: [
		{
			name: "home",
			path: "/",
			meta: {
				title: "首页",
			},
			redirect: "/welcome",
      component: () => import('../components/Home.vue'),
			children: [
				{
					name: "welcome",
					path: "/welcome",
					meta: {
						title: "欢迎页",
					},
					component: () => import("../components/Welcome.vue"),
				},
        {
					name: "login",
					path: "/login",
					meta: {
						title: "欢迎页",
					},
					component: () => import("../components/Login.vue"),
				},
			],
		},
	],
});

export default router;
