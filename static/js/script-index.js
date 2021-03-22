// Thomas Lamothe 2018
// (c) Crew Core Creation

$(function(){
	$('.soundoff').hide();

	$('.sound-set').on('click', function(){
		$('.sound').toggle(100),
		$('.soundoff').toggle(100);
		s1.pause();
		s2.pause();
		s3.pause();
		s4.pause();
		s27.pause();
	});
	$('.soundoff').on('click', function(){
		// $('.sound').toggle(100);
		s1.play();
		s2.play();
		s3.play();
		s4.play();
		s27.play();		
	});

	// Pour la page de crédits (sinon remet le son sur le main)

	$('.soundoffcredits').hide();
	$('.set-article').on('click', function(){
		$('.sound').toggle(100),
		$('.soundoffcredits').toggle(100);
		sound.pause();
	});
	$('.soundoffcredits').on('click', function(){
		// $('.sound').toggle(100);
		sound.play();
	});	
});