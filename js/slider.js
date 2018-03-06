const warna = document.querySelector("input[d='satu']");


warna.addEventListener("input",function(){
    const r = document.querySelector("input[name='merah']");
    const g = document.querySelector("input[name='hijau']");
    const b = document.querySelector("input[name='biru'");

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
})
