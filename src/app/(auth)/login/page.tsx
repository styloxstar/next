"use client"
import React, { useState } from 'react'
import {userLogin} from "../../services/auth"
import { redirect } from 'next/navigation'
import Http from "../../../Http"
import axios from 'axios';


const login = () => {

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const handleOnChange = (event:any) => {
    const { name, value } = event.target
    // console.log("get", name, value)
    setUserData({...userData, [name]: value })
  }

  const handleSubmit = () => {
    // console.log("get the data", userData)
    if(userData.email !== "" && userData.password !==""){
          userLogin(userData).then((res)=>{
            console.log("success", res)


            if(res.code === 200){
              const userDetails = res.data.userData
              const accessToken = res.data.token
              console.log(JSON.stringify(userDetails))
              localStorage.setItem("userDetails", JSON.stringify(userDetails))
              localStorage.setItem("accessToken", accessToken)
              Http.defaults.headers.common.Authorization = `Bearer ${accessToken}` || '';
              window.location.href = "/dashboard";
              return redirect('dashboard');
            }


          }).then((err)=>{
            console.log("error", err)
            // window.location.href = "/login";

          });
    }

  }



  return (
    <section id="multiTenant_login" className='flex flex-row justify-center align-middle items-center h-screen w-screen'>
        <div className='loginForm'>
          <div className="w-[40rem] p-10 mx-auto shadow-sm shadow-gray-50 ">

            <div className='py-5 text-center'>
              <h3 className='text-2xl'>Login</h3>

            </div>
            <div className="mb-5 ">
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" name="email" onChange={handleOnChange} value={userData.email} required />
            </div>
            <div className="mb-5">
              <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
              <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   onChange={handleOnChange} name="password" value={userData.password} required />
            </div>
            <div className="flex items-start mb-5">
              {/* <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
              </div>
              <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label> */}
            </div>
            <button onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </div>


        </div>

    </section>
  )
}

export default login