import React, { useState } from "react";
//hooks
function IncrementButton(){
    let [count, setValue]=useState(0);
    let incCount=()=>{
        setValue(count++)
    }

     // get digital time
    let currentTime=new Date().toLocaleTimeString();
    let [time,setTime]=useState(currentTime);
    setInterval(() => {
        setTime(new Date().toLocaleTimeString())
    }, 1000);
   

    return (
        <>
        <div>
        <div>{count++}</div>
        <button onClick={incCount}>Click Me</button>
        </div>
      
        <div>
            <h1> Digital Cloak</h1>
            <h3>{currentTime}</h3>
        </div>
        
        </>
    )
}
export default IncrementButton