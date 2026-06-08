let boxes = document.querySelectorAll(".box-btn");
let string = "";

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (box.querySelector("#backspace")) {
            if (string !== "") {
                string = string.slice(0, -1);
                document.querySelector("#text").value = string;
            }
        }
        else if (box.innerText === "=") {
            try {
                string = eval(string).toString();
                document.querySelector("#text").value = string;
            } catch (error) {
                document.querySelector("#text").value = "Error";
                string = "";
            }
        }
        else if (box.innerText === "AC") {
            string = "";
            document.querySelector("#text").value = string;
        }
        else {
            string += box.innerText;
            document.querySelector("#text").value = string;
        }
    });
});