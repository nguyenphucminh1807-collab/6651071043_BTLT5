function VietHoa(str) {
    var tu = str.split(" ");
    var kq = [];
    for (var i = 0; i < tu.length; i++) {
        if (tu[i] !== "") {
            kq.push(tu[i].charAt(0).toUpperCase() + tu[i].slice(1)); // toUpperCase()
        }
    }
    return kq.join(" ");
}
function chay() {
    var s = document.getElementById("chuoi").value.trim();
    if (s === "") { alert("Dữ liệu không hợp lệ!"); return; }
    document.getElementById("kq").innerText = "\"" + s + "\" => \"" + VietHoa(s) + "\"";
}
