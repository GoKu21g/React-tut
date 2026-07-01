import { useState, useCallback, useEffect, useRef} from "react";

function App() {
  const [len, setLen] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPass] = useState("");

  const passref = useRef(null);

  const passwordGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (num) {
      str += "0123456789";
    }

    if (char) {
      str += "!@#$%^&*?/";
    }

    for (let i = 0; i < len; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomIndex);
    }

    setPass(pass);
  }, [len, num, char]);

  const copytoclip = useCallback(async () => {
    passref.current?.select()
    passref.current?.setSelectionRange(0, password.length);
    await navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => { 
    passwordGen();
  }, [passwordGen])

  return (
    <div className="w-full max-w-md mx-auto mt-8 rounded-lg bg-slate-800 px-4 py-5 shadow-md">
      <h1 className="mb-4 text-center text-2xl text-white">
        Password Generator
      </h1>

      <div className="mb-4 flex overflow-hidden rounded-lg">
        <input
          type="text"
          value={password}
          placeholder="Password"
          readOnly
          ref={passref}
          className="w-full bg-white px-3 py-2 text-black outline-none"
        />

        <button onClick={copytoclip} className="bg-blue-600 px-4 text-white hover:bg-green-400 hover:scale-110 transition-all duration-500 ease-in-out">
          Copy
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <input
            type="range"
            min={8}
            max={20}
            value={len}
            className="cursor-pointer"
            onChange={(e) => setLen(Number(e.target.value))}
          />

          <label className="whitespace-nowrap text-orange-400">
            Length: {len}
          </label>
        </div>

        <div className="flex items-center gap-1">
          <input
            type="checkbox"
            id="numberInput"
            checked={num}
            onChange={() => setNum((prev) => !prev)}
          />

          <label htmlFor="numberInput" className="text-orange-400">
            Numbers
          </label>
        </div>

        <div className="flex items-center gap-1">
          <input
            type="checkbox"
            id="charInput"
            checked={char}
            onChange={() => setChar((prev) => !prev)}
          />

          <label htmlFor="charInput" className="text-orange-400">
            Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;