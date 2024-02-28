document.querySelector("#push").onclick = function () {
    if (document.querySelector("#newtask input").value.length == 0) {
        alert("Please Enter a Task")
    }
    else {
        document.querySelector("#tasks").innerHTML += `
        <div class="task">
            <span id="taskname">
            ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z "/></svg>           
                 </button>
        </div > `;

        let current_tasks = document.querySelectorAll(".delete")
        for (let i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove()
            }
        }

        let tasks = document.querySelectorAll(".task");
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function () {
                this.classList.toggle("completed")
            }
        }

        document.querySelector("#newtask input").value = ""
    }
}