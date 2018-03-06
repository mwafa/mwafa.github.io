const warna = document.querySelector("input[d='satu']");


warna.addEventListener("input",function(){
    const r = document.querySelector("input[name='merah']").value;
    const g = document.querySelector("input[name='hijau']").value;
    const b = document.querySelector("input[name='biru'").value;
    console.log(r,g,b);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
})
