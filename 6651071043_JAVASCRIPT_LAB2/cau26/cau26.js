var CAN = ["Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];
var CHI = ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"];
function tinhCanChi() {
    var s = document.getElementById("nam").value.trim();
    var y = Number(s);
    if (s === "" || !Number.isInteger(y) || y <= 0) {   // validate ô Năm
        alert("Năm không hợp lệ! Vui lòng nhập số nguyên dương.");
        document.getElementById("kq").value = "";
        return;
    }
    document.getElementById("kq").value = CAN[y % 10] + " " + CHI[y % 12];
}
