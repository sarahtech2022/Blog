import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import * as ioicons from "react-icons/io5";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
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
      <Card>
        <Card.Body>
          <Card.Title>
            {blog.date.substring(0, 10)} {blog.author} {blog.title} {blog.body}
          </Card.Title>
          <Link to={`/blog/${blog.id_blog}`}> Click Here To Read Blog</Link>
          <img src={blog.image} className="photo"></img>
          {/* <Button
            variant="outline-danger"
            onClick={() => {
              onDelete(blog);
            }}
            style={{ padding: "0.6em", marginRight: "0.9em" }}
          >
            <ioicons.IoTrash />
          </Button>
          <Button
            variant="outline-info"
            onClick={() => {
              onUpdate(blog);
            }}
            style={{ padding: "0.6em" }}
          >
            {" "}
            <ioicons.IoSync />
          </Button> */}
        </Card.Body>
      </Card>
    </>
  );
};

export default BlogCard;
