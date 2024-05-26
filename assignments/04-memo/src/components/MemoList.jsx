import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Memo from "./Memo";

const StyleMemoList = styled.ul`
  padding: 20px 12px;
  height: calc(100% - 48px);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  row-gap: 8px;
`;
export default function MemoList() {
  const memos = useSelector((state) => state.memo);
  return (
    <StyleMemoList>
      {memos.map((memo) => (
        <Memo
          key={memo.id}
          id={memo.id}
          content={memo.content}
          time={memo.time}
        />
      ))}
    </StyleMemoList>
  );
}
