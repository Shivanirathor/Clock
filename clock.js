const hourE1 = document.getElementById("hours");
const minuteE1= document.getElementById("minutes");
const secondE1= document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");


function updateClock(){
    //  This line creates a new Date object and retrieves
    //  the current hour using the getHours() method. 
    let h = new Date().getHours();
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h > 12){
        h = h-12
        ampm = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourE1.innerText = h;
    minuteE1.innerText = m
    secondE1.innerText = s
    ampm, (innerText = ampm);
    setTimeout(()=>{
    updateClock()        
    }, 1000)       // 1000 milliseconds (1 second)
}

updateClock();

