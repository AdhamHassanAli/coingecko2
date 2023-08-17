import React,{useState,useEffect} from "react";
import axios from "axios";
import {Routes, Route} from 'react-router-dom'
import Coins from "./Components/Coins";
import Navbar from "./Components/Navbar";
import Coin from'./routes/Coin'
function App() {
  const [coins, setcoins] = useState([])
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en'
  useEffect(()=>{
    axios.get(url).then((res)=>{
      setcoins(res.data)
      console.log(res.data[0])
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  return (
 <>
 <Navbar/>
 <Routes>
  <Route path="/" element={<Coins coins={coins}/>}/>
  <Route path="/coin" element={<Coin/>}>
     <Route path=":coinid" element={<Coin/>}/>
  </Route>

 </Routes>

 </>
  );
}

export default App;
