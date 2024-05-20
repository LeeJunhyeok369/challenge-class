import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div>
      <Link to="/">홈 페이지</Link>
      <br />
      <Link to="/posts">호스트 목록 페이지</Link>
      <br />
      <Link to="/posts/123">호스트 상세 페이지</Link>
      <Outlet />
    </div>
  );
}
