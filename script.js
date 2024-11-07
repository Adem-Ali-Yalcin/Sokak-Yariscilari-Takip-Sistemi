const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('./'));

const saat_suan = () => {
    let date = new Date(Date.now())
    let saat = ""

    saat += date.getHours() < 10 ? `0${date.getHours()}:` : `${date.getHours()}:`;
    saat += date.getMinutes() < 10 ? `0${date.getMinutes()}:` : `${date.getMinutes()}:`;
    saat += date.getSeconds() < 10 ? `0${date.getSeconds()}` : `${date.getSeconds()}`;
    return saat + " - ";
}

app.post('/baslangicKontrol', (req, res) => {
    res.status(200).send("Program doğru şekilde başlatıldı.");
});

app.post('/polisProfilEkle', (req, res) => {
    const gelenVeri = req.body;

    fs.readFile('./veri.json', (err, veri) =>{
        if (err) {
            console.error(saat_suan() + "Dosya okunurken bir hata oluştu:", err);
            return res.status(500).send("Bir hata oluştu");
        }
        const mevcutVeri = JSON.parse(veri);
        var polis_hesaplar = mevcutVeri[0].hesaplar[1].polis_hesap;
        polis_hesaplar.push(gelenVeri);

        fs.writeFile('veri.json', JSON.stringify(mevcutVeri, null, 2), (err) => {
            if (err) {
                console.error(saat_suan() + "Dosya yazılırken bir hata oluştu:", err);
                return res.status(500).send("Bir hata oluştu");
            }

            console.log(saat_suan() + "Polis profili başarıyla oluşturuldu.");
            res.status(200).send("Veri başarıyla eklendi.");
        });
    });
});

app.post('/yarisciProfilEkle', (req,res) => {
    
    const gelenVeri = req.body;

    fs.readFile('./veri.json', (err, veri) =>{
        if (err) {
            console.error(saat_suan() + "Dosya okunurken bir hata oluştu:", err);
            return res.status(500).send("Bir hata oluştu");
        }
        
        const mevcutVeri = JSON.parse(veri);
        var yarisci_hesaplar = mevcutVeri[0].hesaplar[0].yarisci_hesap;
        yarisci_hesaplar.push(gelenVeri);

        fs.writeFile('veri.json', JSON.stringify(mevcutVeri, null, 2), (err) => {
            if (err) {
                console.error(saat_suan() + "Dosya yazılırken bir hata oluştu:", err);
                return res.status(500).send("Bir hata oluştu");
            }

            console.log(saat_suan() + "Yarışçı profil başarıyla oluşturuldu.");
            res.status(200).send("Veri başarıyla eklendi.");
        });
    });
});

app.post('/arabaEkle', (req, res) => {
    const gelenVeri = req.body;
    
    fs.readFile('./veri.json', (err, veri) =>{
        if (err) {
            console.error(saat_suan() + "Dosya okunurken bir hata oluştu:", err);
            return res.status(500).send("Bir hata oluştu");
        }
        
        const mevcutVeri = JSON.parse(veri);
        const arabalar = mevcutVeri[0].arabalar;
        arabalar.push(gelenVeri);

        fs.writeFile('veri.json', JSON.stringify(mevcutVeri, null, 2), (err) => {
            if (err) {
                console.error(saat_suan() + "Dosya yazılırken bir hata oluştu:", err);
                return res.status(500).send("Bir hata oluştu");
            }

            console.log(saat_suan() + "Araba verisi başarıyla eklendi.");
            res.status(200).send("Veri başarıyla eklendi.");
        });
    });
});


app.post('/profilSil', (req, res) => {
    const veri = fs.readFileSync("./veri.json");

    var mevcutVeri = JSON.parse(veri);
    let sil_profil_tur = req.body.sil_profil_tur;
    var sil_yol;
    var araba_sil_yol;
    var arabaSil;

    if(sil_profil_tur == "polis"){
        sil_yol = mevcutVeri[0].hesaplar[1].polis_hesap;
    }
    else if(sil_profil_tur == "yarisci"){
        sil_yol = mevcutVeri[0].hesaplar[0].yarisci_hesap;
        araba_sil_yol = mevcutVeri[0].arabalar;
        arabaSil = araba_sil_yol.find(araba_sil_yol => araba_sil_yol.id == req.body.silAraba_id);
    }

    var profilSil = sil_yol.find(sil_yol => sil_yol.id == req.body.id);
    
    if(sil_profil_tur == "polis" && profilSil){
        sil_yol.splice(sil_yol.indexOf(profilSil), 1);
        fs.writeFileSync("./veri.json", JSON.stringify(mevcutVeri, null,2));
        console.log(saat_suan() + "Polis profili başarıyla silindi.");
        res.status(200).send("Veri silindi.");
    }
    else if(sil_profil_tur == "yarisci" && profilSil && arabaSil){
        araba_sil_yol.splice(araba_sil_yol.indexOf(arabaSil), 1);
        sil_yol.splice(sil_yol.indexOf(profilSil), 1);
        fs.writeFileSync("./veri.json", JSON.stringify(mevcutVeri, null,2));
        console.log(saat_suan() + "Yarışçı profili başarıyla silindi.");
        res.status(200).send("Veri silindi.");
    }
    
})

