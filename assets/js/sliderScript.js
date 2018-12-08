var interval;
var i=0;
var imgs = document.images.length;

 for(var j = 0; j < imgs; j++)
  {
  document.images[j].onclick=function()
    {
        document.getElementById("imgView").src=this.src;
    }
  }

nextBtn.onclick=function()
{ 
    i++;
    if(i>=imgs)
        i=0;  
    document.getElementById("imgView").src=document.images[i].src;    
}
   
prevBtn.onclick=function()
{
    i--;
    if(i<0)
        i=imgs-1;
   document.getElementById("imgView").src=document.images[i].src;
}

function play()
{
    i++;
    if(i>=imgs)
        i=0;
    document.getElementById("imgView").src=document.images[i].src;
}
interval= setInterval(play,3000);