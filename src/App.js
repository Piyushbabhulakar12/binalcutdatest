import './App.css';
import Menu from "../src/Component/Menu";
import Home from "../src/Home/Index";
import Error from './Component/Error';
import {  Routes, Route } from "react-router-dom";
import Footer from './Component/Footer';


function App() {
  return (
    <div>
      
      <Menu/>
      <Routes>
        <Route path="*" exact element={<Error/>} />
        <Route path="/binalcutdatest" exact element={<Home/>} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
