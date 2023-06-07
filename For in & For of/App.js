let names = ["Betül","Zehra","Baran","Elis","Atik"]

for(let isim1 of names){             // Değerleri döner
    console.log(isim1, names.indexOf(isim1));
}

for(let isim in names){             // İsimleri döner
    console.log(isim, names[isim]);
}
