var thucAn = [["Bún bò", 20000], ["Hủ tiếu", 18000], ["Bánh canh", 17000], ["Phở bò", 19000],
              ["Nuôi", 15000], ["Bánh mì thịt", 12000], ["Bánh cuốn", 15000]];
var nuocUong = [["Cà phê đá", 12000], ["Cà phê sữa", 15000], ["Chanh dây", 13000], ["Chanh muối", 12000],
                ["Xí muội", 14000], ["Sữa tươi", 13000], ["Cam vắt", 17000]];
function napDanhSach(id, ds) {
    var sel = document.getElementById(id);
    for (var i = 0; i < ds.length; i++) {
        var o = document.createElement("option");
        o.text = ds[i][0];
        o.value = ds[i][1];    // value = giá tiền
        sel.add(o);
    }
}
napDanhSach("an", thucAn);
napDanhSach("uong", nuocUong);
function tinhTien() {
    var rows = "", tong = 0;
    var ids = ["an", "uong"];
    for (var k = 0; k < ids.length; k++) {
        var opts = document.getElementById(ids[k]).options;
        for (var i = 0; i < opts.length; i++) {
            if (opts[i].selected) {
                rows += "<tr><td>" + opts[i].text + "</td><td>" + opts[i].value + "</td></tr>";
                tong += Number(opts[i].value);
            }
        }
    }
    if (rows === "") { alert("Vui lòng chọn ít nhất một món!"); return; }
    if (document.getElementById("dem").checked) {
        tong = tong * 110 / 100;   // ban đêm +10%
        rows += "<tr><td>Phụ thu ban đêm</td><td>10%</td></tr>";
    }
    document.getElementById("kq").innerHTML = '<table class="tb" style="width:100%"><tr><th>Các món đã dùng</th><th>Tiền</th></tr>' +
        rows + "<tr><td><b>Tổng tiền</b></td><td><b>" + Math.round(tong) + " đồng</b></td></tr></table>";
}
