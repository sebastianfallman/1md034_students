/*let burgerMenu = document.getElementById("menu");

for (let i = 0; i < food.length; ++i){
    let burger = document.createElement("div");
    let ul = document.createElement("ul");
    let img = document.createElement("img");
    img.src = food[i].pathToImg;
    img.className = "burgerimg";

    let burgerName = document.createTextNode(food[i].name);

    let burgerKcal = document.createElement("li");
    burgerKcal.appendChild(document.createTextNode(food[i].kcal + ' kcal'));

    if (food[i].allergies !== ''){
        let burgerAllergies = document.createElement("li");
        burgerAllergies.appendChild(document.createTextNode('Contains ' + food[i].allergies));
        ul.appendChild(burgerAllergies);
    }

    ul.appendChild(burgerKcal);
    burger.appendChild(burgerName);
    burger.appendChild(img);
    burger.appendChild(ul)
    burgerMenu.appendChild(burger);
}


// Collects the customer information
function collectForm() { 
    console.log("Tjena");
    var myArray = [];
    var myList = document.getElementById('payment');
    myArray[0] = document.getElementById('fn').value;
    myArray[1] = document.getElementById('email').value;
    myArray[2] = document.getElementById('street').value;
    myArray[3] = document.getElementById('hn').value;
    myArray[4] = myList.options[myList.selectedIndex].text;
    let gender = document.getElementsByName('gender');
    for(var i = 0; i < gender.length; ++i){
        if(gender[i].checked){
            myArray[5] = gender[i].value;
        }
    }
    console.log(myArray);
}

// Prints to console
function buttonPressed() {
    console.log("Button pressed");
}

let myButton = document.getElementById('orderButton');

myButton.addEventListener("click", buttonPressed);
myButton.addEventListener("click", collectForm);
*/