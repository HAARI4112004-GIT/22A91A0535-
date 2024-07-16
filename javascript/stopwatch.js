function restart()
{
    document.getElementsByClassName("hours")[0].innerHTML=0;
    document.getElementsByClassName("minutes")[0].innerHTML=0;
    document.getElementsByClassName("seconds")[0].innerHTML=0;
    clearInterval(interval);
}
var hour=00;
var mintue=00;
var second=00;
function start()
{
    fun();
    interval=setInterval(fun,1000);
}
function stop()
{
    clearInterval(interval);
}
function fun()
{

    second+=1;
if(second === 60)
{
    mintue+=1;
    second=0;
}
if(mintue === 60)
{
        hour+=1;
        mintue=0;
}
    document.getElementsByClassName("hours")[0].innerHTML=hour;
    document.getElementsByClassName("minutes")[0].innerHTML=mintue;
    document.getElementsByClassName("seconds")[0].innerHTML=second;
    
}


function stop()
{
    clearInterval(interval);
}


var hr=2;
var min=59;
var sec=59;
function startx()
{
    fun1()
    add=setInterval(fun1,1000);
}
function stopx()
{
    clearInterval(add)
}
function resetx()
{
    document.getElementsByClassName("hours")[1].innerHTML=0;
    document.getElementsByClassName("minutes")[1].innerHTML=0;
    document.getElementsByClassName("seconds")[1].innerHTML=40;
    clearInterval(add);
}
function fun1()
{
    sec-=1;
    if(sec===0)
    {
        min-=1;
    }
    if(min===0)
    {
    hr-=1;
    }
    if(sec===0 & min ====0 & hr===0)
    {
        clearInterval(add);
    }
    document.getElementsByClassName("hours")[1].innerHTML=hr;
    document.getElementsByClassName("minutes")[1].innerHTML=min;
    document.getElementsByClassName("seconds")[1].innerHTML=sec;
}