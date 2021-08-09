function nilaiPeserta (nilai) {
    
        // Buat proses seleksi kondisi untuk melakukan klasifikasi nilai peserta dengan rincian:
        // A = 80 - 100
        // B = 60 - 80
        // C = 40 - 60
        // D = 20 - 40
        // E = >20
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

    // Silahkan panggil fungsi nilaiPeserta dengan parameter beberapa nilai: 
    // 1. 5
    document.write('Nilai 5 adalah :'+nilaiPeserta(5)+'<br>')
    // 2. 60.5
    document.write('Nilai 60.5 adalah :'+nilaiPeserta(60.5)+'<br>')
    // 3. 39.5
    document.write('Nilai 39.5 adalah :'+nilaiPeserta(39.5)+'<br>')
    // 4. 50
    document.write('Nilai 50 adalah :'+nilaiPeserta(50)+'<br>')
    // 5. 101
    document.write('Nilai 101 adalah :'+nilaiPeserta(101)+'<br>')
