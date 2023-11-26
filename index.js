let btnAdd=document.getElementById('add');
let inputText=document.getElementById('todo');
var ulTodo=document.getElementById('todos');
var todoItems=document.createElement('li');
let status=document.getElementById('status');
var fromLs=[];

let uncomplete=0;
let complete=0;
var getData=JSON.parse(localStorage.getItem('todo'));
if(getData){
    getData.forEach(lsData=>{
        if(lsData){
            add(lsData);
        }  
});
window.addEventListener('onload',(e)=>{
    e.preventDefault();
});
}
function display(){
    
}
function add(textLs){
    let text=inputText.value;
    // if(inputText.value==''){
    //     alert('please enter a task; you can not enter a null task')
    // }
    if (textLs){
        text=textLs.todo;
    }
    let p=document.createElement('p');
    let btnEdit=document.createElement('button');
    let btnDelete=document.createElement('button');
    btnEdit.innerText="Edit";
    btnDelete.innerText="Delete";
    let input=document.createTextNode(text);  
    p.appendChild(input);
    p.addEventListener('click',()=>{
            p.classList.toggle('complete');
            saveLS();
    });
    if(textLs){
    if(textLs.completed){
        p.classList.add('complete');
        complete++;
    };
}
    todoItems.appendChild(p);
    todoItems.appendChild(btnEdit);
    todoItems.appendChild(btnDelete);
    ulTodo.appendChild(todoItems);
    btnDelete.addEventListener('click',()=>
    {
        todoItems.removeChild(p);
        todoItems.removeChild(btnEdit);
        todoItems.removeChild(btnDelete);
        saveLS();
    });
    btnEdit.addEventListener('click',()=>
    {   
        inputText.value=p.innerText;
        todoItems.removeChild(p);
        todoItems.removeChild(btnEdit);
        todoItems.removeChild(btnDelete);
        saveLS();
    });
    console.log(complete);
    saveLS();
    countComplete();
    inputText.value='';
}
function countComplete(){
    let parag=document.querySelectorAll('p');
       parag.forEach(el=>{
        if(el.classList.contains('completed')){
            complete++;
        }
       });
       uncomplete=parag.length-complete-1;
       status.innerText=`${complete} Tasks completed ${uncomplete} Tasks uncompleted`;
    }
    
    console.log(complete,uncomplete);
function edit(){
    
}
// function markComplete(par){
//     par.addEventListener('click',()=>{
//         par.classList.toggle('complete');
//         saveLS();
//     });
// }


function saveLS(){
    let todosLi=document.querySelectorAll("li p");
    let todos=[];
    todosLi.forEach(el => {
        todos.push({todo:el.innerText,completed:el.classList.contains("complete")});
    });
    localStorage.setItem('todo',JSON.stringify(todos));
}





































// const todo=document.getElementById('todo');
// const addTodo=document.querySelector('.input button');
// let lists=document.querySelector('.tasks ul');
// var tasks=[];
// console.log('dsjfk');
// const lsTodos=localStorage.getItem('todo');
// add(lsTodos);
// function add(lsTodos){
//     let item = document.createElement('li');
//     let btnEdit=document.createElement('button');
//     let btnDelete=document.createElement('button');
//     btnEdit.innerText="Edit";
//     btnDelete.innerText="Delete";
//     if(document.getElementById('todo').value!==""){
//         tasks.push(document.getElementById('todo').value);
//       }
//       if (tasks!==null){
//         tasks.forEach(task=>{
//             item.innerHTML=`<p>${document.getElementById('todo').value!==""?task:document.getElementById('todo').value}</p> `
//         });
//       } 
//     console.log(tasks);
//     lists.appendChild(item);
//     lists.appendChild(btnEdit);
//     lists.appendChild(btnDelete);
//     btnDelete.addEventListener('click',()=>{
//         lists.removeChild(item);
//         lists.removeChild(btnEdit);
//         lists.removeChild(btnDelete);
//         localStorage.removeItem('todo');
//     });
//     btnEdit.addEventListener('click',()=>{
//         lists.removeChild(item);
//         lists.removeChild(btnEdit);
//         lists.removeChild(btnDelete);
//         document.getElementById('todo').value=item.innerText;
//     });
//     let liItems=document.querySelectorAll('li');
//     liItems.forEach(liItem=>{
//         localStorage.setItem('todo',JSON.stringify(tasks));
//     })
// }
// function edit(){

// }
// function deleteTodo(){

// }
