document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener("click", function(event){
    event.preventDefault()
  });
  
  function text(){
   let text = document.getElementById('new-task-description').value;
   let ul = document.getElementById('tasks');
   let li = document.createElement('li');
   ul.appendChild(li).innerHTML=text;
  }
  document.querySelector('#submit').addEventListener("click",text);

});
