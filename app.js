




setInterval(function(){
    let date = new Date();
    let getHour = date.getHours();
    let getMin = date.getMinutes();
    let getSec = date.getSeconds();
    
let hour = document.querySelector('.hour');
let min = document.querySelector('.min');
let sec = document.querySelector(".sec");
let ampm = document.querySelector(".ampm");

if(getHour > 12){
   ampm.innerHTML = "PM";
}
else{
    ampm.innerHTML = "AM";
}

if(getHour > 12){
   let finalHour= getHour - 12;
   hour.innerHTML = finalHour;
}
else{
    let finalHour= getHour;
    hour.innerHTML = finalHour;
}


min.innerHTML = getMin;
sec.innerHTML = getSec;

    
});
