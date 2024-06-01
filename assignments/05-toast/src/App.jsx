import { useToast } from "./Hooks/toast.hook";
import Input from "./components/Input";
import "./reset.css";
function App() {
  const addTost = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    const time = e.target.time.value ? Number(e.target.time.value) : 2000;

    addTost(title, content, time);
  };

  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="w-80 flex flex-col gap-y-6 items-center justify-center">
        <h1 className="text-2xl font-semibold text-center">토스트 컨트롤러</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-4 items-start w-full"
        >
          <Input
            value="Scheduled: Catch up"
            label="제목 (필수)"
            name="title"
            isRequired={true}
          />
          <Input
            value="Friday, February 10, 2023 at 5:57 PM"
            label="내용 (필수)"
            name="content"
            isRequired={true}
          />
          <Input
            value={2000}
            type="number"
            label="노출 시간(ms) (선택)"
            name="time"
          />
          <button
            type="submit"
            className="text-center text-white bg-black w-full py-3.5 mt-2 text-[15px] rounded-md font-medium hover:bg-black/80 transition active:bg-black/70 cursor-pointer"
          >
            토스트 띄우기
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
