import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogPage from './routes/BlogPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Root from './Routes/Root';
import { useState } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
       index: true,
       element: <Home blogData={blogData} setBlogData={setBlogData}/>
      },
      {
        path: "/blog/:id", 
        element: <BlogPage/ >
      }
    ]

  },
]);


// function Parent() {
//     const [data, setData] = useState();
//     return <Child state={data} parentCallback={setData} />
// }


function App() {

const [blogData, setBlogData] = useState([]);
  

  return (
     <RouterProvider router={router} />
  
  )
}

export default App
