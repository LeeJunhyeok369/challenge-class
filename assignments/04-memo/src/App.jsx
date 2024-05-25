import { styled } from "styled-components";
import "./reset.css";

const Wrap = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Memo = styled.main`
  height: 500px;
  max-width: 1024px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(230, 230, 230);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

const StyleAside = styled.aside`
  min-width: 240px;
  height: 100%;
  border-right: 1px solid rgb(230, 230, 230);
  > header {
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(230, 230, 230);
  }

  > header button {
    all: unset;
    font-size: 13px;
    font-weight: 500;
    background-color: rgb(255, 255, 255);
    color: rgb(128, 128, 128);
    transition: all 120ms ease 0s;
    padding: 4px 8px;
    line-height: 1.15;
  }

  > header button:hover {
    color: rgb(18, 18, 18);
    font-weight: 600;
    cursor: pointer;
  }
  > ul {
    padding: 20px 12px;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
  }

  > ul li {
    height: 56px;
    border-radius: 4px;
    background-color: rgb(255, 224, 127);
    width: 100%;
    padding: 12px 24px;
    cursor: pointer;
  }
  > ul li p {
    margin: 0px 0px 2px;
    font-size: 13px;
    font-weight: 700;
    text-overflow: ellipsis;
    overflow-x: hidden;
    white-space: nowrap;
  }
  > ul li span {
    font-size: 12px;
    color: rgb(64, 64, 64);
  }
`;

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

function App() {
  return (
    <Wrap>
      <Memo>
        <StyleAside>
          <header>
            <button>새 메모 작성하기</button>
            <button>삭제</button>
          </header>
          <ul>
            <li>
              <p>새로운 메모</p>
              <span>오전 6:49</span>
            </li>
            <li>
              <p>새로운 메모</p>
              <span>오전 6:49</span>
            </li>
            <li>
              <p>새로운 메모</p>
              <span>오전 6:49</span>
            </li>
          </ul>
        </StyleAside>
        <StyleArticle>
          <span>2024년 5월 26일, 오전 6:53</span>
          <textarea name="" id=""></textarea>
        </StyleArticle>
      </Memo>
    </Wrap>
  );
}

export default App;
