function menuItem(name, allergies, kcal, pathToImg){
  this.name = name;
  this.allergies = 'Contains ' + allergies;
  this.kcal =  kcal;
  this.pathToImg = pathToImg;
  this.burger = function() {
      return this.name + ' ' + this.kcal  + ' kcal';
  };
}


let TheOG = new menuItem('The OG', 'gluten', 700, 'img/TheOG.png');

let HolyCow = new menuItem('Holy Cow', 'lactose', 900, 'img/HolyCow.png')

let TMC = new menuItem('The Monster Chickenburger', 'everything', 1500, 'img/TMC.png')

let DoubleM = new menuItem('The Double', 'gluten', 800, '')

let SingleM = new menuItem('The Single', 'gluten', 450, '')

let element = document.getElementById("myID")

let para1 = document.createElement("p");
let para2 = document.createElement("p");
let para3 = document.createElement("p");
let para4 = document.createElement("p");
let para5 = document.createElement("p");

let node1 = document.createTextNode(TheOG.burger())
let node2 = document.createTextNode(HolyCow.burger())
let node3 = document.createTextNode(TMC.burger())
let node4 = document.createTextNode(DoubleM.burger())
let node5 = document.createTextNode(SingleM.burger())

para1.appendChild(node1);
para2.appendChild(node2);
para3.appendChild(node3);
para4.appendChild(node4);
para5.appendChild(node5);

/*
element.appendChild(para1);
element.appendChild(para2);
element.appendChild(para3);
element.appendChild(para4);
element.appendChild(para5);

 console.log(TheOG.burger() + '\n' + HolyCow.burger() + '\n' + TMC.burger() + '\n' + DoubleM.burger() + '\n' + SingleM.burger());
*/

const vm = new Vue({
    el: '#myID',
    data: {
      burgers: para1.outerHTML + para2.outerHTML + para3.outerHTML + para4.outerHTML + para5.outerHTML
    }
  })