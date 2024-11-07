var event_aktif = false;
var takip_aktif = false;
var dis_div;
var arka_div;

var turbo_aktif = false;
var bozucu_aktif = false;
var polis_aktif = false;
var oyuncu_serit_tarafi = "Sol";
var serit_degis_cooldown = 0;
var oyuncu_EMP_cooldown = 0;
var oyuncu_helikopter_cooldown = 0;
var oyuncu_barikat_cooldown = 0;
var oyuncu_civi_cooldown = 0;
var oyuncu_serit_cooldown = 0;
var oyuncu_turbo_cooldown = 0;
var oyuncu_bozucu_cooldown = 0;
var NPC_polis_EMP_cooldown = 0;
var NPC_polis_helikopter_cooldown = 0;
var NPC_polis_barikat_cooldown = 0;
var NPC_polis_civi_cooldown = 0;
var polis_sikligi = 0;
var polis_agresifligi = 0;
var simdiki_muzik = null;

const event_baslat = (event_turu, yaris_uzunluk, oyuncu_id, _polis_sikligi) => {
    menu_sekmesi = 3;
    const sayim = document.createElement("span")
    sayim.id = "event_sonuc";
    menu_1_center.appendChild(sayim);

    takip_aktif = false;
    event_aktif = false;

    turbo_aktif = false;
    bozucu_aktif = false;
    polis_aktif = false;
    oyuncu_serit_tarafi = "Sol";
    serit_degis_cooldown = 0;
    oyuncu_EMP_cooldown = 0;
    oyuncu_helikopter_cooldown = 0;
    oyuncu_barikat_cooldown = 0;
    oyuncu_civi_cooldown = 0;
    oyuncu_serit_cooldown = 0;
    oyuncu_turbo_cooldown = 0;
    oyuncu_bozucu_cooldown = 0;
    NPC_polis_EMP_cooldown = 0;
    NPC_polis_helikopter_cooldown = 0;
    NPC_polis_barikat_cooldown = 0;
    NPC_polis_civi_cooldown = 0;
    polis_agresifligi = 0;

    polis_sikligi = _polis_sikligi;

    let sayi = 3;
    sayim.textContent = sayi;
    ekran_parlat("#858585", 1);
    let interval = setInterval(() => {
        ekran_parlat("#858585", 1);
        sayim.textContent = --sayi;
    }, 1000);

    setTimeout(() => {
        menu_1_center.removeChild(sayim);
        clearInterval(interval);
        event_paneli_olustur(event_turu, yaris_uzunluk, oyuncu_id)
    }, 3000);

    if(localStorage.getItem("yarisci_yaris_muzik_alternatifi") == "Özel"){
        while(true){
            let keys = Object.keys(custom_playlist);
            let rand = Math.floor(Math.random() * (keys.length - 1));
            let rand_muzik = custom_playlist[keys[rand]];
            if(rand_muzik.main != simdiki_muzik){
                simdiki_muzik = rand_muzik.main
                muzik_yukselt([rand_muzik.main], 250, true, () => {muzik_oynat(null, rand_muzik.main, false, a={id: null, ad:"custom_muzik"}, custom_playlist, true)})
                break
            }
        }
    }
    else{
        const rand = Math.round(Math.random());
        simdiki_muzik = rand == 0 ? "urban" : "bending";
        const muzik = [Urban_Assault, Bending_Light][rand];

        muzik_yukselt([muzik.intro, muzik.part1], localStorage.getItem("muzik_vol") * 100, true, () => muzik_oynat(muzik.intro, muzik.part1, false, a = {id: null, ad: "adaptif1"}));
    }

    var rastgele_olay_interval = setInterval(() => {
        if(event_aktif){
            var trafik_ihtimali = 0.3;
            if(turbo_aktif){
                trafik_ihtimali += 0.3;
            }
            if(oyuncu_serit_tarafi == "Sağ"){
                trafik_ihtimali += 0.2;
            }
            const randomSayi = Math.random();
            let olayAd;
            if (randomSayi < 0.01) {
                olayAd = "kestirme"
            } 
            else if (randomSayi < 0.2) { 
                olayAd = "rampa"
            } 
            else if (randomSayi < trafik_ihtimali) {
                olayAd = "trafik"
            }
            if(olayAd){
                rastgele_olay_tetikle(olayAd);
            }
        }
    }, 2000);
    efekt_interval_liste.push(rastgele_olay_interval);
}

