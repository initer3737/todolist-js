   ///tangal
   const data2={
    hari:[
        'minggu','senin','selasa','rabu','kamis','jumat','sabtu'
    ],
    bulan:[
        'januari',
        'february',
        'maret',
        'april',
        'mei',
        'juni',
        'juli',
        'agustus',
        'september',
        'oktober',
        'november',
        'desember'
    ],

   

}

const date=new Date()
const day=date.getDay();
const hari=data2.hari[day];
const bulan=date.getMonth();
const tahun=date.getFullYear();
const tanggal=`tanggal ${date.getUTCDate()} ${data2.bulan[bulan]} ${tahun}`;
document.getElementById('tanggal').innerHTML=tanggal;

