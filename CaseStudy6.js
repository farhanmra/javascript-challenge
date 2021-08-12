/* 

Buatlah sebuah fungsi dengan ketetuan  
1. Jika user menginputkan "mentor" maka mencetak isi array [Akhmad, Alif, Andika, Jojo] 
2. Jika user menginputkan "ta" maka mencetak isi array [Adib, Valen, Vista] 
3. Jika user menginputkan "Admin" maka mencetak isi array [Aura, Cahya]
 */

mentor=['Akhmad', 'Alif', 'Andika', 'Jojo']
ta=['Adib','Valen','Vista']
admin=['aura','cahya']

menu=prompt('Masukan pilihan :','1. mentor, 2. Ta, 3. Admin')
if(menu==1){
    alert('Anda memilih Mentor')
    cetakMentor()
}
else if(menu==2){
    alert('Anda memilih ta')
    cetakTa()
}
else if(menu==3){
    alert('Anda memilih admin')
    cetakAdmin()
}
else{
    document.write('anda pilih siapa sih?')
}

function cetakMentor(){
    
    document.write(mentor)
    return 
}
function cetakTa(){
    document.write(ta)
    return 
}
function cetakAdmin(){
    document.write(admin)
    return 
}