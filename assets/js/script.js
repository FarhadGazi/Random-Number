$(document).ready(function(){
    
    

  $("button").click(function(){
    
    var randomNumber1=Math.floor(Math.random()*9)+1;
    var randomNumber2=Math.floor(Math.random()*9)+1;
    var randomNumber3=Math.floor(Math.random()*9)+1;
    console.log(randomNumber1+" "+randomNumber2+" "+randomNumber3+"\n") 
    // Animation fuction//
    function animateValue(obj, start, end, duration) {
      let startTimestamp = null;
      console.log(startTimestamp+"\n")
      const step = (timestamp) => {
        

        if (!startTimestamp) 
        startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        var n=Math.floor(progress * (end - start) + start)
        obj.innerHTML =n ;
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
    
    const obj = document.getElementById("id");
    animateValue(obj, 10, randomNumber1, 1000);
    const obj1 = document.getElementById("id1");
    animateValue(obj1, 10, randomNumber2, 1000);
    const obj2 = document.getElementById("id2");
    animateValue(obj2, 10, randomNumber3, 1000);


    $(".num1").text(randomNumber1);
    $(".num2").text(randomNumber2);
    $(".num3").text(randomNumber3);

    console.log(randomNumber1+" "+randomNumber2+" "+randomNumber3+"\n")
    
    if(randomNumber1 == randomNumber2 && randomNumber2 == randomNumber3 && randomNumber1 == randomNumber3){
        $(".result").text("Congratulations you have won!!")
        alert("win!!")
    }else if(randomNumber1==randomNumber2 || randomNumber2==randomNumber3 || randomNumber1==randomNumber3){
        $(".result").text("50 points")
    }else{
        $(".result").text("No points. Try again!! ")
    }

    
  })


  




})