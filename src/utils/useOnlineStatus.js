import { useState,useEffect } from "react";

const useOnlineStatus = ()=>{

 const[onlieStatus,setOnlineStatus]=useState(true);

    useEffect(()=>{
        window.addEventListener("offline", ()=>{
            setOnlineStatus(false);
        });

        window.addEventListener("offline", ()=>{
            setOnlineStatus(false);
        });

    },[]);

    return onlieStatus;
}

export default useOnlineStatus;