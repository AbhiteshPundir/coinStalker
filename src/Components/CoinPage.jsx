import { useState, useEffect } from 'react'
import { Baseurl } from './Baseurl'
import Loader from './Loader'
import axios from 'axios'
import Switch from '@mui/material/Switch';
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom';

const Coins= () => {
    const [loading, setLoading] = useState(true)
    const [coins, setCoins] = useState([])
    const [isusd, setIsusd] = useState(false)
    const currencySymbol = !isusd ? '₹' : '$'
    useEffect(()=>{
      const getCoinsData = async(isusd)=>{
          const {data} = await axios.get(`${Baseurl}/coins/markets?vs_currency=${isusd?'usd':'inr'}`)
          console.log(data)
          setCoins(data)
          setLoading(false)
      }
        getCoinsData(isusd)
    },[isusd])
    
    const switchHandler = (e) =>{
          setIsusd(e.target.checked)
    }  

    return (
      loading? <Loader/>:
      <>
        <div className='flex items-center justify-center pt-6'>
          <Typography className='text-white'>INR</Typography>
            <Switch color='secondary' onChange={switchHandler} value={isusd}/>
          <Typography className='text-white'>USD</Typography>
        </div>
        <div>
        {
          coins.map((item,index)=>{
            return(
             <CoinCard key={index} coindata={item} id={item.id} i={index} currencysymbol={currencySymbol}/> 
             )          
            })
        }
        </div>
      </>
    )
  }

  const CoinCard=({coindata,id,currencysymbol,i,key}) => {
    const profit = coindata.price_change_percentage_24h>0;
    return(
      <Link to={`/coins/${id}`} className='text-black decoration-none flex items-center justify-evenly mt-10'>
        <div className="">
            <img className="h-24" src={coindata.image} alt="" />
        </div>
        <div className="text-white w-2 font-semibold">
        {coindata.name}
        </div>
        <div className="text-white w-2 font-semibold">
        {currencysymbol}{coindata.current_price.toFixed(2)}
        </div>
        <div className={`text-white w-2 font-bold ${profit?'text-green-600':'text-red-500'}`}>
        {profit? '+'+coindata.price_change_percentage_24h.toFixed(2):coindata.price_change_percentage_24h.toFixed(2)}
        </div>
      </Link>
    )
  }
export default Coins