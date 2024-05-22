import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOG_IN, LOG_OUT } from "./redux/reducers/auth.reducer";

export default function AuthButton() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleClickButton = () => {
    const action = { type: isLoggedIn ? LOG_OUT : LOG_IN };
    dispatch(action);
  };

  return (
    <>
      {isLoggedIn ? (
        <button onClick={handleClickButton}>로그인 하기</button>
      ) : (
        <button onClick={handleClickButton}>로그아웃 하기</button>
      )}
    </>
  );
}
