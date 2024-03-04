import './App.css';
import {Routes,Route,BrowserRouter} from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';

function App() {
  return (
    <> 
      <BrowserRouter>
      <Navbar title="TextUtils"/>
        <Routes>
          {/* users -->component1
              /users/home -->component2 
              exact will send you to exact page*/}
          <Route exact path="/About" element={<About />} />
          <Route exact path="/" element={<Home />}   />
        </Routes>             
      </BrowserRouter>
      
      
      {/* <div className="container mv-3">
      <TextForm heading="Enter the text to analyze below"/>
      </div> */}
      
      
      
                 
    </>
  );
}

export default App;