const event_paneli_olustur = async(event_turu, yaris_uzunluk, oyuncu_id) => {

    event_aktif = true;
    clearInterval(AFK_interval);
    clearTimeout(AFK_timer);
    window.onmousemove = () => {};
    window.onkeydown = () => {};
    window.onclick = () => {};
    esc_engel = true;

    arka_div = document.createElement("div");
    dis_div = document.createElement("div");
    const event_paneli = document.createElement("div");
    const panel_baslik = document.createElement("div");
        const oyuncu_araba_can_div = document.createElement("div");
            const oyuncu_araba_can_logo = document.createElement("img");
            const oyuncu_araba_can_bari = document.createElement("progress");
        const polis_sayisi_div = document.createElement("div");
            const polis_sayisi_logo = document.createElement("img");
            const polis_sayisi_span = document.createElement("span");
        const polis_ekipman_logolari_div = document.createElement("div");
            const polis_spike_logo = document.createElement("img");
            const polis_roadblock_logo = document.createElement("img");
            const polis_helicopter_logo = document.createElement("img");
            const polis_emp_logo = document.createElement("img");
    const panel_icerik = document.createElement("div");
    const ekipman_butonlar_div = document.createElement("div");
    const butonlar = document.createElement("div");
        const ekipman_1 = document.createElement("button");
        const ekipman_2 = document.createElement("button");
        const ekipman_3 = document.createElement("button");
        const ekipman_4 = document.createElement("button");
    
    event_paneli.id = "bildirim_paneli";
    event_paneli.classList.add("event_paneli");
    event_paneli.style.transform = "none";
    panel_baslik.id = "panel_baslik";
        oyuncu_araba_can_div.id = "oyuncu_araba_can_div";
            oyuncu_araba_can_logo.id = "oyuncu_araba_can_logo";
            oyuncu_araba_can_bari.id = "oyuncu_araba_can_bari";
        polis_sayisi_div.id = "polis_sayisi_div";
            polis_sayisi_logo.id = "polis_sayisi_logo";
            polis_sayisi_span.id = "polis_sayisi_span";
        polis_ekipman_logolari_div.id = "polis_ekipman_logolari_div";
            polis_spike_logo.id = "polis_spike_logo";
            polis_roadblock_logo.id = "polis_roadblock_logo";
            polis_helicopter_logo.id = "polis_helicopter_logo";
            polis_emp_logo.id = "polis_emp_logo";

    
    panel_icerik.id = "panel_mesaj";
    ekipman_butonlar_div.id = "panel_cevap";
    butonlar.id = "butonlar";
    dis_div.id = "event_panel_dis_div";
    arka_div.id = "event_panel_arka_div";

    oyuncu_araba_can_bari.max = 1000;
    oyuncu_araba_can_bari.min = 0;
    oyuncu_araba_can_bari.value = 1000;

    oyuncu_araba_can_div.appendChild(oyuncu_araba_can_logo);
    oyuncu_araba_can_div.appendChild(oyuncu_araba_can_bari);
    polis_sayisi_div.appendChild(polis_sayisi_logo);
    polis_sayisi_div.appendChild(polis_sayisi_span);

    [polis_spike_logo, polis_roadblock_logo, polis_helicopter_logo, polis_emp_logo].forEach(i => {
        polis_ekipman_logolari_div.appendChild(i);
    });

    [oyuncu_araba_can_div, polis_sayisi_div, polis_ekipman_logolari_div].forEach(i => {
        panel_baslik.appendChild(i)
    });

    const profiller = await profilleri_getir("yarisci");
    var yariscilar = await yariscilari_getir();
    yariscilar = yariscilar.filter(yariscilar => yariscilar.durum == "Aranıyor");
    const arabalar = await arabalari_getir();
    const oyuncu = profiller.find(profiller => profiller.id == oyuncu_id);

    if(event_turu == "yaris"){

        ekipman_1.textContent = "Şerit Değiş [<=]";
        ekipman_2.textContent = "Turbo";
        ekipman_3.textContent = "Sinyal Bozucu";

        ekipman_1.onclick = () => {
            ekipman_1.blur();
            if(serit_degis_cooldown <= 0){
                ekipman_1.textContent = oyuncu_serit_tarafi == "Sol" ? "Şerit Değiş [=>]" : "Şerit Değiş [<=]";
                serit_degis(ekipman_1, ekipman_2);
            }
        }
        ekipman_2.onclick = () => {
            ekipman_2.blur();
            if(oyuncu_turbo_cooldown <= 0 && !turbo_aktif){
                turbo_kullan(ekipman_2);
            }
        }
        ekipman_3.onclick = () => {
            ekipman_3.blur();
            if(oyuncu_bozucu_cooldown <= 0){
                bozucu_kullan(ekipman_3);
            }
        }

        [ekipman_1, ekipman_2, ekipman_3].forEach(i => {
            butonlar.appendChild(i);
        });

        const yarisci_ekle = (yarisci, oyuncu) => {
            const yarisci_div = document.createElement("div");
            const yarisci_isim = document.createElement("span");
            const yarisci_progress = document.createElement("progress");

            yarisci_div.id = yarisci.id;
            if(oyuncu) {
                yarisci_isim.textContent = `${yarisci.kullanici_adi}:`;
                yarisci_div.classList.add("yaris_progress_oyuncu_div"); 
            }
            else{
                yarisci_isim.textContent = `${yarisci.isim}: `;
                yarisci_div.classList.add("yaris_progress_div");
            }
            yarisci_progress.min = 0;
            yarisci_progress.max = yaris_uzunluk * 1000;
            yarisci_progress.value = 0;
            yarisci_progress.classList.add("aktif_yarisci_progress");

            var renkListe = ["progress-blue", "progress-red", "progress-green"];
            yarisci_progress.classList.add(renkListe[Math.round(Math.random() * (renkListe.length - 1))]);

            yarisci_div.appendChild(yarisci_isim);
            yarisci_div.appendChild(yarisci_progress);
            panel_icerik.appendChild(yarisci_div);

            polis_agresifligi += yarisci.aranma_katsayisi * 1;

            yarisci_interval_ekle(yarisci_progress, arabalar.find(arabalar => arabalar.id == yarisci.araba_id).hp / 100, oyuncu, ad = oyuncu ? yarisci.kullanici_adi : yarisci.isim, yarisci_div);
        
            if(oyuncu && localStorage.getItem("yarisci_yaris_muzik_alternatifi") != "Özel"){
                adaptif_muzik_oynat(yarisci_progress, muzik = simdiki_muzik == "urban" ? Urban_Assault : Bending_Light);
            }
        }
        yarisci_ekle(oyuncu, true);
        
        var yarisci_liste = []; 
        for(i = 0; i < 3; i++){
            const k = Math.floor(Math.random() * yariscilar.length);
            if(k < 0){ k = 0 }
            yarisci_liste.push(yariscilar[k])
            yariscilar.splice(yariscilar.indexOf(yariscilar[k]), 1);
        }

        for(i in yarisci_liste){
            yarisci_ekle(yarisci_liste[i], false);
        }
    }
    else{

        ekipman_1.textContent = "EMP";
        ekipman_2.textContent = "Helikopter";
        ekipman_3.textContent = "Barikat";
        ekipman_4.textContent = "Çivi Şeridi";

        ekipman_1.onclick = () => {
            ekipman_1.blur();
            EMP_kullan();
        }
        ekipman_2.onclick = () => {
            ekipman_2.blur();
            helikopter_kullan();
        }
        ekipman_3.onclick = () => {
            ekipman_3.blur();
            barikat_kullan();
        }
        ekipman_4.onclick = () => {
            ekipman_4.blur();
            civi_kullan();
        }

        [ekipman_1, ekipman_2, ekipman_3, ekipman_4].forEach(i => {
            butonlar.appendChild(i);
        });

        const takip_progress_olustur = (yarisci, oyuncu) => {
            const takip_div = document.createElement("div");
            const yarisci_isim = document.createElement("span");
            const polis_isim = document.createElement("span");
            const yarisci_isim_div = document.createElement("div");
            const polis_isim_div = document.createElement("div");
            const takip_progress = document.createElement("progress");

            const yarisci_araba = arabalar.find(arabalar => arabalar.id == yarisci.araba_id)

            takip_div.id = yarisci.id;
            takip_div.classList.add("takip_progress_div");
            yarisci_isim.textContent = yarisci.isim;
            polis_isim.textContent = oyuncu.kullanici_adi;
            takip_progress.min = 0;
            takip_progress.max = Math.round(yarisci_araba.hp / 10) * 100;
            takip_progress.value = takip_progress.max / 2;
            takip_progress.classList.add("progress-takip");

            yarisci_isim_div.appendChild(yarisci_isim);
            polis_isim_div.appendChild(polis_isim);
            takip_div.appendChild(yarisci_isim_div);
            takip_div.appendChild(takip_progress);
            takip_div.appendChild(polis_isim_div);
            panel_icerik.appendChild(takip_div);

            takip_interval_ekle(takip_progress, yarisci_araba.hp);
        }
        takip_progress_olustur(yariscilar[1], oyuncu);

    }
    
    ekipman_butonlar_div.appendChild(butonlar);
    event_paneli.appendChild(panel_baslik);
    event_paneli.appendChild(panel_icerik);
    event_paneli.appendChild(ekipman_butonlar_div);
    dis_div.appendChild(event_paneli);
    arka_div.appendChild(document.createElement("div"));
    event_paneli.appendChild(arka_div);
    menu_1_center.appendChild(dis_div);

    logger("", true);
}

