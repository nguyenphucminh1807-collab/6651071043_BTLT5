function laNhuan(y){return (y%4===0&&y%100!==0)||y%400===0;}
function soNgay(m,y){if(m===2){return laNhuan(y)?29:28;}if(m===4||m===6||m===9||m===11){return 30;}return 31;}
function chay() {
    var d = Number(prompt("Nhập ngày:"));
    var m = Number(prompt("Nhập tháng:"));
    var y = Number(prompt("Nhập năm:"));
    if (!Number.isInteger(d) || !Number.isInteger(m) || !Number.isInteger(y) ||
        y <= 0 || m < 1 || m > 12 || d < 1 || d > soNgay(m, y)) {
        alert("Dữ liệu không hợp lệ!"); return;
    }
    d++;
    if (d > soNgay(m, y)) { d = 1; m++; }
    if (m > 12) { m = 1; y++; }
    console.log("Ngày kế tiếp: " + d + "/" + m + "/" + y);
    document.getElementById("kq").innerText = "Xem kết quả ở Console (F12): " + d + "/" + m + "/" + y;
}
