
function ajax(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange= function()
{

if(this.readyState==4&&this.status==200){ 
  var x;
  x=JSON.parse(this.responseText);
  var output = x.grocery;
var htmlc="";
var display = document.getElementById("da1");


  for(i=0;i<output.length;i++){
   
    var cont=output[i];
       console.log(cont);
       htmlc =htmlc+`<tr><td>`+output[i].SerialNo+`</td><td>`+output[i].name+`</td><td>`+output[i].quantity+`</td><td>`+output[i].unit+`</td><td>`+output[i].deparment+`</td><td>`+output[i].notes+`</td></tr>`;                          
      
      
  }
                             
                                
}
document.getElementById("display_area").innerHTML = htmlc;
      

}
  
xhttp.open("GET","grocery.json",true);
xhttp.send();
}