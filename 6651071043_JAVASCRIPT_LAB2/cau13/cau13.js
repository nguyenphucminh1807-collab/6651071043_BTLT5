function laNguyenTo(k) {
    if (k < 2) { return false; }
    for (var i = 2; i * i <= k; i++) {
        if (k % i === 0) { return false; }
    }
    return true;
}
function chay() {
    var s = document.getElementById("n").value.trim();
    var n = Number(s);
    if (s === "" || !Number.isInteger(n) || n <= 0) { alert("Dữ liệu không hợp lệ!"); return; }
    var ds = [];
    for (var i = 2; i < n; i++) {
        if (laNguyenTo(i)) { ds.push(i); }
    }
    document.getElementById("kq").innerText = ds.length > 0 ? ds.join(", ") : "Không có số nguyên tố nhỏ hơn " + n;
}
