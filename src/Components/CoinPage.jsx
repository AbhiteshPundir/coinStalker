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
    const [search, setSearch]=useState('')
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
        <div className='flex items-center justify-center pt-6 pb-5 ml-7'>
          <div className='w-52 flex items-center mr-5'>
            <Typography className='text-white'>INR</Typography>
              <Switch color='secondary' onChange={switchHandler} value={isusd}/>
            <Typography className='text-white'>USD</Typography>
          </div>
          <div className="search-bar">
            <input className="rounded-xl text-center h-8 w-52 border-black border-2 bg-slate-200" type="text" 
            placeholder='Search Your Coins ' 
            onChange={(e)=>setSearch(e.target.value)}/>
           </div>
        </div>
        <div>
        {
          coins.filter((data)=>{
            if(data == ''){
             return data
            } else if(data.name.toLowerCase().includes(search.toLowerCase())){
                return data
            }
         }).map((item)=>{
            return(
             <CoinCard key={item.id} coindata={item} id={item.id} currencysymbol={currencySymbol}/> 
             )          
            })
        }
        </div>
      </>
    )
  }

  const CoinCard=({coindata,id,currencysymbol}) => {
    const profit = coindata.price_change_percentage_24h>0;
    return(
      <Link to={`/coins/${id}`} className='rounded-2xl text-black hover:bg-slate-600 duration-300 decoration-none flex items-center justify-evenly py-5'>
        <div className="">
            <img className="h-24" src={coindata.image} alt="" />
        </div>
        <div className="text-white w-2 font-semibold">
        {coindata.name}
        </div>
        <div className="text-white w-2 font-semibold">
        {currencysymbol}{coindata.current_price.toFixed(2)}
        </div>
        <div className={`w-2 font-bold ${profit?'text-green-600':'text-red-500'}`}>
        {profit? '+'+coindata.price_change_percentage_24h.toFixed(2):coindata.price_change_percentage_24h.toFixed(2)}
        </div>
      </Link>
    )
  }
export default Coins