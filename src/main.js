var MediaPlayer = require('./js/components/mediaPlayer');


var template = require('./html/audio_player.html');

function doStuff(data, el) {
	// Do stuff
}

function boot(el) {

	var params = el.getAttribute('data-alt').split('||');



	var url = params[0]; //'http://audio.theguardian.tv/audio/kip/football/series/footballweekly/1444051785846/590/FW-05oct-2015_mixdown.mp3';
	var hed = params[1]; //"Title of audio here";
	var dek = params[2]; //"This is the thing that goes here and here.";

	template = template.replace('{{hed}}', hed).replace('{{dek}}', dek)


	el.innerHTML = template;





	var player = new MediaPlayer(el, url);


}

module.exports = { boot: boot };
