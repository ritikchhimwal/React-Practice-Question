//build a timer that counts down from a specified time
import React, { useEffect,useState } from 'react'

const Timer = () => {

    const [time,setTime]=useState(10);

    useEffect(() => {
        if(time>0){
        const timer = setTimeout(()=>setTime(time-1),1000);
        return ()=>clearTimeout(timer);
        }else{
            {alert('time end')}
        }
    },[time])
  return (
    <div>
        TimeLeft : {time} second
    </div>
  )
}

export default Timer