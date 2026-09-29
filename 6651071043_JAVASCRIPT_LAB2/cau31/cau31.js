function removecolor() {
    var sel = document.getElementById("colorSelect");
    if (sel.options.length === 0 || sel.selectedIndex < 0) {
        alert("Không còn mục nào để xóa!"); return;
    }
    sel.remove(sel.selectedIndex);
}
