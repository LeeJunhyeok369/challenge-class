import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { MEMO_WRITE } from "../redux/reducers/memo.reducer";

const StyleArticle = styled.article`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  > span {
    text-align: center;
    width: 100%;
    color: rgb(128, 128, 128);
    font-size: 10px;
    margin: 0px auto 24px;
  }
  > textarea {
    all: unset;
    height: 100%;
    font-size: 15px;
    line-height: 1.66;
  }
`;

export default function MemoInput() {
  const now = useSelector((state) => state.now.id);
  const memos = useSelector((state) => state.memo);
  const memo = memos.find((item) => item.id === now);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus(), [now]);

  const formatDateAndTime = (timeString) => {
    const date = new Date(timeString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const amOrPm = hours >= 12 ? "오후" : "오전";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${year}년 ${month}월 ${day}일, ${amOrPm} ${formattedHours}:${formattedMinutes}`;
  };

  const handleChange = (e) => {
    dispatch({
      type: MEMO_WRITE,
      id: now,
      content: e.target.value,
    });
  };

  return (
    <StyleArticle>
      <span>{formatDateAndTime(memo.time)}</span>
      <textarea
        onChange={handleChange}
        value={memo.content}
        ref={inputRef}
      ></textarea>
    </StyleArticle>
  );
}
