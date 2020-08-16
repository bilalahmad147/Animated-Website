import React from 'react';
import './App.css';
import useWebAnimations,{bounceInLeft} from "@wellyshen/use-web-animations";

function MainDiv() {
  const { ref } = useWebAnimations({...bounceInLeft});
return (
  <div className="mainDiv">
    <h1 ref={ref}> LEVEL-1 Beginner Level</h1>
    <h4>It's short and simple—a great way for beginners to get started with strength training.</h4>
    <img alt="Beginner Level" src="https://i1.wp.com/timeshood.com/wp-content/uploads/2018/01/Crunch-abs-exercise-.jpg?resize=696%2C700&ssl=1" alt="Exercise for beginner" />
  </div >
);
}

export default MainDiv;
