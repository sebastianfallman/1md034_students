const vm = new Vue({
  el: 'main',
  data: {
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
      myArray[2] = document.getElementById('street').value;
      myArray[3] = document.getElementById('hn').value;
      myArray[4] = myList.options[myList.selectedIndex].text;
      
      let gender = document.getElementsByName('gender');
        
      for(var i = 0; i < gender.length; ++i){
          if(gender[i].checked){
              myArray[5] = gender[i].value;
          }
      }
  
      myArray[6] = this.orderedFood.toString();
      this.finalOrder = myArray;
      }
    }  
});