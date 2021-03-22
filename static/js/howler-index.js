		var s1 = new Howl({
				src: ['static/sound/gramatik-just_jammin.ogg'],
				autoplay: true,
				loop: true,
				volume: 0
		});
		var s2 = new Howl({
				src: ['static/sound/robin-pujo-track.ogg'],
				autoplay: true,
				loop: true,
				volume: 0
		});
		var s3 = new Howl({
				src: ['static/sound/sensi.ogg'],
				autoplay: true,
				loop: true,
				volume: 0
		});
		var s4 = new Howl({
				src: ['static/sound/flavour.ogg'],
				autoplay: true,
				loop: true,
				volume: 0
		});
		var s27 = new Howl({
				src: ['static/sound/ph.ogg'],
				autoplay: false,
				loop: false,
				volume: 0.1
		});
		$('#1').on("mouseenter",function(){
				s1.fade(0, 0.5, 200);
		}).on("mouseleave",function(){
				s1.fade(0.1, 0, 200);
		});

		$('#2').on("mouseenter",function(){
				s2.fade(0, 0.6, 200);
		}).on("mouseleave",function(){
				s2.fade(0.1, 0, 200);
		});

		$('#3').on("mouseenter",function(){
				s3.fade(0, 0.1, 200);
		}).on("mouseleave",function(){
				s3.fade(0.1, 0, 200);
		});

		s4.seek(20);
		$('#4').on("mouseenter",function(){
				s4.fade(0, 0.3, 200);
		}).on("mouseleave",function(){
				s4.fade(0.3, 0, 200);
		});

		$('.crewcore').on("mouseenter",function(){
				s27.stop();
				s27.play();
		});