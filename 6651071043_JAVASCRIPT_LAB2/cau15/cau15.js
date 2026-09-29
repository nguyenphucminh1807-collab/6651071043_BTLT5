var u = { Name: "Minh DZ", Age: 20 };
var kq = document.getElementById("kq");
function inThongTin(nhan) {
    var t = nhan + ": ";
    for (var key in u) { t += key + " = " + u[key] + "; "; }
    kq.innerHTML += t + "<br>";
    console.log(nhan, u);
}
inThongTin("a) Thông tin u");
u.Surname = "Phúczz";                 // b) thêm thuộc tính
inThongTin("b) Sau khi thêm Surname");
u.Age = 30;                        // c) đổi Age
inThongTin("c) Sau khi đổi Age");
