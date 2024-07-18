function bmi(){
    var a= parseInt(document.getElementById("v1").value);
    var b= parseInt(document.getElementById("v2").value);
    var v= b/100;
    var g=v*v
    var e=a/g
     document.getElementById("r").textContent =e.toFixed(1)

    let  h = e;
    if(h<18.5)
        {
            document.getElementById("g").textContent = "you are under weight"
            
    
        }
        else if (h==18.5) {
            document.getElementById("g").textContent ="You are Normal Weight"
            
            
        } 
        else if (h<27) {
            document.getElementById("g").textContent ="You are Normal Weight"
            
            
        } 
        else if (h<30) {
            document.getElementById("g").textContent ="You are Overweight Case 1 "
            
            
        } 
        else if ( h<35) {
            document.getElementById("g").textContent ="You are Overweight Case 2"
            
            
        } 
        else if (h<40) {
            document.getElementById("g").textContent ="You are Over Obesity Case 1"
            
            
        } 
        else if (h>50) {
            document.getElementById("g").textContent ="Invalid input "
            document.getElementById("x").textContent ="...please enter a valid input... "
            

            
            
        } 
         
        else if (h<45) {
            document.getElementById("g").textContent ="You are Over Obesity Case 2"
            
            
        } 
    }
      


