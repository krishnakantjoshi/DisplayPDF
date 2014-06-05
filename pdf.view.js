sap.ui
		.jsview(
				"pdfdisplay.pdf",
				{

					/**
					 * Specifies the Controller belonging to this View. In the
					 * case that it is not implemented, or that "null" is
					 * returned, this View does not have a Controller.
					 * 
					 * @memberOf pdfdisplay.pdf
					 */
					getControllerName : function() {
						return "pdfdisplay.pdf";
					},

					/**
					 * Is initially called once after the Controller has been
					 * instantiated. It is the place where the UI is
					 * constructed. Since the Controller is given to this
					 * method, its event handlers can be attached right away.
					 * 
					 * @memberOf pdfdisplay.pdf
					 */
					createContent : function(oController) {
						var html = new sap.ui.core.HTML();
						html.setContent("<div id=\"divPdf\" style=\"width:100%\"><iframe id='pdfFrame' style=\"width:100%;height:1000px;overflow:visible\"></iframe></div>");
						
						return new sap.m.Page({
							title : "PDF View",
							content : [ html ],
							
						});
					}

				});
