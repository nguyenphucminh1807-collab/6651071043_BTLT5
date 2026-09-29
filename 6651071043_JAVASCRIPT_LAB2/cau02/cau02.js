function laNhuan(y){return (y%4===0&&y%100!==0)||y%400===0;}
function soNgay(m,y){if(m===2){return laNhuan(y)?29:28;}if(m===4||m===6||m===9||m===11){return 30;}return 31;}
function chay() {
    var s = document.getElementById("nam").value.trim();
    var y = Number(s);
    if (s === "" || !Number.isInteger(y) || y <= 0) { alert("Dữ liệu không hợp lệ!"); return; }
    document.getElementById("kq").innerText = "Năm " + y + (laNhuan(y) ? " là năm nhuận." : " không phải năm nhuận.");
}
