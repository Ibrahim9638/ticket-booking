import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import LoginForm from "./components/LoginForm/LoginForm";
import SideCart from "./components/SideCart/SideCart";
import { useState } from "react";

function App() {
  const [watchTime, setWatchTime] = useState("");

  const handleWatchTime = (time)=>{
    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
    if(previousWatchTime){
      const sum = previousWatchTime + time;
      localStorage.setItem("watchTime", sum)
      setWatchTime(sum)
    }else{
      localStorage.setItem("watchTime", time);
      setWatchTime(time);
    }
  }
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <div className="grid md:grid grid-cols-3">
        <div className="col-span-2 mr-10">
          <Home handleWatchTime={handleWatchTime} />
        </div>
        <div>
          <SideCart watchTime={watchTime} />
        </div>
      </div>

      <LoginForm />
    </div>
  );
}

export default App;
