
window.onload = function() {
	var leftmenu = document.getElementById("leftmenu");
	var Lis = leftmenu.getElementsByTagName("li");
	for (i = 0; i < Lis.length; i++) {
		Lis[i].onmouseover = function() {
			this.className = "lihover";
		}
		Lis[i].onmouseout = function() {
			this.className = "";
		}
	}
	
	
}


