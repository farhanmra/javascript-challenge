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
//Menu

menu = prompt ('Silahkan pilih menu yang tersedia ','1.Luas, 2.Keliling')
if (menu==1){
    alert ('Anda Telah Memilih Luas bangun datar')
    menuLuas=prompt('Masukan bangun datar yang akan dihitung','1. persegi, 2. persegi panjang, 3. segitiga, 4. Lingkaran')
    if (menuLuas==1){
        //luas Persegi
        luasPersegi()
    }
    else if(menuLuas==2){
        //luas persegi panjang
        luasPersegiPanjang()
    }
    else if(menuLuas==3){
        //segitiga
        luasSegitiga()
    }
    else if(menuLuas==4){
        //lingkaran
        luasLingkaran()
    }
    else{
        document.write('Pilihan anda tidak ada'+'<br>')
    }

}else if(menu==2){
    alert ('Anda Telah Memilih Keliling bangun datar')
    menuKeliling=prompt('Masukan bangun datar yang akan dihitung','1. persegi, 2. persegi panjang, 3. segitiga, 4. Lingkaran')
    if (menuKeliling==1){
        //keliling Persegi
        kelilingPersegi()
    }
    else if(menuKeliling==2){
        //keliling persegi panjang
        kelilingPersegiPanjang()
    }
    else if(menuKeliling==3){
        //segitiga
        kelilingSegitiga()
    }
    else if(menuKeliling==4){
        //lingkaran
        kelilingLingkaran()
    }
    else{
        document.write('Pilihan anda tidak ada'+'<br>')
    }
}else{
    document.write('Menu yang anda pilih tidak ada'+'<br>')
}
//Operation

//Input Output
//luas
//persegi
function luasPersegi(){
    parameter=parseInt(prompt('masukan sisi persegi: '))
    luas =hitungLuasSegiEmpat(parameter)
    document.write('Luas persegi adalah :'+luas)
}
//persegi panjang
function luasPersegiPanjang(){
    parameter1=parseInt(prompt('masukan panjang persegi panjang: '))
    parameter2=parseInt(prompt('masukan lebar persegi panjang: '))
    luas =hitungLuasPersegiPanjang(parameter1,parameter2)
    document.write('Luas persegi panjang adalah :'+luas)
}
//segitiga
function luasSegitiga(){
    parameter1=parseInt(prompt('masukan alas segitiga: '))
    parameter2=parseInt(prompt('masukan tingi segitiga: '))
    luas =hitungLuasSegitiga(parameter1,parameter2)
    document.write('Luas segitiga adalah :'+luas)
}
//lingkaran
function luasLingkaran(){
    parameter=parseInt(prompt('masukan jari jari lingkaran: '))
    luas =hitungLuasLingkaran(parameter)
    document.write('Luas lingkaran adalah :'+luas)
}
//Keliling
//persegi
function kelilingPersegi(){
    parameter=parseInt(prompt('masukan sisi persegi: '))
    keliling =hitungKelilingSegiEmpat(parameter)
    document.write('Keliling persegi adalah :'+keliling)
}
//persegi panjang
function kelilingPersegiPanjang(){
    parameter1=parseInt(prompt('masukan panjang persegi panjang: '))
    parameter2=parseInt(prompt('masukan lebar persegi panjang: '))
    keliling =hitungKelilingPersegiPanjang(parameter1,parameter2)
    document.write('Keliling persegi panjang adalah :'+keliling)
}
//segitiga
function kelilingSegitiga(){
    parameter1=parseInt(prompt('masukan alas segitiga: '))
    parameter2=parseInt(prompt('masukan tingi segitiga: '))
    parameter3=parseInt(prompt('masukan sisi miring segitiga: '))
    keliling =hitungKelilingSegiTiga(parameter1,parameter2,parameter3)
    document.write('keliling segitiga adalah :'+keliling)
}
//lingkaran
function kelilingLingkaran(){
    parameter=parseInt(prompt('masukan jari jari segitiga: '))
    keliling =hitungKelilingLingkaran(parameter)
    document.write('Keliling lingkaran adalah :'+keliling)
}



//Fungsi menghitung luas menggunakan function declaration
//boleh tidak memiliki nilai balik

//tidak menggunakan nilai balik
//segi empat (sisi*sisi)
function hitungLuasSegiEmpat(sisi){
    luas =sisi*sisi
    return luas
}

//segi panjang (panjang * lebar)
function hitungLuasPersegiPanjang(panjang,lebar){
    luas=panjang*lebar
    return luas
}

//menggunakan nilai balik
//segi tiga (0.5 *alas *tinggi)
function hitungLuasSegitiga(alas,tinggi){
    luas=0.5*alas*tinggi
    return luas;
}
//lingkaran (3.14*jari jari ^2)
function hitungLuasLingkaran(jari){
    return  3.14 *jari**2
}

//fungsi menghitung keliling mengunakan function expression
//segi empat (sisi +sisi +sisi +sisi)
hitungKelilingSegiEmpat=function(sisi){
    return sisi *4
}
//segi panjang (2*(panjang +lebar))
hitungKelilingPersegiPanjang=function(panjang,lebar){
    return 2*(panjang+lebar)
}
//segi tiga (alas+tingi +sisi miring)
hitungKelilingSegiTiga=function(alas,tinggi,sisiMiring){
    return alas+tinggi+sisiMiring
}
//lingkaran (2*3.14*jari jari)
hitungKelilingLingkaran=function(jari){
    return 2*3.14*jari
}