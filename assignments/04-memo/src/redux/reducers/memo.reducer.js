export const MEMO_DEL = "memo/MEMO_DEL";
export const MEMO_WRITE = "memo/MEMO_WRITE";
export const MEMO_ADD = "memo/MEMO_ADD";

const initialData = [
  {
    id: "25600f72-56b4-41a7-a9c2-47358580e2f8",
    time: new Date().toString(),
    content: "",
  },
];

function memoReducer(prevData = initialData, action) {
  switch (action.type) {
    case MEMO_DEL:
      return prevData.filter((memo) => memo.id !== action.id);

    case MEMO_ADD:
      return [action.post, ...prevData];

    case MEMO_WRITE:
      return prevData.map((memo) =>
        memo.id === action.id ? { ...memo, content: action.content } : memo
      );

    default:
      return prevData;
  }
}

export default memoReducer;
