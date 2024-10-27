const newTask = document.getElementById('newTask');
const taskList = document.getElementById('taskList');



// save data untuk local storage
function getData() {
    const tasks = localStorage.getData("tasks");
    return tasks ? JSON.parse(tasks) : [];
}
function saveData(tasks) {
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

// untuk nambah tugas
function addTask() {
    if(newTask.value === "") {
        alert('Isi dong !!!');
        return;
    } 

    const li = document.createElement('li');
    li.classList.add('task-item');

    // ini fungsi chekbok
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        if(checkbox.checked) {
            taskText.classList.add('selesai');
        } else {
            taskText.classList.remove('selesai');
        }
    });


    // fungsi untuk edit 
    const taskText = document.createElement('span');
    taskText.classList.add('task-text');
    taskText.textContent = newTask.value;
    

    // fungsi untuk icon edit
    const iconContrainer = document.createElement('span');
    iconContrainer.classList.add('icons');

    const editIcon = document.createElement('i');
    editIcon.classList.add('fa-solid', 'fa-pen-to-square');
    editIcon.addEventListener('click', function() {
        enableEdit(taskText, li, checkbox);
    });

    // fungsi untuk menghapus
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa-solid', 'fa-trash');
    deleteIcon.addEventListener('click', function() {
        deleteTask(li);
    });

    // ikon ke dalam kontrainer
    iconContrainer.appendChild(editIcon);
    iconContrainer.appendChild(deleteIcon);

    // masukan checkbox, text, dan icon 
    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(iconContrainer);

    taskList.appendChild(li);

    

    newTask.value = "";
    saveData()
}


// fungsi buat edit teks
function enableEdit(taskText, li, checkbox) {

    // ketika masuk mode edit, checkbok ga bisa di apa apain
    checkbox.disabled = true;

    // buat element input ketika edit
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = taskText.textContent; 
    editInput.classList.add('edit-input'); 

    li.replaceChild(editInput, taskText);
    editInput.focus(); 

    editInput.addEventListener('blur', () => {
        editTask(editInput, li, checkbox); 
    });

    // fungsi enter
    editInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') { 
            editTask(editInput, li, checkbox);
        }
    });
}

// buat aktifin fungsi edit
function editTask(inputElement, li, checkbox) {
    const newTask = inputElement.value.trim(); 

    if (newTask !== "") {
        const taskText = document.createElement('span'); 
        taskText.classList.add('task-text');
        taskText.textContent = newTask; 
        li.replaceChild(taskText, inputElement);

        // waktu di edit checkbok harus mati
        checkbox.disabled = false;
        
        // fungsi yang sama buat chekbox
        checkbox.addEventListener('change', function() {
            if(checkbox.checked) {
                taskText.classList.add('selesai');
            } else {
                taskText.classList.remove('selesai');
            }
        });

        const editIcon = li.querySelector('.fa-pen-to-square');
        editIcon.addEventListener('click', function() {
            enableEdit(taskText, li, checkbox);
        });

        const tasks = getData(); 
        const index = Array.from(li.parentNode.children).indexOf(li); 
        tasks[index] = newTask; 
        saveData(tasks);

    } else {
        inputElement.value = li.querySelector('.task-text').textContent; 
    }
}

function deleteTask(taskItem) {
    taskItem.remove();

    const tasks = getData();
    const index = Array.from(taskList.childern).indexOf(taskItem);
    tasks.splice(index, 1);
    saveData(tasks);
}

// Change apearance
// Test
const colorPicker = document.getElementById('color');
colorPicker.addEventListener('input', function() {
    document.getElementById('container').style.backgroundColor = colorPicker.value;
});


// anu
const fontSizeSlider = document.getElementById('fontSizeSlider');
const sizeValue = document.getElementById('sizeValue');

fontSizeSlider.addEventListener('input', function() {
    const size = this.value;
    document.body.style.fontSize = size + 'px';
    sizeValue.textContent = size + 'px';
});

// aasdasd
const fontSelect = document.getElementById('fontStyleSelect');

fontSelect.addEventListener('change', function() {
    document.body.style.fontFamily = this.value;
});

// dark mode
const toggleSwitch = document.getElementById('darkModeToggle');

toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('container').classList.add('dark-mode');
        document.getElementById('to-do').classList.add('dark-mode');
        document.getElementById('newTask').classList.add('garis');
    } else {
        document.getElementById('container').classList.remove('dark-mode');
        document.getElementById('to-do').classList.remove('dark-mode');
        document.getElementById('newTask').classList.remove('garis')
    }
});

console.log(document.getElementById('container'));
console.log(document.getElementById('to-do'));
console.log(document.getElementById('newTask'));
