import { BrowserRouter, Routes, Route} from "react-router-dom";
import Topbar2 from "./Components/Topbar/Topbar2";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Register from "./Pages/Register/Register";



function App() {
  
    
 
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="timeline" element={<Profile/>} />
    </Routes>

    </BrowserRouter>

);
    
}

export default App;
