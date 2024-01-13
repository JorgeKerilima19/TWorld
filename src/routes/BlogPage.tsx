import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Invitation } from "../components";
import { posts } from "../helpers/data/posts";
import { PostInterface } from "../components/Interfaces";

import parse from "html-react-parser";

export const BlogPage = () => {
  const { id }: any = useParams();

  const [post, setPost] = useState<PostInterface>();

  useEffect(() => {
    setPost(posts[id - 1]);
  }, []);

  return (
    <article className="py-10 flex flex-col gap-5 px-5 md:px-10">
      <header className="text-4xl font-bold pt-8 pb-4">{post?.title}</header>
      <div className="relative w-full flex flex-wrap justify-between gap-5 after:w-full after:absolute after:h-[0.1rem] after:bg-red-700 after:bottom-[-0.5rem]">
        <span className="text-green-800 font-semibold">#{post?.category}</span>
        <span className="text-red-700 font-semibold">{post?.author}</span>
        <span>
          {post?.date.toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        <span>Reading time: {post?.readingTime} minutes</span>
      </div>
      <span className="text-lg py-5">{post?.description}</span>
      <img
        className="w-full md:w-[80%] h-[25rem] object-cover pb-5"
        src={post?.img}
        alt="Post Image"
      />
      <div className="post-content-container">
        {post?.content ? <>{parse(post?.content)}</> : "Loading..."}
      </div>
      <Invitation />
    </article>
  );
};
