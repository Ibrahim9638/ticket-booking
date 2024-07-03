import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const SideCart = ({ watchTime }) => {
  const [time, setTime] = useState(watchTime);
  const [breakTime, setBreakTime] = useState(0);

  useEffect(() => {
    const getWatchTimeStore = localStorage.getItem("watchTime");
    setTime(getWatchTimeStore);
    const getBreakTimeStore = localStorage.getItem("BreakTime");
    if(getBreakTimeStore){
        const sum = getBreakTimeStore;
        setBreakTime(sum)
    }else{
        setBreakTime(getBreakTimeStore);
    }

  }, [watchTime]);
  
  const handleBreakTime =(bt)=>{
    const breakTimeStore = localStorage.setItem("BreakTime", bt);
    setBreakTime(breakTimeStore)
    
  }
  const handleBreakTime1 =(bt)=>{
    const breakTimeStore = localStorage.setItem("BreakTime", bt);
    setBreakTime(breakTimeStore)
    
  }

  const handleBreakTime2 =(bt)=>{
    const breakTimeStore = localStorage.setItem("BreakTime", bt);
    setBreakTime(breakTimeStore)
    
  }


  const handleComplete = ()=>{
    toast("Wow Movie is Complete!");
  }

  return (
    <div className="text-center mt-5 border  rounded-lg mb-5">
      <h1 className="font-bold text-2xl mb-4 mt-4">My Cart</h1>
      <h2 className="text-xl mb-1">Total Watch Time:</h2>
      <input type="number" value={time} className="input input-bordered w-[70%]  mb-5" />
      <div className="mt-6">
        <p className="font-bold mb-1">Add Break Time</p>
        <div className="mb-2">
          <button onClick={()=>handleBreakTime(15)} className="btn btn-primary mr-4">15</button>
          <button onClick={()=>{handleBreakTime1(10)}} className="btn btn-secondary mr-4">10</button>
          <button onClick={()=>handleBreakTime2(20)} className="btn btn-success">20</button>
        </div>
        <input type="number" value={breakTime} className="input input-bordered w-[70%]  mb-5" />
      </div>
      <button onClick={handleComplete} className="btn btn-info w-[50%] mt-10 mb-10">Complete </button>
    </div>
  );
};

export default SideCart;
