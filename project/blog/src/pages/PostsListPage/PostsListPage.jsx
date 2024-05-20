import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function PostsListPage() {
  // const [posts, setPosts] = useState([]);
  const posts = useLoaderData();

  return (
    <div>
      <h1>PostsListPage</h1>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
