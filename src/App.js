import Btn from "./component/Btn";
import ModeToggler from "./component/ModeToggler";
import { PromoHeading } from "./component/PromoHeading";
import Reducer from "./component/Reducer";
import { StatefulComponent } from "./component/StatefulComponent";
import { UseStateHook } from "./component/UseStateHook";
import { Routes, Route, Link } from "react-router-dom";
import ReactPlayer from "react-player";

function App() {
  const video= "https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=131s";
  return (
    <div className="App">
      <nav className="nav">
        <Link to='/'>Home</Link> 
        <Link to='/model-toggler'>ModeToggler</Link>
      </nav>
      <ReactPlayer
        url={video}
        volume={0.5}
        playing={false}
      />  
      
      <Routes>
        <Route path="/" element={<Btn title='On  Click'/>} />
        <Route path="/model-toggler" element={<ModeToggler />} />
        <Route path="/promo-heading" element={<PromoHeading />} />
        <Route path="/stateful-component" element={<StatefulComponent />} />
        <Route path="/useState-hook" element={<UseStateHook />} />
        <Route path="/reducer" element={<Reducer />} />
      </Routes>
    
    </div>
  );
}

export default App;
