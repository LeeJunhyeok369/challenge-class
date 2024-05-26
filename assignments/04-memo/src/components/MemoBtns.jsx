import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { MEMO_ADD, MEMO_DEL } from "../redux/reducers/memo.reducer";
import { MEMO_ID } from "../redux/reducers/now.reducer";

const Btns = styled.header`
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(230, 230, 230);

  button {
    all: unset;
    font-size: 13px;
    font-weight: 500;
    background-color: rgb(255, 255, 255);
    color: rgb(128, 128, 128);
    transition: all 120ms ease 0s;
    padding: 4px 8px;
    line-height: 1.15;
  }

  button:hover {
    color: rgb(18, 18, 18);
    font-weight: 600;
    cursor: pointer;
  }
`;

export default function MemoBtns() {
  const dispatch = useDispatch();
  const now = useSelector((state) => state.now.id);
  const memos = useSelector((state) => state.memo);

  const handleMemoAdd = () => {
    const newID = uuidv4();

    dispatch({
      type: MEMO_ADD,
      post: {
        id: newID,
        time: new Date().toString(),
        content: "",
      },
    });

    dispatch({
      type: MEMO_ID,
      id: newID,
    });
  };
  const handleMemoDel = () => {
    if (memos.length !== 1) {
      dispatch({
        type: MEMO_DEL,
        id: now,
      });

      dispatch({
        type: MEMO_ID,
        id: memos.filter((item) => item.id !== now)[0].id,
      });
    } else {
      alert("하나 이상의 메모지는 남겨두어야 합니다.");
    }
  };

  return (
    <Btns>
      <button onClick={handleMemoAdd}>새 메모 작성하기</button>
      <button onClick={handleMemoDel}>삭제</button>
    </Btns>
  );
}
