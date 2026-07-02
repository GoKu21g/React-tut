import { useEffect, useState } from "react";

const FALLBACK_CURRENCIES = ["usd", "eur", "gbp", "inr", "jpy", "aud", "cad", "cny", "chf", "sgd"];

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!currency) return;
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetch(`https://open.er-api.com/v6/latest/${currency.toUpperCase()}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((res) => {
        if (cancelled) return;
        if (res.result !== "success" || !res.rates) {
          throw new Error("Unexpected API response");
        }
        // normalize keys to lowercase so they match the lowercase
        // currency codes used everywhere else in the app (from/to state)
        const lowerRates = {};
        Object.keys(res.rates).forEach((key) => {
          lowerRates[key.toLowerCase()] = res.rates[key];
        });
        setData(lowerRates);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error("Currency fetch failed:", err);
        setError(err.message);
        // fallback so the UI isn't stuck empty
        const fallback = {};
        FALLBACK_CURRENCIES.forEach((c) => (fallback[c.toLowerCase()] = 1));
        setData(fallback);
      })
      .finally(() => !cancelled && setLoading(false));

    return () => {
      cancelled = true;
    };
  }, [currency]);

  return { data, loading, error };
}

export default useCurrencyInfo;