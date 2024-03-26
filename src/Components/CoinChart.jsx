import { useState , useEffect } from 'react'
import axios from 'axios'
import {Baseurl} from './Baseurl.js'
import {useParams} from 'react-router-dom'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import Loader from './Loader';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
const CoinChart = ({currency}) => {
    const [chartData,setChartData] = useState([])
    const { id } = useParams()
    const [days, setDays]=useState(1)
    const CoinChartData=async()=>{
        try{
        const { data } =await axios.get(`${Baseurl}/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`)
        setChartData(data.prices)
        console.log(chartData);
        }catch(err){console.log(err)}
    }

    useEffect(()=>{
        CoinChartData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[currency,id,days])

    const myData = {
      labels: chartData.map((value)=>{
       const date = new Date(value[0])
       const time = date.getHours()> 12 
       ? `${date.getHours() -12} : ${date.getMinutes()} PM` 
       : `${date.getHours()} : ${date.getMinutes()} AM`
        return days===1 ? time : date.toLocaleDateString() 
      }), 
      datasets:[
          {
              label: ` Price in Past Days ${days} in ${currency} `,
              data: chartData.map((value)=>value[1]),
              borderColor: 'orange',
              borderWidth: '3' 
          }
      ]
      
    }

  return (
    <>
     {
      chartData.length === 0 ? ( <Loader/>) : (

        <div className='flex-col items-start'>
        {/* <Line data={myData} />  */}
        <Line className="m-5 ml-14 " data={myData} options={{
          elements:{
              point:{
                  radius:1, 
              }
          }
        }} style={{marginTop:"5rem", width:"60rem"}} />
  
        <div className='flex-wrap mb-5'>
               <button className="rounded-lg bg-purple-700 hover:bg-purple-500 hover:border-white border-black border-2 w-20 h-8 font-medium" onClick={()=>setDays(1)} >24 hours</button>
               <button className="rounded-lg bg-purple-700 hover:bg-purple-500 hover:border-white border-black border-2 w-20 h-8 font-medium" onClick={()=>setDays(30)}>1 Month</button>
               <button className="rounded-lg bg-purple-700 hover:bg-purple-500 hover:border-white border-black border-2 w-20 h-8 font-medium" onClick={()=>setDays(365)}>1 Year</button>
             </div>
      </div>
      )
     }
     </>
  )
}
export default CoinChart
