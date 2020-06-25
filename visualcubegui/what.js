function fc_n(){
	document.getElementById("fdccc").value = document.forms["variable"]["fdc_"].value + "n"
}
function fc_d(){
	document.getElementById("fdccc").value = document.forms["variable"]["fdc_"].value + "d"
}
function fc_l(){
	document.getElementById("fdccc").value = document.forms["variable"]["fdc_"].value + "l"
}
function fc_s(){
	document.getElementById("fdccc").value = document.forms["variable"]["fdc_"].value + "s"
}
function fc_w(){
	document.getElementById("fdccc").value = document.forms["variable"]["fdc_"].value + "w"
}
function fc_y(){
	document.getElementById("fdccc").value = document.forms["variable"]["fdc_"].value + "y"
}
function fc_r(){
	document.getElementById("fdccc").value = document.forms["variable"]["fdc_"].value + "r"
}
function fc_o(){
	document.forms["variable"]["fdc_"].value = document.forms["variable"]["fdc_"].value + "o"
}
function fc_b(){
	document.forms["variable"]["fdc_"].value = document.forms["variable"]["fdc_"].value + "b"
}
function fc_g(){
	document.forms["variable"]["fdc_"].value = document.forms["variable"]["fdc_"].value + "g"
}
function fc_m(){
	document.forms["variable"]["fdc_"].value = document.forms["variable"]["fdc_"].value + "m"
}
function fc_p(){
	document.forms["variable"]["fdc_"].value = document.forms["variable"]["fdc_"].value + "p"
}
function fc_t(){
	document.forms["variable"]["fdc_"].value = document.forms["variable"]["fdc_"].value + "t"
}

