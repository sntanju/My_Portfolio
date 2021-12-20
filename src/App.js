import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//https://shabaj-khan.web.app/
//portfolio-82c3d.web.app
//https://github.com/raihanuddin2002/raihanuddin-portfilio/blob/main/src/components/Home/Home.js
//raihanuddin2002.netlify.app/
//https://github.com/alifbinhossain/Time-Zone?fbclid=IwAR0yrFQ9zU2RLeB9OAca8t7RFoYZYXC4lSrYwbyOjNgntbCAwfC-d2P8c9Y