var interval_liste = [];
var efekt_interval_liste = [];
var timeout_liste = [];
var ses_liste = [TURBO_active, JAMMER_intro, JAMMER_loop, JAMMER_end, EMP_target_active, EMP_target_hit, EMP_active, EMP_hit, HELICOPTER_deploy, HELICOPTER_loop, JAMMER_target_start, JAMMER_target_loop, JAMMER_target_end, ROADBLOCK_hit_1, ROADBLOCK_hit_2, ROADBLOCK_knockout, SPIKE_deploy, SPIKE_hit];
const yarisci_interval_ekle = (progress_bar, araba_hp, oyuncu, yarisci_ad, yarisci_div) => {
    let bozucu_cooldown = 0;
    let turbo_cooldown = 0;
    let npc_can = 1000;
    let yarisci_turbo_aktif = false; // data-* olarak değiştirilecekler
    var interval;

    interval = setInterval(() => {

        if(progress_bar.value >= progress_bar.max){
            yarisi_bitir();
            event_sonuc_ekrani("yaris", yarisci_ad, oyuncu);
        }

        if(oyuncu){ // SADECE OYUNCUYA YAŞANACAK OLAYLAR
            if((Math.round(Math.random() * (polis_sikligi * 5000)) - 25000) == 1 && !takip_aktif){
                // takip_tetikle();
            }
        }

        let yarisci_hamle = Math.round(Math.random() * 15);
        let sansli_sayi = Math.random() * 10;
        if(event_aktif){

            // ek hamle şansı
            if(sansli_sayi > 6){
                if(sansli_sayi > 7){
                    yarisci_hamle += (araba_hp * 1.5) / 10;
                }
                else if(sansli_sayi > 8){
                    yarisci_hamle += (araba_hp * 2) / 10;
                }
                else if(sansli_sayi > 9){
                    yarisci_hamle += (araba_hp * 2.5) / 10;
                }
                else{
                    yarisci_hamle += araba_hp / 10;
                }
            }
            else{
                yarisci_hamle += araba_hp / 10;
            }
            // ekipman kullanımı eklemesi ve olası durumlar
            if(oyuncu){
                if(turbo_aktif){
                    yarisci_hamle += 10;
                }
            }
            else{
                if(yarisci_turbo_aktif){
                    yarisci_hamle += 8;
                }
            }

            // NPC ekipman kullanımı
            // turbo
            if(!oyuncu && turbo_cooldown <= 0 && Math.round(Math.random() * 400) == 1 && !yarisci_turbo_aktif){

                logger(`${yarisci_ad} turbo kullandı`);

                yarisci_turbo_aktif = true;
                turbo_cooldown = 40;
                div_parlat(yarisci_div, "#b1b1b1");

                var turbo_interval = setInterval(() => {
                    if(turbo_cooldown > 0){
                        turbo_cooldown -= 1;
                    }
                    else{
                        efekt_interval_kaldir(turbo_interval);
                    }
                }, 1000);
                efekt_interval_liste.push(turbo_interval);

                var turbo_timeout = setTimeout(() => {
                    yarisci_turbo_aktif = false;
                }, 14000);
                timeout_liste.push(turbo_timeout);
            }

            progress_bar.value += yarisci_hamle;
        }
    }, 50);
    interval_liste.push(interval);
}
const yarisci_interval_kaldir = (bu) => {
    clearInterval(bu);
    interval_liste.splice(interval_liste.indexOf(bu), 1);
}
const efekt_interval_kaldir = (bu) => {
    clearInterval(bu);
    efekt_interval_liste.splice(efekt_interval_liste.indexOf(bu), 1);
}
const timeout_kaldir = (bu) => {
    clearTimeout(bu);
    timeout_liste.splice(timeout_liste.indexOf(bu), 1);
}

const takip_interval_ekle = (progress_bar, araba_hp) => {
    let bozucu_cooldown = 0;
    let turbo_cooldown = 0;
    let yarisci_hamle_eki = araba_hp / 10
    let interval;

    interval = setInterval(() => {
        if(event_aktif){
            if(progress_bar.value <= progress_bar.min){
                takip_interval_kaldir(interval, progress_bar);            
            }
            else if(progress_bar.value >= progress_bar.max){
                takip_interval_kaldir(interval, progress_bar);
            }

            let yarisci_hamle = Math.round(Math.random() * 50);
            let polis_hamle = Math.round(Math.random() * 40) * (-1);
            let sansli_sayi = Math.random() * 10;
            if(sansli_sayi > 8){
                if(araba_hp > 500){
                    if(sansli_sayi > 8.5){
                        yarisci_hamle += (araba_hp * 1.5) / 10;
                    }
                    else if(sansli_sayi > 9){
                        yarisci_hamle += (araba_hp * 3) / 10;
                    }
                    else if(sansli_sayi > 9.5){
                        yarisci_hamle += (araba_hp * 4) / 10;
                    }
                    else{
                        yarisci_hamle += yarisci_hamle_eki;
                    }
                }
                else{
                    yarisci_hamle += yarisci_hamle_eki;
                }
            }
            else{
                if(sansli_sayi < 1){
                    polis_hamle -= 50;
                }
                else if(sansli_sayi < 3){
                    polis_hamle -= 40;
                }
                else if(sansli_sayi < 4){
                    polis_hamle -= 25;
                }
                else if(sansli_sayi < 5){
                    polis_hamle -= 15;
                }
                else{
                    yarisci_hamle -= 6;
                }
            }

            progress_bar.value += yarisci_hamle + polis_hamle;
        }
    }, 150);
    interval_liste.push(interval);
}

