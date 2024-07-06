import { useEffect, useState } from 'react'
import { Baseurl } from './Baseurl'
import Loader from './Loader'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi"
import { IoPulseOutline } from "react-icons/io5"
import CoinChart from './CoinChart'

const CoinDetails = () => {
  const [coin, setCoin]=useState([])
  const [loading, setLoading]=useState(true)
  const {id} = useParams()
  const [currency, setCurrency]=useState('inr')
  const currencySymbol = currency ==='inr' ? '₹': '$'
  const profit = coin.market_data?.price_change_percentage_24h > 0   
    useEffect(()=>{
       const getCoin =async()=>{
         try {
           const {data} =await axios.get(`${Baseurl}/coins/${id}`)
          // console.log(data) 
           setCoin(data)
           setLoading(false)
         } catch (error) {
          console.log(error)
          setLoading(false)
         }
       }
       getCoin() 
    },[id])
  return (
  <>
  {
    loading ? <Loader/> : <> 
         <div className='text-white flex pl-32'> 
           <div className='w-2/4 flex-col justify-center pt-6'>
            <div className='w-24 flex justify-evenly items-center'>
             <button className="rounded-md bg-orange-700 hover:border-white border-2 border-black w-10 mt-6" onClick={()=>setCurrency('inr')} >inr</button>
             <button className="rounded-md bg-orange-700 hover:border-white w-10 mt-6 border-2 border-black" onClick={()=>setCurrency('usd')}>usd</button>
            </div>
            <div className="py-4">
            {coin.last_updated}
            </div>
            <div className="coin-image">
              <img className='h-40' src={coin.image.large} alt="" />
            </div>
            <div className="items-center font-bold text-3xl ">
            {coin.name}
            </div>
            <div className="coin-price">
            {currencySymbol}  {coin.market_data.current_price[currency]}
            </div>
            <div className="flex items-center">
            {profit ? <BiSolidUpArrow color='green' /> : <BiSolidDownArrow color='red' />  }
              {coin.market_data.price_change_percentage_24h.toFixed(3)} % 
            </div>
            <div className="flex items-center text-2xl font-bold">
              <IoPulseOutline color='orange' /> 
              #{coin.market_cap_rank}
            </div>
            <div className='coin-desc'>
              <p>     {coin.description['en'].split('.')[0]} </p>
            </div>
          </div>
            <CoinChart currency={currency} />
        </div>
    </> 
  }
  
  </>
  )
}

export default CoinDetails