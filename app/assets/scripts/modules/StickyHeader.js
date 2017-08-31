import $ from "jquery";
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from "jquery-smooth-scroll";

class StickyHeader{
	constructor(){
		this.lazyImages = $(".lazyload");
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = $(".large-hero__title");
		this.createHeaderWaypoint();

		this.pageSection = $(".page-section");
		this.headerLink = $(".primary-nav a");
		this.ourBeginning = $("#our-beginning");
		this.createPageSectionWaypoint();
		this.addSmoothScrolling();
		
	}
	
	addSmoothScrolling(){
		this.headerLink.smoothScroll();
	}

	createHeaderWaypoint(){
		var that = this;
		new Waypoint({
			element : this.headerTriggerElement[0],
			handler : function(direction){
				if(direction == "down"){
					that.siteHeader.addClass("site-header--dark")
				}else{
					that.siteHeader.removeClass("site-header--dark");
				}
			}
		});
	}

	createPageSectionWaypoint(){
		var that = this;
		this.pageSection.each(function(){
			var currentPage = this;
			new Waypoint({
				element : currentPage,
				handler : function(direction){
					if(direction == "down"){
						var matchingLink = currentPage.getAttribute("data-matching-link");
						that.headerLink.removeClass("is-current-link");
						$(matchingLink).addClass("is-current-link");
					}
				},
				offset : "18%"
			});
			new Waypoint({
				element : currentPage,
				handler : function(direction){

					if(direction == "up"){
						var matchingLink = currentPage.getAttribute("data-matching-link");
						that.headerLink.removeClass("is-current-link");
						$(matchingLink).addClass("is-current-link");

					}
				},
				offset : "-40%"
			});

		})
	}

}

export default StickyHeader;