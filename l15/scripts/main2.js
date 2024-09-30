class TodoList {
    notes = []
    addNote(text) {
        if (text.trim() === '') {
            console.log('Нотатка не може бути порожньою');
            return;
        }
        const now = new Date()
        const note = {
            id: this.notes.length + 1,
            text: text,
            completed: false,
            createdAt: now,
            updatedAt: now
        };
        this.notes.push(note);
        console.log(`Нотатка додана: ${text}`);
    }
    removeNote(id) {
        this.notes = this.notes.filter(note => note.id !== id);
        console.log(`Нотатка з ID ${id} видалена`);
    }
    editNote(id, newText) {
        const note = this.notes.find(note => note.id === id)
        if (!note) {
            console.log(`Нотатка з ID ${id} не знайдена`);
            return;
        }
        if (newText.trim() === '') {
            console.log('Нотатка не може бути порожньою');
            return;
        }
        note.text = newText;
        note.updatedAt = new Date(); 
        console.log(`Нотатка з ID ${id} відредагована: ${newText}`);
    }
    getNoteInfo(id) {
        const note = this.notes.find(note => note.id === id)
        if (!note) {
            console.log(`Нотатка з ID ${id} не знайдена`);
            return;
        }
        console.log(`ID: ${note.id}, Текст: ${note.text}, Виконана: ${note.completed}, Створена: ${note.createdAt}, Останнє редагування: ${note.updatedAt}`);
    }
    getAllNotes() {
        if (this.notes.length === 0) {
            console.log('Список нотаток порожній');
        } else {
            console.log('Список всіх нотаток:');
            this.notes.forEach(note => {
                console.log(`ID: ${note.id}, Текст: ${note.text}, Виконана: ${note.completed}, Створена: ${note.createdAt}, Останнє редагування: ${note.updatedAt}`);
            });
        }
    }
    completeNote(id) {
        const note = this.notes.find(note => note.id === id)
        if (!note) {
            console.log(`Нотатка з ID ${id} не знайдена`);
            return;
        }
        note.completed = true;
        note.updatedAt = new Date(); 
        console.log(`Нотатка з ID ${id} позначена як виконана`);
    }
    getStats() {
        const totalNotes = this.notes.length
        const incompleteNotes = this.notes.filter(note => !note.completed).length
        console.log(`Всього нотаток: ${totalNotes}, Невиконаних: ${incompleteNotes}`);
    }
    findNoteByText(text) {
        const foundNotes = this.notes.filter(note => note.text.toLowerCase().includes(text.toLowerCase()))
        if (foundNotes.length === 0) {
            console.log(`Нотатки з текстом "${text}" не знайдено`);
        } else {
            console.log(`Знайдено нотатки з текстом "${text}":`);
            foundNotes.forEach(note => {
                console.log(`ID: ${note.id}, Текст: ${note.text}, Виконана: ${note.completed}, Створена: ${note.createdAt}, Останнє редагування: ${note.updatedAt}`);
            });
        }
    }
    findNotesByDate(dateString) {
        const date = new Date(dateString)
        const foundNotes = this.notes.filter(note => note.createdAt.toDateString() === date.toDateString())
        if (foundNotes.length === 0) {
            console.log(`Нотатки, створені ${date.toDateString()}, не знайдено`);
        } else {
            console.log(`Знайдено нотатки, створені ${date.toDateString()}:`);
            foundNotes.forEach(note => {
                console.log(`ID: ${note.id}, Текст: ${note.text}, Виконана: ${note.completed}, Створена: ${note.createdAt}, Останнє редагування: ${note.updatedAt}`);
            });
        }
    }
    sortByCompleted() {
        const sortedNotes = this.notes.slice().sort((a, b) => b.completed - a.completed)
        console.log('Нотатки відсортовані за статусом (спочатку виконані):');
        sortedNotes.forEach(note => {
            console.log(`ID: ${note.id}, Текст: ${note.text}, Виконана: ${note.completed}, Створена: ${note.createdAt}, Останнє редагування: ${note.updatedAt}`);
        });
    }
    sortByIncomplete() {
        const sortedNotes = this.notes.slice().sort((a, b) => a.completed - b.completed)
        console.log('Нотатки відсортовані за статусом (спочатку невиконані):');
        sortedNotes.forEach(note => {
            console.log(`ID: ${note.id}, Текст: ${note.text}, Виконана: ${note.completed}, Створена: ${note.createdAt}, Останнє редагування: ${note.updatedAt}`);
        });
    }
    sortByDateNewest() {
        const sortedNotes = this.notes.slice().sort((a, b) => b.createdAt - a.createdAt)
        console.log('Нотатки відсортовані за датою створення (спочатку новіші):');
        sortedNotes.forEach(note => {
            console.log(`ID: ${note.id}, Текст: ${note.text}, Виконана: ${note.completed}, Створена: ${note.createdAt}, Останнє редагування: ${note.updatedAt}`);
        });
    }
    sortByDateOldest() {
        const sortedNotes = this.notes.slice().sort((a, b) => a.createdAt - b.createdAt)
        console.log('Нотатки відсортовані за датою створення (спочатку старіші):');
        sortedNotes.forEach(note => {
            console.log(`ID: ${note.id}, Текст: ${note.text}, Виконана: ${note.completed}, Створена: ${note.createdAt}, Останнє редагування: ${note.updatedAt}`);
        });
    }
}
