// var x = 5;
// var y = 8.5;

//buatlah proses perhitungan penjumlahan, pengurangan, perkalian, dan pembagian dari kedua variabel di atas.
//menggunakan cara biasa
    // document.write(' bilangan pertama :'+x+'<br>')
    // document.write(' bilangan kedua : '+y+'<br>')
    // document.write('<br>')

    // document.write('PENJUMLAHAN'+'<br>')
    // z=x+y
    // document.write(x+'+'+y+'='+z)
    // document.write('<br>')
    // document.write('<br>')
    // document.write('PENGURANGAN'+'<br>')
    // s=x-y
    // document.write(x+'-'+y+'='+s)
    // document.write('<br>')
    // document.write('<br>')
    // document.write('PERKALIAN'+'<br>')
    // k=x*y
    // document.write(x+'*'+y+'='+k)
    // document.write('<br>')
    // document.write('<br>')
    // document.write('PEMBAGIAN'+'<br>')
    // h=x/y
    // document.write(x+'/'+y+'='+(h.toFixed(2)))


//menggunakan funtion cara ke 2
var bil1=parseInt(prompt('Masukan nilai bilangan pertama :'))
var bil2=parseInt(prompt('Masukan nilai bilangan kedua :'))

function tambah(x,y){
    document.write('Hasil Penjumlahan bilangan adalah :'+ (bil1+bil2)+'<br>')
}

function kurang(x,y){
    var hasilKurang=x-y
    document.write('Hasil pengurangan bilangan adalah : '+hasilKurang+'<br>')

}

var hasilPerkalian=function(x,y){
    return x*y;

}

var hasilBagi=function(x,y){
    return x/y
}

function sisaHasilBagi(x,y){
    return x%y
}

tambah()
kurang(bil1,bil2)
document.write('Hasil perkalian kedua bilanga adalah :'+hasilPerkalian(bil1,bil2)+'<br>')
document.write('Hasil pembagian kedua bilanga adalah :'+hasilBagi(bil1,bil2)+'<br>')
document.write('Hasil sisa bagi kedua bilanga adalah :'+sisaHasilBagi(bil1,bil2)+'<br>')
