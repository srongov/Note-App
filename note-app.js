let todos = []

const filters = {
    searchText: '',
    body: ''
}

const renderTodos = function (todos, filters) {
    const filtersTodos = todos.filter(function (todo) {
        const filterSearchText = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const filterBody = todo.text.toLowerCase().includes(filters.body.toLowerCase())
        return filterSearchText && filterBody
    })
    filtersTodos.forEach(function (todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('body').appendChild(p)
        const pEl = document.createElement('p')
        pEl.textContent = todo.body
        document.querySelector('body').appendChild(pEl)
    })

}


renderTodos(todos, filters)

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.text.value,
        body: e.target.elements.body.value
    })
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
    e.target.elements.body.value = ''
})