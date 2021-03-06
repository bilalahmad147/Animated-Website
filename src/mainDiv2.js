import React from 'react';
import './App.css';
import useWebAnimations,{bounceInLeft} from "@wellyshen/use-web-animations";


function MainDiv2() {
  const { ref } = useWebAnimations({
    keyframes: [
      {transform: 'scale3d(1, 1, 1)', offset: 0}, 
      {transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5}, 
      {transform: 'scale3d(1, 1, 1)', offset: 1}
    ],
    timing: {
      duration: 2000,
      iterations: Infinity
    }});
  return (
    <div className="mainDiv">
      <h1> LEVEL-2 Mediocre Level</h1>
      <h4>It's short and simple—a great way for mediocre to get started with strength training.</h4>
      <img ref={ref} src="https://www.getsweatgo.com/media/imager/202002/548-posts.article_md.jpg" />
    </div>
  );
}

export default MainDiv2;
