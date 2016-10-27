$function(){
	// $("#photo img").bind("load",function(){
	// 	var ImgHeight = $(this).height();
	// 	$('#photo').css('height',ImgHeight);
	// });
	
	$('#navi a').click(function(){
		if($(this).hasClass('over') == false){
			$('#navi a').removeClass('over');
			$(this).addClass('over');
			$('#photo img').hide().attr('src',$(this).attr('href')).fadeIn();
		};
		return false;
	}).filter(':eq(0)').click();
};