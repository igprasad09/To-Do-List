let list = document.querySelector(".list");
let inputbox =document.querySelector(".inputbox");
let addbtn = document.querySelector(".addbtn");
let div,btn,todo,radio;
let inputtext = document.querySelector("#input"); 
inputtext.value = "";
let a = 1;
function adding(){
    if(inputtext.value == ""){
        alert("Plese Enter To-DO");
    }else{
    if(a<=5){
    let div = document.createElement("div");
    div.className = "divs";
    list.appendChild(div);
    let radio = document.createElement("input");
    radio.type = 'radio';
    let todo = document.createElement("p");
    todo.innerHTML = inputtext.value;
    todo.className = "todo";

    let btn = document.createElement("button");
    btn.innerHTML ="Delete";
    btn.className = "dltbtn";
    

    div.appendChild(radio);
    div.appendChild(todo);
    div.appendChild(btn);
    a++;
    inputtext.value = "";
    btn.onclick = function(){
        div.remove();
        a--;
    }
    
    radio.onclick = function(){
        todo.style.textDecoration = 'line-through';
    }
   }else{
    alert("Only 5 To-Dos Space");
   }
}
}