const takip_interval_kaldir = (aktif_interval, progress_bar) => {
    if(progress_bar.value <= progress_bar.min){
        clearInterval(aktif_interval);
        alert("Yakalandı")
    }
    else if(progress_bar.value >= progress_bar.max){
        clearInterval(aktif_interval)
        alert("Kaçtı")
    }
}

const takip_tetikle = () => { // yapılacak
    let efekt_aktif = false;
    let EMP_cooldown = 0;
    let spike_cooldown = 0;
    let roadblock_cooldown = 0;
    let helicopter_cooldown = 0;

    const baslik_divler = document.querySelector("#bildirim_paneli").querySelector("#baslik_mesaj").querySelectorAll("div");
    const oyuncu_can_logo = baslik_divler[0].querySelector("img");
    const oyuncu_can_bar = baslik_divler[0].querySelector("progress");
    const polis_sayisi_div = baslik_divler[1];
    const polis_sayisi_span = baslik_divler[1].querySelector("span");
    const ekipman_logolar = baslik_divler[2].querySelectorAll("img");
        const civi_seridi_logo = ekipman_logolar[0];
        const barikat_logo = ekipman_logolar[1];
        const helicopter_logo = ekipman_logolar[2];
        const EMP_logo = ekipman_logolar[3];

    polis_agresifligi /= 4;
    const hamle_sansi = 30000 - (5000 * polis_agresifligi);
    const polis_sayisi = polis_sikligi * 15;

    polis_sayisi_span.textContent = `x${polis_sayisi}`;

    let interval = setInterval(() => {
        const hamle_sayi = Math.round(Math.random() * hamle_sansi);

        if(hamle_sayi == 15){
            const sansli_sayi = Math.round(Math.random() * hamle_sansi);

            if(sansli_sayi > 20000){
                EMP_kullan(false, polis_agresifligi);
            }
            else if(sansli_sayi > 15000){
                helikopter_kullan(false);
            }
            else if(sansli_sayi > 10000){
                civi_kullan(false);
            }
            else if(sansli_sayi > 5000){
                barikat_kullan(false);
            }        
        }
        else if(hamle_sayi < 2){
            polis_sayisi -= 1;
            polis_sayisi_span.textContent = `x${polis_sayisi}`;
            if(polis_sayisi <= 0){
                takip_bitir();
            }
        }
        
    }, 1000);
    interval_liste.push(interval);
}

const logger = (yazi, olustur, oyuncu, imha) => {

    if(imha){
        const logger = document.getElementById("logger");
        const logger2 = document.getElementById("logger2");
        [logger, logger2].forEach(i => {
            document.body.removeChild(i);
        });
        return 0;
    }

    if(olustur){
        const logger = document.createElement("div");
        logger.id = "logger";
        const logger2 = document.createElement("div");
        logger2.id = "logger2";
        document.body.appendChild(logger);
        document.body.appendChild(logger2);
    }
    else{
        const log = document.createElement("span");
        log.textContent = yazi;
        const br = document.createElement("br");

        if(oyuncu){
            const logger = document.getElementById("logger");
            logger.appendChild(log);
            logger.appendChild(br);

            var timeout1 = setTimeout(() => {
                log.style.animation = "logger_log_silme 0.5s forwards";
                var timeout2 = setTimeout(() => {
                    logger.removeChild(log);
                    logger.removeChild(br);

                    [timeout1, timeout2].forEach(i => { timeout_kaldir(i) });
                }, 1000);
                timeout_liste.push(timeout2);
            }, 4000);
            timeout_liste.push(timeout1);
        }
        else{
            const logger2 = document.getElementById("logger2");
            logger2.appendChild(log);
            logger2.appendChild(br);

            var timeout1 = setTimeout(() => {
                log.style.animation = "logger_log_silme 0.5s forwards";
                var timeout2 = setTimeout(() => {
                    logger2.removeChild(log);
                    logger2.removeChild(br);

                    [timeout1, timeout2].forEach(i => { timeout_kaldir(i) });
                }, 1000);
                timeout_liste.push(timeout2);
            }, 4000);
            timeout_liste.push(timeout1);
        }
    }
}


const yarisi_bitir = () => {
    event_aktif = false;
    menu_1_center.removeChild(dis_div);
    if(localStorage.getItem("yarisci_yaris_muzik_alternatifi") == "Özel"){
        muzik_durdur([custom_playlist]);
        muzik_loop_timeout_sil(null, true)
    }
    else{
        muzik_durdur([playlist = simdiki_muzik == "bending" ? Bending_Light : Urban_Assault]);
        muzik_loop_timeout_sil(null, true)
    }
    logger("", "", "", true);

    interval_liste.forEach(i => {
        clearInterval(i);
    });
    interval_liste = [];
    
    efekt_interval_liste.forEach(i => {
        clearInterval(i);
    });
    efekt_interval_liste = [];

    timeout_liste.forEach(i => {
        clearTimeout(i);
    });
    timeout_liste = []

    looped_sfx_liste.forEach(i => {
        clearTimeout(i.id);
    });
    looped_sfx_liste = [];

    ses_liste.forEach(i => {
        i.currentTime = 0;
        i.pause();
    });

    body.querySelectorAll(".rastgele_olay").forEach(i => {
        body.removeChild(i);
    });
}

