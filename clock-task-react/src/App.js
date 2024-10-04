
import './App.css';
import { Heading } from './components/Heading';
import {Footer}  from './components/FooterComp';
import { Clock } from './components/ClockComp';
import { useState, useEffect } from 'react';


function App() {
  const [time,setTime] = useState("Time start Soon");
      useEffect(()=> {
        function startTime(){
          const currenTime = new Date().toLocaleTimeString();
          setTime(currenTime);      
        };

        setInterval(startTime,1000);
        // startTime();
        return () => {
          clearInterval(setInterval(startTime,1000));
        }
      },[]);

  return (
        <div className = 'main-container'>
          <Heading/>
          <Clock props={time}/>
          <Footer/>
        </div>
  );
};

export default App;
