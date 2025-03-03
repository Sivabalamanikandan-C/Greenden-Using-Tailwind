var sidenavbar1=document.getElementById("sidenavbar");
var menubar1=document.getElementById("menubar");

menubar1.addEventListener("click",()=>{
    sidenavbar1.style.right=0;
})

sidenavbar1.addEventListener("click",()=>{
    sidenavbar1.style.right="-50%";
})

// Search Functionality

var search=document.getElementById("search");
var productcontainer=document.getElementById("product-container");
var productlist=productcontainer.querySelectorAll("div");
var noItemsMessage = document.getElementById("no-items");

search.addEventListener("keyup",(event)=>{
    var enteredvalue=event.target.value.toUpperCase();

    var itemsFound = false;

    for(let count=0;count<productlist.length;count++)
    {
        var productname=productlist[count].querySelector("p").textContent;

        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist[count].style.display="none";
        }
        else
        {
            productlist[count].style.display="block";

            itemsFound = true;
        }
    }

    noItemsMessage.style.display = itemsFound ? "none" : "block";
})