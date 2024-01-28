import { Route, Routes } from "react-router-dom"
import Navbar from "./component/Navbar"
import Homepage from "./pages/Homepage"
import Dashboard from "./pages/Dashboard"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Community from "./pages/Community"
import { Toaster } from "react-hot-toast"
import FalseUrgency from "./pages/FalseUrgency"
import SocialProof from "./pages/SocialProof"
import Baskit from "./pages/Baskit"
import Forced from "./pages/Forced"


function App() {


  return (
    <>
    <div className="fixed w-full z-40">
       <Navbar/>
       <Toaster/>
    </div>
    <div className="pt-12">

       <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/falseurgency" element={<FalseUrgency />} />
    <Route path="/socialproof" element={<SocialProof />} />
    <Route path="/baskit" element={<Baskit />} />
    <Route path="/forced" element={<Forced />} />
    <Route path="/community" element={<Community />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    
    </Routes>
    </div>
    </>
  )
}

export default App
