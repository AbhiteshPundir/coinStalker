// import { Container, Toolbar, Typography } from "@mui/material";
// import AppBar from "@mui/material/AppBar";
import { BiSolidBinoculars } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";
import { useState } from "react"
  

function Header() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>    
      <header className="shadow-sm shadow-slate-800 sticky z-50 top-0">
            <div className="flex mx-auto h-24  lg:p-0 justify-around lg:justify-evenly items-center bg-purple-800 shadow-xl border-slate-700 ">
                <Link to="/" className="relative flex items-center ">
                    <BiSolidBinoculars className="flex-wrap align-middle" color="white" size={45}/>
                    &nbsp;
                    <div className="font-extrabold text-2xl lg:text-4xl py-5 mr-8 hover:shadow-md font-display">CoinStalker</div>
                </Link>
                <div className="hidden lg:block px-11 w-1/2">
                <div className="flex justify-evenly">
                    <div>
                        <NavLink
                        to={""}
                            className={({isActive}) =>
                                `block font-display py-2 pr-4 pl-3 duration-200 ${isActive? "text-white": "text-black hover:text-indigo-400" } text-2xl font-bold border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0`
                            }
                        >
                            Home
                        </NavLink>
                    </div>
                            
                    <div>
                        <NavLink
                        to={"/coinsPage"}
                            className={({isActive}) =>
                                `block font-display py-2 pr-4 pl-3 duration-300 ${isActive? "text-white": "text-black hover:text-indigo-400"} border-b text-2xl font-bold border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0`
                            }
                        >
                            Coins
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                        to={"/exchanges"}
                            className={({isActive}) =>
                                `block font-display py-2 pr-4 pl-3 duration-300 ${isActive? "text-white": "text-black hover:text-indigo-400"} border-b text-2xl font-bold border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0`
                            }
                        >
                            Exchanges
                        </NavLink>
                    </div>
                </div>
                </div>
                
                <div className="hidden lg:block w-fit">
                    <button className="flex items-center lg:order-2">
                        <Link
                            to="/login"
                            className="flex items-center shadow-sm shadow-black bg-purple-900 border-2 border-purple-900 text-white font-semibold hover:bg-violet-700 hover:border-1  focus:ring-4 focus:ring-gray-40000 rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition duration-200 transform hover:-translate-y-1 hover:shadow-lg"
                        >
                            LOGIN&nbsp;
                            <span className="material-symbols-outlined">
                                login
                            </span>
                        </Link> 
                    </button>
                </div>

                <button onClick={toggleMenu} className='lg:hidden bg-zinc-900 rounded-3xl w-12 h-9 text-white flex items-center justify-center mr-5' >
                    {isOpen?<TfiClose size={18}/> : <IoMenu size={22}/>}
                </button>
                <div className={`p-8 h-screen w-screen absolute top-20 ${isOpen?`block`:`hidden`} bg-purple-800 flex flex-col gap-40`}>
                    <div className='flex flex-col gap-5 text-4xl tracking-wider font-semibold text-zinc-100'>
                    <NavLink to={'/'} onClick={toggleMenu}>
                        Home
                    </NavLink>
                    <NavLink to={'/coinsPage'} onClick={toggleMenu}>
                        Coins
                    </NavLink>
                    <NavLink to={'/exchanges'} onClick={toggleMenu}>
                        Exchanges
                    </NavLink>
                    </div>
                    <div className='flex justify-end gap-3'>
                        <button className="flex items-center lg:order-2">
                            <Link
                                to="/login"
                                className="flex items-center shadow-sm shadow-black bg-purple-900 border-2 border-purple-900 text-white font-semibold hover:bg-violet-700 hover:border-1  focus:ring-4 focus:ring-gray-40000 rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition duration-200 transform hover:-translate-y-1 hover:shadow-lg"
                            >
                                LOGIN&nbsp;
                                <span className="material-symbols-outlined">
                                    login
                                </span>
                            </Link> 
                        </button>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}
export default Header