let burgerMenu = document.getElementById("menu");

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