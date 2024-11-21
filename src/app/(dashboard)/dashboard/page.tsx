"use client"

import React, { useEffect, useState } from 'react'
import {getDashboardData} from "../../services/dashboard"

const Dashboard = () => {

  const [dashboardData, setDashboardData] = useState([])

  useEffect(() => {
    
    const fetchData = async () => {
      const response = await getDashboardData()
      console.log(await response.data)
    }

    fetchData()
  
    return () => {
      console.log("cleanup function")
    }
  }, [])
  

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard