import React from 'react'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
export async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users'); // Replace with your API URL
    const data = await res.json();

    console.log(data)

    // return {
    //     props: {
    //         data,
    //     },
    //     revalidate: 10, // Optional: Re-generate the page every 10 seconds
    // };

    // return {data, revalidate:10}
    return data
}



const page = async () => {
    const data:({id:number, name:string, email:string})[] = await getData()
    console.log("check", data)
    return (
    <>
        <h1>All Users</h1>
        {
            data.map(user => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            ))
        }
    </>
  )
}

export default page