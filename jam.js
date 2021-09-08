window.setInterval('detik()',1000);
function detik(){
    const waktu=new Date().toLocaleTimeString();
    setInterval('detik()',1000);
    document.getElementById('jam').innerHTML=`jam:${waktu}`;
}