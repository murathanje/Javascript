//          OOP

class Insan{
    
    constructor(isim,soyIsim,yas,maas){
        this.isim = isim;
        this.soyIsim = soyIsim;
        this.yas = yas;
        this.maas = maas;
    }
    
    bilgileriGoster(){
        console.log(
            `Merhaba ${this.isim} ${this.soyIsim}
            Yaş: ${this.yas}
            Maaş: ${this.maas}
        `);
    }
}

const insan1 = new Insan("Murathan", "Bayram", 20, 0);

insan1.bilgileriGoster();