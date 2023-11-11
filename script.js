const note_container = document.querySelector(".notes_container");
const create_btn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input_box");

function showNotes(){
    note_container.innerHTML = localStorage.getItem("notes");
}

showNotes();


// save data in browser

function updateStorage(){
    localStorage.setItem("notes",note_container.innerHTML);
}



// create function
create_btn.addEventListener("click", () => {
    let inputbox = document.createElement("p");
    let img  = document.createElement("img");
    inputbox.className="input_box";
    inputbox.setAttribute("contenteditable","true");
    img.src="img/bin.png";
    note_container.appendChild(inputbox).appendChild(img);
})


// delete function
note_container.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage()
    }else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input_box")
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage()
            }
        })
    }
})


document.addEventListener("keydown",event =>{

    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})