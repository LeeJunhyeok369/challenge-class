import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { MEMO_ID } from "../redux/reducers/now.reducer";

const StyleMemo = styled.li`
  height: 56px;
  border-radius: 4px;
  background-color: #ffffff;
  width: 100%;
  padding: 12px 24px;
  cursor: pointer;
  > p {
    margin: 0px 0px 2px;
    font-size: 13px;
    font-weight: 700;
    text-overflow: ellipsis;
    overflow-x: hidden;
    white-space: nowrap;
  }
  > span {
    font-size: 12px;
    color: rgb(64, 64, 64);
  }
`;

export default function Memo({ id, content, time }) {
  const dispatch = useDispatch();
  const now = useSelector((state) => state.now.id);

  const formatTime = (timeString) => {
    const options = {
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    };
    const formattedTime = new Date(timeString).toLocaleString("ko-KR", options);
    return formattedTime;
  };

  const handleNow = () => {
    dispatch({
      type: MEMO_ID,
      id: id,
    });
  };

  return (
    <StyleMemo
      onClick={handleNow}
      style={{
        backgroundColor: now === id ? "rgb(255, 224, 127)" : "transparent",
      }}
    >
      <p>{content ? content : "새로운 메모"}</p>
      <span>{formatTime(time)}</span>
    </StyleMemo>
  );
}
