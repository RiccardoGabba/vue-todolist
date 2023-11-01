const {createApp} = app;

createApp({
    data(){
        return {
            tasks: [
                {
                    id: 1,
                    text: 'Task 1',
                    done: false
                },
                {
                    id: 2,
                    text: 'Task 2',
                    done: true
                },
                {
                    id: 3,
                    text: 'Task 3',
                    done: false
                }    
            ],
            lastId: 3,
            todoText: '',
        }
    },
    methods: {
        removeTask(i){
            this.tasks.splice(i, 1)
        },
        addTask(){
            this.lastId++
            const newTask = {
                id: this.lastId,
                text: this.todoText,
                done: false
            }
            //unshift mette la task sopra tutti, push mette la task sotto tutti.
            this.tasks.unshift(newTask)
        }
    }
    
    }).$mount('#app');