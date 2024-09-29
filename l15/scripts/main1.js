function createTodo(title) {
    if (!title) {
        throw new Error("Title cannot be empty")
    }
    return {
        title: title,
        completed: false,
        markAsCompleted() {
            this.completed = true
        },
        getInfo() {
            return {
                title: this.title,
                completed: this.completed
            };
        }
    };
}
function createTodoList() {
    const todos = []
    return {
        add(title) {
            const todo = createTodo(title);
            todos.push(todo);
        },
        remove(index) {
            if (index >= 0 && index < todos.length) {
                todos.splice(index, 1);
            }
        },
        edit(index, newTitle) {
            if (index >= 0 && index < todos.length && newTitle) {
                todos[index].title = newTitle;
            }
        },
        getAll() {
            return todos.map(todo => todo.getInfo());
        },
        getCompletedCount() {
            return todos.filter(todo => todo.completed).length;
        },
        getRemainingCount() {
            return todos.length - this.getCompletedCount();
        },
        findByName(name) {
            return todos
                .filter(todo => todo.title.toLowerCase().includes(name.toLowerCase()))
                .map(todo => todo.getInfo());
        },
        sortByStatus() {
            return todos.slice().sort((a, b) => {
                if (a.completed === b.completed) return 0;
                return a.completed ? 1 : -1; 
            }).map(todo => todo.getInfo());
        }
    };
}