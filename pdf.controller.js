sap.ui.controller("pdfdisplay.pdf", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf pdfdisplay.pdf
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf pdfdisplay.pdf
*/
	onBeforeRendering: function() {
		var pdfUrl = "http://brainlens.org/content/newsletters/Spring%202013.pdf";
		$("#pdfFrame").attr("src",pdfUrl);
		
		$(function(){
			if(/iPhone|iPod|iPad/.test(navigator.userAgent))
				{
				$("#divPdf").css({
					'overflow':'scroll',
					'width':'100%',
					'height': isNaN(window.innerHeight)?window.clientHeight :window.innerHeight,
					'position':'absolute',
					'-webkit-overflow-scrolling':'touch',
				});				
				}
			else
				{
				$("#divPdf").css({
					'overflow':'scroll',
					'width':'100%',
					'height': isNaN(window.innerHeight)?window.clientHeight :window.innerHeight,
					'position':'absolute',
					'-webkit-overflow-scrolling':'auto',
				});
				
				}
			
			
		});		
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf pdfdisplay.pdf
*/
	onAfterRendering: function() {
		var pdfUrl = "http://brainlens.org/content/newsletters/Spring%202013.pdf";
		$("#pdfFrame").attr("src",pdfUrl);
		
		$(function(){
			if(/iPhone|iPod|iPad/.test(navigator.userAgent))
				{
				$("#divPdf").css({
					'overflow':'scroll',
					'width':'100%',
					'height': isNaN(window.innerHeight)?window.clientHeight :window.innerHeight,
					'position':'absolute',
					'-webkit-overflow-scrolling':'touch',
				});				
				}
			else
				{
				$("#divPdf").css({
					'overflow':'scroll',
					'width':'100%',
					'height': isNaN(window.innerHeight)?window.clientHeight :window.innerHeight,
					'position':'absolute',
					'-webkit-overflow-scrolling':'auto',
				});
				
				}
			
			
		});
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf pdfdisplay.pdf
*/
//	onExit: function() {
//
//	}

});
