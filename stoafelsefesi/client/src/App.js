import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Usom from "./pages/Usom";
import Ip from "./pages/Ip";
import IpBilgileri from "./pages/IpBilgileri";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/usom" element={<Usom/>}></Route>
        <Route path="/ip" element={<Ip/>}></Route>
        <Route path="usom/ipbilgileri/:id" element={<IpBilgileri/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

