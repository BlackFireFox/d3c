function d3c(text,pw,ty) {
	if (ty=="1"){
		var p="";
	} else {
		ty="0";
		var p=0;
	}
	var i=0;
	while (i<pw.length){
		p+=pw[i].charCodeAt(0);
		i++;
	}
	pw=parseInt(p);
	var l="";
	var i=0;
	while (i<text.length){
		l+=(parseInt(text[i].charCodeAt(0))+parseInt(p))+";";
		i++;
	}
	text=l;
	return text;
}
function dd3c(text,pw,ty) {
	if (ty=="1"){
		var p="";
	} else {
		ty="0";
		var p=0;
	}
	var i=0;
	while (i<pw.length){
		p+=pw[i].charCodeAt(0);
		i++;
	}
	pw=parseInt(p);
	text=text.split(";");
	var l="";
	var i=0;
	while (i<text.length){
		if (text[i]!=""){
			l+=String.fromCharCode(parseInt(text[i])-parseInt(p));
		}
		i++;
	}
	text=l;
	return text;
}
