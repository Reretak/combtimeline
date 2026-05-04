import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BaseUp from './BaseUp.jsx'
import BaseCenter from './BaseCenter.jsx'
import About from './About.jsx'
import Wiki from './Wiki.jsx'
import Login from './Login.jsx'
import Admin from './Admin.jsx'

import {
  Link,
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})

const baseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: function Index(){
    return (
      <>
        <Outlet />
        <BaseCenter />
      </>
    )
  }
})
const timelineRoute = createRoute({
  getParentRoute: () => baseRoute,
  path: 'time',
  component: function Index() {
    return (
      <>
        <BaseUp />
      </>
    )
  },
})
const AboutRoute = createRoute({
  getParentRoute: () => baseRoute,
  path: 'about',
  component: function Index() {
    return (
      <>
        <About />
      </>
    )
  },
})
const WikiRoute = createRoute({
  getParentRoute: () => baseRoute,
  path: 'wiki',
  component: function Index() {
    return (
      <>
        <Wiki />
      </>
    )
  },
})
const LoginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: function Index() {
    return (
      <>
        <Login />
      </>
    )
  },
})
const AdminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin',
  component: function Index() {
    return (
      <>
        <Admin />
      </>
    )
  },
})
const routeTree = rootRoute.addChildren([baseRoute.addChildren([timelineRoute,AboutRoute,WikiRoute]),LoginRoute,AdminRoute])
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultNotFoundComponent: () =>{
    return(
      <></>
    )
  }
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <RouterProvider router={router} />
    </>
  </StrictMode>,
)
