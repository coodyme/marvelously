import IRouter from './models/router.interface'

import Home from './pages/Home/home.page'
import Login from './pages/Login/login.page'
import Movies from './pages/Movies/movies.page'
import Characters from './pages/Characters/characters.page'
import Comics from './pages/Comics/comics.page'

const router: IRouter[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    exact: true
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
    exact: true
  },
  {
    path: '/',
    name: 'Movies',
    component: Movies,
    exact: true
  },
  {
    path: '/',
    name: 'Characters',
    component: Characters,
    exact: true
  },
  {
    path: '/',
    name: 'Comics',
    component: Comics,
    exact: true
  }
]

export default router
