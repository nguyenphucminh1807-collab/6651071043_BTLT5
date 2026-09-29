function giaiThua(n) {
    var kq = 1;
    for (var i = 2; i <= n; i++) { kq *= i; }
    return kq;
}
function chay() {
    var s = document.getElementById("n").value.trim();
    var n = Number(s);
    if (s === "" || Math.floor(n) !== n || n <= 0 || n > 170) { alert("Dữ liệu không hợp lệ! (n nguyên dương, tối đa 170)"); return; }
    document.getElementById("kq").innerText = n + "! = " + giaiThua(n);
}
