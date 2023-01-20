import './App.css';
import './Responsive.css';
import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import RouteComp from './Routes/RouteComp';
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [progress, setProgress] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <LoadingBar color='#f11946' height={2} progress={progress} />
      <RouteComp setProgress={setProgress} />
      </BrowserRouter>
    </div>
  );
}

export default App;