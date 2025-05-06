const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});




// For navbar language ..

var btn = document.querySelector(".language button");

btn.addEventListener("click",function(e){
    if(btn.innerHTML === "EN"){
        btn.innerHTML = "JA";
    }

    else if(btn.innerHTML === "JA"){
        btn.innerHTML = "EN";
    }
})




// Featured Section 


var masterdiv = document.querySelectorAll(".mainfeat");

masterdiv.forEach(e => {
    
});




