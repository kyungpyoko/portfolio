$(function(){
	var t=0; // ������ ���� ��ǥ �����Դϴ�.
	var scrollTimer=0; // ��ũ�� Ÿ�̸� �����Դϴ�.
	var tabH=69; // ó�� �� ���� �����Դϴ�.

	function init(){
		$("body, html").animate({scrollTop:t}, 400);
	}
	init();

	$(window).scroll(function(){
		clearTimeout(scrollTimer);

		scrollTimer=setTimeout(function(){
			t=$(window).scrollTop();

			// #philosophy / #business / #contact
			// #philosophy category
			if(t >= $("#philosophy").offset().top-tabH && t < $("#business").offset().top-tabH){
				$("#philosophy .top").addClass("fixed");
				$("#business .top").removeClass("fixed");
				$("#contact .top").removeClass("fixed");
			}
			// #business category
			else if(t >= $("#business").offset().top-tabH && t < $("#contact").offset().top-tabH){
				$("#business .top").addClass("fixed");
				$("#contact .top").removeClass("fixed");
			}
			// #contact category
			else if(t >= $("#contact").offset().top-tabH && t < $(document).height()){
				$("#contact .top").addClass("fixed");
			}
			// top etc
			else{
				$("#philosophy .top").removeClass("fixed");
				$("#business .top").removeClass("fixed");
				$("#contact .top").removeClass("fixed");
			}
		}, 100);
	});

	var topVisualfull = function(){ //top visual fullsize, header position bottom
    var winHeight = $(window).height();
    $("#top_visual").css("height", winHeight);

    if($(window).width() > 720){ //pc
        $("#header").css("top", winHeight-130); //헤더높이 130
        $(".top_swiper_area .swiper-slide").css("height", winHeight-100);//헤더여백높이 100
    }
		else{ //mobile
        $("#header").css("top", winHeight-85); //헤더높이 80
        $(".top_swiper_area .swiper-slide").css("height", winHeight-60);//헤더여백높이 60
    }
	}

		$(".top_Bg div").eq(0).addClass("active");
	 	var n=0;

	 	setInterval(function(){
	 		if(n < 2){
	 			n=n+1;
	 		}
	 		else{
	 			n=0;
	 		}

	 		$(".top_Bg div").removeClass("active");
	 		$(".top_Bg div").eq(n).addClass("active");
	 	},6000);


		var n1=0; //0,1,2,3
		var posx=0;

		setInterval(function(){
			if(n1 < 3){
				n1=n1+1;
			}
			else{
				n1=0;
			}
			posx=-1*1903*n1;
			$(".swiper_slide").animate({left:posx},300);
		},7000);

		$(".btn_open_ow").click(function(e){
			e.preventDefault();
			$(".our_works").addClass("open");
			$(".our_works").removeClass("open");
		});


});