const EMP_kullan = (yaris_takibi, _polis_agresifliği) => {

    const event_paneli = menu_1_center.querySelector(".event_paneli");
    let efekt_aktif = true;
    
    if(yaris_takibi){
        let savusturma = false;
        NPC_polis_EMP_cooldown = 25
        let cooldown_interval;
        let oyuncu_araba_can_bari = document.querySelector(".menu_1_center").querySelector("#event_panel_dis_div").querySelector("#bildirim_paneli").querySelector("#panel_baslik").querySelector("#oyuncu_araba_can_div").querySelector("#oyuncu_araba_can_bari"); 

        EMP_target_active.currentTime = 0;
        EMP_target_active.play();

        arka_div.querySelector("div").classList.add("EMP_kenar_efekti");
        arka_div.classList.add("EMP_kenarlik");
        arka_div.style.animation = "polis_EMP_anim 3.9s ease forwards";
        let timeout1 = setTimeout(() => {
            arka_div.style.animation = "";
            arka_div.classList.remove("EMP_kenarlik");

            if((Math.round(Math.random()*polis_agresifligi*4) - 25) == 1 && !bozucu_aktif){

                if(oyuncu_araba_can_bari.value - 200 <= 0){
                    yarisi_bitir();
                    event_sonuc_ekrani("yaris", null, true, true);
                }
                else{
                    EMP_target_hit.currentTime = 0;
                    EMP_target_hit.play();
                    oyuncu_araba_can_bari.value -= 200;
                    event_paneli.style.animation = "panel_sallama 1s ease-out infinite";
                    
                    ekran_parlat("#6B6B6B", 0.1);
                    if(Math.round(Math.random() == 1)){
                        const max = 5; const min = 2;
                        let parlama_sayisi = Math.round(Math.random() * (max - min) + min);
                        let interval1 = setInterval(() => {
                            if(parlama_sayisi <= 0){
                                efekt_interval_kaldir(interval1);
                            }
                            parlama_sayisi--;
                            ekran_parlat("#6B6B6B", 0.1);
                        }, 140);
                        efekt_interval_liste.push(interval1);
                    } 
                    
                    logger("EMP seni vurdu.", false, true, false);
                    let timeout2 = setTimeout(() => {
                        event_paneli.style.animation = "";
                        arka_div.querySelector("div").classList.remove("EMP_kenar_efekti");
                    }, 1500);
                    timeout_liste.push(timeout2);
                }
            }
            else if(!bozucu_aktif){
                arka_div.querySelector("div").classList.remove("EMP_kenar_efekti");
                logger("EMP seni ıskaladı.", false, true, false);
            }
            
            efekt_aktif = false;
        }, 3900);
        timeout_liste.push(timeout1);

        cooldown_interval = setInterval(() => {
            NPC_polis_EMP_cooldown -= 0.25;
            if(NPC_polis_EMP_cooldown <= 0 && !efekt_aktif && !bozucu_aktif){
                efekt_interval_kaldir(cooldown_interval);
            }
            if(bozucu_aktif && !savusturma){
                savusturma = true;
                EMP_target_active.pause();
                efekt_aktif = false;
                timeout_kaldir(timeout1);
                logger("EMP'yi savuşturdun.", false, true, false);
            }
        }, 250);
        efekt_interval_liste.push(cooldown_interval);

    }
    else{
        oyuncu_EMP_cooldown = 20;
        let cooldown_interval;
        cooldown_interval = setInterval(() => {
            oyuncu_EMP_cooldown--;
            if(oyuncu_EMP_cooldown == 0){
                efekt_interval_kaldir(cooldown_interval);
            }
        }, 1000);
    }
}

const helikopter_kullan = () => {
    oyuncu_helikopter_cooldown = 0;
    let cooldown_interval;
    cooldown_interval = setInterval(() => {
        oyuncu_helikopter_cooldown++;
        if(oyuncu_helikopter_cooldown == 50){
            clearInterval(cooldown_interval);
        }
    }, 1000);
}

const barikat_kullan = () => {
    oyuncu_barikat_cooldown = 0;
    let cooldown_interval;
    cooldown_interval = setInterval(() => {
        oyuncu_barikat_cooldown++;
        if(oyuncu_barikat_cooldown == 30){
            clearInterval(cooldown_interval);
        }
    }, 1000);
}

const civi_kullan = () => {
    oyuncu_civi_cooldown = 0;
    let cooldown_interval;
    cooldown_interval = setInterval(() => {
        oyuncu_civi_cooldown++;
        if(oyuncu_civi_cooldown == 25){
            clearInterval(cooldown_interval);
        }
    }, 1000);
}

const serit_degis = (buton) => {
    buton.disabled = true;
    oyuncu_serit_cooldown = 1;

    const event_paneli = menu_1_center.querySelector(".event_paneli");

    if(oyuncu_serit_tarafi == "Sol"){
        oyuncu_serit_tarafi = "Sağ";
        dis_div.style.animation = "serit_degis_titreme 0.1s linear 2";
        event_paneli.style.animation = "saga_gec 0.5s linear forwards";
        
        logger(`${oyuncu_serit_tarafi} şeride geçtin`, false, true);
    }
    else{
        oyuncu_serit_tarafi = "Sol";
        dis_div.style.animation = "serit_degis_titreme 0.1s linear 2";
        event_paneli.style.animation = "sola_gec 0.5s linear forwards";

        logger(`${oyuncu_serit_tarafi} şeride geçtin`, false, true);
    }

    var timeout1 = setTimeout(() => {
        event_paneli.style.animation = "";
        dis_div.style.animation = "";
        buton.style.animation = "ekipman_yukleme 1s linear forwards";

        var cooldown_interval = setInterval(() => {
            oyuncu_serit_cooldown--;
            if(oyuncu_serit_cooldown <= 0){
                buton.disabled = false;
                clearInterval(cooldown_interval);
                efekt_interval_kaldir(cooldown_interval);
                buton.style.animation = "";
            }
        }, 1000);
        efekt_interval_liste.push(cooldown_interval);
    }, 500);
    timeout_liste.push(timeout1);
}

