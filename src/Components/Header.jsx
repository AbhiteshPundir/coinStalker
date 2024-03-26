// import { Container, Toolbar, Typography } from "@mui/material";
// import AppBar from "@mui/material/AppBar";
import { BiSolidBinoculars } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>    
      <header className="shadow-sm shadow-slate-800 sticky z-50 top-0">
            <div className="flex flex-wrap mx-auto h-24 justify-between items-center bg-purple-800 lg:px-28 py-1 shadow-xl border-slate-700">
            
                <Link to="/" className="relative flex items-center ">
                <BiSolidBinoculars className="flex-wrap align-middle" color="white" size={45}/>
                &nbsp;
                <div className="font-bold text-4xl py-5 mr-8 hover:shadow-md">CoinStalker</div>
                </Link>
                
                <ul className="flex flex-wrap justify-center flex-col mr-8 mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <NavLink
                        to={""}
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-white": "text-black hover:text-gray-300" } text-2xl font-bold border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink
                        to={"/coinsPage"}
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-white": "text-black hover:text-gray-300"} border-b text-2xl font-bold border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0`
                            }
                        >
                            Coins
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to={"/exchanges"}
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-white": "text-black hover:text-gray-300"} border-b text-2xl font-bold border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0`
                            }
                        >
                            Exchanges
                        </NavLink>
                    </li>        
                </ul>
                <div className="flex items-center lg:order-2">
                    <Link
                        to="/login"
                        className="shadow-sm shadow-black bg-purple-900 border-2 border-purple-900 text-white font-semibold hover:bg-purple-700 hover:border-1  focus:ring-4 focus:ring-gray-40000 rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition-colors duration-300"
                    >
                        Log in
                    </Link> 
                </div>    
            </div>
        </header>
    </>
  )
}
export default Header

{/* <AppBar position="static"  color="secondary">
<Container>
  <Toolbar>
    <Typography variant="h5" >CoinStalker</Typography>
    &nbsp;<BiSolidBinoculars color="white" size={35}/>


  </Toolbar>
</Container>
</AppBar> */}