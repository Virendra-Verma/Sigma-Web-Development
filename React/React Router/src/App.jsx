
import './App.css'
// eslint-disable-next-line no-unused-vars
import { Home } from './components/Home.jsx';
// eslint-disable-next-line no-unused-vars
import { About } from './components/About.jsx';
import Navbar from "./components/Navbar.jsx"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Home</div>
    },
    {
      path: "/about",
      element: <div>About</div>
    }
]);

  return (
    <>
    <RouterProvider router={router} />
    <div>HEEEE HUUUU HOOOO</div>
    <Navbar/>
  
    </>
  )
}

export default App
