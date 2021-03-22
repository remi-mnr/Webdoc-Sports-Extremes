// (c) Thomas Lamothe 2018
// Property of Crew Core Creation

$(function() {
	$('.up-credits').hide();

	// Quand on clique sur une des tetes
	$('.crew_face:first').click(function(){
		$('.up-credits:first').toggle(100);		
	});
	$('#mnr').click(function(){
		$('.notyremz').toggle(100);		
	});		
	$('#lmt').click(function(){
		$('.thomada').toggle(100);		
	});
	$('#cnj').click(function(){
		$('.madimey').toggle(100);		
	});

	// Quand on se barre de la div concernee
	$("#1").mouseleave(function(){
		$('.up-credits:first').hide(100);
	});
	$("#2").mouseleave(function(){
		$('.notyremz').hide(100);
	});
	$("#3").mouseleave(function(){
		$('.thomada').hide(100);
	});
	$("#4").mouseleave(function(){
		$('.madimey').hide(100);
	});

	// Implementation d'un Konami Code just for the lol
	// Codé par Thomada cette fois, pas un truc piqué sur StackOverflow
	var konamiTab = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
	n = 0;
	$(document).keydown(function(e){
		if(e.keyCode === konamiTab[n++]){
			if(n === konamiTab.length){
				alert("cool");
				n = 0;
				return false;
			}
		}
	});
});