const turbo_kullan = (buton) => {

    logger("Turbo kullandın", false, true);

    buton.disabled = true;
    statik_vid.style.zIndex = "99";
    TURBO_active.play();
    oyuncu_turbo_cooldown = 40;
    buton.style.transition = "none";
    buton.style.backgroundSize = "0% 100%";
    
    const event_paneli = menu_1_center.querySelector(".event_paneli");

    var timeout1 = setTimeout(() => {
        turbo_aktif = true;
        ekran_parlat("#858585", 1);
        dis_div.style.animation = "turbo_ivme 7s ease forwards";
        event_paneli.style.animation = "panel_sallama 0.7s ease-out infinite";

        var cooldown_interval = setInterval(() => {
            if(!turbo_aktif){
                var ilerleme = buton.style.backgroundSize;
                if(oyuncu_serit_tarafi == "Sağ"){
                    oyuncu_turbo_cooldown -= 2;
                    buton.style.backgroundSize = `${(ilerleme.slice(0, ilerleme.indexOf('%')) * 1) + 5}% 100%`;
                }
                else{
                    oyuncu_turbo_cooldown -= 1;
                    buton.style.backgroundSize = `${(ilerleme.slice(0, ilerleme.indexOf('%')) * 1) + 2.5}% 100%`;
                }
            }
            
            if(oyuncu_turbo_cooldown <= 0){
                buton.disabled = false;
                clearInterval(cooldown_interval);
                buton.style.backgroundSize = "";
            }
        }, 1000);
        efekt_interval_liste.push(cooldown_interval);

        var timeout2 = setTimeout(() => {
            dis_div.style.animation = "turbo_ivme_bitis 0.5s ease forwards";
            event_paneli.style.animation = "";
            turbo_aktif = false;
            var timeout3 = setTimeout(() => {
                dis_div.style.animation = "";
                statik_vid.style.zIndex = "";
                buton.style.transition = "";
            }, 500);
            timeout_liste.push(timeout3);
        }, 12000);
        timeout_liste.push(timeout2);
    }, 850);
    timeout_liste.push(timeout1);
}

const bozucu_kullan = (buton) => {

    logger("Sinyal bozucu kullandın", false, true);

    buton.disabled = true;
    oyuncu_bozucu_cooldown = 30;
    bozucu_aktif = true;
    const max = 15; const min = 9;
    const sure = Math.round(Math.random() * (max - min) + min);
    buton.style.transition = "none";
    buton.style.backgroundSize = "0% 100%";
    
    var cooldown_interval = setInterval(() => {
        if(!bozucu_aktif){
            buton.style.transition = "";
            var ilerleme = buton.style.backgroundSize;
            buton.style.backgroundSize = `${(ilerleme.slice(0, ilerleme.indexOf('%')) * 1) + 3.3}% 100%`;

            oyuncu_bozucu_cooldown -= 1;
            if(oyuncu_bozucu_cooldown <= 0){
                buton.disabled = false;
                buton.style.backgroundSize = "";
                efekt_interval_kaldir(cooldown_interval);
            }
        }
        
    }, 1000);
    efekt_interval_liste.push(cooldown_interval);

    JAMMER_intro.play();
    arka_div.querySelector("div").classList.add("bozucu_kenar_efekti");
    arka_div.style.animation = "bozucu_kenar_acilis 2.8s ease forwards";

    var timeout1 = setTimeout(() => {
        efekt_loop_oynat(JAMMER_loop, false, a = {id: null, ad: "bozucu_sfx"}, null);
        arka_div.style.animation = "bozucu_kenar_loop 1.430s ease infinite 250ms";

        var timeout2 = setTimeout(() => { // TIMEOUTU SİLİNMİYOR
            efekt_loop_oynat(JAMMER_loop, true, null, "bozucu_sfx");
            JAMMER_end.play();
            bozucu_aktif = false;

            arka_div.style.animation = "bozucu_kenar_son 1s ease forwards";

            var timeout3 = setTimeout(() => {
                arka_div.style.animation = "";
                arka_div.querySelector("div").classList.remove("bozucu_kenar_efekti");
                timeout_kaldir(timeout3);
            }, 1100);
            timeout_liste.push(timeout3);

            [timeout1, timeout2].forEach(i => {
                timeout_kaldir(i);
            });
        }, sure * 1000);
        timeout_liste.push(timeout2);
    }, 2800);
    timeout_liste.push(timeout1)
}

const ekran_parlat = (renk, sure) => {
    document.body.style.transition = "none";
    document.body.style.backgroundColor = renk;
    setTimeout(() => {
        document.body.style.transition = `all ${sure}s`;
        document.body.style.backgroundColor = "";
    }, 100);
}

const div_parlat = (div, renk) => {
    div.style.transition = "none";
    div.style.backgroundColor = renk;
    setTimeout(() => {
        div.style.transition = "all 1s";
        div.style.backgroundColor = "";
    }, 100);
}

const rastgele_olay_tetikle = (_olayAd) => {
    const olay = document.createElement("div");
    const cember = document.createElement("div");
    const logo = document.createElement("img");

    olay.className = "rastgele_olay";
    cember.className = "rastgele_olay_cember";
    logo.className = "rastgele_olay_logo";
    logo.draggable = false;

    const maxWidth = window.innerWidth - 100;
    const maxHeight = window.innerHeight - 100;
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);
    olay.style.left = randomX + 'px';
    olay.style.top = randomY + 'px';

    cember.appendChild(logo);
    olay.appendChild(cember);
    body.appendChild(olay);

    var max, min, olay_fonk, mesaj_olumlu, mesaj_olumsuz;

    switch (_olayAd) {
        case "trafik":
            logo.src = "./galeri/favicon/araba_listesi.png";
            max = 4;
            min = 2;
            mesaj_olumlu = "Trafikle çarpışmaktan kaçındın.";
            mesaj_olumsuz = "Trafikle çarpıştın.";
            break;
        case "rampa":
            logo.src = "./galeri/polis_menu/EMP.png";
            max = 3;
            min = 1;
            mesaj_olumlu = "Rampayı kullandın.";
            break;
        default:
            logo.src = "./galeri/soru_isareti.png";
            max = 4;
            min = 1;
            mesaj_olumlu = "?";
            mesaj_olumsuz = "??";
            break;
    }

    const kuculmeHizi = Math.round(Math.random() * (max - min) + min);

    var size = 100;
    var interval1 = setInterval(() => {
        if(size - kuculmeHizi < 0){
            cember.onclick = () => {};
            cember.style.animation = "rastgele_olay_cikis_fail_1 1s forwards";
            var timeout1 = setTimeout(() => {
                if(body.querySelectorAll(".rastgele_olay").length > 0){
                    body.removeChild(olay);
                }
            }, 1000);
            timeout_liste.push(timeout1);
            if(mesaj_olumsuz){
                logger(mesaj_olumsuz, false, true, false);
            }
            efekt_interval_kaldir(interval1);
        }
        else{
            size -= kuculmeHizi;
            cember.style.width = size + 'px';
            cember.style.height = size + 'px';
        }        
    }, 50);
    efekt_interval_liste.push(interval1);

    cember.onclick = () => {
        cember.onclick = () => {};
        efekt_interval_kaldir(interval1);

        if(olay_fonk){

        }

        cember.style.cursor = "default";
        cember.style.animation = "rastgele_olay_cikis_click 1s forwards";

        var interval2 = setInterval(() => {
            if(size + 5 > 100){
                var timeout1 = setTimeout(() => {
                    if(body.querySelectorAll(".rastgele_olay").length > 0){
                        body.removeChild(olay);
                    }
                }, 1000);
                timeout_liste.push(timeout1);
                efekt_interval_kaldir(interval2);
            }
            else{
                size += 5;
                cember.style.width = size + 'px';
                cember.style.height = size + 'px';
            }        
        }, 50);
        efekt_interval_liste.push(interval2);

        if(mesaj_olumlu){
            logger(mesaj_olumlu, false, true, false);
        }
    }

}

