// Thomas Lamothe 2018
// (c) Crew Core Creation

$(function(){
	// Pour la page de crédits (sinon remet le son sur le main)

	$('.soundoff').hide();

	$('.set-article').on('click', function(){
		$('.sound').toggle(100),
		$('.soundoff').toggle(100);
		sound.pause();
	});
	$('.soundoff').on('click', function(){
		// $('.sound').toggle(100);
		sound.play();
	});	
	
});