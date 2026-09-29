var HinhTru = {
    radius: 10,
    height: 15,
    theTich: function () { return Math.PI * this.radius * this.radius * this.height; },
    dienTichToanPhan: function () { return 2 * Math.PI * this.radius * (this.radius + this.height); }
};
var kq = document.getElementById("kq");
kq.innerHTML = "a) Thể tích (radius = 10, height = 15): " + HinhTru.theTich().toFixed(2) + "<br>";
HinhTru.height = 30;
kq.innerHTML += "b) Diện tích toàn phần (height = 30): " + HinhTru.dienTichToanPhan().toFixed(2);
