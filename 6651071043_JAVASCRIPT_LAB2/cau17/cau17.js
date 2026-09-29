function nhiPhanSangThapPhan(s) {
    var kq = 0, len = s.length;
    for (var i = 0; i < len; i++) {
        if (s.charAt(i) === "1") { kq += Math.pow(2, len - 1 - i); }
    }
    return kq;
}
function chay() {
    var s = document.getElementById("bin").value.trim();
    if (s === "" || !/^[01]+$/.test(s)) { alert("Dữ liệu không hợp lệ!"); return; }
    document.getElementById("kq").innerText = s + "(2) = " + nhiPhanSangThapPhan(s) + "(10)";
}
