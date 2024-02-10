const todo_list=[];
function renderTodolist(){
    let todoElements='';
    for(let i=0;i<todo_list.length;i++){
        const todoobject=todo_list[i];
        const name=todoobject.name;
        const duedate=todoobject.duedate;
        const html=`
       <div>${name}</div>   
       <div>${duedate}</div>
        <button class="delete" onclick="
        todo_list.splice(${i},1);
        renderTodolist();
        ">Delete</button>
        `;
        todoElements+=html;
    }
    document.querySelector('.js-todo-list').innerHTML=todoElements;
}
function addtodo(){
   const inputElement= document.querySelector('.js-name-input');
   const name=inputElement.value;
   const inputdate=document.querySelector('.js-date-input');
    const duedate=inputdate.value;
  /* todo_list.push({name:name,
                   duedate:duedate});*/
     todo_list.push({name,
    duedate});
   inputElement.value='';
   renderTodolist();
}

