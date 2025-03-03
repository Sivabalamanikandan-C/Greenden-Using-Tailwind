var sidenavbar1=document.getElementById("sidenavbar");
var menubar1=document.getElementById("menubar");

menubar1.addEventListener("click",()=>{
    sidenavbar1.style.right=0;
})

sidenavbar1.addEventListener("click",()=>{
    sidenavbar1.style.right="-50%";
})