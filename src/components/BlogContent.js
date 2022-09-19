import React from "react";

function BlogContent({articleText, isPublished, minutesToRead}) {
  if(isPublished) {
    return <div id="blog-content"><h1>{articleText}</h1>
    <p>This book is a {minutesToRead} minute book</p></div>;
  }
  else{
    return null;
  }
  }
  

export default BlogContent;
