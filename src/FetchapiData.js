// fetch and show the data coming from an api

import React, { useEffect, useState } from 'react'

const FetchapiData = () => {

    const [data,setData] = useState(null);

    useEffect(() =>{
        fetch('https://dummyjson.com/products/1')
        .then((response)=>response.json())
        .then((json) => setData(json));
    },[])
  return (
    <div>
        {
            data? (
                <div>
                    <h1>Title: {data.title}</h1>
                    <p>{data.description}</p>
                    <p>{data.price}</p>
                    {data.brand}
                </div>
            ) : (
                <p>Loading....</p>
            )
        }
    </div>
  )
}

export default FetchapiData