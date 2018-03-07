---
layout: post
title: WEB - Bermain dengan Warna
---

Dalam html, warna dapat ditulis dengan beberapa cara diantaranya adalah dengan menggunakan hex contohnya `#ff00ff`, menggunakan nama warna contohnya `red` dan terakhir menggunakan __RGB__ misalnya `rgb(100,100,100)`.
Kali ini kita akan membuat waran dari halaman ini berbeda dan bermacam-macam.

Coba geser-geser _slider_ berikut.

R <input d="satu" type="range" name="merah" value="255" min="1" max="255"><br>
G <input d="satu" type="range" name="hijau" value="255" min="1" max="255" ><br>
B <input d="satu" type="range" name="biru"  value="255"  min="1" max="255"><br>

## Table of Contents:
+ [Konsep](#konsep)
+ [Kode Sumber](#kodesumber)
  * [HTML](#html)
  * [Javascript](#javascript)
  * [Hasil](#hasil) 

---

## Konsep

Rencananya kita akan membuat warna halaman di dalam web ini dapat diatur menggunakan slider.
Masing-masing _slider_ akan mewakili setiap komponen warna (merah,hijau,biru).
Ketika salahsatu slider digeser, maka akan membuat warna pada body berubah.

## Kode Sumber

#### HTML

Pertama kita perlu membuat sebuah slider, caranya yaitu dengan membuat elemen input dengan type __range__.
```html
<input type="range">
```
> <input type="range">

Kita ingat bahwa nilai maksimal dari __RGB__ adalah `rgb(255,255,255)` maka kita harus set nilai minimal dan maksimalnya.
```html
<input type="range" min="1" max="255">
```

Tapi, kita butuh tidak hanya 1 buah, tetapi perlu 3 buah yaitu untuk komponen merah, hijau dan biru. Maka kita juga perlu memberi nama masing-masing elemen.

```html

R <input type="range" name="merah" value="255" min="1" max="255"><br>
G <input type="range" name="hijau" value="255" min="1" max="255" ><br>
B <input type="range" name="biru"  value="255"  min="1" max="255"><br>
```

#### Javascript

Selanjutnya kita akan membuat kode __javascript__ untuk mengatur agar semua dapat berjalan sesuai keinginan.

Pertama, kita harus panggil elemen-elemenya dengan memanggil semua elemen dengan `type='range'`.

```javascript
const warna = document.querySelectorAll("input[type='range']");
```

_Nah_, sekarang kita buat agar jika masing-masing elemen diberi input (_slider digeser_) maka akan melakukan sebuah fungsi.
Fungsinya yaitu mengambil setiap elemen dan mengambil nilainya kemudian nilai itu sebagai acuan warna pada background dari `body`.

```javascript

warna.forEach(function(){
    this.addEventListener("input",function(){
        const r = document.querySelector("input[name='merah']").value;
        const g = document.querySelector("input[name='hijau']").value;
        const b = document.querySelector("input[name='biru']").value;
        console.log(r,g,b);
        document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    })
})
```

#### Hasil

Hasilnya, __taraaaa.........__

R <input d="dua" type="range" name="merah" value="255" min="1" max="255"><br>
G <input d="dua" type="range" name="hijau" value="255" min="1" max="255" ><br>
B <input d="dua" type="range" name="biru"  value="255"  min="1" max="255"><br>

#### Video

Untuk lebih jelas bisa lihat di channel youtube pak __Sandika Galih__.

<script src="https://apis.google.com/js/platform.js"></script>

<div class="g-ytsubscribe" data-channelid="UCkXmLjEr95LVtGuIm3l2dPg" data-layout="full" data-count="default"></div>

Link Video [Disini](https://www.youtube.com/watch?v=DLFqQ1SP8xU)

<script src="/js/slider.js"/>