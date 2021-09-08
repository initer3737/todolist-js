
   //todos
   const kegiatan=[];
    
    


const T=new TodoList();
function tampilkan(){
    const tabel= document.getElementById('data')
        tabel.innerHTML='<tr><th>No</th><th>Todo</th><th>Aksi</th></tr>'
for ( let i=0;i<kegiatan.length;i++) {
    const edit="<button onclick=edit("+i+")>Edit</button>";
    const hapus="<button onclick='busak("+i+")'>Hapus</button>";
        tabel.innerHTML+=`<tr><td>${i+1}</td><td>${kegiatan[i]}</td><td> ${edit} ${hapus} </td></tr>`
}
}
function tambahkan(){
        const t=document.querySelector("input[name=inputUser]");
        if(t.value == ''){
            alert("jangan dikosongkan !!");
        }else{
            kegiatan.push(t.value);
            tampilkan();
            t.value="";
        }
    }
function busak(id){
    kegiatan.splice(id,1);
    tampilkan();

}

function edit(id){
    const e=prompt('edit '+kegiatan[id],kegiatan[id]);
    if (e==''||e==null){
        alert("harap masukkan data terbaru!!");
}else{
    kegiatan[id]=e;
        tampilkan();
}
}


tampilkan();    
