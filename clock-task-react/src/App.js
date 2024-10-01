
import './App.css';
import { Heading } from './components/Heading';
import {Footer}  from './components/FooterComp';
import { Clock } from './components/ClockComp';
import { useState, useEffect } from 'react';


function App() {
  const [time,setTime] = useState("Time start Soon");
      useEffect(()=> {
        function startTime(){
          const currentDay = new Date();
          let hour = currentDay.getHours();
          let minut = currentDay.getMinutes();
          let second = currentDay.getSeconds();
      
          // console.log(hour + ":" + minut + ":" + second );
          minut = checkZeroNum(minut)
          second = checkZeroNum(second);
          setTime(hour + ":" + minut + ":" + second);
      
        };

        function checkZeroNum(i){
          return i < 10 ? "0" + i : i; 
        };
        setInterval(startTime,1000);
        startTime();
      });

  return (
        <div className = 'main-container'>
          <Heading/>
          <Clock props={time}/>
          <Footer/>
        </div>
  );
};

export default App;
