var ds = [];
for (var i = 1; i < 100; i += 2) {
    if (i !== 5 && i !== 7 && i !== 93) { ds.push(i); }
}
console.log(ds.join(", "));
document.getElementById("kq").innerText = ds.join(", ");
