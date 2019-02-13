var TabBox = {
	init: function(){
		$(".tab-box ul li")
		.each(function(index){
			$(this).attr("data-vid", "view-" + index);
		})
		.click(this._onTabClicked);
		
		$(".tab-box div p").each(function(index){
			$(this).attr("id", "view-" + index);
		});
		
		// default selected
		this._selectTab($("li:nth-child(1)"));
	},
	
	_selectTab: function($li){
		// unselect tab
		$("li.selected").removeClass("selected");
		
		// select tab
		$li.addClass("selected");
		
		// unselect view
		$("p:visible").hide();

		// select view
		$("#" + $li.data("vid")).show();
		
	},
	_onTabClicked: function(){
		TabBox._selectTab($(this));
	}
}

