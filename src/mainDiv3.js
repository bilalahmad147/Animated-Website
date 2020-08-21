import React from 'react';
import './App.css';
import useWebAnimations,{bounceInLeft} from "@wellyshen/use-web-animations";


function MainDiv3() {
  const { ref } = useWebAnimations({
    keyframes: [
      {transform: 'scale3d(1, 1, 1)', offset: 0}, 
      {transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)', offset: 0.1}, 
      {transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)', offset: 0.2}, 
      {transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.3}, 
      {transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.4}, 
      {transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.5}, 
      {transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.6}, 
      {transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.7}, 
      {transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.8}, 
      {transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.9}, 
      {transform: 'scale3d(1, 1, 1)', offset: 1}
    ],
    timing: {
      duration: 3000,
      iterations: Infinity,
    }});
  return (
    <div className="mainDiv">
      <h1 ref={ref}> LEVEL-3 Expert Level</h1>
      <h4>It's short and simple—a great way for expert to get started with strength training.</h4>
      <img src="https://www.bodybuilding.com/images/2016/august/5-best-shoulder-workouts-for-mass-an-intermediate-guide-1-700xh.jpg" />
    </div>
  );
}

export default MainDiv3;