function fd_n(){
	document.forms["variable"]["fdc_"].value = document.forms["variable"]["fdc_"].value + "n"
}
function fd_o(){
	document.forms["variable"]["fdc_"].value = document.forms["variable"]["fdc_"].value + "o"
}
function fd_t(){
	document.forms["variable"]["fdc_"].value = document.forms["variable"]["fdc_"].value + "t"
}
function fd_u(){
	document.forms["variable"]["fdc_"].value = document.forms["variable"]["fdc_"].value + "u"
}
function fd_r(){
	document.forms["variable"]["fdc_"].value = document.forms["variable"]["fdc_"].value + "r"
}
function fd_f(){
	document.forms["variable"]["fdc_"].value = document.forms["variable"]["fdc_"].value + "f"
}
function fd_d(){
	document.forms["variable"]["fdc_"].value = document.forms["variable"]["fdc_"].value + "d"
}
function fd_l(){
	document.forms["variable"]["fdc_"].value = document.forms["variable"]["fdc_"].value + "l"
}
function fd_b(){
	document.forms["variable"]["fdc_"].value = document.forms["variable"]["fdc_"].value + "b"
}
function fdcs(){
	if (document.forms["variable"]["fdc"].value == "fd"){
		document.getElementById("fcs").style.display="none";
		document.getElementById("fds").style.display="inline";
	}else{
		document.getElementById("fds").style.display="none";
		document.getElementById("fcs").style.display="inline";
	}
}
function sch1(){
	if (document.forms["variable"]["sch_1"].value == "#"){
		document.getElementById("s_1").removeAttribute("disabled");
	}else{
		document.getElementById("s_1").setAttribute("disabled","disabled");
	}
}
function sch2(){
	if (document.forms["variable"]["sch_2"].value == "#"){
		document.getElementById("s_2").removeAttribute("disabled");
	}else{
		document.getElementById("s_2").setAttribute("disabled","disabled");
	}
}
function sch3(){
	if (document.forms["variable"]["sch_3"].value == "#"){
		document.getElementById("s_3").removeAttribute("disabled");
	}else{
		document.getElementById("s_3").setAttribute("disabled","disabled");
	}
}
function sch4(){
	if (document.forms["variable"]["sch_4"].value == "#"){
		document.getElementById("s_4").removeAttribute("disabled");
	}else{
		document.getElementById("s_4").setAttribute("disabled","disabled");
	}
}
function sch5(){
	if (document.forms["variable"]["sch_5"].value == "#"){
		document.getElementById("s_5").removeAttribute("disabled");
	}else{
		document.getElementById("s_5").setAttribute("disabled","disabled");
	}
}
function sch6(){
	if (document.forms["variable"]["sch_6"].value == "#"){
		document.getElementById("s_6").removeAttribute("disabled");
	}else{
		document.getElementById("s_6").setAttribute("disabled","disabled");
		
	}
}
function bgg(){
	if (document.forms["variable"]["bg"].value == "#"){
		document.getElementById("bggg").removeAttribute("disabled");
	}else{
		document.getElementById("bggg").setAttribute("disabled","disabled");
		
	}
}
function ccc(){
	if (document.forms["variable"]["cc"].value == "#"){
		document.getElementById("cccc").removeAttribute("disabled");
	}else{
		document.getElementById("cccc").setAttribute("disabled","disabled");
		
	}
}
function acc(){
	if (document.forms["variable"]["ac"].value == "#"){
		document.getElementById("ac__").removeAttribute("disabled");
	}else{
		document.getElementById("ac__").setAttribute("disabled","disabled");
	}
}
function submit_() {
	var fmt = document.forms["variable"]["fmt"].value;
	var pzl = document.forms["variable"]["pzl"].value;
	var size = document.forms["variable"]["size"].value;
	var view = document.forms["variable"]["view"].value;
	var stage = document.forms["variable"]["stage"].value;
	var stage_2 = document.forms["variable"]["stage_2"].value;
	var r_1 = document.forms["variable"]["r_1"].value;
	var r_2 = document.forms["variable"]["r_2"].value;
	var r_3 = document.forms["variable"]["r_3"].value;
	var r__1 = document.forms["variable"]["r__1"].value;
	var r__2 = document.forms["variable"]["r__2"].value;
	var r__3 = document.forms["variable"]["r__3"].value;
	var _alg_ = document.forms["variable"]["_alg_"].value;
	var alg_ = document.forms["variable"]["alg_"].value;
	var fdc = document.forms["variable"]["fdc"].value;
	var fdc_ = document.forms["variable"]["fdc_"].value;
	var sch_1 = document.forms["variable"]["sch_1"].value;
	var sch_2 = document.forms["variable"]["sch_2"].value
	var sch_3 = document.forms["variable"]["sch_3"].value;
	var sch_4 = document.forms["variable"]["sch_4"].value;
	var sch_5 = document.forms["variable"]["sch_5"].value;
	var sch_6 = document.forms["variable"]["sch_6"].value;
	var sch__1 = document.forms["variable"]["sch__1"].value;
	var sch__2 = document.forms["variable"]["sch__2"].value;
	var sch__3 = document.forms["variable"]["sch__3"].value;
	var sch__4 = document.forms["variable"]["sch__4"].value;
	var sch__5 = document.forms["variable"]["sch__5"].value;
	var sch__6 = document.forms["variable"]["sch__6"].value;
	var bg = document.forms["variable"]["bg"].value;
	var bg_ = document.forms["variable"]["bg_"].value;
	var cc = document.forms["variable"]["cc"].value;
	var cc_ = document.forms["variable"]["cc_"].value;
	var co = document.forms["variable"]["co"].value;
	var fo = document.forms["variable"]["fo"].value;
	var dist = document.forms["variable"]["dist"].value;
	var arw = document.forms["variable"]["arw"].value;
	var ac = document.forms["variable"]["ac"].value;
	var ac_ = document.forms["variable"]["ac_"].value;
	var sch___1 = "";
	var sch___2 = "";
	var sch___3 = "";
	var sch___4 = "";
	var sch___5 = "";
	var sch___6 = "";
	var $bg = "";
	var $cc = "";
	var $ac = "";
	if (document.forms["variable"]["sch_1"].value == "#"){
		var sch___1 = sch__1;
	}else{
		var sch___1 = sch_1;
	}
	if (document.forms["variable"]["sch_2"].value == "#"){
		var sch___2 = sch__2;
	}else{
		var sch___2 = sch_2;
	}
	if (document.forms["variable"]["sch_3"].value == "#"){
		var sch___3 = sch__3;
	}else{
		var sch___3 = sch_3;
	}
	if (document.forms["variable"]["sch_4"].value == "#"){
		var sch___4 = sch__4;
	}else{
		var sch___4 = sch_4;
	}
	if (document.forms["variable"]["sch_5"].value == "#"){
		var sch___5 = sch__5;
	}else{
		var sch___5 = sch_5;
	}
	if (document.forms["variable"]["sch_6"].value == "#"){
		var sch___6 = sch__6;
	}else{
		var sch___6 = sch_6;
	}
	if (document.forms["variable"]["bg"].value == "#"){
		var $bg = bg_;
	}else{
		var $bg = bg;
	}
	if (document.forms["variable"]["cc"].value == "#"){
		var $cc = cc_;
	}else{
		var $cc = cc;
	}
	if (document.forms["variable"]["ac"].value == "#"){
		var $ac = ac_;
	}else{
		var $ac = ac;
	}
	var x = "http://cube.rider.biz/visualcube.php?fmt="+fmt+"&pzl="+pzl+"&size="+size+"&view="+view+"&stage="+stage+"-"+stage_2+"&r="+r_1+r__1+r_2+r__2+r_3+r__3+"&"+_alg_+"="+alg_+"&"+fdc+"="+fdc_+"&sch="+sch___1+","+sch___2+","+sch___3+","+sch___4+","+sch___5+","+sch___6+"&bg="+$bg+"&cc="+$cc+"&co="+co+"&fo="+fo+"&dist="+dist+"&arw="+arw+"&ac="+ac;
	document.getElementById("image").src=x;
}