function init() {
var canvas = document.getElementById('game_canvas')
var ctx = canvas.getContext('2d');
var img = new Image();
img.src = 'pacman10-hp-sprite.png';
ctx.drawImage(img,340,0,450,130,0,0,450,130);
ctx.drawImage(img,80,0,16,22,180,94,16,18);


}



