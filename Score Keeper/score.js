var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var reset = document.getElementById("reset");
var disp1 = document.querySelector("#disp1");
var disp2 = document.querySelector("#disp2");
var numinput = document.querySelector("input");
var playingvalue = document.querySelector("#playingval");
var p1score = 0;
var p2score = 0;
var gameover = false;
var maxscore = 5;

p1.addEventListener("click",function(){             //..player one click event
    if(!gameover)
    {
     p1score++;
     if(p1score === maxscore)
     {
        disp1.classList.add("color");
        gameover = true;
     }
     disp1.textContent = p1score;
    }
});

p2.addEventListener("click",function(){             //..player two click event
    if(!gameover)
   {
    p2score++;
    if(p2score === maxscore)
     {
        disp2.classList.add("color");
         gameover = true;
     }
    disp2.textContent = p2score;
   }
});

reset.addEventListener("click",function(){         //..reset button click event
resetme();
});

function resetme(){
p1score = 0;     
p2score = 0;    
disp1.textContent = "0";
disp2.textContent = "0";
disp1.classList.remove("color");
disp2.classList.remove("color");
gameover = false;
}
numinput.addEventListener("change",function(){        //..input click event
   playingvalue.textContent = numinput.value;
   maxscore = Number(numinput.value);
   resetme();
});