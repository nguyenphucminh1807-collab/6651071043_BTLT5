function daoNguoc(n) {
    var am = n < 0;
    n = Math.abs(n);
    var kq = 0;
    while (n > 0) {
        kq = kq * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return am ? -kq : kq;
}
function chay() {
    var s = document.getElementById("n").value.trim();
    var n = Number(s);
    if (s === "" || !Number.isInteger(n)) { alert("Dữ liệu không hợp lệ!"); return; }
    document.getElementById("kq").innerText = n + " => " + daoNguoc(n);
}
