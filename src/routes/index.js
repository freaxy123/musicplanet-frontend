import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import User from "../layouts/User.vue";
import Admin from "../layouts/Admin.vue";
import Songs from "../components/Songs.vue";
import AddArtist from "../components/AddArtist.vue";
import AddSong from "../components/AddSong.vue";
import Artist from "../components/Artist.vue";
import Playlist from "../components/Playlist.vue"
import Home from "../components/Home.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterView,
  },
  {
    path: '/',
    name: 'Home',
    component: User,
    children: [
          {
            path: '',
            name: 'Home',
            component: Home,
          },
          {
            path: 'library',
            name: 'Library',
            component: Songs,
          },
          {
            path: 'addartist',
            name: 'Add Artist',
            component: AddArtist,
          },
          {
            path: 'addsong',
            name: 'Add Song',
            component: AddSong,
          },
          {
            path: 'artist',
            name: 'Artist',
            component: Artist,
          },
          {
            path: 'playlist',
            name: 'Playlist',
            component: Playlist,
          },
      ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
          {
            path: '',
            name: 'AdminHome',
            component: Home,
          },
          {
            path: 'library',
            name: 'AdminLibrary',
            component: Songs,
          },
          {
            path: 'addartist',
            name: 'Admin_Add_Artist',
            component: AddArtist,
          },
          {
            path: 'addsong',
            name: 'Admin_Add_Song',
            component: AddSong,
          },
          {
            path: 'artist',
            name: 'Admin_Artist',
            component: Artist,
          },
          {
            path: 'playlist',
            name: 'Admin_Playlist',
            component: Playlist,
          },
      ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/home', '/test'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;


