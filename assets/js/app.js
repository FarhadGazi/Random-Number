var numberSpin = function(selector) {
    var element = document.getElementById(selector);
    var factor = 10 + Math.floor(Math.random()*10);
    var num = 10;
    var section = 100/(num + 1);
    var stopValue = 1;
    var spin = function(flag, x) {
      var value = element.style.transform;
      value = value ? parseFloat(value.split('(')[1].split(')').join('')) : 0;
      if(flag && flag == true){ 
        if(stopValue !=1 && (value <= stopValue || (value - section/factor) <= stopValue) && (typeof x != 'undefined' && (value >= x * -section && value <= (x-0.5>=0?x-0.5:stopValue==0?0:0.5) * -section))){ 
          element.style.transform = 'translateY(' + stopValue + '%)';
          stopValue = 1;
          return true; 
        }
        stopValue = Math.floor(value/section) >= -num ? Math.floor(value/section)*section : 0;
      }
      if (value && value <= -(section*(num))) {
        element.style.transform = 'translateY('+ section +'%)';
        value = 0;
      } else {
        value -= section/factor;
      }
      element.style.transform = 'translateY(' + value + '%)';    
      return false;
    }
    var spinTimer = setInterval(spin, 10);
    function stop(delay, x){ 
       setTimeout(function() {
          clearTimeout(spinTimer);
           var stopTimer = setInterval(function(){
              if(spin(true, x)) { clearInterval(stopTimer); }; 
          }, 10);
        }, delay);
    }
    return {
      stop: function(delay, x) {
        return stop(delay, x);
      }
    }
  }
  numberSpin('scroll1').stop(3000 + 100 + Math.floor(Math.random() * 100),1);
  numberSpin('scroll2').stop(3000 + 200 + Math.floor(Math.random() * 100),2);
  numberSpin('scroll3').stop(3000 + 300 + Math.floor(Math.random() * 100),5);       
  numberSpin('scroll4').stop(3000 + 400 + Math.floor(Math.random() * 100),0);
  numberSpin('scroll5').stop(3000 + 500 + Math.floor(Math.random() * 100),0);
  numberSpin('scroll6').stop(3000 + 600 + Math.floor(Math.random() * 100),0);
  numberSpin('scroll7').stop(3000 + 700 + Math.floor(Math.random() * 100),0);
  numberSpin('scroll8').stop(3000 + 800 + Math.floor(Math.random() * 100),0);
  numberSpin('scroll9').stop(3000 + 900 + Math.floor(Math.random() * 100),0);
  numberSpin('scroll10').stop(3000 + 1000 + Math.floor(Math.random() * 100),0);