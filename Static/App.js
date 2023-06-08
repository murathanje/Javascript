//          Static

class Math{

    static topla(a,b){
        return a+b;
    }

    cikar(a,b){
        return a-b;
    }

    carp(a,b){
        return a*b;
    }

    bol(a,b){
        return a/b;
    }
}


const math1 = new Math()
// console.log(math1.topla(1,2))       //  Hatalı kullanım


console.log(Math.topla(1,2))       //  Hatalı kullanım