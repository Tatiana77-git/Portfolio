const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

btn.addEventListener('click',() =>{
   const item = document.createElement('li');
   item.innerText = inputField.value;
   item.classList.add('listInside');
   list.appendChild(item);
   inputField.value="";

   item.addEventListener('click',() => {
      item.classList.add('listCompleted');
   })
  item.addEventListener('dblclick',() => {
   list.removeChild(item);
  })
  
})