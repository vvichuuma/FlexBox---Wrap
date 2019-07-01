
var colors = ["red" , "blue" , "green", "brown", "purple"]; 

var count = 0;
var cc = 0;

function app(){

    var random_color = colors[cc];
   
     document.querySelector("#code").innerHTML += `
     
        <div id= "box-${count}" class="boxy">
          
        </div>
     `
      
      var c = document.querySelector(`#box-${count}`);
      c.style.backgroundColor = random_color;
      count += 1;
      console.log(c);
      cc += 1; 

      if(cc >= colors.length){
          cc = 0;
      }
   
}