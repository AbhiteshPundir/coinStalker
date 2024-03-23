import { useEffect, useState } from "react"
import axios from 'axios'
import { Baseurl } from "./Baseurl"
import Loader from "./Loader"
const Exchanges = () => {
    const [loading, setLoading] = useState(true)
    const [exchanges, setExchanges] = useState([])
    
    useEffect(()=>{
        const getExchangeData = async()=>{
            const {data} = await axios.get(`${Baseurl}/exchanges`)
            console.log(data)
            setExchanges(data)
            setLoading(false)
        }
        getExchangeData()
    })
  return (
      loading? <Loader/>:
        <>  
               
            <div className="flex items-center justify-evenly mt-10 text-purple-400 font-bold text-2xl underline underline-offset-8">
                <div className="ml-2 w-16">
                    Logo
                </div>
                <div className="w-1 ">
                Name
                </div>
                <div className="w-1 ">
                Volume(24h)
                </div>
                <div className="w-1 ">
                Rank
                </div>
            </div>
            {
                exchanges.map((item,index)=>{
                return(
                    <div key={index} className="flex items-center justify-evenly mt-10">
                        <div className="">
                            <img className="h-20" src={item.image} alt="" />
                        </div>
                        <div className="w-1 text-white font-semibold">
                        {item.name}
                        </div>
                        <div className="w-1 text-white font-semibold">
                        {item.trade_volume_24h_btc.toFixed(2)}
                        </div>
                        <div className="w-1 text-white font-semibold">
                        {item.trust_score_rank}
                        </div>
                    </div>
                )
                })
            }
        </>
    )}
export default Exchanges