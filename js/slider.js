const warna = document.querySelectorAll("input[d='satu']");
const warna2 = document.querySelectorAll("input[d='dua']");

warna.forEach(function(){
    this.addEventListener("input",function(){
        const r = document.querySelector("input[name='merah'][d='satu']").value;
        const g = document.querySelector("input[name='hijau'][d='satu']").value;
        const b = document.querySelector("input[name='biru'][d='satu']").value;
        console.log(r,g,b);
        document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    })
});

warna2.forEach(function(){
    this.addEventListener("input",function(){
        const a = document.querySelector("input[name='merah'][d='dua']").value;
        const b = document.querySelector("input[name='hijau'][d='dua']").value;
        const c = document.querySelector("input[name='biru'][d='dua']").value;
        console.log(r,g,b);
        document.body.style.backgroundColor = `rgb(${a},${b},${c})`;
    })
});

