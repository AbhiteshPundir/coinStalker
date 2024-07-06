import { useState, useEffect } from 'react'
import { Baseurl } from './Baseurl'
import Loader from './Loader'
import axios from 'axios'
import Switch from '@mui/material/Switch';
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";

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
        <div className='flex items-center justify-center gap-8 pt-6 pb-5 lg:ml-7'>
          <div className='w-fit flex items-center'>
            <Typography className='text-white'>INR</Typography>
              <Switch color='secondary' onChange={switchHandler} value={isusd}/>
            <Typography className='text-white'>USD</Typography>
          </div>
          <div className="rounded-md h-8 w-40 lg:w-52 border-black border-2 text-left bg-white pl-3 flex items-center justify-between px-2">
            <input className="rounded-md bg-transparent w-28 lg:w-52 text-sm lg:text-base" type="text" 
            placeholder='Search Your Coins ' 
            onChange={(e)=>setSearch(e.target.value)}/>
            <CiSearch color='gray' size={17}/>
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
      <Link to={`/coins/${id}`} className='rounded-2xl text-black hover:bg-slate-600 hover:-translate-y-1 duration-200 decoration-none flex items-center justify-evenly py-5'>
        <div className="">
            <img className="h-16 lg:h-24" src={coindata.image} alt="" />
        </div>
        <div className="text-white lg:w-2 font-semibold">
        {coindata.name}
        </div>
        <div className="text-white lg:w-2 font-semibold">
        {currencysymbol}{coindata.current_price.toFixed(2)}
        </div>
        <div className={`lg:w-2 font-bold ${profit?'text-green-600':'text-red-500'}`}>
        {profit? '+'+coindata.price_change_percentage_24h.toFixed(2):coindata.price_change_percentage_24h.toFixed(2)}
        </div>
      </Link>
    )
  }
export default Coins