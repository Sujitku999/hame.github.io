var box = document.querySelectorAll(".box");
var btn_reset = document.querySelector(".btn_reset");
var btn_new = document.querySelector(".btn_new");
var c=document.querySelector(".winner");
let play = true;
let count = 0;

var arr = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];




for(let i=0;i<9;i++)
{
    box[i].addEventListener("click", ()=>
    {
if(box[i].innerText==="")
{
    if(play) 
    {
     box[i].innerText = "X"
        play = false;   
    }
    else {
        box[i].innerText = "O"
    play = true;
    }
}
count++;
let iswinner=check()
if(count===9 && !iswinner)
{
        draw();     
}

}   
)
      
}


function draw()
{
      c.innerText="match Draw";
      disable();
}


function disable()
{
  for(let b of box)
  {
    b.innerText="";   
  }
  
}

function ok()
{

c.innerText="";
}



function check()
{
for(let pattern of arr)
{
     let poss1=box[pattern[0]].innerText;
     let poss2=box[pattern[1]].innerText;
     let poss3=box[pattern[2]].innerText;
     if(poss1!=="" && poss2!="" && poss3!="")
     {
        if(poss1===poss2 && poss2==poss3)
     {
        show(poss1);
        return true;
     }
     }  
}



}
function show(winner)
{
  c.innerText="winner the game"+winner;
  disable();
}

function restart()
{
  play=true;
  count=0;
  disable();
  ok();
}
btn_reset.addEventListener("click",restart);
btn_new .addEventListener("click",restart);

