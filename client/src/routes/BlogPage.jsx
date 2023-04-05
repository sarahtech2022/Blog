import React from 'react';
import { useParams } from 'react-router-dom';


const BlogPage= ( )=> {
    let { id: blogID } = useParams();
 
return(
    <div>
        <p>This is the Blog Page, with blog ID: {blogID}</p>
     
    </div>

)};
  


export default BlogPage;