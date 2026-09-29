function chay() {
    var s = document.getElementById("n").value.trim();
    var n = Number(s);
    if (s === "" || !Number.isInteger(n) || n <= 0) { alert("Dữ liệu không hợp lệ!"); return; }
    var tong = 0, x = n;
    while (x > 0) {
        tong += x;
        x = Math.floor(x / 2);   // chia nguyên
    }
    alert("Tổng n + n/2 + n/4 + ... = " + tong);
}
