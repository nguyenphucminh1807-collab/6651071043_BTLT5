function laNguyenTo(n) {
    if (n < 2) { return false; }
    for (var i = 2; i * i <= n; i++) {
        if (n % i === 0) { return false; }
    }
    return true;
}
function chay() {
    var s = prompt("Nhập một số nguyên dương:");
    if (s === null || s.trim() === "" || isNaN(s)) { alert("Dữ liệu không hợp lệ!"); return; }
    var n = Number(s);
    if (!Number.isInteger(n) || n <= 0) { alert("Dữ liệu không hợp lệ!"); return; }
    alert(n + (laNguyenTo(n) ? " là số nguyên tố." : " không phải là số nguyên tố."));
}
