let div = document.querySelector(".hide");
let menuBar = document.querySelector("i");
let body = document.querySelector("body")

let check = 0;
menuBar.addEventListener('click', () => {
    if (check == 0) {
        div.style.opacity = "1";
        div.style. background ="linear-gradient(to right bottom, white ,rgb(165, 102, 113))";
        div.style.backdropfilter= "blur(60px)";
        div.style.transition = "display 0.9s";
         menuBar.style.backgroundColor="hsl(0, 0% ,40%)";
        menuBar.style.padding="5px";
        menuBar.style.borderRadius="9px";

        check=1;
    }else{
        div.style.opacity="0";
        menuBar.style.backgroundColor="hsl(0, 0% ,50%)";
        check=0;
    }
});


