function hesaplama(){

   butonKontrol();

}

function tekCift(){

    if(document.getElementById("tekCift").value % 2 == 0){
        document.getElementById("sonuc").innerHTML= document.getElementById("tekCift").value+ " sayısı : Çifttir.";

    }
    else {
        document.getElementById("sonuc").innerHTML= document.getElementById("tekCift").value+ " sayısı : Tektir.";
    }
}

function butonKontrol(){

     document.getElementById("tekCift").style.color="Black";
    if(document.getElementById("tekCift").value=="" || document.getElementById("tekCift").value=="Lütfen sayı giriniz !"){
        document.getElementById("tekCift").style.color="Red";
        document.getElementById("tekCift").style.fontSize="20px";
        document.getElementById("tekCift").value="Lütfen sayı giriniz !";

    }
    else{
        if(document.getElementById("hesapla").value=="Hesapla"){
            tekCift();
            document.getElementById("hesapla").value="Temizle";
           
        }
        else{
    
            document.getElementById("hesapla").value="Hesapla";
            temizle();
        }

    }
     

}

function temizle(){

    document.getElementById("tekCift").value="";
    document.getElementById("sonuc").innerHTML="";
    document.getElementById("tekCift").focus();

}

function tiklama(){
    document.getElementById("tekCift").value="";
    
}