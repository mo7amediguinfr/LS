var txt=document.getElementById('txt');
txt.onkeyup=function(){
    localStorage.setItem('txt',txt.value)
};
if(localStorage.length>0){
    txt.value=localStorage.getItem('txt');
}
var txt1=document.getElementById('txt1');
txt1.onkeyup=function(){
    sessionStorage.setItem('txt1',txt1.value)
};
if(sessionStorage.length>0){
    txt1.value=sessionStorage.getItem('txt1');
}
function setColor(color){
    localStorage.setItem('color',color);
    document.body.style.backgroundColor=color;
};
if(localStorage.length>0){
    document.body.style.backgroundColor=localStorage.getItem('color');
}
localStorage.clear(); //I add this to clear the localStorage when you Uptade the page 2 times