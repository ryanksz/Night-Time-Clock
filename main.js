setInterval(getCurrentTime, 1000);
function getCurrentTime() { 
  let time = new Date(); 
  let hour = time.getHours(); 
  let min = time.getMinutes(); 
  let sec = time.getSeconds(); 

  min = lessThanTen(min);
  sec = lessThanTen(sec);
  
  document.getElementById("time").innerHTML = hour + ":"  + min + ":" + sec; 
} 

function lessThanTen(t) {
  if (t < 10) {
    return "0" + t;
  }else{
    return t;
  }
}


  getCurrentTime();
