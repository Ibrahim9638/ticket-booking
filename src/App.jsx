import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import LoginForm from "./components/LoginForm/LoginForm";
import SideCart from "./components/SideCart/SideCart";

function App() {
  const handleWatchTime = (watchTime)=>{
    console.log(watchTime)
  }
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <div className="grid md:grid grid-cols-3">
        <div className="col-span-2 mr-10">
          <Home handleWatchTime={handleWatchTime} />
        </div>
        <div>
          <SideCart />
        </div>
      </div>

      <LoginForm />
    </div>
  );
}

export default App;
