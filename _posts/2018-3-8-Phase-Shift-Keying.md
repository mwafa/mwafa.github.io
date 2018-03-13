---
layout: post
title: KOMDAT - Phase Shift Keying
---


<!DOCTYPE html>
<html>

<head>
    <title>Canvas code example</title>
    <script type="text/javascript">
        function derau(){
            
            const derau = document.querySelector("#derau");
            return Math.floor(Math.random()*derau.value/10);
        }
        // JavaScript source code goes here

        function fun1(x,s="11010110010",f=0) {
            
            ke = 2*Math.PI;
            if(s[Math.floor(x/ke)] == 0){
                return -Math.sin(x)*10+derau();
            }else{
                return Math.sin(x)*10+derau();
            }
        }
        
        function isin(x,s="11010110010",f=0)
        {
            return Math.sin(x+f)*10;
        }

        function hasil(x,s="11010110010",f=0){
            return (fun1(x,s,f)*Math.sin(x+f)*10)/10;
        }
        function fun2(x,s="11010110010",f=0) {
            ke = 2*Math.PI;
            if(s[Math.floor(x/ke)] == 0){
                return -10;
            }else{
                return 10;
            }
        }


        function draw(str,phase=0) {
            var canvas = document.getElementById("canvas");
            var nil = document.getElementById("nil");
            nil.innerHTML = Math.floor((phase/(2*Math.PI))*360);
            if (null == canvas || !canvas.getContext) return;

            var axes = {},
                ctx = canvas.getContext("2d");


            ctx.clearRect(0, 0, canvas.width, canvas.height);

            axes.x0 = .5 + .0 * canvas.width; // x0 pixels from left to x=0
            axes.y0 = .5 + .5 * canvas.height; // y0 pixels from top to y=0
            axes.scale = 10; // 40 pixels from x=0 to x=1
            axes.doNegativeX = true;
            
            const digital = document.querySelector("#digital");
            const fsk = document.querySelector("#fsk");
            const output = document.querySelector("#output");
            const sin = document.querySelector("#isin");
            console.log(digital.checked);
            showAxes(ctx, axes);
            if(fsk.checked)
            {
                funGraph(ctx, axes, fun1, "rgba(11,153,11,.6)", 2,phase,str);
            }
            if(digital.checked)
            {
                funGraph(ctx, axes, fun2, "rgba(66,44,255,.6)", 1,phase,str);
            }
            if(output.checked)
            {
                funGraph(ctx, axes, hasil, "rgba(200,7,11,.7)", 2,phase,str);
            }
            if(sin.checked)
            {
                funGraph(ctx, axes, isin, "rgba(200,100,11,.7)", 1,phase,str);
            }

        }

        function funGraph(ctx, axes, func, color, thick,phase=Math.PI,str="101110101011") {
            var xx, yy, dx = 4,
                x0 = axes.x0,
                y0 = axes.y0,
                scale = axes.scale;
            var iMax = Math.round((ctx.canvas.width - x0) / dx);
            var iMin = axes.doNegativeX ? Math.round(-x0 / dx) : 0;
            ctx.beginPath();
            ctx.lineWidth = thick;
            ctx.strokeStyle = color;

            for (var i = iMin; i <= iMax; i++) {
                xx = dx * i;
                yy = scale * func(xx / scale,str,phase);
                if (i == iMin) ctx.moveTo(x0 + xx, y0 - yy);
                else ctx.lineTo(x0 + xx, y0 - yy);
            }
            ctx.stroke();
        }

        function showAxes(ctx, axes) {
            var x0 = axes.x0,
                w = ctx.canvas.width;
            var y0 = axes.y0,
                h = ctx.canvas.height;
            var xmin = axes.doNegativeX ? 0 : x0;
            ctx.beginPath();
            ctx.strokeStyle = "rgb(128,128,128)";
            ctx.moveTo(xmin, y0);
            ctx.lineTo(w, y0); // X axis
            ctx.moveTo(x0, 0);
            ctx.lineTo(x0, h); // Y axis
            ctx.stroke();
        }
    </script>
</head>

<body onload="draw()">
    <canvas id="canvas" width="800" height="400"></canvas>
    <br>
    Phase <input type="range" name="a" id="fase" min="0" max="100" value="0"><span id="nil"></span><br>
    derau <input type="range" name="a" id="derau" min="0" max="100" value="0"><span id="nil2"></span><br>
    <input type="text" id="str" value="1010111"><br>
    <input type="checkbox" checked name="" id="digital"> Digital <br>
    <input type="checkbox" checked name="" id="fsk"> PSK <br>
    <input type="checkbox" name="" id="output"> Output <br>
    <input type="checkbox" name="" id="isin"> Gelombang Pengurang <br>
    


    <script>
    const a = document.querySelector("#fase");
    const dat = document.querySelector("#str")
    const der = document.querySelector("#derau")
    a.addEventListener('input',function(ini){
        console.log();
        draw(dat.value,(a.value/100.)*Math.PI);
    })
    der.addEventListener('input',function(ini){
        console.log();
        draw(dat.value,(a.value/100.)*Math.PI);
    })
    
    dat.addEventListener('input',function(ini){
        console.log();
        draw(dat.value,(a.value/100.)*Math.PI);
    })
    
    const ceker = document.querySelectorAll("input[type='checkbox']");

    ceker.forEach(function(ini){
            ini.addEventListener('change',function(){
                draw(dat.value,(a.value/100.)*Math.PI);
            })
        })

    
    </script>
</body>

</html>