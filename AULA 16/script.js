const URL = 'https://taskmanager-9bpo.onrender.com/tasks';

async function fetchTasks() {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const tasks = await response.json();
        console.log('Fetched tasks:', tasks);
        return tasks;
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}
fetchTasks();

async function fetchOneTask(id) {
    try {
        const response = await fetch(`${URL}/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const task = await response.json();
        console.log(`Fetched task ${id}:`, task);
        return task;
    } catch (error) {
        console.error(`Error fetching task ${id}:`, error);
    }
}
fetchOneTask("eW1YdXFpqjG0gRFIQa7x");

async function createTask(taskData) {
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskData)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const newTask = await response.json();
        console.log('Created task:', newTask);
        return newTask;
    } catch (error) {
        console.error('Error creating task:', error);
    }
}
// createTask({ nome: "New Task", descricao: "This is a new task.", prioridade: 0, status: false });

async function updateTask(id, updatedData) {
    try {
        const response = await fetch(`${URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const updatedTask = await response.json();
        console.log(`Updated task ${id}:`, updatedTask);
        return updatedTask;
    } catch (error) {
        console.error(`Error updating task ${id}:`, error);
    }
}
// updateTask("eW1YdXFpqjG0gRFIQa7x", { nome: "Updated Task", descricao: "This task has been updated.", prioridade: 1, status: true });

async function deleteTask(id) {
    try {
        const response = await fetch(`${URL}/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log(`Deleted task ${id}`);
    } catch (error) {
        console.error(`Error deleting task ${id}:`, error);
    }
}
// deleteTask("eW1YdXFpqjG0gRFIQa7x");