import React from "react";
import { useLoaderData } from "react-router-dom";

export default function PostDetailPage() {
  const post = useLoaderData();
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
