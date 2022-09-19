import React from "react";
import BlogContent from "./BlogContent";
import Comment from "./Comment";
const comments = ["I agree with this statement. - Angela Merkel", "A universal truth. - Noam Chomsky",
"Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451"]
function BlogPost() {
 const res =  comments.map((comment, index) => <Comment key={index} commentText={comment}/>);
  return (
    <div id="blog-post">
      <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration."
      isPublished = {true}
      minutesToRead = {1}/>
     {res}
      {/* <Comment commentText="I agree with this statement. - Angela Merkel" />
      <Comment commentText="A universal truth. - Noam Chomsky" />
      <Comment commentText="Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451" /> */}
    </div>
  );
}

export default BlogPost;
