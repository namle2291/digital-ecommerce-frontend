import React from "react";
import BlogItem from "../components/Blog/BlogItem";

function Blog() {
  return (
    <div className="grid grid-cols-3 gap-[20px]">
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
    </div>
  );
}

export default Blog;
