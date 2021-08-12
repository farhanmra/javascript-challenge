/*
silahkan buat sebuah program dengan java script yang di kaitkan ke sebuah halaman html. 
yang ketika halaman diload akan menjalankan urutan program sebagai berikut :
1. memberikan pilihan luas atau keliling
2. memberikian pilihan bidang datar diantaranya segi empat, segi panjang, segi tiga, dan lingkaran
3, masing masing menu yang dipilih akan memberikan parameter berbeda-beda sesuai dengan kebutuhan masing-masing menu
4. tampilkan hasil perhitunganya di document html
*/

//=================================VERSI FARHAN================================================
// pil1=parseInt(prompt('Mau luas atau keliling pilih 1 atau 2','1.luas    2.keliling'))
// switch(pil1){

//     case 1:document.write('Luas')
//     document.write('<br>')
//         tampungBidang=bidang()
//         console.log(tampungBidang)
        
//         switch(tampungBidang){

        
//         case 1:
//             tampungSisi= sisi()
//             luas=tampungSisi*tampungSisi
//             document.write('Luas Segi empat dengan sisi '+tampungSisi+' adalah '+luas)
//             break;
            
//         case 2:
        
//             tampungSisi= sisi()
//             tampungLebar= lebar()
//             luas=tampungSisi*tampungLebar
//             document.write('Luas Segi panjang dengan panjang '+tampungSisi+' dan lebar '+tampungLebar+' adalah '+luas)
//             break;
//         case 3:
//             tampungAlas=alas()
//             tampungTinggi=tinggi()
//             luas=(tampungAlas*tampungTinggi)/2
//             document.write('Luas Segitiga dengan alas '+tampungAlas+' dan tinggi '+tampungTinggi+' adalah '+luas)
//             break;
//         case 4:
//             tampungJr=sisi()
//             luas=3.14*(tampungJr*tampungJr)
//             document.write('Luas Lingkaran dengan jari jari '+tampungJr+' adalah '+luas)
//             break;
//         default:
//             document.write('ga ada pilihan ')
//         }      
//     break;
//     case 2:document.write('keliling')
//     document.write('<br>')
//         tampungBidang=bidang()
//         switch(tampungBidang){

        
//         case 1:
//             tampungSisi= sisi()
//             keliling=tampungSisi+tampungSisi+tampungSisi+tampungSisi
//             document.write('Keliling Segi empat dengan sisi '+tampungSisi+' adalah '+keliling)
//             break;
            
//         case 2:
//             tampungSisi= sisi()
//             tampungLebar=lebar()
//             keliling=2*(tampungSisi+tampungLebar)
//             document.write('Keliling Segi panjang dengan panjang '+tampungSisi+' dan lebar '+tampungLebar+' adalah '+keliling)
//             break;
//         case 3:
//             tampungSisi= sisi()
//             keliling=tampungSisi+tampungSisi+tampungSisi
//             document.write('Keliling Segitiga dengan panjang sisi '+tampungSisi+' adalah '+keliling)
//             break;
//         case 4:
//             tampungJr=sisi()
//             keliling=2*3.14*tampungJr
//             document.write('Keliling Lingkaran dengan jari jari '+tampungJr+' adalah '+keliling)
//             break;
//         default:
//             document.write('ga ada pilihan ')
//         }
//     break;
//     default:
//         document.write('pilihan tidak ada')
// }

// function sisi(){
//     jr=parseInt(prompt('masukan sisi bidang :'))
//     return jr
// }
// function lebar(){
//     lb=parseInt(prompt('masukan lebar bidang :'))
//     return lb
// }

// function bidang(){
//     bd=parseInt(prompt('Masukan pilihan bidang :','1.segi empat, 2.Segi panjang, 3. segi tiga, 4. lingkaran'))
//     return bd
// }

// function alas(){
//     al=parseInt(prompt('masukan alas bidang :'))
//     return al
// }

// function tinggi(){
//     tg=parseInt(prompt('masukan tinggi bidang :'))
//     return tg
// }

//==================================================================================================================

//=================================================VERSI DOJOBOX================================================
//Fungsi menghitung luas menggunakan function declaration
//boleh tidak memiliki nilai balik

//tidak menggunakan nilai balik
//segi empat (sisi*sisi)
function luasSegiEmpat(sisi){
    luas =sisi*sisi
    document.write('Luas segi empat ='+ luas)
}

//segi panjang (panjang * lebar)
function luasPersegiPanjang(panjang,lebar){
    luas=panjang*lebar
    document.write('Luas Persegi panjang ='+luas)

}

//menggunakan nilai balik
//segi tiga (0.5 *alas *tinggi)
function luasSegitiga(alas,tinggi){
    luas=0.5*alas*tinggi
    return luas;
}
//lingkaran (3.14*jari jari ^2)
function luasLingkaran(jari){
    return  3.14 *jari**2
}

//fungsi menghitung keliling mengunakan function expression
//segi empat (sisi +sisi +sisi +sisi)
kelilingSegiEmpat=function(sisi){
    return sisi *4
}
//segi panjang (2*(panjang +lebar))
kelilingPersegiPanjang=function(panjang,lebar){
    return 2*(panjang+lebar)
}
//segi tiga (alas+tingi +sisi miring)
kelilingSegiTiga=function(alas,tinggi,sisiMiring){
    return alas+tinggi+sisiMiring
}
//lingkaran (2*3.14*jari jari)
kelilingLingkaran=function(jari){
    return 2*3.14*jari
}

