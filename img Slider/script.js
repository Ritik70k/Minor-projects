
let nextEl = document.querySelector(".next");
let prevEl = document.querySelector(".prev");
let imgContainerEl = document.querySelector(".img-container");
let ImgCount = document.querySelectorAll("img");

let currentImg = 1;
nextEl.addEventListener("click", ()=>{
    currentImg++;
    clearTimeout(timeout);
    updateImg();
});


let timeout;
updateImg();


function updateImg(){
    if(currentImg > ImgCount.length){
        currentImg = 1;
    }else if(currentImg < 1){
        currentImg = ImgCount.length;
    }
    imgContainerEl.style.transform = `translateX(-${(currentImg-1) * 500}px)`;
    timeout = setTimeout(()=>{
        currentImg++;
        updateImg()
    }, 2000);
}



prevEl.addEventListener("click", ()=>{
    currentImg--;
    clearTimeout(timeout);
    updateImg();
});

