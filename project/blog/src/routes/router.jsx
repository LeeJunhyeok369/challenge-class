import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import HomePage from "../pages/HomePage/HomePage";
import PostDetailPage from "../pages/PostDetailPage/PostDetailPage";
import postDetailPageLoader from "../pages/PostDetailPage/PostDetailPage.loader";
import postsListPageLoader from "../pages/PostsListPage/PostListPage.loader";
import PostsListPage from "../pages/PostsListPage/PostsListPage";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/posts",
        element: <PostsListPage />,
        loader: postsListPageLoader,
      },
      {
        path: "/posts/:postId",
        element: <PostDetailPage />,
        loader: postDetailPageLoader,
      },
    ],
  },
]);

export default router;
