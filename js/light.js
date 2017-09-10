// Create a new WebSocket.
var socketStatus = document.getElementById('status');
var LightWebSocket = new WebSocket("ws://stagecast.se/api/events/livehacks07/ws?x-user-listener=1");


// Change the light based on the data transfered from websocket
colors = ["#00ced1","#ccffcc","#e33054","#990000","#000000","#1C8200","#987baa","#981890","#AA8971","#1987FC","#99081E"];
// document.body.style.backgroundColor = colors[0];

// Show a connected message when the WebSocket is opened.
LightWebSocket.onopen = function(event) {
  // socketStatus.innerHTML = 'Connected to: ' + event.currentTarget.url;

};

// Handle messages sent by the other server.
LightWebSocket.onmessage = function (event) {
  var sound = JSON.parse(event.data);
  var soundScale = sound.msg
  console.log(sound.msg);
  if(sound.msg < 300){
  $('#status').css('background', '#e33054');
  $('#mid').css('background', '#ccffcc');
  $('#low').css('background', '#00ced1');
  }else if(sound.msg < 500 && sound.msg>300){
  $('#status').css('background', '#e33054');
  $('#mid').css('background', '#ccffcc');
  $('#low').css('background', '#00ced1');	
}else{
  $('#status').css('background', '#e33054');
  $('#mid').css('background', '#ccffcc');
  $('#low').css('background', '#00ced1');	
}

}

// Handle any errors that occur.
LightWebSocket.onerror = function(error) {
  console.log('WebSocket Error: ' + error);
};

function fluctuate(bar) {
	var height_body = $('#container').height()*0.333;
    var height = Math.random()*height_body;
    //Animate the equalizer bar repeatedly
    bar.animate({
        height: height
    }, function() {
        fluctuate($(this));
    });
}

var number = 1;
function oneSecond () {
  if(number <= 10) {
    $(".bar").each(function(i) {
    fluctuate($(this));
});
    number++;
  }
};

setInterval(oneSecond, 100);