const event_sonuc_ekrani = (tip, yarisci_ad, oyuncu, yakalanma) => {
    const sonuc = document.createElement("span");
    sonuc.id = "event_sonuc";

    let muzik = simdiki_muzik == "urban" ? Urban_Assault : Bending_Light;

    if(tip == "yaris"){
        if(oyuncu){
            if(yakalanma){
                muzik.kaybetme.play();
                ekran_parlat("#9C0000", 0.2);
                setTimeout(() => {
                    ekran_parlat("#171786", 0.3);
                }, 250);
                sonuc.textContent = `YAKALANDIN`;
            }
            else{
                muzik.kazanma.play();
                ekran_parlat("#009398", 0.5);
                sonuc.textContent = "KAZANDIN";
            }
        }
        else{
            muzik.kaybetme.play();
            ekran_parlat("#9B0000", 0.5);
            sonuc.textContent = `${yarisci_ad.toUpperCase()} KAZANDI`;
        }
    }
    else{
        if(oyuncu){
            ekran_parlat("#589400", 0.5);
            sonuc.textContent = `${yarisci_ad.toUpperCase()} YAKALANDI`;
        }
        else{
            ekran_parlat("#009398", 0.5);
            sonuc.textContent = `${yarisci_ad.toUpperCase()} KAÇTI`;
        }
    }
    menu_1_center.appendChild(sonuc);

    setTimeout(() => {
        sonuc.style.opacity = "0";
        if(yakalanma){
            statik_vid2.currentTime = 0;
            statik_vid2.play();
            statik_ses2.play();
            statik_vid2.style.animation = "statik2_anim 4s forwards";
            statik_vid2.style.zIndex = "99";
            setTimeout(() => {
                statik_vid2.style.zIndex = "";
                statik_vid2.pause();
                statik_vid2.style.animation = "";
                onay_bildirimi_olustur("Sistem", "Bağlantı kesildi.", null, null, baslangic_olustur, "tamam", "./galeri/favicon/sistem.png");
            }, 2300);
        }
        else{
            setTimeout(() => {

                AFK_event();
                window.onmousemove = () => {AFK_event()};
                window.onkeydown = () => {AFK_event()};
                window.onclick = () => {AFK_event()};
    
                if(tip == "yaris"){
                    let yarisci_muzikler = [];
                    for(i in yarisci_menu_muzikler){
                        for(k in yarisci_menu_muzikler[i]){
                            if(yarisci_menu_muzikler[i][k] != null){
                                yarisci_muzikler.push(yarisci_menu_muzikler[i][k]);
                            }
                        }
                    }
                    muzik_yukselt(yarisci_muzikler, localStorage.getItem("muzik_vol") * 100, true, rastgele_muzik_oynat("yarisci_menu"));
                }
                else{
                    let polis_muzikler = [];
                    for(i in polis_menu_muzikler){
                        for(k in polis_menu_muzikler[i]){
                            if(polis_menu_muzikler[i][k] != null){
                                yarisci_muzikler.push(polis_menu_muzikler[i][k]);
                            }
                        }
                    }
                    muzik_yukselt(polis_muzikler, localStorage.getItem("muzik_vol") * 100, true, rastgele_muzik_oynat("polis_menu"));
                }
    
                menu_1_center.removeChild(sonuc);
                menu_1_olustur(output_id, input_ad, "", "", oturum_turu);
            }, 1000);
        }
    }, 4000);
}

var looped_sfx_liste = [];
const efekt_loop_oynat = (sfx, pause, _timeout, sfx_ad) => {
    if(!pause){

        sfx.play();
        sfx.currentTime = 0;

        _timeout.id = setTimeout((_sfx = sfx, __timeout = _timeout) => {

            efekt_loop_oynat(_sfx, false, a = __timeout);

        }, (sfx.duration.toFixed(3) - 0.07) * 1000);
        timeout_liste.push(_timeout.id);
        looped_sfx_liste.push(_timeout);
    }
    else{
        sfx.pause();
        looped_sfx_liste.forEach(i => {
            if(i.ad == sfx_ad){
                clearTimeout(i.id);
                looped_sfx_liste.splice(looped_sfx_liste.indexOf(i), 1);
            }
        });
    }
}

const adaptif_muzik_oynat = (progress, muzik) => {
    let uzunluk_parca = progress.max / 6;
    let muzik_bolum = 0;

    let interval = setInterval(() => {
        if((progress.value > uzunluk_parca) && muzik_bolum < 1){
            muzik_bolum = 1;
            
            muzik_kis([muzik.intro, muzik.part1], 100, true, () => muzik_oynat(muzik.intro, muzik.part1, true, a = {id: null, ad: "adaptif1"}));
            
            muzik_yukselt([muzik.part3_2_intro, muzik.part3_2], 100, true, () => muzik_oynat(muzik.part3_2_intro, muzik.part3_2, false, a = {id: null, ad: "adaptif2"}));
        }
        else if((progress.value > uzunluk_parca * 2) && muzik_bolum < 2){
            muzik_bolum = 2;

            muzik_kis([muzik.part3_2_intro, muzik.part3_2], 100, true, () => muzik_oynat(muzik.part3_2_intro, muzik.part3_2 ,true, a = {id: null, ad: "adaptif2"}));

            muzik_yukselt([muzik.part3_3_intro, muzik.part3_3], 100, true, () => muzik_oynat(muzik.part3_3_intro, muzik.part3_3, false, a = {id: null, ad: "adaptif3"}));
        }
        else if((progress.value > uzunluk_parca * 4) && muzik_bolum < 3){
            muzik_bolum = 3;

            muzik_kis([muzik.part3_3_intro, muzik.part3_3], 100, true, () => muzik_oynat(muzik.part3_3_intro, muzik.part3_3, true, a = {id: null, ad: "adaptif3"}));

            muzik_yukselt([muzik.part2], 100, true, () => muzik_oynat(null, muzik.part2, false, a = {id: null, ad: "adaptif4"}));
        }
        else if((progress.value > uzunluk_parca * 5) && muzik_bolum < 4){
            muzik_bolum = 4;

            muzik_kis([muzik.part2], 100, true, () => muzik_oynat(null, muzik.part2, true, a = {id: null, ad: "adaptif4"}));

            muzik_yukselt([muzik.acele], 100, true, () => muzik_oynat(null, muzik.acele, false, a = {id: null, ad: "adaptif_acele"}));
        }
    }, 100);
    interval_liste.push(interval);
}

