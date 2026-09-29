function lam(x) { return Math.round(x * 10000) / 10000; }
function doc(ten) {
    var s = prompt("Nhập hệ số " + ten + ":");
    if (s === null || s.trim() === "" || isNaN(s)) { return null; }
    return Number(s);
}
function chay() {
    var a = doc("a"); if (a === null) { alert("Dữ liệu không hợp lệ!"); return; }
    var b = doc("b"); if (b === null) { alert("Dữ liệu không hợp lệ!"); return; }
    var c = doc("c"); if (c === null) { alert("Dữ liệu không hợp lệ!"); return; }
    var kq;
    if (a === 0) {                       // phương trình bậc nhất bx + c = 0
        if (b === 0) { kq = (c === 0) ? "Vô số nghiệm." : "Phương trình vô nghiệm."; }
        else { kq = "Phương trình bậc nhất, nghiệm x = " + lam(-c / b); }
    } else {
        var delta = b * b - 4 * a * c;
        if (delta < 0) { kq = "Phương trình vô nghiệm."; }
        else if (delta === 0) { kq = "Nghiệm kép x1 = x2 = " + lam(-b / (2 * a)); }
        else {
            var x1 = (-b + Math.sqrt(delta)) / (2 * a);
            var x2 = (-b - Math.sqrt(delta)) / (2 * a);
            kq = "Hai nghiệm phân biệt: x1 = " + lam(x1) + ", x2 = " + lam(x2);
        }
    }
    alert(kq);
}
