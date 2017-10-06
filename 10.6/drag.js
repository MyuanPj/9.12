(function(window){
function Drag(id) {
	this.ele = document.getElementById(id);
	this.disX = 0;
	this.disY = 0;
	this.fn();
};
Drag.prototype.fn = function() {
	var that = this;
	that.ele.onmousedown = function(e){
		e = e||event;
		that.disX = e.clientX - that.ele.offsetLeft;
		that.disY = e.clientY - that.ele.offsetTop;
		document.onmousemove = function(e){
			that.fnMove(e);
		};
		document.onmouseup = that.fnUp;
	};
};
Drag.prototype.fnMove = function(e) {
	e = e||event;
	this.ele.style.left = e.clientX - this.disX + "px";
	this.ele.style.top = e.clientY - this.disY + "px";
}
Drag.prototype.fnUp = function() {
	document.onmousemove = null;
}
window.Drag = Drag;
})(window);