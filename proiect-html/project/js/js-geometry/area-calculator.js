
// Area Calculator
// based on https://github.com/unix-world/Smart.Framework.Modules/blob/master/mod-js-components/views/js/jswidgets/area-calculator.js

function calculateGeometryArea(figure, obj) {

	switch(figure) {
		case 'triangle-bs': // triangle by base and height
			var base = parseFloat(obj.base);
			var height = parseFloat(obj.height);
			var result = Math.round(100 * (height *base / 2)) / 100;
			if((result <= 0) || isNaN(result)) {
				result = 0;
				html = '<div align="right"><h1 style="color:#FF3300">Area is Zero or Impossible !</h1></div>';
			} else {
				html =  '<div align="right"><font color="#003399"><b>Area of TRIANGLE:</b></font> <font color="#778899"><b><i>[H='+height+' ; B='+base+']</i></b></font> = <font color="#FF6600"><b>'+result+'</b></font></div><hr>';
			}
			return {
				result: result,
				html: html
			};
			break;
		case 'triangle-heron': // triangle heron
			var s1 = parseFloat(obj.s1);
			var s2 = parseFloat(obj.s2);
			var s3 = parseFloat(obj.s3);
			var heron = ((s1 + s2 + s3) / 2);
			var result = Math.round(100 * Math.sqrt(heron * (heron - s1) * (heron - s2) * (heron - s3))) / 100;
			var html = '';
			if((result <= 0) || isNaN(result)) {
				result = 0;
				html = '<div align="right"><h1 style="color:#FF3300">Area is Zero or Impossible !</h1></div>';
			} else {
				html = '<div align="right"><font color="#003399"><b>Area of TRIANGLE (Heron):</b></font> <font color="#778899"><b><i>[L1='+s1+' ; L2='+s2+' ; L3='+s3+' ; <span title="Calculated Value: Heron Semi-Perimeter">*HS='+heron+'</span>]</i></b></font> = <font color="#FF6600"><b>'+result+'</b></font></div><hr>';
			}
			return {
				result: result,
				heron: heron,
				html: html
			};
			break;
		default:
			alert('Invalid Geometry Figure !');
	}

	return {};

}

// #END
