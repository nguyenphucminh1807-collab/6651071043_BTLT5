var TEN=["Chủ nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"];
function chay() {
    var s = document.getElementById("ngay").value;   // dạng yyyy-mm-dd
    if (s === "") { alert("Dữ liệu không hợp lệ!"); return; }
    var p = s.split("-");
    var dt = new Date(2000, 0, 1);
    dt.setFullYear(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
    document.getElementById("kq").innerText = Number(p[2]) + "/" + Number(p[1]) + "/" + Number(p[0]) + " là " + TEN[dt.getDay()];
}
