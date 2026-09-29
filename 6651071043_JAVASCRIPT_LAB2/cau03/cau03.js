var a = 15, b = 28, c = 9;
var max = a;
if (b > max) { max = b; }
if (c > max) { max = c; }
console.log("Số lớn nhất: " + max);
document.getElementById("kq").innerText = "Số lớn nhất trong 15, 28, 9 là: " + max;
