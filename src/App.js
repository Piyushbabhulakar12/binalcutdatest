import './App.css';
import Menu from "../src/Component/Menu";
import Home from "../src/Home/Index";
import Error from './Component/Error';
import {  Routes, Route } from "react-router-dom";
import Contact from "../src/Contact/Index";
import Footer from './Component/Footer';


function App() {
  return (
    <div>
      
      <Menu/>
      <Routes>
        <Route path="*" exact element={<Error/>} />
        <Route path="/binalcutdatest" exact element={<Home/>} />
        <Route path="/contact-us" exact element={<Contact/>} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