const Urban_Assault = {
    intro: new Audio("./sesler/yaris_muzik/yaris1_1_intro.mp3"),
    part1: new Audio("./sesler/yaris_muzik/yaris1_1.mp3"),

    part2: new Audio("./sesler/yaris_muzik/yaris1_2.mp3"),

    part3_1_intro: new Audio("./sesler/yaris_muzik/yaris1_3_1_intro.mp3"),
    part3_1: new Audio("./sesler/yaris_muzik/yaris1_3_1.mp3"),

    part3_2_intro: new Audio("./sesler/yaris_muzik/yaris1_3_2_intro.mp3"),
    part3_2: new Audio("./sesler/yaris_muzik/yaris1_3_2.mp3"),

    part3_3_intro: new Audio("./sesler/yaris_muzik/yaris1_3_3_intro.mp3"),
    part3_3: new Audio("./sesler/yaris_muzik/yaris1_3_3.mp3"),

    acele: new Audio("./sesler/yaris_muzik/yaris1_acele.mp3"),

    kazanma: new Audio("./sesler/yaris_muzik/yaris1_kazanma.mp3"),

    kaybetme: new Audio("./sesler/yaris_muzik/yaris1_kaybetme.mp3"),

    aralik: 1
}

const Bending_Light = {
    intro: new Audio("./sesler/yaris_muzik/yaris2_1_intro.mp3"),
    part1: new Audio("./sesler/yaris_muzik/yaris2_1.mp3"),

    part2: new Audio("./sesler/yaris_muzik/yaris2_2.mp3"),

    part3_1_intro: new Audio("./sesler/yaris_muzik/yaris2_3_1_intro.mp3"),
    part3_1: new Audio("./sesler/yaris_muzik/yaris2_3_1.mp3"),

    part3_2_intro: new Audio("./sesler/yaris_muzik/yaris2_3_2_intro.mp3"),
    part3_2: new Audio("./sesler/yaris_muzik/yaris2_3_2.mp3"),

    part3_3_intro: new Audio("./sesler/yaris_muzik/yaris2_3_3_intro.mp3"),
    part3_3: new Audio("./sesler/yaris_muzik/yaris2_3_3.mp3"),

    acele: new Audio("./sesler/yaris_muzik/yaris2_acele.mp3"),

    kazanma: new Audio("./sesler/yaris_muzik/yaris2_kazanma.mp3"),

    kaybetme: new Audio("./sesler/yaris_muzik/yaris2_kaybetme.mp3"),

    aralik: 1
}

const custom_playlist = {
    Barrier_Break:{
        intro: new Audio("./sesler/custom_muzik/Barrier_Break_intro.mp3"), 
        main: new Audio("./sesler/custom_muzik/Barrier_Break.mp3")
    },
    Continuum:{
        intro: new Audio("./sesler/custom_muzik/Continuum_intro.mp3"), 
        main: new Audio("./sesler/custom_muzik/Continuum.mp3")
    },
    Hold_Your_Colour:{
        intro: new Audio("./sesler/custom_muzik/Hold_your_Colour_(Extended Bipolar Mix)_intro.mp3"), 
        main: new Audio("./sesler/custom_muzik/Hold_your_Colour_(Extended Bipolar Mix).mp3")
    },
    Mind_Killer:{
        intro: new Audio("./sesler/custom_muzik/Mind_Killer_intro.mp3"), 
        main: new Audio("./sesler/custom_muzik/Mind_Killer.mp3")
    },
    WaterColour:{
        intro: new Audio("./sesler/custom_muzik/Watercolour_intro.m4a"), 
        main: new Audio("./sesler/custom_muzik/Watercolour.m4a")
    },
    SunGod:{
        intro: new Audio("./sesler/custom_muzik/Sun_God_intro.m4a"), 
        main: new Audio("./sesler/custom_muzik/Sun_God.m4a")
    },

    aralik: 2
}

for(i in custom_playlist){
    for(k in custom_playlist[i]){
        muzikler.push(custom_playlist[i][k]);
        custom_playlist[i][k].volume = localStorage.getItem("muzik_vol") != null ? localStorage.getItem("muzik_vol") : 0.2;
    }
}

for(i in Urban_Assault){
    muzikler.push(Urban_Assault[i]);
    Urban_Assault[i].volume = localStorage.getItem("muzik_vol") != null ? localStorage.getItem("muzik_vol") : 0.2;
}
for(i in Bending_Light){
    muzikler.push(Bending_Light[i]);
    Bending_Light[i].volume = localStorage.getItem("muzik_vol") != null ? localStorage.getItem("muzik_vol") : 0.2;
}

const muzik_kis = (muzikler, hiz, tetikle, fonk) => {

    let max = localStorage.getItem("muzik_vol") * 1;

    muzikler.forEach(muzik => {
        var kis = setInterval(() => {
            if(muzik.volume.toFixed(2) > 0.10){
                muzik.volume -= 0.05; 
            }
            else{
                muzik.volume = 0;
                if(tetikle){
                    fonk();
                }
                clearInterval(kis);
            }
        }, hiz - max * 100);
        interval_liste.push(kis);
    });
}

const muzik_yukselt = (muzikler, hiz, sifirdan, fonk) => {

    let max = localStorage.getItem("muzik_vol") * 1;

    if(fonk){
        fonk();
    }

    muzikler.forEach(muzik => {

        if(sifirdan){
            muzik.volume = 0;
        }

        var yukselt = setInterval(() => {
            if(muzik.volume.toFixed(2) < max - 0.05){
                muzik.volume += 0.05; 
            }
            else{
                muzik.volume = max;
                clearInterval(yukselt);
            }
        }, hiz - max * 100);
        interval_liste.push(yukselt);
    });
}