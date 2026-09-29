// Xóa đúng dòng chứa nút được nhấn
function xoa(nut) {
    var dong = nut.parentNode.parentNode;
    dong.parentNode.removeChild(dong);
}
// Tự tính lại cột Tổng khi sửa số lượng / đơn giá
function tinh(o) {
    var dong = o.parentNode.parentNode;
    var o2 = dong.getElementsByTagName("input");
    var tong = Number(o2[0].value) * Number(o2[1].value);
    o2[2].value = isNaN(tong) ? "" : tong;
}
