import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const BlogPage = () => {
  let { id: blogID } = useParams();

  const [blog, setBlog] = useState([]);
  //Fetching each individual blog from my backend server to get that data here
  const loadBlog = () => {
    // A function to fetch a blog for the blog page
    fetch(`http://localhost:8080/blog/${blogID}`)
      .then((response) => response.json())
      .then((blog) => {
        setBlog(blog);
      });
  };

  useEffect(() => {
    loadBlog();
  }, [blogID]);

  //need to call a function on an event or will have a loop!
  //UseEffect needed here.

  return (
    <div>
      {/* <p>This is the Blog Page, with blog ID: {blogID}</p> */}
      <p>
        {" "}
        <p> {blog[0]?.author}</p> <p>{blog[0]?.date.substring(0, 10)} </p>
        {blog[0]?.title} {blog[0]?.body}{" "}
        <p>
          {" "}
          <img src={blog[0]?.image} className="photo2"></img>{" "}
        </p>
      </p>
    </div>
  );
};

export default BlogPage;
