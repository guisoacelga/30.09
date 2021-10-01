"use strict";

// hier kommen ihre Skripte hin

const text1 = document.getElementById("input-field");
const parentUl = document.querySelector("ul");

text1.addEventListener('focus', (event) => {
    event.target.classList.add("focused")

});

text1.addEventListener('blur', (event) => {
    event.target.classList.remove("focused")
});

text1.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        console.log(text1.value)
        splitText(text1.value)
        parentUl.addEventListener('mouseover', hoverLetter);

    }
});


function splitText(text) {
    let i= 0;
    text.split('').forEach(c => {
        let listItem = document.createElement("li");
        //let pLetter = document.createElement("p")
        //pLetter.setAttribute("id", `${i}`)
        listItem.setAttribute("id",`${i}`)
       // listItem.appendChild(pLetter);
        parentUl.appendChild(listItem)
        let letterText = document.createTextNode(c);
        listItem.appendChild(letterText)
        i++;
    })
}

function hoverLetter(){
    let cString = event.target.textContent;
    let t = event.target;

    for (let node of parentUl.childNodes){
        if (cString !== undefined){
            t.classList.add("hovered");
            if (node.textContent === cString){
                node.classList.add("hovered");
            }
        }
    }

}

// let par = document.getElementById(i);
// let letterText = document.createTextNode(c);
// par.appendChild(letterText);



