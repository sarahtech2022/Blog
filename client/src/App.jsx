import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import BlogPage from './components/BlogPage';

import ListBlog from './components/ListBlog'




function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="blogpage" element={<BlogPage />} />
       
      </Routes>

      <ListBlog />


    </div>
  )
}

export default App
