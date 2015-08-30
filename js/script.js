$(function(){
    $('#dowebok').fullpage({
    	afterLoad: function(anchorLink, index){
    		if(index == 2){
				$('.section2').find('#guo1').animate({
					left: '0'
				}, 1500, 'easeOutExpo');
				$('.section2').find('#guo2').delay(100).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
				$('.section2').find('#guo3').delay(200).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 3){
//				$(".line1 .first").animate({
//					width: "14.64%"
//					},"slow");
//				$(".line1 .second").delay(380).animate({
//					width: "8.34%"
//					},"slow");
//				$(".line1 .point1").delay(580).fadeIn();
				
				$(".line1img").fadeIn("slow");
				
				$(".line1-text,.strong").delay(580).fadeIn();

//				$(".line2 .first").animate({
//					width: "11.2%"
//					},"slow");
//				$(".line2 .second").delay(380).animate({
//					width: "8.5%"
//					},"slow");
//				$(".line2 .point2").delay(580).fadeIn();
    			$(".line2img").fadeIn("slow");
				$(".line2-text,.strong").delay(580).fadeIn();


//				$(".line3 .first").animate({
//					width: "18.5%"
//					},"slow");
//				$(".line3 .point3").delay(580).fadeIn();
				$(".line3img").fadeIn("slow");
				$(".line3-text,.strong").delay(580).fadeIn();

//				$(".line4 .first").animate({
//					width: "9.95%"
//					},"slow");
//				$(".line4 .second").delay(380).animate({
//					width: "8.34%"
//					},"slow");
//				$(".line4 .point4").delay(580).fadeIn();
				$(".line4img").fadeIn("slow");
				$(".line4-text,.strong").delay(580).fadeIn();

//				$(".line5 .first").animate({
//					width: "14.6%"
//					},"slow");
//				$(".line5 .second").delay(380).animate({
//					width: "18.3%"
//					},"slow");
//				$(".line5 .point5").delay(580).fadeIn();
				$(".line5img").fadeIn("slow");
				$(".line5-text,.strong").delay(580).fadeIn();
			}
			if(index==5){
				$('.horozental4').animate({width:"13%"},100);
				$('.horozental3').delay(100).animate({width:"11%"},100);
				$('.horozental2').delay(200).animate({width:"9%"},100);
				$('.horozental1').delay(300).animate({width:'61%'},200);
				$('.vitical').delay(500).animate({height:'25%'},100);
				$('.right-line').delay(600).animate({height:'56.8%'},200);
				$('.top-line').delay(800).animate({width:"86%"},300);
				$('.left-line').delay(1100).animate({height:"56.7%"},200);
				$('.bottom-line').delay(1300).animate({width:"85%"},300);

			}
			if(index == 7){
				$('.section7').find('.brandfinal').fadeIn('1500');
			}
			
    	},

    	onLeave: function(index, direction){
    		if(index == 2){
				$('.section2').find('#guo1,#guo2,#guo3').delay(400).animate({
					left: '500%'
				}, 1500, 'easeOutExpo');
			}
    	}
    	
    });




});