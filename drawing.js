
window.onload=function(){
document.getElementById("button_c").addEventListener("click",draw_circles);
document.getElementById("button_s").addEventListener("click",draw_squares);
document.getElementById("clr").addEventListener("click",clear_scr);
}

function draw_circles()
{
var svg = document.getElementById("svgDraw");
height=500;
width= 500;
var circles = document.getElementById("no_c").value;
        for(let i=0;i<circles;i++)
        {
        circle= document.createElementNS("http://www.w3.org/2000/svg","circle");
        circle.setAttribute('cx',(Math.random()*1000)%width);
        circle.setAttribute('cy',(Math.random()*1000)%height);
        circle.setAttribute('r',(Math.random()*1000)%60);
        color="rgb("+(Math.random()*100)%256+","+(Math.random()*100)%256+","+(Math.random()*100)%256+")";
        circle.setAttribute('fill',color);
        circle.setAttribute('fill-opacity',0.4);
        svg.appendChild(circle);
        }
}

function draw_squares()
{
var svg = document.getElementById("svgDraw");
var rects = document.getElementById("no_s").value;
height=400;
width= 400;
        for(let i=0;i<rects;i++)
        {
        var x = (Math.random()*1000)%width;
        rect= document.createElementNS("http://www.w3.org/2000/svg","rect");
        rect.setAttribute('x',(Math.random()*1000)%500);
        rect.setAttribute('width',x);
        rect.setAttribute('y',(Math.random()*1000)%500);
        rect.setAttribute('height',x);
        color="rgb("+(Math.random()*100)%256+","+(Math.random()*100)%256+","+(Math.random()*100)%256+")";
        rect.setAttribute('fill',color);
        rect.setAttribute('fill-opacity',0.3);
        svg.appendChild(rect);
        }
}
function clear_scr()
{
myElement=document.getElementById("svgDraw");
        while(myElement.firstChild){
        myElement.removeChild(myElement.firstChild);
        }
}
function changeOpacity()
{
svg = document.getElementById("svgDraw");
var o=parseFloat(document.getElementById("opac").value)/10;
      for(element of svg.children)
      {
        element.setAttribute('fill-opacity',o);
      }
}
