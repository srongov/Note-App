let todos = []

const filters = {
    searchText: ''
}

const renderTodos = function (todos, filters) {
    const filtersTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    filtersTodos.forEach(function (todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('body').appendChild(p)
    })

}


renderTodos(todos, filters)

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.text.value
    })
    renderTodos(todos, filters)

})