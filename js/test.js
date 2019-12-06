var imgList = document.getElementById("imgList");
var Lis = imgList.getElementsByTagName("li");
var number = document.getElementById("number");
var n_ls = number.getElementsByTagName("li");
var index = 0
// 重复延时循环
setInterval(function() {
	console.log(index);
	if (index >= 0 && index <= 4) {
		Lis[index].children[0].style.display = "none";
		n_ls[index].style.background = "";
		Lis[index + 1].children[0].style.display = "block";
		n_ls[index + 1].style.background = "white";

	} else {
		Lis[index].children[0].style.display = "none";
		n_ls[index].style.background = "";
		index = 0;
		Lis[index].children[0].style.display = "block";
		n_ls[index].style.background = "white";
		return;
	}
	index++;

}, "1500")
