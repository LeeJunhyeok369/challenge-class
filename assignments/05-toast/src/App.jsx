import "./reset.css";

function App() {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="w-80 flex flex-col gap-y-6 items-center justify-center">
        <h1 className="text-2xl font-semibold text-center">토스트 컨트롤러</h1>
        <div className="flex flex-col gap-y-4 items-start w-full">
          <div className="flex flex-col gap-y-1.5 items-start w-full">
            <label type="text" className="text-sm font-medium">
              awd
            </label>
            <input
              type="text"
              className="border px-4 py-3 rounded-md w-full"
              value="AWdaw"
            />
          </div>
          <div className="flex flex-col gap-y-1.5 items-start w-full">
            <label type="text" className="text-sm font-medium">
              awd
            </label>
            <input type="text" className="border px-4 py-3 rounded-md w-full" />
          </div>
          <div className="flex flex-col gap-y-1.5 items-start w-full">
            <label type="text" className="text-sm font-medium">
              awd
            </label>
            <input type="text" className="border px-4 py-3 rounded-md w-full" />
          </div>
        </div>
        <button className="text-center text-white bg-black w-full py-3.5 text-[15px] rounded-md font-medium hover:bg-black/80 transition active:bg-black/70 cursor-pointer">
          토스트 띄우기
        </button>
      </div>
    </div>
  );
}

export default App;
