function mediaPlayer(el, url){

	var utils = require('./utils');
	var AudioPlayer = require('./mediaPlayerAudio');

	var player;
	var playerComponent;
	var sourceLoaded = false;

	function init(){

		player = el.querySelectorAll('audio')[0];

		playerComponent = new AudioPlayer(el,player, url);


		// player.addEventListener("play", function () {
		// 	assetManager.registerPlaying(player);
		// }, false);

		// player.addEventListener("pause", function () {

		// }, false);



		el.addEventListener('click', function(){
			isReady();
			if(!player.paused){
				pause();
			} else {
				play();
			}
		})


	}

	function pause(){
		player.pause();
	}

	function play(){
		player.play();
	}

	function isReady(){


			if(!sourceLoaded){
				sourceLoaded = true;
				playerComponent.loadSource();
			}



	}

	function updateProgress(){

	}

	init();

	return {
		play: play,
		pause: pause,
		isReady: isReady
	};
}


module.exports = mediaPlayer;