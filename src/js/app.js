// Below is the wrapper for jQuery code.
(function($){
	var currnum = parseInt($(".slide[data-slide='1']").attr("data-slide"));

	$("[is='slider'] .arrow").click(function(){
		var nextnum;

		if($(this).attr("data-dir") == "right"){
			nextnum = currnum + 1;
		}else{
			nextnum = currnum - 1;
		}

		$("[is='slider'] .wrapper").attr("data-slide", nextnum);
		$("[is='slider'] .dot[data-slide='"+currnum+"']").removeClass("active");
		$("[is='slider'] .dot[data-slide='"+nextnum+"']").addClass("active");

		if(nextnum == 1){
			$("[is='slider'] .arrow[data-dir='left']").addClass("hidden");
		}else if(currnum == 1){
			$("[is='slider'] .arrow[data-dir='left']").removeClass("hidden");
		}

		if(nextnum == 3){
			$("[is='slider'] .arrow[data-dir='right']").addClass("hidden");
		}else if(currnum == 3){
			$("[is='slider'] .arrow[data-dir='right']").removeClass("hidden");
		}

		currnum = nextnum;
	});
})(jQuery);