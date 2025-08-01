import { useEffect, useState } from "react";

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
    <div className="bg-purple-900 flex gap-y-12 flex-col  w-full h-full items-center justify-center">
      <h1 className="text-4xl font-bold">{advice}</h1>
      <button
        onClick={getSomeAdvice}
        className="bg-purple-700 cursor-pointer p-5 rounded-sm font-semibold text-amber-50"
      >
        get advice
      </button>
    </div>
  );
}

export default App;
