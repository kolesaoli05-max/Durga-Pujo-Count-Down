const div=document.getElementById("time");

const pujorDate= new Date("2026-10-17").getTime();

setInterval(()=>{
    const currentTime=Date.now();  //new Date(2026,6,1);
    let time=pujorDate-currentTime;
    const days=Math.floor(time/(1000*60*60*24));
    document.getElementById("days").textContent=days;
    time=time%(1000*60*60*24);

    const hour=Math.floor(time/(1000*60*60));
    document.getElementById("hours").textContent=hour;

    time=time%(1000*60*60);

    const min=Math.floor(time/(1000*60));
    document.getElementById("mins").textContent=min;

    time=time%(1000*60);

    const sec=Math.floor(time/1000);
    document.getElementById("secs").textContent=sec;
    // div.textContent= `${days} Days ${hour} Hour ${min} Minutes ${sec} Seconds`;
    
},1000);
