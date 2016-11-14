var background = document.createElement('audio');
var sound = document.createElement('audio');
function load()
{
background.src = 'assets/sounds/teleport.mp3';
if (Cookies.get('settings_music')=="1")
{
	console.log("Music disabled")
}
else
{
	setInterval(backmusic, 120000)
	backmusic();
}
}
function backmusic() // Background music changer
{
music=Math.floor(Math.random()*2)
switch (music) {
   case 0:
      background.src = 'assets/music/2.DarkHall.mp3';
      break
   case 1:
      background.src = 'assets/music/1.Unknown place.mp3';
      break
	case 2:
		background.src = 'assets/music/3.Not enough light.mp3';
		break
}
background.play()
}
if (Cookies.get('settings_sound')=="1")
{
	console.log("Sounds disabled")
	function playsound (src) {} // Changing sound playing at time
}
else
{
function playsound (src) // Changing sound playing at time
{
sound.src = "assets/sounds/"+src;
sound.play()
}
}
