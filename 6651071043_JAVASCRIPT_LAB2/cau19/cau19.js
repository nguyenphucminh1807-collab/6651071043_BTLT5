function chay() {
    var sg = document.getElementById("goc").value.trim();
    var sl = document.getElementById("lai").value.trim();
    var sn = document.getElementById("nam").value.trim();
    var goc = Number(sg), lai = Number(sl), n = Number(sn);
    if (sg === "" || sl === "" || sn === "" || goc <= 0 || lai < 0 || n <= 0 || !Number.isInteger(n)) {
        alert("Dữ liệu không hợp lệ!"); return;
    }
    // Lãi kép: Tổng = Gốc * (1 + lãi/100)^n
    var tong = goc * Math.pow(1 + lai / 100, n);
    document.getElementById("kq").innerText = "Tổng tiền sau " + n + " năm: " + tong.toFixed(2);
}
