export const MEMO_ID = "now/MEMO_ID";

const initialId = {
  id: "25600f72-56b4-41a7-a9c2-47358580e2f8",
};

function nowReducer(prevId = initialId, action) {
  switch (action.type) {
    case MEMO_ID:
      return { ...prevId, id: action.id };
    default:
      return prevId;
  }
}

export default nowReducer;
