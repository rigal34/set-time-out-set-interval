//setTimeout(() => {
  //console.log("ACTION");  
//},1000);

const timeoutID = setTimeout(() => { //le test s'effectue au bout de 10seconde
   console.log("test"); 
}, 1000);

clearTimeout(timeoutID)//ce teste  ns se jouera jamais



const intervalID =setInterval(() => {
console.log("execution chaque seconde"); //le message apparait toute les secondes   
}, 1000);


clearInterval(intervalID)//ce teste  ns se jouera jamais