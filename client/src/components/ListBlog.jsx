import React, { useState, useEffect } from 'react'
import * as ioicons from 'react-icons/io5'
import MyForm from './Form';
import BlogCard from './BlogCard';

import BlogPage from '../routes/BlogPage';
import { Link } from 'react-router-dom';

const ListBlog = () => {

    // this is my original state with an array of students 
    const [blogs, setBlogs] = useState([]);

    //this is the state needed for the UpdateRequest
    // const [editingStudent, setEditingStudent] = useState(null)

   //1. Connecting to the Get request to get the list of blogs from the data base
    const loadStudents = () => {
        // A function to fetch the list of blogs that will load anytime the list changes
        fetch("http://localhost:8080/blogs")
            .then((response) => response.json())
            .then((blogs) => {
                setBlogs(blogs);
            });
    }

    useEffect(() => {
        loadStudents();
    }, []); //remove whats inside of the array to stop error ***

    //Taking the data from the form and adding it to the array with all the other data from old blogs
    const onSaveBlog = (newBlog) => {
        //console.log(newStudent, "From the parent - List of Students");
        setBlogs((blogs) => [...blogs, newBlog]);
    }


    //A function to control the update in the parent (student component)
    // const updateStudent = (savedStudent) => {
    //     // console.log("Line 29 savedStudent", savedStudent);
    //     // This function should update the whole list of students - 
    //     loadStudents();
    // }

    //A function to handle the Delete funtionality
    // const onDelete = (student) => {
    //     //console.log(student, "delete method")
    //     return fetch(`http://localhost:8080/api/students/${student.id}`, {
    //         method: "DELETE"
    //     }).then((response) => {
    //         //console.log(response);
    //         if (response.ok) {
    //             loadStudents();
    //         }
    //     })
    // }

    //A function to handle the Update functionality
    // const onUpdate = (toUpdateStudent) => {
    //     //console.log(toUpdateStudent);
    //     setEditingStudent(toUpdateStudent);
    // }



    return (
        <div className="mybody">
        <div className="list-students">
            <h2>Blog Posts </h2>
            <ul>
                {blogs.map((blog) => {
                    return <li key={blog.id_blog}> <BlogCard blog={blog}  /></li>
                    
                })}
                 <Link to="/blog/8" > Click to Read Blog </Link>
   
                
            </ul>
        </div>
        <MyForm  onSaveBlog={onSaveBlog}  />
        </div>
    );
}


export default ListBlog