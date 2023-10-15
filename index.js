let todoList=[];
displayItems();
function addContent(){
    let input=document.querySelector('#todo-input');
    let inputContent=input.value;
    todoList.push(inputContent);
    input.value='';
    displayItems();
}

function displayItems(){
    let displayContainer=document.querySelector('.displaycontaier');
    let todoDate=document.querySelector('#todo-date');
    let displayDate=todoDate.value;
    let newHtml='';
    for(let i=0;i<todoList.length;i++){
        newHtml+=`
            <span>${todoList[i]}</span>
            <span>${displayDate}</span>
            <button onclick="todoList.splice(${i},1); displayItems();" class="btn-design">delete</button>
        `;
    }
    displayContainer.innerHTML=newHtml;
}
