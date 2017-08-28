import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class RevealOnScroll{
	constructor(els,offset){
		this.itemsToReveal = els;
		this.offsetReveal = offset;
		this.hideInitially();
		this.createWaypoint();
		
	}

	hideInitially(){
		this.itemsToReveal.addClass("reveal-item");
	}

	createWaypoint(){
		var that = this;
		this.itemsToReveal.each(function(){
			var currentItem = this;
			new Waypoint({
				element : currentItem,
				handler : function(){
					$(currentItem).addClass("reveal-item--is-visible");
				},
				offset : that.offsetReveal
			})
		});
	}

	
}

export default RevealOnScroll;