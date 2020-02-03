function menuItem(name, allergies, kcal, pathToImg){
    this.name = name;
    this.allergies = 'Contains ' + allergies;
    this.kcal =  kcal + 'kcal';
    this.pathToImg = pathToImg;
    this.burger = function() {
        return this.name + ' ' + this.kcal;
    };
}

let TheOG = new menuItem('The OG', 'gluten', 700, 'img/TheOG.png');
let HolyCow = new menuItem('Holy Cow', 'lactose', 900, 'img/HolyCow.png')
let TMC = new menuItem('The Monster Chickenburger', 'everything', 1500, 'img/TMC.png')
let DoubleM = new menuItem('The Double', 'gluten', 800, '')
let SingleM = new menuItem('The Single', 'gluten', 450, '')

var para1 = document.createElement("LI");
var para2 = document.createElement("LI");
var para3 = document.createElement("LI");
var para4 = document.createElement("LI");
var para5 = document.createElement("LI");

var node1 = document.createTextNode(TheOG.name)
var node2 = document.createTextNode(HolyCow.name)
var node3 = document.createTextNode(TMC.name)
var node4 = document.createTextNode(DoubleM.name)
var node5 = document.createTextNode(SingleM.name)
para1.appendChild(node1);
para2.appendChild(node2);
para3.appendChild(node3);
para4.appendChild(node4);
para5.appendChild(node5);
var element = document.getElementById("headertext")
element.appendChild(para1);
element.appendChild(para2);
element.appendChild(para3);
element.appendChild(para4);
element.appendChild(para5);

console.log(TheOG.burger() + '\n' + HolyCow.burger() + '\n' + TMC.burger() + '\n' + DoubleM.burger() + '\n' + SingleM.burger());