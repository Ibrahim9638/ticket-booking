import React, { useEffect, useState } from 'react';

const SideCart = ({watchTime}) => {
    const [time, setTime] = useState(watchTime);

    useEffect(()=>{
        const getWatchTimeStore = localStorage.getItem("watchTime")
        setTime(getWatchTimeStore);

    },[watchTime])

    return (
        <div>
           <h2>Total Watch Time: {time} </h2>
        </div>
    );
};

export default SideCart;