var data
var max=6
function getcont()
{
	var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange = function () {
   if (xhttp.readyState==4 && xhttp.status==200) {
	   data=xhttp.responseText;
	   console.log(data)
   }
}
xhttp.open("GET","http://www.etrt.ru/kril/contents.txt",false);
xhttp.send();
}
function randomInteger(min, max) {
  var rand = min + Math.random() * (max - min)
  rand = Math.round(rand);
  return rand;
}
function randomize()
{
getcont()
var num=randomInteger(1,max)
var out = data.search(num); 
var to = data.search(num+1);
var newstr = data.substring(out+1,to);
$("p.text").html(newstr)
}
randomize()