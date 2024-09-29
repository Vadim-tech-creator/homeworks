function createTodo(title) {
    if (!title) {
        throw new Error("Title cannot be empty")
    }
    const createdDate = new Date()
    let editedDate = null

    return {
        title: title,
        completed: false,
        createdDate: createdDate,
        get editedDate() {
            return editedDate;
        },
        markAsCompleted() {
            this.completed = true;
        },
        edit(newTitle) {
            if (newTitle) {
                this.title = newTitle;
                editedDate = new Date(); 
            }
        },
        getInfo() {
            return {
                title: this.title,
                completed: this.completed,
                createdDate: this.createdDate,
                editedDate: this.editedDate,
            };
        }
    };
}
function createTodoList() {
    const todos = []
    return {
        add(title) {
            const todo = createTodo(title)
            todos.push(todo);
        },
        remove(index) {
            if (index >= 0 && index < todos.length) {
                todos.splice(index, 1);
            }
        },
        edit(index, newTitle) {
            if (index >= 0 && index < todos.length) {
                todos[index].edit(newTitle);
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
        },
        sortByCreationDate() {
            return todos.slice().sort((a, b) => a.createdDate - b.createdDate)
                .map(todo => todo.getInfo());
        },
        sortByEditDate() {
            return todos.slice().sort((a, b) => {
                if (a.editedDate === null) return 1; 
                if (b.editedDate === null) return -1; 
                return a.editedDate - b.editedDate;
            }).map(todo => todo.getInfo());
        }
    };
}