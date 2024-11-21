"use client"

import Http from "../../Http";


const appUrl = "http://api.multiTenant/api" 


export const getDashboardData = async () => {
    return new Promise((resolve, reject) => {
        Http.get(`${appUrl}/dashboard`).then((res)=>{
                console.log(res.data.data)
            return resolve(res.data)
        }).catch((error)=> {
            console.log(error)
            reject(error)
        })
    });
    
    }   