'use strict';
const socket = io();


const vm = new Vue({
  el: 'main',
  data: {
    order: null,
    ID: 0,
    orderedFood: [],
    food: food,
    finalOrder: ''
  },
  methods: {
    markDone: function() {
      
      var myArray = [];
      var myList = document.getElementById('payment');
      myArray[0] = document.getElementById('fn').value;
      myArray[1] = document.getElementById('email').value;
      myArray[2] = myList.options[myList.selectedIndex].text;
      let gender = document.getElementsByName('gender');
      for(var i = 0; i < gender.length; ++i){
          if(gender[i].checked){
              myArray[3] = gender[i].value;
          }
      }
      myArray[4] = this.orderedFood;
      this.finalOrder = myArray;
      this.addOrder();
      },
      getNext: function() {
        this.ID += 1;
        return this.ID;
      },
      displayOrder: function(event) {
        let offset = {
          x: event.currentTarget.getBoundingClientRect().left,
          y: event.currentTarget.getBoundingClientRect().top,
        };
        let ordDetails = {
          details: {
          x: event.clientX - 10 - offset.x,
          y: event.clientY - 10 - offset.y,
          }
        };
        this.order = ordDetails;
      },
      addOrder: function() {
        
        if(this.order === null) {
          return;
        }
        let orderSend = this.order;
        orderSend.orderId = this.getNext();
        orderSend.orderItems = this.orderedFood;

        socket.emit('addOrder', orderSend);
        console.log(orderSend.orderItems);
        this.order = null;
      }
    }
});