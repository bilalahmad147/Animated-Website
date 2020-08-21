import React from 'react';
import './App.css';
import useWebAnimations,{bounceInLeft} from "@wellyshen/use-web-animations";

function MainDiv() {
  const { ref } = useWebAnimations({
    keyframes: [
      {transform: 'translate(0%)', offset: 0}, 
          {transform: 'rotate3d(0, 0, 1, 15deg)', offset: 0.2}, 
          {transform: 'rotate3d(0, 0, 1, -10deg)', offset: 0.4}, 
          {transform: 'rotate3d(0, 0, 1, 5deg)', offset: 0.6}, 
          {transform: 'rotate3d(0, 0, 1, -5deg)', offset: 0.8}, 
          {transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1}
    ],
    timing: {
      duration: 4000,
      iterations: Infinity
    }});
return (
  <div className="mainDiv">
    <h1 ref={ref}> LEVEL-1 Beginner Level</h1>
    <h4>It's short and simple—a great way for beginners to get started with strength training.</h4>
    <img alt="Beginner Level" src="https://i1.wp.com/timeshood.com/wp-content/uploads/2018/01/Crunch-abs-exercise-.jpg?resize=696%2C700&ssl=1" alt="Exercise for beginner" />
  </div >
);
}

export default MainDiv;
