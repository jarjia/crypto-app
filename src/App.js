import React, {useState, useEffect} from "react";
import axios from 'axios'
import './App.css'
import Coin from "./Coin";

const App = () => {
  const [coin, setcoin] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then((res) => {
      setcoin(res.data)
    }).catch(error => {
      console.log(error);
    })
  }, [])

  console.log(coin);
  return (
    <div className="wrapper">
      <div className="search-wrapper">
        <input type='text' className="input" value={search} onChange={e => setSearch(e.target.value)} placeholder="Provide the coin name"/>
      </div>
      <div className="coin-wrapper">
        {coin.filter((value) => {
          if(search === '') {
            return value
          }else if(value.name.toLowerCase().includes(search.toLowerCase())) {
            return value
          }
        }).map(item => {
          return <Coin coin={item} key={item.id}/>
        })}
      </div>
    </div>
  );
}

export default App;
