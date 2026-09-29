function layHaiSo() {
    var s1 = document.getElementById("so1").value.trim();
    var s2 = document.getElementById("so2").value.trim();
    var a = Number(s1), b = Number(s2);
    if (s1 === "" || s2 === "" || !Number.isInteger(a) || !Number.isInteger(b)) {
        alert("Dữ liệu không hợp lệ!"); return null;
    }
    return [a, b];
}
function nhan() {
    var so = layHaiSo();
    if (so !== null) { document.getElementById("kq").innerText = so[0] * so[1]; }
}
function chia() {
    var so = layHaiSo();
    if (so === null) { return; }
    if (so[1] === 0) { alert("Không thể chia cho 0!"); return; }
    document.getElementById("kq").innerText = so[0] / so[1];
}
