// Seleccionar elementos del DOM
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Función para agregar una tarea
function addTask() {
    const taskText = taskInput.value;

    // Validar si el input no está vacío
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    // Crear un nuevo elemento li
    const li = document.createElement('li');
    li.textContent = taskText;

    // Crear el botón de eliminar
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };

    // Añadir el botón de eliminar al elemento li
    li.appendChild(deleteBtn);

    // Añadir el nuevo elemento li a la lista de tareas
    taskList.appendChild(li);

    // Limpiar el input
    taskInput.value = '';
}

// Evento de clic en el botón "Add Task"
addBtn.addEventListener('click', addTask);

// Permitir agregar tareas al presionar "Enter"
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
