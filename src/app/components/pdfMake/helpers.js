/**
 *
 */
function HorizotalLine(length, color, width, margin, padding) {
	color = typeof color !== 'undefined' ? color : 'black';
	width = typeof width !== 'undefined' ? width : 1;
	margin = typeof margin !== 'undefined' ? margin : 0;
	padding = typeof padding !== 'undefined' ? padding : [ 0, 0, 0, 0 ];
	return {
		margin : padding,
		canvas : [ {
			type : 'line',
			x1 : margin,
			y1 : 0,
			x2 : length,
			y2 : 0,
			lineWidth : width,
			lineColor : color
		} ]
	};
}

/**
 *
 * @param hLineWidth
 * @param vLineWidth
 * @param hLineColor
 * @param vLineColor
 * @param paddingLeft
 * @param paddingRight
 * @param paddingTop
 * @param paddingBottom
 */
function SimpleTableLayout(hLineWidth, vLineWidth, hLineColor, vLineColor,
		paddingLeft, paddingRight, paddingTop, paddingBottom) {
	hLineWidth = typeof hLineWidth !== 'undefined' ? hLineWidth : 0;
	vLineWidth = typeof vLineWidth !== 'undefined' ? vLineWidth : 0;
	hLineColor = typeof hLineColor !== 'undefined' ? hLineColor : 'black';
	vLineColor = typeof vLineColor !== 'undefined' ? vLineColor : 'black';
	paddingLeft = typeof paddingLeft !== 'undefined' ? paddingLeft : 0;
	paddingRight = typeof paddingRight !== 'undefined' ? paddingRight : 0;
	paddingTop = typeof paddingTop !== 'undefined' ? paddingTop : 0;
	paddingBottom = typeof paddingBottom !== 'undefined' ? paddingBottom : 0;

	return {
		hLineWidth : function(i, node) {
			return hLineWidth;
		},
		vLineWidth : function(i, node) {
			return vLineWidth;
		},
		hLineColor : function(i, node) {
			return hLineColor;
		},
		vLineColor : function(i, node) {
			return vLineColor;
		},
		paddingLeft : function(i, node) {
			return paddingLeft;
		},
		paddingRight : function(i, node) {
			return paddingRight;
		},
		paddingTop : function(i, node) {
			return paddingTop;
		},
		paddingBottom : function(i, node) {
			return paddingBottom;
		}
	};
}
