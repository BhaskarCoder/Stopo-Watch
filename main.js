 let minutes = 0,seconds = 0,centiSecs = 0;
 let displayminute = 0,displaysecond = 0, displaycentiSecs = 0;
 let start = document.getElementById('btn1');

 function Stopwatch() {
     centiSecs++;
     if (centiSecs / 100 === 1) {
       centiSecs = 00;
       seconds++;
       if (seconds / 60 === 1) {
         seconds = 00;
         minutes++;
       }
     }

     if (centiSecs < 10) {
       displaycentiSecs = '0' + centiSecs.toString();
     } else {
       displaycentiSecs = centiSecs;
     }
     if (seconds < 10) {
       displaysecond = '0' + seconds.toString();
     } else {
       displaysecond = seconds;
     }
     if (minutes < 10) {
       displayminute = '0' + minutes
     } else {
       displayminute = minutes;
     }

     let minuteBtn = document.getElementById('minute');
     minuteBtn.innerHTML = displayminute;
     let secondBtn = document.getElementById('second');
     secondBtn.innerHTML = displaysecond;
     let secBtn = document.getElementById('centiSec');
     secBtn.innerHTML = displaycentiSecs;
   };
 
 start.addEventListener('click', e => {
   start.disabled=true;
   let timeInterval = window.setInterval(Stopwatch, 10);
   
   let reset = document.getElementById('btn3');
   reset.addEventListener('click', function() {
     minutes = 0;
     seconds = 0;
     centiSecs = -1;
     window.clearInterval(timeInterval);
     Stopwatch();
     start.disabled=false;
   })
   
   let stop = document.getElementById('btn2');
   stop.addEventListener('click', function() {
     window.clearInterval(timeInterval);
     start.disabled=false;
     
   })
 });