app.post('/polisProfilGuncelle', (req, res) => {
    const veri = fs.readFileSync("./veri.json");
    
    var mevcutVeri = JSON.parse(veri);
    var polis_hesaplar = mevcutVeri[0].hesaplar[1].polis_hesap;

    var profil;
    for(i in polis_hesaplar){
        if(polis_hesaplar[i].id == req.body.id){
            profil = polis_hesaplar[i];
            break;
        }
    }
    
    if(profil){
        profil.id = req.body.id ? req.body.id * 1 : profil.id;
        profil.erisim = req.body.erisim ? req.body.erisim : profil.erisim;
        profil.kullanici_adi = req.body.kullanici_adi ? req.body.kullanici_adi : profil.kullanici_adi;
        profil.sifre = req.body.sifre ? req.body.sifre : profil.sifre;
        profil.rutbe = req.body.rutbe ? req.body.rutbe : profil.rutbe;
        profil.sube = req.body.sube ? req.body.sube : profil.sube;
    
        fs.writeFileSync('veri.json', JSON.stringify(mevcutVeri, null, 2));
        console.log(saat_suan() + "Polis profili başarıyla güncellendi.");
        res.status(200).send("Veri başarıyla güncellendi.");
    } 
});

app.post('/yarisciProfilGuncelle', (req, res) => {
    const veri = fs.readFileSync("./veri.json");

    let serbest_birak_check = false;
    try{
        serbest_birak_check = req.body.serbest_birak_check
    }
    catch{}

    var mevcutVeri = JSON.parse(veri);
    var yarisci_hesaplar = mevcutVeri[0].hesaplar[0].yarisci_hesap;

    var profil;
    for(i in yarisci_hesaplar){
        if(yarisci_hesaplar[i].id == req.body.id){
            profil = yarisci_hesaplar[i];
            break;
        }
    }
    
    if(profil){
        if(!serbest_birak_check){
            profil.erisim = req.body.erisim ? req.body.erisim : profil.erisim;
            profil.kullanici_adi = req.body.kullanici_adi ? req.body.kullanici_adi : profil.kullanici_adi;
            profil.sifre = req.body.sifre ? req.body.sifre : profil.sifre;
            console.log(saat_suan() + "Yarışçı profili başarıyla güncellendi.");
        }
        else{
            console.log(saat_suan() + "[BİLGİLENDİRME] zzzzzzzz. Oyun içi sunucunun bağlantısı kesildi. Programın localhost bağlantısı sağlam.")
            profil.durum = "Aranıyor";
            console.log(saat_suan() + "Yarışçı profili başarıyla güncellendi. (Serbest bırak)");
        }
    
        fs.writeFileSync('veri.json', JSON.stringify(mevcutVeri, null, 2));
        res.status(200).send("Veri başarıyla güncellendi.");
    }
    
});

app.post('/arabaGuncelle', (req, res) => {
    const veri = fs.readFileSync("./veri.json");

    
    var mevcutVeri = JSON.parse(veri);
    var arabalar = mevcutVeri[0].arabalar;

    var araba = arabalar.find(arabalar => arabalar.id == req.body.id);
    
    if(araba){
        
        araba.marka = req.body.marka ? req.body.marka : araba.marka;
        araba.model = req.body.model ? req.body.model : araba.model;
        araba.hp = req.body.hp ? req.body.hp : araba.hp;
        araba.plaka = req.body.plaka ? req.body.plaka : araba.plaka;
    
        fs.writeFileSync('veri.json', JSON.stringify(mevcutVeri, null, 2));
        console.log(saat_suan() + "Araba verileri başarıyla güncellendi.");
        res.status(200).send("Veri başarıyla güncellendi.");
    }
    
});

app.post('/yarisciEkle', (req,res) => {
    
    const gelenVeri = req.body;

    fs.readFile('./veri.json', (err, veri) =>{
        if (err) {
            console.error(saat_suan() + "Dosya okunurken bir hata oluştu:", err);
            return res.status(500).send("Bir hata oluştu");
        }
        
        const mevcutVeri = JSON.parse(veri);
        var yariscilar = mevcutVeri[0].yariscilar;
        yariscilar.push(gelenVeri);

        fs.writeFile('veri.json', JSON.stringify(mevcutVeri, null, 2), (err) => {
            if (err) {
                console.error(saat_suan() + "Dosya yazılırken bir hata oluştu:", err);
                return res.status(500).send("Bir hata oluştu");
            }

            console.log(saat_suan() + "Yarışçı verisi başarıyla eklendi.");
            res.status(200).send("Veri başarıyla eklendi.");
        });
    });
});

