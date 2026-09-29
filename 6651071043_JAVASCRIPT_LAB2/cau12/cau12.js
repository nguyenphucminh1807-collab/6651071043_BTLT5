function luyThua(b, n) {
    var kq = 1;
    for (var i = 1; i <= n; i++) { kq *= b; }
    return kq;
}
function chay() {
    var sb = document.getElementById("b").value.trim(), sn = document.getElementById("n").value.trim();
    var b = Number(sb), n = Number(sn);
    if (sb === "" || sn === "" || !Number.isInteger(b) || !Number.isInteger(n) || b <= 0 || n <= 0) {
        alert("Dữ liệu không hợp lệ!"); return;
    }
    document.getElementById("kq").innerText = b + "^" + n + " = " + luyThua(b, n);
}
