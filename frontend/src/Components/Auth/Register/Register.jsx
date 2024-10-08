import "./register.css"
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <div className="bg_sign">
        <div className="bg-[#08181f] w-[850px] h-[450px] flex flex-row p-6 rounded-[15px] shadow-lg">
        
          <div className="flex-1">
            <h1 className="sign_up">Sign Up</h1>

            <form className="flex flex-col">
              <div className="flex flex-row ">
                <div><input className="mb-4  bg-gray-200 rounded-lg p-3 border-gray-300 border-[1.5px] w-[150px]" type='text'  placeholder='First Name'/></div>
                <div><input className="mb-4 ml-4 bg-gray-200 rounded-lg p-3 border-gray-300 border-[1.5px] w-[150px]" type="text"  placeholder='Last Name'/></div>
              </div>
              <input className="mt-4  flex-none  bg-gray-200 rounded-lg p-3 border-gray-300 border-[1.5px]  w-[320px]" type='text'  placeholder='Username'/>
              <input className="mt-8 flex-none  bg-gray-200 rounded-lg p-3  border-gray-300 border-[1.5px] w-[320px]" type='password'  placeholder='Password'/>
              
              <div className="flex w-[320px] items-center justify-center">
                <div>
                  <button className=" rounded-[20px] text-[16px] text-white bg-[#3FA1A3] h-[40px] w-24 mt-4 hover:bg-[#38878E] hover:cursor-pointer">Sign Up</button>
                </div>
              </div>
              <div className="text-[#E3D7A4] flex flex-row ">
                <div className="italic m-4">Already have an account? </div>
                <div className="m-4 hover:underline hover:cursor-pointer"><Link to="/">Sign In</Link></div>
              </div>
            </form>
            
          </div>

          <div className="text-white flex-1 flex flex-col">
                  <div className="image_sign"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register