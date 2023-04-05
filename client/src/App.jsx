import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogPage from './routes/BlogPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Root from './Routes/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
       index: true,
       element: <Home/>
      },
      {
        path: "/blog/:id", 
        element: <BlogPage/>
      }
    ]

  },
]);


function App() {


  return (
     <RouterProvider router={router} />
   
  )
}

export default App
