const button = document.querySelector('button');
let taskCount=1;

button.addEventListener('click',()=>{
    const Task = document.getElementById('taskInput').value;

    const div = document.createElement('div');
    div.id='taskList';
    
    div.innerHTML =`${taskCount}. ${Task}`;
    taskCount++;

    const container = document.getElementById('container');
    container.append(div);

    document.getElementById('taskInput').value="";
});