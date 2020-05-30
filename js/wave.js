const wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: 'violet',
  progressColor: 'purple',
  barWidth: 5,
  barRadius: 2,
  barGap: 2,
  responsive: true
});

wavesurfer.load('/images/sample.ogg');
wavesurfer.play()
document
  .getElementById("play")
  .addEventListener('click', e => {
    wavesurfer.playPause()
  })
document
  .getElementById('stop')
  .addEventListener('click', e => {
    wavesurfer.stop()
  })
document
  .getElementById('image')
  .addEventListener('click', e => {
    wavesurfer.stop()
    let canvas = document.getElementsByTagName("canvas")[0];
    let img = canvas.toDataURL("image/png");
    let a = document.createElement('a')
    a.href = img
    a.download = "gambar.png"
    a.click()
    a.remove()
  })
const files = document.getElementById('file')
document
  .getElementById('update')
  .addEventListener('click', e => {
    const file = files.files[0]
    console.log(file)
    if (file) {
      let reader =  new FileReader()
      reader.addEventListener('load', ({target}) => {
        wavesurfer.load(target.result)
      })
      reader.readAsDataURL(file)
    }
  })