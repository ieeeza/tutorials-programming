let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightgreen"

let fruits = document.getElementsByName("fruits");
console.log(fruits)
fruits.forEach(fruit => {
    if(fruit.checked) {
        console.log(fruit.value)
    }
})

let vegetables = document.getElementsByTagName("li");
vegetables[2].style.backgroundColor = "lightgreen";

let desserts = document.getElementsByClassName("desserts");
desserts[2].style.backgroundColor = "lightgreen"

let element = document.querySelector("#myTitle");
element.style.backgroundColor = "lightgreen"

let element = document.querySelector("[for]"); //<-- attributes
element.style.backgroundColor = "lightgreen"

let element = document.querySelector(".myTitle");
element.style.backgroundColor = "lightgreen"

let element = document.querySelectorAll(".myTitle");
elements.forEach(element => {
    element.style.backgroundColor = "lightgreen"
})
