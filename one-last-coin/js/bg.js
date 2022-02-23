var c = document.getElementById('c');
var c1 = document.getElementById('c1');
var cxt = c.getContext("2d");
var cxt1 = c1.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;
c1.width = window.innerWidth;
c1.height = window.innerHeight;


var chinese = "0 1";
chinese = chinese.split("");

var font_size = 14;
var columns = c.width/font_size; 

var drops = [];

for(var x=0;x<columns;x++){
  drops[x]=1;
}
cxt.fillStyle = '#fff';
cxt1.fillStyle = '#121212';
function draw(){
  cxt.fillStyle="#fff3";
  cxt.fillRect(0,0,c.width,c.height);
  
  cxt.fillStyle = "#c39473";
  cxt.font = font_size+'px arial';
  
  
  for(var i=0;i<drops.length;i++){
    var text = chinese[Math.floor(Math.random()*chinese.length)];
    cxt.fillText(text,i*font_size,drops[i]*font_size);
    
    if(drops[i]*font_size>c.height && Math.random() >0.975)
      drops[i]=0;
    
    //increment y coordinate
    drops[i]++;
}
  
}
function draw1(){
    cxt1.fillStyle="#0003";
    cxt1.fillRect(0,0,c1.width,c1.height);
    
    cxt1.fillStyle = "#c39473";
    cxt1.font = font_size+'px arial';
    
    
    for(var i=0;i<drops.length;i++){
      var text = chinese[Math.floor(Math.random()*chinese.length)];
      cxt1.fillText(text,i*font_size,drops[i]*font_size);
      
      if(drops[i]*font_size>c1.height && Math.random() >0.975)
        drops[i]=0;
      
      //increment y coordinate
      drops[i]++;
  }
    
}
setInterval(draw,100);
setInterval(draw1,100);
$(window).on('load',function() {
    console.log('sss2')
    if ($('#chk').is(':checked')) {
        $('.bg-canvas').fadeOut()
        $('.bg-canvas-2').fadeIn()
    }
    else {
        $('.bg-canvas').fadeIn()
        $('.bg-canvas-2').fadeOut()
    }
    $("#chk").on('change', function() {
        console.log('sss3')
        if ($('#chk').is(':checked')) {
            $('.bg-canvas').fadeOut()
            $('.bg-canvas-2').fadeIn()
        }
        else {
            $('.bg-canvas').fadeIn()
            $('.bg-canvas-2').fadeOut()
        }
    })
})
