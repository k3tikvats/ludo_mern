import "./login.css"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div>
      <div className="bg">
        <div className="bg-black w-[850px] h-[450px] flex flex-row p-6 rounded-[15px] shadow-lg">
          
          <div className="text-white flex-1 flex flex-col">
                  <div className="h-20">
                    <FontAwesomeIcon icon={faDice} className=" text-5xl" />
                  </div>
                  <div className="image"></div>
          </div>
              

          <div className="flex-1">
            <h1 className="sign">SIGN IN</h1>

            <form className="flex flex-col">
              
              <input className="mt-4  flex-none  bg-gray-200 rounded-lg p-3 border-gray-300 border-[1.5px]  w-[320px]" type='email'  placeholder='Email or Phone'/>
              <input className="mt-8 flex-none  bg-gray-200 rounded-lg p-3  border-gray-300 border-[1.5px] w-[320px]" type='password'  placeholder='Password'/>
              <div className="text-white text-xs italic hover:underline mt-2 hover:cursor-pointer">Forgot your password?</div>
              <div className="flex w-[320px]">
                
                <div className="text-[#C386B9] text-[16px] flex-1 mt-4 hover:underline hover:cursor-pointer"><Link to="/register">Create new account</Link></div>
                <div>
                  <button className=" rounded-[20px] text-[16px] text-white bg-[#C386B9] h-[40px] w-24 mt-4 hover:bg-[#a7749e] hover:cursor-pointer">Log In</button>
                </div>
              </div>
            </form>

            <div className="text-white mt-4 ">
              Continue with
              <div>
              <FontAwesomeIcon icon={faGoogle} className="text-2xl m-2 hover:text-gray-400" />
              <FontAwesomeIcon icon={faFacebook} className="text-2xl m-2 hover:text-gray-400" />
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login