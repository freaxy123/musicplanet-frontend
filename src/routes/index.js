import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import User from "../layouts/User.vue";
import Admin from "../layouts/Admin.vue";
import Songs from "../components/User/Songs.vue";
import AddArtist from "../components/User/AddArtist.vue";
import AddSong from "../components/User/AddSong.vue";
import Artist from "../components/User/Artist.vue";
import Playlist from "../components/User/Playlist.vue"
import Home from "../components/User/Home.vue";
import Users from "../components/Admin/Users.vue"

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
            name: 'Home ',
            component: Home,
          },
          {
            path: 'library',
            name: 'Library ',
            component: Songs,
          },
          {
            path: 'addartist',
            name: 'Add Artist ',
            component: AddArtist,
          },
          {
            path: 'addsong',
            name: 'Add Song ',
            component: AddSong,
          },
          {
            path: 'artist',
            name: 'Artist ',
            component: Artist,
          },
          {
            path: 'playlist',
            name: 'Playlist ',
            component: Playlist,
          },
          {
            path: 'users',
            name: 'Users ',
            component: Users,
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


