function insert_Row() {
    var bang = document.getElementById("sampleTable");
    var dong = bang.insertRow(bang.rows.length);
    var stt = bang.rows.length;
    dong.insertCell(0).innerHTML = "Row" + stt + " cell1";
    dong.insertCell(1).innerHTML = "Row" + stt + " cell2";
}
