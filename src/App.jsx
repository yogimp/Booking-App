import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import './app.css'
import Home from '../src/pages/home/Home'
import List from '../src/pages/list/List'
import Hotel from '../src/pages/hotel/Hotel'
import Navbar from '../src/components/navbar/Navbar'
import Footer from '../src/components/footer/Footer'

function App() {

  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/hotels",
          element: <List />
        },
        {
          path: "/hotels/:id",
          element: <Hotel />
        },
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
