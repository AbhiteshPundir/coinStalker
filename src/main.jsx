import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import CoinPage from './Components/CoinPage.jsx'
import Homepage from './Components/Homepage.jsx'
import Layout from './Layout.jsx'
import Exchanges from './Components/Exchanges.jsx'
import './index.css'
import CoinDetails from './Components/CoinDetails.jsx'

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Homepage/>}/>
      <Route path='coins/:id' element={<CoinDetails/>}/>
      <Route path='coinsPage' element={<CoinPage/>}/>
      <Route path='exchanges' element={<Exchanges/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <div className='{classes.main}'>
    <RouterProvider router={router}/>
    </div>
  //</React.StrictMode>,
)
