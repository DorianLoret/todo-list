
const input = document.querySelector("input")
const form = document.querySelector("form")

function storeList() {
    window.localStorage.todoList = list.innerHTML
}

function getTodos() {
    if (window.localStorage.todoList) {
        list.innerHTML = window.localStorage.todoList
    } else {
        list.innerHTML = `<li>Cliquez sur un Todo pour le supprimer</li>`
    }
}


getTodos();

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        
        list.innerHTML += `<li>${todo.value}</li>`
        todo.value = "";

        storeList();
    })

    list.addEventListener("click", (e) => {
        e.target.remove();
        storeList();
    })