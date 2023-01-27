import { useState, useEffect } from "react";
import styles from "./App.module.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [selectedCoinPrice, setSelectedCoinPrice] = useState();
  const [submited, setSubmit] = useState(false);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const coinSelect = (event) => {
    const myCoin = coins[event.target.selectedIndex];
    setSelectedCoinPrice(myCoin.quotes.USD.price);
    console.log(myCoin.name);
  };
  const calcUSD = (event) => {
    event.preventDefault();
    console.log(selectedCoinPrice / money);
    setSubmit(true);
  };
  const onChangeMoney = (event) => {
    setMoney(event.target.value);
  };
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={coinSelect}>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <form>
        <input
          value={money}
          onChange={onChangeMoney}
          type="number"
          placeholder="In my pocket"
        />
        <button onClick={calcUSD}>Calculate</button>
      </form>
      {submited ? <h2>You can buy {selectedCoinPrice / money} coins</h2> : null}
    </div>
  );
}

export default App;
