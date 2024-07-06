import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebase.js'
import { useEffect, useState } from 'react'

function Button({value}) {
    return (
      <button 
        className="mt-6 ] transition-all block py-3 px-4 w-full text-white font-bold rounded cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-400 hover:from-indigo-700 hover:to-purple-500 focus:bg-indigo-900 transform hover:-translate-y-1 hover:shadow-lg">
        {value}
    </button>
    )
  }
  
  function Input(prop) {
    const {label,...rest} = prop
    return (
      <label className="text-gray-500 block mt-3">{label}
        <input
          {...rest}
          className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100"/>
      </label>
    )
  }
  
  function LoginForm() {

    const auth = getAuth(app);
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

   
    

    const handleSignIn = async (e) => {
      e.preventDefault();
  
      console.log(email);
      console.log(password);
    }
    const createUser= () =>{
      createUserWithEmailAndPassword(auth,email,password).then(value=>console.log(value));
    }
     
    return (

      <div className="bg-gray-300 flex justify-center items-center h-fit w-screen py-20">
        <div className=" border-t-8 rounded-sm border-indigo-600 bg-white p-12 shadow-2xl w-96">
          <h1 className="font-bold text-center block text-2xl">Log In</h1>
          <form onSubmit={handleSignIn}>
            <Input type="email" onChange={(e)=>setEmail(e.currentTarget.value)} id="email" value={email} label="Email Address" placeholder="me@example.com" />
            <Input type="password" onChange={(e)=>setPassword(e.currentTarget.value)} value={password} placeholder="eXamPle@123" label="Password" />
            <button type='submit' className="mt-6 transition-all block py-3 px-4 w-full text-white font-bold rounded cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-400 hover:from-indigo-700 hover:to-purple-500 focus:bg-indigo-900 transform hover:-translate-y-1 hover:shadow-lg">
              Submit
            </button>
            
          </form>
        </div>
      </div>
    )
  }
  export default LoginForm