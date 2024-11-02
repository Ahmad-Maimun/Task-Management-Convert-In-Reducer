function tasksReducer(tasks, action) {
    if (action.type === 'added') {
        return [
            ...tasks,
            action.item,
        ];   
    } else if (action.type === 'edited') {
        return tasks.map((item) => {
            if (action.data.id === item.id) {
                return action.data;
            } else {
                return item;
            }
        })
    } else if (action.type === 'deleted') {
        return tasks.filter((item) => {
            return item.id != action.id;
        })
    } else if (action.type === 'clear_all_tasks') {
        return action.task
    }
}

export default tasksReducer