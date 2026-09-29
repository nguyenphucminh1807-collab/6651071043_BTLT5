var CHU = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
function docSo(n) {
    var chuc = Math.floor(n / 10), don = n % 10, kq;
    kq = (chuc === 1) ? "mười" : CHU[chuc] + " mươi";
    if (don === 1 && chuc > 1) { kq += " mốt"; }
    else if (don === 5) { kq += " lăm"; }
    else if (don !== 0) { kq += " " + CHU[don]; }
    return kq.charAt(0).toUpperCase() + kq.slice(1);
}
function chay() {
    var s = prompt("Nhập số nguyên có 2 chữ số (10 - 99):");
    if (s === null || s.trim() === "" || isNaN(s)) { alert("Dữ liệu không hợp lệ!"); return; }
    var n = Number(s);
    if (!Number.isInteger(n) || n < 10 || n > 99) { alert("Dữ liệu không hợp lệ!"); return; }
    alert(n + " → " + docSo(n));
}
