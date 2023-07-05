function inptNumber(number) {
    var result = document.getElementById("result");
    result.value += number;
  }
  function inptOperator(operator) {
    var result = document.getElementById("result");
    result.value += operator;
  }
  function calculate() {
    var result = document.getElementById("result");
    result.value = eval(result.value);
  }
  function clearResult() {
    var result = document.getElementById("result");
    result.value = "";
  }

  function sin(){
      var result = document.getElementById("result");
      var currentValue = result.value;
      var result = Math.sin(currentValue * Math.PI / 180);
      result.value += result; 
    }


  // function inpt(sin) {
  //   var result = document.getElementById("result");
  //   result.value = Math.sin(result.value);
  // }
  function inpt(cos) {
    var result = document.getElementById("result");
    result.value = Math.cos(result.value);
  }
  function inpt(tan) {
    var result = document.getElementById("result");
    result.value = Math.tan(result.value);
  }
  function inpt(log) {
    var result = document.getElementById("result");
    result.value = Math.log10(result.value);
  }
  var result = document.getElementById('result');
  var piButton = document.getElementById('pi-button');
  function inp(pi) {
    result.value += Math.PI;
  };
  function inpt(sqr) {
    var result = document.getElementById("result");
    result.value = Math.sqrt(result.value);
  }
  function percent() {
    var result = document.getElementById('result');
    var percent = result.value/100;
    result.value = percent;
  }
  function power() {
      var result = document.getElementById("result");
      var currentValue = Number + "^";
      var result = Math.pow(currentValue, power);
      result.value = result.toFixed(2);
    }
    function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerHTML = timeString;
  }
  setInterval(displayTime, 1000);