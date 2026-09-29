var ds = [
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPdm038KShSvc2YESXW3xVMtI-WUlY21f9D1kCRNUC-g&s=10", w: "240", h: "160" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Q0qXjQuSUYY5DK6Fyv7_Edlf91SaEa2_dAM_p-AuDA&s=10", w: "320", h: "195" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvXVqs5boB3JxtpLQWrwqtQ1WzDcbL2krc-Dze3M7LRnlpAeLu1asnOko&s=10", w: "240", h: "160" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0HeVnwytNYPNOepcxFb-YwS_omaXWa4sTK_cwlmF0Bg&s=10", w: "320", h: "195" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwvA_tWio3G51ULmzt8AO-Us9x9TyV-xjKlCOZ5R1ZmQ&s=10", w: "500", h: "343" }
];
function display_random_image() {
    var i = Math.floor(Math.random() * ds.length);   // 0, 1 hoặc 2
    var vung = document.getElementById("anh");
    vung.innerHTML = "";
    var img = document.createElement("img");
    img.src = ds[i].src;
    img.width = ds[i].w;
    img.height = ds[i].h;
    img.alt = "Hình ngẫu nhiên";
    img.onerror = function () { vung.innerText = "Không tải được hình: " + ds[i].src; };
    vung.appendChild(img);
}
