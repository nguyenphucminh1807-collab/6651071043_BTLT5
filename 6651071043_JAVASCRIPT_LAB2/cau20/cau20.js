var now = new Date();
var text = "Ngày: " + now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear() +
           " Giờ: " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
window.alert(text);
document.getElementById("kq").innerText = text;
