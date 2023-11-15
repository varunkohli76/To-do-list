let One = document.getElementById("two");
let three = document.querySelector(".three");

function Add() {
    if (One.value == "") {
        alert("Please enter the task")
    } else {
        let newele = document.createElement("ul");
        newele.innerHTML =`<span class="text"><button class="btn4">Done</button>${One.value}</span><button id="btn1" onclick="Delete()">Delete</button>`
        // three.appendChild(newele);
        three.insertBefore(newele , three.firstChild)
        One.value = "";
    }
}
function Delete() {
    let deletee = document.getElementById('btn1');
    deletee.parentElement.remove('three');
}

three.addEventListener('click', function line(f) {
    if (f.target.classList.contains('btn4')) {
        f.target.parentElement.classList.toggle('hello')
    }
})