import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const MyForm = ({ onSaveBlog }) => {
  // This is the original State with not initial student
  const [formInput, setFormInput] = useState({
    author: "",
    title: "",
    body: "",
    image: "",
  });

  //create functions that handle the event of the user typing into the form
  const handleAuthorChange = (event) => {
    const author = event.target.value;
    setFormInput((formInput) => ({ ...formInput, author }));
  };

  const handleTitleChange = (event) => {
    const title = event.target.value;
    setFormInput((formInput) => ({ ...formInput, title }));
  };

  const handleBodyChange = (event) => {
    const body = event.target.value;
    setFormInput((formInput) => ({ ...formInput, body }));
  };

  const handleImageChange = (event) => {
    const image = event.target.value;
    setFormInput((formInput) => ({ ...formInput, image }));
  };

  const clearForm = () => {
    setFormInput({ author: "", title: "", body: "", image: "" });
  };

  //A function to handle the post request for the blog
  const postBlog = (newBlog) => {
    return fetch("http://localhost:8080/postblog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlog),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log("From the post ", data);
        //I'm sending data to the List of Students (the parent) for updating the list
        onSaveBlog(data);
        //this line just for cleaning the form
        clearForm();
      });
  };

  //A function to handle the submit in both cases - Post and Put request!
  const handleSubmit = (e) => {
    e.preventDefault();
    postBlog(formInput);
  };

  return (
    <Form className="form-students" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Author</Form.Label>
        <input
          type="text"
          id="add-author-name"
          placeholder="Author"
          required
          value={formInput.author}
          onChange={handleAuthorChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Title</Form.Label>
        <input
          type="text"
          id="add-title"
          placeholder="Title"
          required
          value={formInput.title}
          onChange={handleTitleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Body</Form.Label>
        <input
          type="text"
          id="add-body"
          placeholder="Body"
          required
          value={formInput.body}
          onChange={handleBodyChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Image</Form.Label>
        <input
          type="text"
          name="file"
          id="add-image"
          required
          value={formInput.image}
          onChange={handleImageChange}
        />
      </Form.Group>

      <Form.Group>
        <Button type="submit" variant="outline-success">
          {formInput.id_blog ? "Edit Student" : "Add Blog"}
        </Button>
        {formInput.id_blog ? (
          <Button type="button" variant="outline-warning" onClick={clearForm}>
            Cancel
          </Button>
        ) : null}
      </Form.Group>
    </Form>
  );
};

export default MyForm;
