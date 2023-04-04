import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'
// import BlogPage from './BlogPage';
// import { Outlet, Link } from 'react-router-dom';


const BlogCard = ({blog}) => {
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Header />}>
//       <Route index element={<Home />} />
//       <Route path="login" element={<Login />} />
//       <Route path="register" element={<Register />} />
//     </Route>
//   )
// )



    return (
        <>
       {/* <Link to="/BlogPage/1" > Click to Read Blog </Link>
       <Outlet></Outlet> */}
        {/* <Card>
            
            <Card.Body>
          
            <Card.Title>{blog.date} {blog.author} {blog.title} {blog.body}</Card.Title>
                     <div> <Link to="/BlogPage">Click To Read Blog</Link> </div>
                  <Routes>
                      <Route path="/BlogPage" element={<BlogPage/>} /> 
                
            <Button variant="outline-danger" onClick={()=>{onDelete(blog)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button>
            <Button variant="outline-info" onClick={()=>{onUpdate(blog)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button>
            </Routes>
            </Card.Body>
        </Card> */}
       
        </>
    )

}

export default BlogCard;