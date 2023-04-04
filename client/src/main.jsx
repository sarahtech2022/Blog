import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import ListBlog from './components/ListBlog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [{path: "/BlogPage", element: <ListBlog/>}]

  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
   
    </BrowserRouter>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
