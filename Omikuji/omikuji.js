"use strict";
{
    const btn = document.getElementById("btn");
    btn.addEventListener("click",()=>{

        const omikuji= ["小吉","中吉","大吉","凶","末吉"];
        const n = Math.floor(Math.random() * omikuji.length);
        btn.textContent = omikuji[n];
    
    });


}


