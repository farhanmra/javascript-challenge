
// //Soal 1
// Buatlah sebuah fungsi dengan kemampuan sebagai berikut: 
// - apabila parameter ("luas permukaan",10,20,30) maka akan mengembalikan nilai luas permukaan kubus. 
// - apabila parameter ("volume",10,20,30) maka akan mengembalikan nilai volume. 

// //Soal 2
// Terdapat 5 data nama berikut ini: 
//     1. Budi 
//     2. Adi 
//     3. Gunawan 
//     4. Joko 
//     5. Bambang 
// Silahkan berikan kondisi ketika nama di atas diinputkan akan mengeluarkan output "Boleh masuk!" dan selain nama di atas akan mengeluarkan output "Tidak boleh masuk!". 




//soal 2
data=['Budi','Adi','Gunawan','Joko','Bambang']
input=prompt('Masukan Nama :')
for (a=0;a<data.length;a++){
    tampung=data[a]
    if(input==tampung){
        document.write('Boleh Masuk!'+data[a]+'<br>')
        stop()
    }  
}
document.write('Tidak Boleh Masuk!'+input +'<br>')


