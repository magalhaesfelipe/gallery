import { useEffect, useState } from "react";
import TrackTable from "./components/trackTable";

function App() {
  const [advice, setAdvice] = useState<string>();

  const getSomeAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  };

  useEffect(() => {
    getSomeAdvice();
  }, []);

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-y-12 bg-emerald-700">
      <TrackTable />

      {/* <h1 className="bg-blue-700 text-5xl font-extrabold text-sky-200/15">
        Advice generator!
      </h1>
      <h3 className="text-3xl font-bold text-blue-50">{advice}</h3>
      <div className="bg-red-900 text-red-400">
        <p> This is the first line!</p>
        <br />
        <p> And this is the second line!</p>
      </div>
      <button
        onClick={getSomeAdvice}
        className="cursor-pointer rounded-sm bg-purple-800 p-5 font-semibold text-amber-50 transition duration-300 hover:bg-amber-400"
      >
        get advice
      </button> */}
    </div>
  );
}

export default App;
