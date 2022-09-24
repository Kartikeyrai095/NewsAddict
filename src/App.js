import './App.css';

import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router, 
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


const App =()=> {
  const [progress, setProgress] = useState(0)
 
  
    return (
      <div>
      <Router>    
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Routes>
          <Route path="/" element ={<News setProgress={setProgress} category="general"/>}/>
        </Routes>
      <Routes>
          <Route path="/general" element ={<News setProgress={setProgress} category="general"/>}/>
        </Routes>
        <Routes>
          <Route path="/business"  element ={<News setProgress={setProgress}  category="business"/>}/>
        </Routes>
        <Routes>
          <Route path="/entertainment" element ={<News setProgress={setProgress}  category="entertainment"/>}/>
        </Routes>
       
        <Routes>
          <Route path="/health" element ={<News setProgress={setProgress}  category="health"/>}/>
        </Routes>
        <Routes>
          <Route path="/science" element ={<News setProgress={setProgress}  category="science"/>}/>
        </Routes>
        <Routes>
          <Route path="/sports" element ={<News setProgress={setProgress}  category="sports"/>}/>
        </Routes>
        <Routes>
          <Route path="/technology" element ={<News setProgress={setProgress}  category="technology"/>}/>
        </Routes>
      </Router>
      </div>
    )
  }
  export default App;

