/*
Berapa berat badan ideal Anda?
Rumus menghitung
Pria: Berat badan ideal (kilogram) = [tinggi badan (sentimeter) - 100] - [(tinggi badan (sentimeter) - 100) x 10%]
Wanita: Berat badan ideal (kilogram) = [tinggi badan (sentimeter) - 100] - [(tinggi badan (sentimeter) - 100) x 15%]
nb = silahkan menggunakan input tinggi yang sama untuk menghitung kedua berat badan ideal.
Output:
Berat badan ideal pria untuk tinggi ... sentimeter adalah ... kilogram
Berat badan ideal wanita untuk tinggi ... sentimeter adalah ... kilogram 
*/

function beratBadanPria() {
    bBL=(tinggi-100)-((tinggi-100)*10/100)
    return bBL
}

function beratBadanWanita() {
    bBP=(tinggi-100)-((tinggi-100)*15/100)
    return bBP
}

tinggi=parseInt(prompt('Masukan tinggi anda :'))
document.write('Berat Badan ideal pria untuk tinggi '+tinggi+' sentimeter adalah '+beratBadanPria()+'<br>')
document.write('Berat Badan ideal wanita untuk tinggi '+tinggi+' sentimeter adalah '+beratBadanWanita()+'<br>')