import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import About from './pages/About'
import BecomeTrainer from './pages/BecomeTrainer'
import Blog from './pages/Blog'
import StudentStories from './pages/StudentStories'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Auth from './pages/Auth'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/courses',
    element: <Courses />,
  },
  {
    path: '/courses/:id',
    element: <CourseDetail />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/become-trainer',
    element: <BecomeTrainer />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/student-stories',
    element: <StudentStories />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/auth',
    element: <Auth />,
  },
])

export default function AppRoutes() {
  return <RouterProvider router={router} />
}