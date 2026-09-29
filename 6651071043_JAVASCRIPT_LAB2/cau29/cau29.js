function getFormvalue() {
    var f = document.getElementById("form1");
    var ho = f.elements["fname"].value.trim();
    var ten = f.elements["lname"].value.trim();
    if (ho === "" || ten === "") { alert("Dữ liệu không hợp lệ!"); return false; }
    document.getElementById("kq").innerText = "Họ tên: " + ho + " " + ten;
    return false;   // không tải lại trang để còn thấy kết quả
}
