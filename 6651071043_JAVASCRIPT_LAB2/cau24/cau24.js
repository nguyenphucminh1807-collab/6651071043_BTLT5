var TEN = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
function xuatThu() {
    var d = Number(document.getElementById("ngay").value.trim());
    var m = Number(document.getElementById("thang").value);
    var y = Number(document.getElementById("nam").value.trim());
    if (!Number.isInteger(d) || !Number.isInteger(y) || y <= 0 || document.getElementById("ngay").value.trim() === "") {
        alert("Dữ liệu không hợp lệ!"); return;
    }
    var dt = new Date(2000, 0, 1);
    dt.setFullYear(y, m - 1, d);
    // Nếu ngày không có thật (VD 31/2) thì Date sẽ tự nhảy sang tháng khác
    if (dt.getMonth() !== m - 1 || dt.getDate() !== d) { alert("Ngày không hợp lệ!"); return; }
    document.getElementById("kq").innerText = TEN[dt.getDay()] + " Ngày " + d + " tháng " + m + " năm " + y;
}
