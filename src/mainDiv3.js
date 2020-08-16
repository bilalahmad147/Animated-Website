import React from 'react';
import './App.css';
import useWebAnimations,{bounceInLeft} from "@wellyshen/use-web-animations";


function MainDiv3() {
  const { ref } = useWebAnimations({...bounceInLeft});
  return (
    <div className="mainDiv">
      <h1 ref={ref}> LEVEL-3 Expert Level</h1>
      <h4>It's short and simple—a great way for expert to get started with strength training.</h4>
      <img src="https://www.bodybuilding.com/images/2016/august/5-best-shoulder-workouts-for-mass-an-intermediate-guide-1-700xh.jpg" />
    </div>
  );
}

export default MainDiv3;
