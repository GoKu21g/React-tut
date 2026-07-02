import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white/90 p-4 rounded-xl text-sm flex shadow-sm ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-gray-500 mb-1 inline-block font-medium">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5 text-lg font-semibold text-gray-800 disabled:text-gray-500"
          type="number"
          min="0"
          placeholder="0"
          disabled={amountDisable}
          value={amount === 0 ? "" : amount}
          onKeyDown={(e) => {
            if (["e", "E", "+", "-"].includes(e.key)) e.preventDefault();
          }}
          onChange={(e) => {
            const val = e.target.value;
            onAmountChange && onAmountChange(val === "" ? 0 : Number(val));
          }}
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-gray-500 mb-1 w-full font-medium">Currency</p>
        <select
          className="rounded-lg px-2 py-1.5 bg-gray-100 cursor-pointer outline-none font-semibold disabled:cursor-not-allowed"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable || currencyOptions.length === 0}
        >
          {currencyOptions.length === 0 && <option>Loading...</option>}
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
