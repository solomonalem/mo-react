import React,{useState, useEffect} from 'react'

export default function Clock() {

    const [hour ,setHour] = useState('')
    const [date ,setDate] = useState('')

   setInterval(() => {
       setHour(new Date().toLocaleTimeString());
       setDate(new Date().toUTCString());
    }, 1000);

   
 
    return (
        <div>
            <h5 className="container my-5 text-primary bg-light p-4 d-flex justify-content-between border border-info"><span className="mx-5">  {hour} </span> <span className="mx-5 px-4">  {date}</span></h5>
        </div>
    )
}