app.post('/yarisciGuncelle', (req,res) => {

    const gelenVeri = req.body;
    const veri = fs.readFileSync("./veri.json");
    const mevcutVeri = JSON.parse(veri);
    const arabalar = mevcutVeri[0].arabalar;
    const yariscilar = mevcutVeri[0].yariscilar;

    let ileri_sar_check = false;
    try{
        ileri_sar_check = gelenVeri.ileri_sar_check;
    }
    catch{}

    const bu_yarisci = yariscilar.find(yariscilar => yariscilar.id == gelenVeri.id);
    const bu_araba = arabalar.find(arabalar => arabalar.id == bu_yarisci.araba_id);

    if(bu_yarisci && bu_araba && !ileri_sar_check){
        bu_yarisci.isim = gelenVeri.isim ? gelenVeri.isim : bu_yarisci.isim;
        bu_yarisci.durum = gelenVeri.durum ? gelenVeri.durum : bu_yarisci.durum;
        bu_yarisci.son_gorulme = gelenVeri.son_gorulme ? gelenVeri.son_gorulme : bu_yarisci.son_gorulme;
        bu_araba.marka = gelenVeri.marka ? gelenVeri.marka : bu_araba.marka;
        bu_araba.model = gelenVeri.model ? gelenVeri.model : bu_araba.model;
        bu_araba.hp = gelenVeri.hp ? gelenVeri.hp : bu_araba.hp;
        bu_araba.plaka = gelenVeri.plaka ? gelenVeri.plaka : bu_araba.plaka;
        console.log(saat_suan() + "Yarışçı verisi başarıyla güncellendi.");
    }
    else if(bu_yarisci && ileri_sar_check){
        bu_yarisci.durum = gelenVeri.durum;
        bu_yarisci.kazanilan_yarislar = gelenVeri.kazanilan_yarislar;
        bu_yarisci.aranma_katsayisi = gelenVeri.aranma_katsayisi;
        bu_yarisci.son_gorulme = gelenVeri.son_gorulme;
        console.log(saat_suan() + "Zaman ileri alındı.")
    }

    fs.writeFileSync('veri.json', JSON.stringify(mevcutVeri, null, 2));
    res.status(200).send("Veri başarıyla güncellendi.");
});

app.post('/yarisciSil', (req,res) => {
    const veri = fs.readFileSync("./veri.json");

    var mevcutVeri = JSON.parse(veri);
    const gelenVeri = req.body;
    const arabalar = mevcutVeri[0].arabalar;
    const yariscilar = mevcutVeri[0].yariscilar;

    const bu_yarisci = yariscilar.find(yariscilar => yariscilar.id == gelenVeri.id);
    const bu_araba = arabalar.find(arabalar => arabalar.id == bu_yarisci.araba_id);

    if(bu_yarisci && bu_araba){
        yariscilar.splice(yariscilar.indexOf(bu_yarisci), 1);
        arabalar.splice(arabalar.indexOf(bu_araba), 1);

        fs.writeFileSync("./veri.json", JSON.stringify(mevcutVeri, null,2));
        console.log(saat_suan() + "Yarışçı ve arabası başarıyla silindi.");
        res.status(200).send("Veri silindi.");
    }
});

app.post('/ekipmanAl', (req,res) => {
    const veri = fs.readFileSync("./veri.json");

    const mevcutVeri = JSON.parse(veri);
    const gelenVeri = req.body;
    const polis_hesaplar = mevcutVeri[0].hesaplar[1].polis_hesap;

    const bu_polis = polis_hesaplar.find(polis_hesaplar => polis_hesaplar.id == gelenVeri.id);

    if(bu_polis){
        switch(gelenVeri.ekipman){
            case "EMP":
                bu_polis.EMP += 1;
                bu_polis.ikramiye -= gelenVeri.fiyat;
                break;
            case "civi_seridi":
                bu_polis.civi_seridi += 1;
                bu_polis.ikramiye -= gelenVeri.fiyat;
                break;
            case "helikopter":
                bu_polis.helikopter += 1;
                bu_polis.ikramiye -= gelenVeri.fiyat;
                break;
            case "barikat":
                bu_polis.barikat += 1;
                bu_polis.ikramiye -= gelenVeri.fiyat;
                break;
            default:
                console.log("Ekipman türü geçersiz.");
                break; 
        }

        fs.writeFileSync("./veri.json", JSON.stringify(mevcutVeri, null,2));
        console.log(saat_suan() + `1 adet ${gelenVeri.ekipman}, ${bu_polis.kullanici_adi} için satın alındı.`);
        res.status(200).send("Veri güncellendi(Satın alma).");
    }
    else{
        console.error(saat_suan() + "Hesap bulunamadı.");
        return res.status(500).send("Hesap bulunamadı.");
    }
});

