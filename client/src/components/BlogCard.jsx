import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'
import BlogPage from './BlogPage';
import { Link } from 'react-router-dom';




const BlogCard = ({blog}) => {





    // const onUpdate = (toUpdateStudent) => {
    //     toUpdate(toUpdateStudent)
    // }

    // const onDelete = (toDeleteStudent) => {
    //     toDelete(toDeleteStudent)
    // }

    return (
        <Card>
            <BlogPage></BlogPage>
            <Card.Body>
          
            <Card.Title>{blog.date} {blog.author} {blog.title} {blog.body}</Card.Title>
                  <Link to="/blog">Click To Read Blog</Link>
            <Button variant="outline-danger" onClick={()=>{onDelete(blog)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button>
            <Button variant="outline-info" onClick={()=>{onUpdate(blog)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button>
            </Card.Body>
        </Card>
    )

}

export default BlogCard;