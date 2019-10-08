window.addEventListener("load",()=>
{
  const sounds=document.querySelectorAll(".sound");
  const pads=document.querySelectorAll(".pads div");
  const visual=document.querySelector(".visual");
  const colors=[
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#6860d3",
    "#60d394"

  ]
  pads.forEach((pad,index)=>
  {
    pad.addEventListener("click",function()
    {
    sounds[index].currentTime=0;
    sounds[index].play();
    createbubble(index);
    generateImage(index);

    });
  });
  const generateImage=(index)=>
  {
  	const imagee=document.createElement("img");
      imagee.src="/Users/sameerpande/Documents/musicapp/images/"+index+".jpg";
      imagee.width="720";
      imagee.height="500";
    	visual.appendChild(imagee);
$(document).ready(function(){
      setTimeout(function(){
        console.log(index);
        visual.removeChild(imagee);
      }, 1000);
    });

    console.log("debchbhbch");
  }

  const createbubble=(index)=>
  {
const bubble=document.createElement("div");
visual.appendChild(bubble);
bubble.style.backgroundColor=colors[index];
bubble.style.animation='jump 1s ease';
bubble.addEventListener("animationend",function()
{
  visual.removeChild(this);
});
};
});