app.post('/ekipmanSat', (req,res) => {
    const veri = fs.readFileSync("./veri.json");

    const mevcutVeri = JSON.parse(veri);
    const gelenVeri = req.body;
    const polis_hesaplar = mevcutVeri[0].hesaplar[1].polis_hesap;

    const bu_polis = polis_hesaplar.find(polis_hesaplar => polis_hesaplar.id == gelenVeri.id);

    if(bu_polis){
        switch(gelenVeri.ekipman){
            case "EMP":
                bu_polis.EMP -= 1;
                bu_polis.ikramiye += gelenVeri.fiyat;
                break;
            case "civi_seridi":
                bu_polis.civi_seridi -= 1;
                bu_polis.ikramiye += gelenVeri.fiyat;
                break;
            case "helikopter":
                bu_polis.helikopter -= 1;
                bu_polis.ikramiye += gelenVeri.fiyat;
                break;
            case "barikat":
                bu_polis.barikat -= 1;
                bu_polis.ikramiye += gelenVeri.fiyat;
                break;
            default:
                console.log("Ekipman türü geçersiz.");
                break; 
        }

        fs.writeFileSync("./veri.json", JSON.stringify(mevcutVeri, null,2));
        console.log(saat_suan() + `${bu_polis.kullanici_adi} 1 adet ${gelenVeri.ekipman} iade etti.`);
        res.status(200).send("Veri güncellendi(İade).");
    }
    else{
        console.error(saat_suan() + "Hesap bulunamadı.");
        return res.status(500).send("Hesap bulunamadı.");
    }
});

app.post('/yarisGuncelle', (req, res) => {
    const veri = fs.readFileSync("./veri.json");

    var mevcutVeri = JSON.parse(veri);
    var yarislar = mevcutVeri[0].yarislar;

    var yarislar = yarislar.find(yarislar => yarislar.id == req.body.id);

    let ileri_sar_check = false;
    try{
        ileri_sar_check = req.body.ileri_sar_check;
    }
    catch{}
    
    if(yarislar && ileri_sar_check){
        
        yarislar.yaris_ad = req.body.yaris_ad ? req.body.yaris_ad : yarislar.yaris_ad;
        yarislar.bolge = req.body.bolge ? req.body.bolge : yarislar.bolge;
        yarislar.uzunluk = req.body.uzunluk ? req.body.uzunluk : yarislar.uzunluk;
        yarislar.polis_sikligi = req.body.polis_sikligi ? req.body.polis_sikligi : yarislar.polis_sikligi;

        console.log(saat_suan() + "Yarış verileri başarıyla güncellendi.");
    }
    else if(yarislar){
        yarislar.polis_sikligi = req.body.polis_sikligi ? req.body.polis_sikligi : yarislar.polis_sikligi;
    }

    fs.writeFileSync('veri.json', JSON.stringify(mevcutVeri, null, 2));
    res.status(200).send("Veri başarıyla güncellendi.");
});

app.post('/yarisEkle', (req,res) => {
    
    const gelenVeri = req.body;

    fs.readFile('./veri.json', (err, veri) =>{
        if (err) {
            console.error(saat_suan() + "Dosya okunurken bir hata oluştu:", err);
            return res.status(500).send("Bir hata oluştu");
        }
        
        const mevcutVeri = JSON.parse(veri);
        var yarislar = mevcutVeri[0].yarislar;
        yarislar.push(gelenVeri);

        fs.writeFile('veri.json', JSON.stringify(mevcutVeri, null, 2), (err) => {
            if (err) {
                console.error(saat_suan() + "Dosya yazılırken bir hata oluştu:", err);
                return res.status(500).send("Bir hata oluştu");
            }

            console.log(saat_suan() + "Yarış verisi başarıyla eklendi.");
            res.status(200).send("Veri başarıyla eklendi.");
        });
    });
});

app.post('/yarisSil', (req,res) => {
    const veri = fs.readFileSync("./veri.json");
    var mevcutVeri = JSON.parse(veri);

    const yarislar = mevcutVeri[0].yarislar;
    const bu_yaris = yarislar.find(yarislar => yarislar.id == req.body.id);

    if(bu_yaris){
        yarislar.splice(yarislar.indexOf(bu_yaris), 1);

        fs.writeFileSync("./veri.json", JSON.stringify(mevcutVeri, null,2));
        console.log(saat_suan() + "Yarış başarıyla silindi.");
        res.status(200).send("Veri silindi.");
    }
});

app.listen(PORT, () => {
    console.log(saat_suan() + `Sunucu ${PORT} portunda çalışıyor.`);
});