import { useEffect, useState } from "react";
import { InputBox } from "./components";
import heroImg from "./assets/589.jpg";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const { data: currencyInfo, loading, error } = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  // live conversion — no button needed, but keep the button as a nice affordance
  useEffect(() => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(Number((amount * currencyInfo[to]).toFixed(4)));
    }
  }, [amount, to, currencyInfo]);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const rate = currencyInfo?.[to];

  return (
    <div
      className="w-full min-h-screen flex justify-center items-center bg-cover bg-no-repeat px-4"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-md mx-auto rounded-2xl p-6 backdrop-blur-md bg-white/40 shadow-xl border border-white/50">
        <h1 className="text-white text-2xl font-bold text-center mb-4 drop-shadow">
          Currency Converter
        </h1>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="w-full mb-1">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              selectCurrency={from}
              onCurrencyChange={setFrom}
              onAmountChange={setAmount}
            />
          </div>

          <div className="relative w-full h-0.5 flex justify-center">
            <button
              type="button"
              onClick={swap}
              title="Swap currencies"
              className="absolute -translate-y-1/2 border-2 border-white rounded-full bg-blue-600 hover:bg-blue-700 text-white w-9 h-9 flex items-center justify-center shadow-md transition-transform hover:rotate-180 duration-300"
            >
              ⇅
            </button>
          </div>

          <div className="w-full mt-1 mb-3">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              selectCurrency={to}
              onCurrencyChange={setTo}
              amountDisable
            />
          </div>

          <div className="text-center text-white text-sm mb-3 h-5 drop-shadow">
            {loading && "Fetching latest rates..."}
            {!loading && error && (
              <span className="text-red-200 font-medium">⚠ {error}</span>
            )}
            {!loading && !error && rate && (
              <span>
                1 {from.toUpperCase()} = {rate.toFixed(4)} {to.toUpperCase()}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold px-4 py-3 rounded-xl transition-colors"
          >
            {loading ? "Loading..." : `Convert ${from.toUpperCase()} to ${to.toUpperCase()}`}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;