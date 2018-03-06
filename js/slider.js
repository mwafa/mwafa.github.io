const warna = document.querySelectorAll("input[d='satu']");

warna.forEach(function(){
    this.addEventListener("input",function(){
        const r = document.querySelector("input[name='merah']d['satu']").value;
        const g = document.querySelector("input[name='hijau']d['satu']").value;
        const b = document.querySelector("input[name='biru']d['satu']").value;
        console.log(r,g,b);
        document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    })
})
