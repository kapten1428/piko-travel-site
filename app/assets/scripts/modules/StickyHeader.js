import $ from "jquery";

class StickyHeader{
	constructor(){
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = $(".large-hero__title");
		this.createHeaderWaypoint();
	}

	createHeaderWaypoint(){
		var that = this;
		new Waypoint({
			element : this.headerTriggerElement[0],
			handler : function(direction){
				if(direction == "down"){
					that.siteHeader.addClass("site-header--dark")
				}else{
					that.siteHeader.removeClass("site-header--dark")
				}
			}
		});
	}
}

export default StickyHeader;