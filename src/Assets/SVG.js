import React, { useEffect } from "react";

function SVG() {

  useEffect(() => {
    // Get a reference to the <path>
   var path = document.querySelector('#Opaque_Ring');
   
   // Get length of path... ~577px in this case
   var pathLength = path.getTotalLength();
   
   // Make very long dashes (the length of the path itself)
   path.style.strokeDasharray = pathLength + ' ' + pathLength;
   
   // Offset the dashes so the it appears hidden entirely
   // path.style.strokeDashoffset = pathLength;
   
   // Jake Archibald says so
   // https://jakearchibald.com/2013/animated-line-drawing-svg/
   path.getBoundingClientRect();
   
   // When the page scrolls...
   window.addEventListener("scroll", function(e) {
    
     // What % down is it? 
     // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
     // Had to try three or four differnet methods here. Kind of a cross-browser nightmare.
     var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
       
     // Length to offset the dashes
     var drawLength = pathLength * scrollPercentage;
     
     // Draw in reverse
     path.style.strokeDashoffset = pathLength - drawLength;
       
     // When complete, remove the dash array, otherwise shape isn't quite sharp
    // Accounts for fuzzy math
     if (scrollPercentage >= 0.99) {
       path.style.strokeDasharray = "none";
       
     } else {
       path.style.strokeDasharray = pathLength + ' ' + pathLength;
     }
     
   });
   }, []);
   

  return (
    <svg
      className='start-0 position-absolute'
      xmlns='http://www.w3.org/2000/svg'
      id='transring'
      x='0'
      y='0'
      enableBackground='new 0 0 414 414'
      version='1.1'
      viewBox='0 0 414 414'
      style={{ backgroundColor: "", top:'6%', }}
      xmlSpace='preserve'
    >
      <path
        id='Transparent_Ring'
        fill='none'
        stroke='#FFF'
        strokeMiterlimit='10'
        strokeWidth='2'
        d='M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7'
        className='transrg'
        enableBackground='new'
        opacity='0.4'
      ></path>
      <path
        id='Opaque_Ring'
        fill='none'
        stroke='#FFF'
        strokeDasharray='10, 1000'
        strokeMiterlimit='10'
        strokeWidth='2'
        d='M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7'
        className='transrgwht'
      ></path>
      <g id='Dots1' className='dots-nav'>
        <path
          fill='#0092FF'
          d='M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z'
          className='dotsst dotsfill1'
        ></path>
        <path
          fill='none'
          stroke='#FFF'
          strokeMiterlimit='10'
          strokeWidth='2'
          d='M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z'
          className='dotsstro1'
        ></path>
      </g>
      <g id='Dots2' className='dots-nav'>
        <path
          fill='#0092FF'
          d='M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 NaN'
          className='dotsst dotsfill2'
        ></path>
        <path
          fill='none'
          stroke='#FFF'
          strokeMiterlimit='10'
          strokeWidth='2'
          d='M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 NaN'
          className='dotsstro2'
        ></path>
      </g>
      <g id='Dots3' className='dots-nav'>
        <path
          fill='#0092FF'
          d='M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN'
          className='dotsst dotsfill3'
        ></path>
        <path
          fill='none'
          stroke='#FFF'
          strokeMiterlimit='10'
          strokeWidth='2'
          d='M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN'
          className='dotsstro3'
        ></path>
      </g>
      <g id='Dots4' className='dots-nav'>
        <path
          fill='#0092FF'
          d='M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN'
          className='dotsst dotsfill4'
        ></path>
        <path
          fill='none'
          stroke='#FFF'
          strokeMiterlimit='10'
          strokeWidth='2'
          d='M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6zm0 NaN'
          className='dotsstro4'
        ></path>
      </g>
      <g id='Dots5' className='dots-nav'>
        <path
          fill='#0092FF'
          d='M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN'
          className='dotsst dotsfill5'
        ></path>
        <path
          fill='none'
          stroke='#FFF'
          strokeMiterlimit='10'
          strokeWidth='2'
          d='M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN'
          className='dotsstro5'
        ></path>
      </g>
      <g id='Dots6' className='dots-nav'>
        <path
          fill='#0092FF'
          d='M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN'
          className='dotsst dotsfill6'
        ></path>
        <path
          fill='none'
          stroke='#FFF'
          strokeMiterlimit='10'
          strokeWidth='2'
          d='M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6zm0 NaN'
          className='dotsstro6'
        ></path>
      </g>
      <g id='Dots7' className='dots-nav'>
        <path
          fill='#0092FF'
          d='M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 NaN'
          className='dotsst dotsfill7'
        ></path>
        <path
          fill='none'
          stroke='#FFF'
          strokeMiterlimit='10'
          strokeWidth='2'
          d='M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6zm0 NaN'
          className='dotsstro7'
        ></path>
      </g>
    </svg>
  );
}

export default SVG