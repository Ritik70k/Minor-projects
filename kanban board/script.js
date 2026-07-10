const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
const tasks = document.querySelectorAll(".task");
const toggleModalButton = document.querySelector("#toggle-modal");
const modal = document.querySelector(".modal");
const addNewTaskBtn = document.querySelector("#add-new-task");

let dragElement = null;


tasks.forEach((task) => {
    task.addEventListener("drag", (e) => {
        dragElement = task;
    })
})



function addDragEventsOnColumn(column) {
    column.addEventListener("dragenter", (e) => {
        e.preventDefault();
        column.classList.add("hover-over");
    })
    column.addEventListener("dragleave", (e) => {
        e.preventDefault();
        column.classList.remove("hover-over");
    })
    column.addEventListener("dragover", (e) => {
        e.preventDefault();
    })
    column.addEventListener("drop", (e) => {
        e.preventDefault();
        column.appendChild(dragElement);
        column.classList.remove("hover-over");

        [todo, progress, done].forEach((col) => {
            const tasks = col.querySelectorAll(".task");
            const count = col.querySelector(".right");
            count.textContent = tasks.length;
        })
    })


}
addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);

// modal toggle logic

const bg = document.querySelector(".bg");


toggleModalButton.addEventListener("click", (e) => {
    modal.classList.toggle("active");

});
bg.addEventListener("click", (e) => {
    modal.classList.remove("active");
})

addNewTaskBtn.addEventListener("click", (e) => {
    const taskTitle = document.querySelector("#task-title-input").value;
    const taskDescription = document.querySelector("#task-desc-input").value;

    const div = document.createElement("div");
    div.classList.add("task");
    div.setAttribute("draggable", "true");
    div.innerHTML = `
                <h2>${taskTitle}</h2>
                <p>${taskDescription}</p>
                <button>Delete</button>
                `;
    todo.appendChild(div);
    [todo, progress, done].forEach((col) => {
        const tasks = col.querySelectorAll(".task");
        const count = col.querySelector(".right");
        count.textContent = tasks.length;
    })

    div.addEventListener("drag", (e) => {
        dragElement = div;
    })

    modal.classList.remove("active");
});