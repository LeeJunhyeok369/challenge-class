import { styled } from "styled-components";
import MemoBtns from "./components/MemoBtns";
import MemoInput from "./components/MemoInput";
import MemoList from "./components/MemoList";
import "./reset.css";

const Wrap = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const MemoPad = styled.main`
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
  max-width: 240px;
  min-width: 240px;
  height: 100%;
  border-right: 1px solid rgb(230, 230, 230);
  overflow-y: hidden;
`;

function App() {
  return (
    <Wrap>
      <MemoPad>
        <StyleAside>
          <MemoBtns />
          <MemoList />
        </StyleAside>
        <MemoInput />
      </MemoPad>
    </Wrap>
  );
}

export default App;
