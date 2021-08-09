function nilaiPeserta (nilai) {
    /* 
        Buat proses seleksi kondisi untuk melakukan klasifikasi nilai peserta dengan rincian:
        A = 80 - 100
        B = 60 - 80
        C = 40 - 60
        D = 20 - 40
        E = >20
    */
        if(nilai>=80 && nilai<=100){
            return 'A'
        }
        else if(nilai>=60 && nilai<80){
            return 'B'
        }
        else if(nilai>=40 && nilai<60){
            return 'C'
        }
        else if(nilai>=20 && nilai<40){
            return 'D'
        }
        else if(nilai<20){
            return 'E'
        }
        else{
            return 'Tidak ada nilai'
        }
}

var dataSiswa = [
    ["Jojo", 55.5, nilaiPeserta(55.5)],
    ["Andika", 70.1, nilaiPeserta(70.1)],
    ["Alif", 19, nilaiPeserta(19)],
    ["Vista", 102, nilaiPeserta(102)]
];
// var dataSiswa = [
//     ["Jojo", 55.5],
//     ["Andika", 70],
//     ["Alif", 19],
//     ["Vista", 102]
// ];
// //Silahkan gunakan proses perulangan untuk mengambil semua data array dataSiswa dan tampilkan outputnya.
for(i=0;i<dataSiswa.length;i++){
    for(a=0;a<3;a++)
    document.write(dataSiswa[i][a]+ ' ')
    document.write('<br>')
}

