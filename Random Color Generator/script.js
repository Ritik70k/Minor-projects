

let containerEL = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerEL = document.createElement("div");
    colorContainerEL.classList.add("color-container");
    containerEL.appendChild(colorContainerEL);
}

const colorContainerELs = document.querySelectorAll(".color-container");

generateColor();
function generateColor(){
    colorContainerELs.forEach((colorContainerEL)=>{
        const newColorCode = randomColor();
        colorContainerEL.style.backgroundColor = "#"+newColorCode;
        colorContainerEL.innerText = "#" + newColorCode;
    })
}


function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum+1);
        
    }
    return colorCode;
    
}