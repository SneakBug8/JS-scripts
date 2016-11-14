var data
var maxmn=4
var maxmsn=4
var maxfn=6
var maxfsn=6
function getcont(adr)
{
	var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange = function () {
   if (xhttp.readyState==4 && xhttp.status==200) {
	   data=xhttp.responseText;
	   console.log(data)
   }
}
xhttp.open("GET",adr,false);
xhttp.send();
}
function randomInteger(min, max) {
  var rand = min + Math.random() * (max - min)
  rand = Math.round(rand);
  return rand;
}
function randomizemale()
{
getcont("http://www.etrt.ru/namegen/malename.txt")
var num=randomInteger(1,maxmn)
var out = data.search(num); 
var to = data.search(num+1);
var newstr = data.substring(out+1,to);
$("textarea.name").html(newstr)
getcont("http://www.etrt.ru/namegen/malesurname.txt")
var num=randomInteger(1,maxmsn)
var out = data.search(num); 
var to = data.search(num+1);
var newstr = data.substring(out+1,to);
$("textarea.surname").html(newstr)
}

function randomizefemale()
{
getcont("http://www.etrt.ru/namegen/femalename.txt")
var num=randomInteger(1,maxfn)
var out = data.search(num); 
var to = data.search(num+1);
var newstr = data.substring(out+1,to);
$("textarea.name").html(newstr)
getcont("http://www.etrt.ru/namegen/femalesurname.txt")
var num=randomInteger(1,maxfsn)
var out = data.search(num); 
var to = data.search(num+1);
var newstr = data.substring(out+1,to);
$("textarea.surname").html(newstr)
}