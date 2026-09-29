function tinhLuong() {
    var s = document.getElementById("luong").value.trim();
    var luong = Number(s);
    if (s === "" || isNaN(luong) || luong <= 0) { alert("Dữ liệu không hợp lệ!"); return; }
    var heso = Number(document.getElementById("heso").value);
    document.getElementById("kq").innerText = Math.round(luong * heso * 100) / 100;
}
