const statik_vid = document.getElementById("statikVid");
const statik_vid2 = document.getElementById("statikVid2");
var favicon = document.querySelector("link[rel~='icon']");
const statik_ses = new Audio("./sesler/polis_menu/statik.mp3");
const statik_ses2 = new Audio("./sesler/yarisci_menu/statik.mp3");
const AFK_arkaplan = document.getElementById("AFK_arkaplan");
const menu_secim = new Audio("./sesler/menu_secim.mp3");
const bildirim_giris = new Audio("./sesler/bildirim_giris.mp3");
const bildirim_cikis = new Audio("./sesler/bildirim_cikis.mp3");
const bildirim_cikis_red = new Audio("./sesler/bildirim_cikis_red.mp3");
const polis_menu_acilis = new Audio("./sesler/polis_menu/polis_menu_acilis.mp3");
const polis_menu_buton_hover = new Audio("./sesler/polis_menu/polis_menu_buton_hover.mp3");
const polis_menu_menuler_buton_acilis = new Audio ("./sesler/polis_menu/polis_menu_menuler_buton_acilis.mp3")
const polis_menu_menuler_acilis = new Audio("./sesler/polis_menu/polis_menu_menuler_acilis.mp3");
const polis_menu_butonlar_acilis = new Audio("./sesler/polis_menu/polis_menu_butonlar_acilis.mp3");
const polis_menu_satin_al_basarisiz = new Audio("./sesler/polis_menu/polis_menu_satin_al_basarisiz.mp3");
const bildirim_onay_red = new Audio("./sesler/bildirim_onay_red.mp3");
const profil_olustur_buton = new Audio("./sesler/profil_olustur_buton.mp3");

const polis_login_logo_acilis = new Audio("./sesler/polis_menu/polis_login_logo_acilis.mp3");
const polis_login_ekran_div_acilis = new Audio("./sesler/polis_menu/polis_login_ekran_div_acilis.mp3");
const polis_login_ekran_acilis = new Audio("./sesler/polis_menu/polis_login_ekran_acilis.mp3");
const polis_menu_klavye = new Audio("./sesler/polis_menu/polis_menu_klavye.mp3");
const polis_login_giris_yukleniyor = new Audio("./sesler/polis_menu/polis_login_giris_yukleniyor.mp3");

const TURBO_active = new Audio("./sesler/yarisci_event/TURBO_active.mp3");
const JAMMER_intro = new Audio("./sesler/yarisci_event/JAMMER_start.mp3");
const JAMMER_loop = new Audio("./sesler/yarisci_event/JAMMER_loop.mp3");
const JAMMER_end = new Audio("./sesler/yarisci_event/JAMMER_end.mp3");
const EMP_target_active = new Audio("./sesler/yarisci_event/EMP_target_active.mp3");
const EMP_target_hit = new Audio("./sesler/yarisci_event/EMP_target_hit.mp3");

const EMP_active = new Audio("./sesler/polis_event/EMP_active.mp3");
const EMP_hit = new Audio("./sesler/polis_event/EMP_hit.mp3");
const HELICOPTER_deploy = new Audio("./sesler/polis_event/HELICOPTER_deploy.mp3");
const HELICOPTER_loop = new Audio("./sesler/polis_event/HELICOPTER_loop.mp3");
const JAMMER_target_start = new Audio("./sesler/polis_event/JAMMER_target_start.mp3");
const JAMMER_target_loop = new Audio("./sesler/polis_event/JAMMER_target_loop.mp3");
const JAMMER_target_end = new Audio("./sesler/polis_event/JAMMER_target_end.mp3");
const ROADBLOCK_hit_1 = new Audio("./sesler/polis_event/ROADBLOCK_hit_1.mp3");
const ROADBLOCK_hit_2 = new Audio("./sesler/polis_event/ROADBLOCK_hit_2.mp3");
const ROADBLOCK_knockout = new Audio("./sesler/polis_event/ROADBLOCK_knockout.mp3");
const SPIKE_deploy = new Audio("./sesler/polis_event/SPIKE_deploy.mp3");
const SPIKE_hit = new Audio("./sesler/polis_event/SPIKE_hit.mp3");

// sfx ses seviyesi tanımlamaları
var sfx = [bildirim_cikis, bildirim_giris, bildirim_cikis_red, menu_secim, statik_ses, polis_menu_acilis, polis_menu_buton_hover, polis_menu_menuler_buton_acilis, polis_menu_menuler_acilis, polis_menu_butonlar_acilis, polis_menu_satin_al_basarisiz, bildirim_onay_red, polis_login_logo_acilis, polis_login_ekran_div_acilis, polis_login_ekran_acilis, polis_menu_klavye, polis_login_giris_yukleniyor, statik_ses2, profil_olustur_buton, TURBO_active, JAMMER_intro, JAMMER_loop, JAMMER_end, EMP_target_active, EMP_target_hit, EMP_active, EMP_hit, HELICOPTER_deploy, HELICOPTER_loop, JAMMER_target_start, JAMMER_target_loop, JAMMER_target_end, ROADBLOCK_hit_1, ROADBLOCK_hit_2, ROADBLOCK_knockout, SPIKE_deploy, SPIKE_hit]
sfx.forEach(i => {
    i.volume = localStorage.getItem("sfx_vol") != null ? localStorage.getItem("sfx_vol") : 0.4; // çerez varsa çerezin değerine yoksa varsayılan değere eşitle
});

// müzik ses seviyesi tanımlamaları
var muzikler = [];
const yarisci_menu_muzikler = {
    alt1:{
        intro: new Audio("./sesler/yarisci_menu/yarisci_1_intro.mp3"),
        main: new Audio("./sesler/yarisci_menu/yarisci_1_loop.mp3")
    },
    alt2:{
        intro: new Audio("./sesler/yarisci_menu/yarisci_2_intro.mp3"),
        main: new Audio("./sesler/yarisci_menu/yarisci_2_loop.mp3")
    },
    alt3:{
        intro: null,
        main: new Audio("./sesler/yarisci_menu/yarisci_3.mp3")
    },
    alt4:{
        intro: null,
        main: new Audio("./sesler/yarisci_menu/yarisci_4.mp3")
    },
    aralik: 2
}

const polis_menu_muzikler = {
    alt1:{
        main: new Audio("./sesler/polis_menu/polis_menu_muzik_1.m4a")
    },
    alt2:{
        main: new Audio("./sesler/polis_menu/polis_menu_muzik_2.m4a")
    },
    alt3:{
        main: new Audio("./sesler/polis_menu/polis_menu_muzik_3.m4a")
    },
    alt4:{
        main: new Audio("./sesler/polis_menu/polis_menu_muzik_4.m4a")
    },
    aralik: 2
}

for(i in yarisci_menu_muzikler){
    for(k in yarisci_menu_muzikler[i]){
        if(yarisci_menu_muzikler[i][k] != null){
            muzikler.push(yarisci_menu_muzikler[i][k]);
            yarisci_menu_muzikler[i][k].volume = localStorage.getItem("muzik_vol") != null ? localStorage.getItem("muzik_vol") : 0.2;
        }
    }
}
for(i in polis_menu_muzikler){
    for(k in polis_menu_muzikler[i]){
        if(polis_menu_muzikler[i][k] != null){
            muzikler.push(polis_menu_muzikler[i][k]);
            polis_menu_muzikler[i][k].volume = localStorage.getItem("muzik_vol") != null ? localStorage.getItem("muzik_vol") : 0.2;
        }
    }
}
const ana_menu_playlist = [yarisci_menu_muzikler, polis_menu_muzikler];

const body = document.body;
var bildirim_paneli;
var ayarlar_menu_pencere;
var menu_1;

var polis_menu; // polis menüsü başlangıç butonu
var yarisci_menu; // yarışçı menüsü başlangıç butonu
var ayarlar_menu; // ayalar penceresi başlangıç butonu
var giris_menu; // başlangıç menüsününü kendisi
var giris_menu_text; // başlangıç menüsünün değişen yazısı
var giris_menu_text_span; // başlangıç menüsünün yazı spanı

var login_aktif = false; // login olurken tuş olaylarını engellemek içimn 
var menu_sekmesi = 0; // menü sekmesinin indisi
var esc_engel = false; // tuş engelleme

const KEY_event = () => {
    body.addEventListener("keydown", (event) => {

        const ESC_giris_menu = body.querySelector("#giris_menu");
        const ESC_body_bildirim_paneli = body.querySelector("body > #bildirim_paneli");
        const ESC_ayarlar_menu_pencere = body.querySelector("#ayarlar_menu_pencere");
        const ESC_beyaz_cikis = body.querySelector("#beyaz_cikis");
        const ESC_menu_1_center = body.querySelector(".menu_1_center");
        const ESC_login_menu = body.querySelector(".login");
        const ESC_menu_1 = menu_sekmesi > 0 && !(ESC_menu_1_center == null || ESC_menu_1_center == undefined) ? ESC_menu_1_center.querySelector(".menu_1") : null;
        const ESC_login_menu_butonlari = ESC_login_menu != null ? ESC_login_menu.querySelector(".menu_butonlari") : null;
        const ESC_menu_1_butonlari = ESC_menu_1 != null ? ESC_menu_1.querySelector(".menu_butonlari") : null;
        const ESC_menu_2_bildirim_paneli = ESC_menu_1_center != null ? ESC_menu_1_center.querySelector("#bildirim_paneli") : null;
        const P_yazdir_buton = ESC_menu_1_center != null && menu_sekmesi == 2 && document.getElementsByClassName("menu_butonlari")[0] ? document.getElementsByClassName("menu_butonlari")[0].querySelector("#yazdir_btn") : null;
        const T_ileri_sar_buton = ESC_menu_1_center != null && menu_sekmesi == 2 && document.getElementsByClassName("menu_butonlari")[0] ? document.getElementsByClassName("menu_butonlari")[0].querySelector("#ileri_sar_btn") : null;
        const Enter_sirala_buton = ESC_menu_1_center != null && menu_sekmesi == 2 && document.getElementsByClassName("menu_butonlari")[0] ? document.getElementsByClassName("menu_butonlari")[0].querySelector("#sirala_btn") : null;
    
        if((event.key == "p" || event.key == "P") && !esc_engel && menu_sekmesi == 2 && P_yazdir_buton && !ESC_body_bildirim_paneli && !ESC_menu_2_bildirim_paneli){
            P_yazdir_buton.click();
        }
        if((event.key == "t" || event.key == "T") && !esc_engel && menu_sekmesi == 2 && T_ileri_sar_buton && !ESC_body_bildirim_paneli && !ESC_menu_2_bildirim_paneli){
            T_ileri_sar_buton.click();
        }
        if(event.key == "Enter" && !esc_engel && menu_sekmesi == 2 && Enter_sirala_buton && !ESC_body_bildirim_paneli && !ESC_menu_2_bildirim_paneli){
            Enter_sirala_buton.click();
        }
        if(event.key == "Escape" && !esc_engel){
            
            if(ESC_body_bildirim_paneli){
                body.querySelectorAll("body > #bildirim_paneli").forEach(i => {
                    body.removeChild(i);
                });
                bildirim_cikis.currentTime = 0;
                bildirim_cikis.play();
                if(ESC_giris_menu){
                    giris_menu_secim_temizle();
                }
                if(ESC_menu_1 && !ESC_menu_2_bildirim_paneli){
                    menu_2.style.filter = "blur(0)";
                    statik_vid.style.zIndex = "";
                }
                if(ESC_menu_2_bildirim_paneli){
                    ESC_menu_2_bildirim_paneli.querySelectorAll("button").forEach(i => {
                        i.disabled = false;
                    });
                }
            }
            else if(ESC_menu_2_bildirim_paneli){
                ESC_menu_1_center.querySelectorAll("#bildirim_paneli").forEach(i => {
                    ESC_menu_1_center.removeChild(i);
                });
                menu_2.style.filter = "blur(0)";
                statik_vid.style.zIndex = "";
                bildirim_cikis.currentTime = 0;
                bildirim_cikis.play();
                if(ESC_giris_menu){
                    giris_menu_secim_temizle();
                }
            }
            else if(ESC_ayarlar_menu_pencere){
                body.removeChild(ESC_ayarlar_menu_pencere);
                bildirim_cikis.currentTime = 0;
                bildirim_cikis.play();
                giris_menu_secim_temizle();
            }
            else if(ESC_login_menu && ESC_login_menu_butonlari && !login_aktif){
                ESC_beyaz_cikis.style.animation = "beyaz_cikis_anim 0.3s linear forwards";
                polis_menu_acilis.play();
                muzik_oynat(null, null, true, a = {id: null, ad: "menu_muzik"}, ana_menu_playlist);
                ESC_menu_1_center.removeChild(ESC_login_menu);
                setTimeout(() => {
                    body.removeChild(ESC_menu_1_center);
                }, 600);
                baslangic_olustur();
            }
            else if(ESC_menu_1 && ESC_menu_1_butonlari){
                if(menu_sekmesi == 1){
                    ESC_beyaz_cikis.style.animation = "beyaz_cikis_anim 0.3s linear forwards";
                    polis_menu_acilis.play();
                    muzik_oynat(null, null, true, a = {id: null, ad: "menu_muzik"}, ana_menu_playlist);
                    ESC_menu_1_center.removeChild(ESC_menu_1);
                    setTimeout(() => {
                        body.removeChild(ESC_menu_1_center);
                    }, 600);
                    baslangic_olustur();
                }
                else if(menu_sekmesi == 2){
                    ESC_menu_1_center.removeChild(ESC_menu_1);
                    menu_1_olustur(output_id, input_ad, output_sube, output_rutbe, oturum_turu);
                }
            }
            
        }
    });
}
var AFK_timer;
var AFK_interval;
var audioContext;
try{
    audioContext = new window.AudioContext();
}
catch{}
var filtreler = []
for(i in yarisci_menu_muzikler){
    for(k in yarisci_menu_muzikler[i]){
        if(yarisci_menu_muzikler[i][k] != null){
            var source = audioContext.createMediaElementSource(yarisci_menu_muzikler[i][k]);
            var filter = audioContext.createBiquadFilter();
            source.connect(filter);
            filter.connect(audioContext.destination);
            filtreler.push(filter);
        }
    }
}
for(i in polis_menu_muzikler){
    for(k in polis_menu_muzikler[i]){
        if(polis_menu_muzikler[i][k] != null){
            var source = audioContext.createMediaElementSource(polis_menu_muzikler[i][k]);
            var filter = audioContext.createBiquadFilter();
            source.connect(filter);
            filter.connect(audioContext.destination);
            filtreler.push(filter);
        }
    }
}
filter.type = 'lowpass'; 
filter.Q.value = 1; 

var AFK_interval_liste = [];
const AFK_event = () => {
    
    AFK_arkaplan.style.opacity = "0";
    AFK_arkaplan.style.zIndex = "0";
    AFK_arkaplan.style.transition = "opacity 0.5s";

    if(menu_1_center){
        menu_1_center.style.transition = "opacity 0.5s";
        menu_1_center.style.opacity = "1";
    }
    clearTimeout(AFK_timer);
    AFK_interval_liste.forEach(i => {
        clearInterval(i);
        AFK_interval_liste.splice(AFK_interval_liste.indexOf(i), 1);
    });
    filtreler.forEach(i => {
        i.frequency.value = 22050;
    })
    setTimeout(() => {
        AFK_arkaplan.pause();
    }, 600);
    AFK_timer = setTimeout(() => {
        
        if(menu_sekmesi != 0){
            let videolar = ["yol_1", "yol_2", "yol_3", "yol_4"];
            AFK_arkaplan.src = "./galeri/" + videolar[Math.floor(Math.random()*videolar.length)] + ".mp4";
            AFK_arkaplan.play();
            AFK_arkaplan.style.transition = "opacity 4s";
            AFK_arkaplan.style.opacity = "1"
            AFK_arkaplan.style.zIndex = "99";
            if(menu_1_center){
                menu_1_center.style.transition = "opacity 4s";
                menu_1_center.style.opacity = "0";
            }
            filtreler.forEach(i => {
                AFK_interval = setInterval(() => {
                    if(!(i.frequency.value.toFixed(2) < 2000)){
                        i.frequency.value -= 1000; 
                    }
                    else{
                        clearInterval(AFK_interval);
                        clearTimeout(AFK_timer);
                    }
                }, 75);
                AFK_interval_liste.push(AFK_interval);
            })
        }
    }, 60000);
}

document.addEventListener("DOMContentLoaded", async() =>{
    window.oncontextmenu = () => {return false;}
    let hata = false;
    await fetch("/baslangicKontrol", {method: "POST"}).catch(error => {
        favicon.href = "./galeri/favicon/sistem.png";
        document.title = "Sistem Hatası";
        onay_bildirimi_olustur("Sistem Hatası", "Program düzgün başlatılmadı.<br>Programın çalışması için sunucunun başlatılması gerek.<br><br>" + "Olası çözümler:<br>" + "&nbsp;".repeat(10) + "- Programı CALISTIR.bat dosyasını başlatarak açmak.<br>" + "&nbsp;".repeat(10) + "- Varsa NodeJS kurulumunu onarmak yoksa yüklemek.", null, null, null, null, "./galeri/ayarlar.png");
        document.querySelector("#bildirim_paneli > #panel_baslik > img").style.filter = "invert(1)";
        hata = true;
    })
    if(!hata){
        
        favicon.href = "./galeri/ev.png"
        document.title = "Giriş";

        if(!localStorage.getItem("ilk_sefer")){
            localStorage.setItem("ilk_sefer", "true");
        }
        const baslangic_fonk = () => {
            KEY_event();
            window.onmousemove = () => {AFK_event()};
            window.onkeydown = () => {AFK_event()};
            window.onclick = () => {AFK_event()};
            baslangic_olustur();
            
            if(!localStorage.getItem("sfx_vol")){
                localStorage.setItem("sfx_vol", 0.5);
            }
            if(!localStorage.getItem("muzik_vol")){
                localStorage.setItem("muzik_vol", 0.2);
            }
            if(localStorage.getItem("ilk_sefer")){
                localStorage.setItem("ilk_sefer", "false");
            }
            if(!localStorage.getItem("polis_menu_muzik_alternatifi")){
                localStorage.setItem("polis_menu_muzik_alternatifi", "MW");
            }
            if(!localStorage.getItem("yarisci_menu_muzik_alternatifi")){
                localStorage.setItem("yarisci_menu_muzik_alternatifi", "Carbon");    
            }
            if(!localStorage.getItem("yarisci_yaris_muzik_alternatifi")){
                localStorage.setItem("yarisci_yaris_muzik_alternatifi", "Adaptif");    
            }
            
        }

        const introFonk = () => {
            setTimeout(() => {
                const mesaj = "Bu program Sistem Analizi ve Tasarımı dersi için yapılmıştır."
                            + "Temel amacı veri ekleme, silme, düzenleme ve raporlamadır."
                            + "<br>Şu ana kadar yapılmış eklemelere <a href='./Değişim Notları.txt' target='_blank' onclick='bildirim_onay_red.currentTime = 0; bildirim_onay_red.play();'>değişim notları</a> dosyasından göz atabilirsiniz."
                            + "<br><br><h3>Yapım Aşamasında:</h3>- Yarış mini oyunu rastgele trafik olayları<br>- Yarış esnasında polis takibi başlatılması<br>- Polis menüsündeki polis takibi mini oyunu"
                onay_bildirimi_olustur("Hakkında", mesaj, null, null, baslangic_fonk, "tamam", "./galeri/favicon/araba_listesi.png");
            }, 200);
        }

        if(localStorage.getItem("ilk_sefer") == "true"){
            const mesaj = "- Açılır pencereler farenin orta tuşu ile kaydırılabilir.<br><br>"
                        + "- Menülerin altındaki butonların resimleri klavyedeki karşılıklarını temsil ederler.<br><br>"
                        + "- Profiller, müzik ses seviyesi ve oynatma listesi alternatifleri Ayarlar & Yönetim menüsünden yönetilebilir.<br><br>"
                        + "- Sağ tık ile polis ekipmanları iade edilebilir.<br><br>"
                        + "- Yazısında '|' işareti ile ayrılmış menü seçeneklerine sağ tık ile tıklandığında ikincil alt menüye erişilebilir.<br><br>"
                        + "- Sadece 'TAM' erişim seviyesine sahip profiller veri tabanında elle veri yönetimi yapabilir.<br><br>"
                        + "- Yarışçı profilleri erişim seviyeleri 'TAM' olsa bile yakalanmış yarışçıların verileri üzerinde değişiklik yapamazlar.<br><br>"
                        + "- Sağ şeride geçmek turbo ekipmanının bekleme süresinin 2 kat hızlı dolmasını sağlar."
            onay_bildirimi_olustur("İlk Kullanım Rehberi", mesaj, null, null, introFonk, "tamam", "./galeri/soru_isareti.png");
        }
        else{
            introFonk();
        }
    }
})

function giris_menu_secim(secim){
    audioContext.resume()
    if(secim.id == "polis_menu"){
        giris_menu_secim_temizle();
        polis_menu.classList.add("secili_arkaplan");
        giris_menu_text.innerHTML = "Rockport Polis Departmanı Veri Tabanı";
        
        bildirim_penceresi_olustur("polis_menu_button_event", "Bildirim", "Polis veri tabanına girmek istediğinize emin misiniz?", login_olustur);    
    }

    if(secim.id == "yarisci_menu"){
        giris_menu_secim_temizle();
        yarisci_menu.classList.add("secili_arkaplan");
        giris_menu_text.innerHTML = "Fairhaven V1 Veri Tabanı";
        
        bildirim_penceresi_olustur("yarisci_menu_button_event", "Uyarı!","Yarışçı veri tabanına girmek istediğinize emin misiniz?", login_olustur);    
    }

    if(secim.id == "ayarlar_menu"){
        giris_menu_secim_temizle();
        ayarlar_menu.classList.add("secili_arkaplan");
        giris_menu_text.innerHTML = "Ayarlar & Yönetim";
        
        ayarlar_penceresi_olustur();
    }
}

function giris_menu_secim_temizle(){
    giris_menu.querySelectorAll("div").forEach(i =>{
        if(i.classList.contains("secili_arkaplan")){
            i.classList.remove("secili_arkaplan");
            i.style.animation = "";
            i.style.background = "";
            i.blur();
        }
        giris_menu_text.innerHTML = "Menü Seçiniz";
    });
}
function baslangic_olustur(){

    favicon.href = "./galeri/ev.png"
    document.title = "Başlangıç Menüsü";

    menu_sekmesi = 0;
    oturum_aktif_check = false;
    oturum_turu = "";
    giris_menu = document.createElement("div");
        const menuler = document.createElement("div");
            polis_menu = document.createElement("div");
                const polis_araba_img = document.createElement("img");
            yarisci_menu = document.createElement("div");
                const yarisci_araba_img = document.createElement("img");
            ayarlar_menu = document.createElement("div");
                const ayarlar_img = document.createElement("img");
        giris_menu_text = document.createElement("div");
            giris_menu_text_span = document.createElement("span");

    giris_menu.id = "giris_menu";
        menuler.id = "menuler";
            polis_menu.id = "polis_menu";
                polis_menu.tabIndex = "1";
                polis_araba_img.src = "./galeri/polis_araba.png";
                polis_araba_img.style.width = "100px";
            yarisci_menu.id = "yarisci_menu";
                yarisci_menu.tabIndex = "2";
                yarisci_araba_img.src = "./galeri/yaris_araba.png";
                yarisci_araba_img.style.width = "100px"
            ayarlar_menu.id = "ayarlar_menu";
                ayarlar_menu.tabIndex = "3";
                ayarlar_img.src = "./galeri/ayarlar.png";
                ayarlar_img.style.width = "75px";
        giris_menu_text.id = "giris_menu_text";
            giris_menu_text_span.textContent = "Menü Seçiniz";

    giris_menu_text.appendChild(giris_menu_text_span);

    polis_menu.appendChild(polis_araba_img);
    yarisci_menu.appendChild(yarisci_araba_img);
    ayarlar_menu.appendChild(ayarlar_img);

    menuler.appendChild(polis_menu);
    menuler.appendChild(yarisci_menu);
    menuler.appendChild(ayarlar_menu);

    giris_menu.appendChild(menuler);
    giris_menu.appendChild(giris_menu_text);

    body.appendChild(giris_menu);

    // logo hover olayları
    const baslangic_menu_hoverlar = function(e){
        menu_secim.currentTime = 0;
         menu_secim.play();
         if(e.target.id === "polis_menu" && !body.contains(bildirim_paneli)){
             giris_menu_text.innerHTML = "Rockport Polis Departmanı Veri Tabanı";
         }
         else if (e.target.id === "yarisci_menu" && !body.contains(bildirim_paneli)){
             giris_menu_text.innerHTML = "Fairhaven V1 Veri Tabanı";
         }
         else if (e.target.id === "ayarlar_menu" && !body.contains(bildirim_paneli)){
             giris_menu_text.innerHTML = "Ayarlar & Yönetim";
         }
    }

    // logolara tıklanınca bildirim ver.
    document.getElementById("menuler").querySelectorAll("div").forEach(i =>{
        i.addEventListener("click", function(){  
            giris_menu_secim(this);
        });
        i.addEventListener("keydown", function(event){  
            if(event.key == "Enter"){
                giris_menu_secim(this);
            }
        });

        i.addEventListener("mouseover",function(event){
            baslangic_menu_hoverlar(event)
        }); 
        i.addEventListener("focus",function(event){
            baslangic_menu_hoverlar(event)
        }); 
 });
}



const yeni_profil_olustur = async (ekle_erisim, ekle_kullanici_adi, ekle_sifre, ekle_rutbe, ekle_sube, ekle_araba_marka, ekle_araba_model, ekle_araba_hp, ekle_araba_plaka , ekleme_turu) => {

    const tamam_fonk = () => {
        body.querySelectorAll("#bildirim_paneli button").forEach(i => {
            i.disabled = false;
        });
    }
    if (ekleme_turu == "polis" && (ekle_kullanici_adi.length <= 0 || ekle_sifre.length <= 0 || /[^a-zA-Z0-9]/.test(ekle_sifre) || ekle_rutbe.length <= 0 || ekle_sube.length <= 0 || (ekle_erisim != "TAM" && ekle_erisim != "YARI"))) {
        let mesaj = "";
        mesaj += ekle_kullanici_adi.length <= 0 ? "- Kullanıcı adı girilmedi.<br>" : "";
        if(ekle_sifre.length <= 0){
            mesaj += "Hesap şifresi girilmedi.<br>";
        }
        else if(/[^a-zA-Z0-9]/.test(ekle_sifre)){
            mesaj += "- Hesap şifresi özel karakter içeremez. Sadece harfler ve sayılar kullanılabilir.<br>";
        }
        mesaj += ekle_rutbe.length <= 0 ? "- Rütbe belirtilmedi.<br>" : "";
        mesaj += ekle_sube.length <= 0 ? "- Şube belirtilmedi.<br>" : "";
        mesaj += ekle_erisim != "TAM" && ekle_erisim != "YARI" ? "- Erişim seviyesi seçimi hatalı." : "";
        onay_bildirimi_olustur("Hatalı Giriş", mesaj, null, null, tamam_fonk, "tamam");
        return false;
    }
    if (ekleme_turu == "yarisci" && (ekle_kullanici_adi.length <= 0 || ekle_sifre.length <= 0 || /[^a-zA-Z0-9]/.test(ekle_sifre) || ekle_araba_marka.length <= 0 || ekle_araba_model.length <= 0 || ekle_araba_hp <= 0 || ekle_araba_hp > 1000 || ekle_araba_hp.length <= 0 || ekle_araba_plaka.length != 7 || (ekle_erisim != "TAM" && ekle_erisim != "YARI"))) {
        let mesaj = "";
        mesaj += ekle_kullanici_adi.length <= 0 ? "- Kullanıcı adı alanına giriş yapmadın.<br>" : "";
        if(ekle_sifre.length <= 0){
            mesaj += "- Hesap şifresini belirlemedin. Kendine gereğinden fazla güveniyorsun!<br>"
        }
        else if(/[^a-zA-Z0-9]/.test(ekle_sifre)){
            mesaj += "- Hesap şifresine özel karakter giremezsin. Güvenlik önemli, süslemeyi ismine sakla!<br>";
        }
        mesaj += ekle_araba_marka.length <= 0 ? "- Araba markası alanına giriş yapmadın.<br>" : "";
        mesaj += ekle_araba_model.length <= 0 ? "- Araba modeli alanına giriş yapmadın.<br>" : "";
        if(ekle_araba_hp.length <= 0){
            mesaj += "- Motor gücü alanını boş bıraktın. Arabanın motoru yok mu?<br>";
        }
        else if(ekle_araba_hp < 0){
            mesaj += "- Arabanın motor gücü 0'dan küçük olamaz!?!!?!?!<br>";
        }
        else if(ekle_araba_hp == 0){
            mesaj += "- Arabanın motor gücü 0'dan büyük olmalı. Sokakları daha sonra izlersin!<br>";
        }
        else if(ekle_araba_hp > 1000){
            mesaj += "- Arabanın motor gücü 1000'den büyük olamaz. Araba bu roket değil!!!<br>";
        }
        mesaj += ekle_araba_plaka.length != 7 ? "- Burada 7 haneli plakalar geçer. Korkma, parasını biz ödüyoruz.<br>" : "";
        mesaj += ekle_erisim != "TAM" && ekle_erisim != "YARI" ? "- Erişim seviyeni doğru seçmedin. Sanırım hevesli değilsin." : ""; 
        onay_bildirimi_olustur("Hatalı Giriş", mesaj, null, null, tamam_fonk, "tamam")
        return false;
    }
    var sonid;

    const x = await fetch("./veri.json");
    const y = await x.json();

    if(ekleme_turu == "polis"){
        const z = y[0].hesaplar[1].polis_hesap;
        if(z.length != 0){
            for(i in z){
                sonid = z[i].id + 1;
            }
        }
        else{
            sonid = 0;
        }
        
        fetch("/polisProfilEkle",{
            method: "POST",
            body: JSON.stringify({
                id: sonid,
                erisim: ekle_erisim,
                kullanici_adi: ekle_kullanici_adi,
                sifre: ekle_sifre,
                rutbe: ekle_rutbe,
                sube: ekle_sube,
                yakalanan_yariscilar: 0,
                ikramiye: 100000,
                EMP: 3,
                civi_seridi: 3,
                helikopter: 1,
                barikat: 3
            }, null, 4),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        });

    }
    else if(ekleme_turu == "yarisci"){
        const araba = await arabalari_getir();
        let sonArabaid = (araba[araba.length - 1].id * 1) + 1;
        const z = y[0].hesaplar[0].yarisci_hesap;
        if(z.length != 0){
            for(i in z){
                sonid = z[i].id + 1;
            }
        }
        else{
            sonid = 0;
        }

        await fetch("/yarisciProfilEkle",{
            method: "POST",
            body: JSON.stringify({
                id: sonid,
                erisim: ekle_erisim,
                kullanici_adi: ekle_kullanici_adi,
                sifre: ekle_sifre,
                araba_id: sonArabaid,
                kazanilan_yarislar: 0,
                aranma_katsayisi: 0,
                aranma_menzili: "",
                son_gorulme: "",
                durum: "Aranıyor"
            }, null, 4),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        });

        await fetch("/arabaEkle",{
            method: "POST",
            body: JSON.stringify({
                id: sonArabaid,
                marka: ekle_araba_marka,
                model: ekle_araba_model,
                hp: ekle_araba_hp * 1,
                plaka: ekle_araba_plaka
            }, null, 4),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        });
    }
}



const profil_sil = async(profil_tur, silProfil_id) => {
    
    let profiller = profil_tur == "polis" ? await profilleri_getir("polis") : await profilleri_getir("yarisci");
    let bu_profil = profiller.find(profiller => profiller.id == silProfil_id);
    let arabalar;
    let bu_araba;
    let bu_araba_id
    if(profil_tur != "polis"){
        arabalar = await arabalari_getir();
        bu_araba = arabalar.find(arabalar => arabalar.id == bu_profil.araba_id);
        bu_araba_id = bu_araba.id;
    }
    else{
        bu_araba_id = null;
    }
    
    fetch("/profilSil", {
        method: "POST",
        body: JSON.stringify({
            id: silProfil_id * 1,
            sil_profil_tur: profil_tur,
            silAraba_id: bu_araba_id
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
}

const profil_guncelle = async(profil_turu, hesap_id, hesap_erisim, hesap_k_ad, hesap_sifre, hesap_rutbe, hesap_sube, hesap_araba_marka, hesap_araba_model, hesap_araba_hp, hesap_araba_plaka) => {
    const tamam_fonk = () => {
        body.querySelectorAll("#bildirim_paneli button").forEach(i => {
            i.disabled = false;
        });
    }

    if (profil_turu == "polis" && (hesap_k_ad.length == 0 || hesap_sifre.length == 0 || /[^a-zA-Z0-9]/.test(hesap_sifre) || hesap_rutbe.length == 0 || hesap_sube.length == 0 || (hesap_erisim != "TAM" && hesap_erisim != "YARI"))) {
        let mesaj = "";
        mesaj += hesap_k_ad.length == 0 ? "- Kullanıcı adı girilmedi.<br>" : "";
        if(hesap_sifre.length == 0){
            mesaj += "- Hesap şifresi belirtilmedi.<br>";
        }
        else if(/[^a-zA-Z0-9]/.test(hesap_sifre)){
            mesaj += "- Hesap şifresi özel karakter içeremez. Sadece harfler ve sayılar kullanılabilir.<br>";
        }
        mesaj += hesap_rutbe.length == 0 ? "- Rütbe belirtilmedi.<br>" : "";
        mesaj += hesap_sube.length == 0 ? "- Şube belirtilmedi.<br>": "";
        mesaj += hesap_erisim != "TAM" && hesap_erisim != "YARI" ? "- Erişim türü seçimi hatalı." : ""; 
        onay_bildirimi_olustur("Hatalı Giriş", mesaj, null, null, tamam_fonk, "tamam");
        return false;
    }
    if (profil_turu == "yarisci" && (hesap_k_ad.length == 0 || hesap_sifre.length == 0 || /[^a-zA-Z0-9]/.test(hesap_sifre) || hesap_araba_marka.length == 0 || hesap_araba_model.length == 0 || hesap_araba_hp <= 0 || hesap_araba_hp > 1000 || hesap_araba_hp.length == 0|| hesap_araba_plaka.length != 7 ||(hesap_erisim != "TAM" && hesap_erisim != "YARI"))) {
        let mesaj = "";
        mesaj += hesap_k_ad.length == 0 ? "- Sakın bana adını unuttuğunu söyleme!.<br>" : "";
        if(hesap_sifre.length == 0){
            mesaj += "- Hesap şifresi belirtilmedin. Kendine gereğinden fazla güveniyorsun.<br>";
        }
        else if(/[^a-zA-Z0-9]/.test(hesap_sifre)){
            mesaj += "- Hesap şifresine özel karakter giremezsin. Güvenlik önemli, süslemeyi ismine sakla!<br>";
        }
        mesaj += hesap_araba_marka.length == 0 ? "- Araba markası alanına giriş yapmadın.<br>" : "";
        mesaj += hesap_araba_model.length == 0 ? "- Araba modeli alanına giriş yapmadın.<br>" : "";
        if(hesap_araba_hp < 0){
            mesaj += "- Arabanın motor gücü 0'dan küçük olamaz!?!!?!?!<br>";
        }
        else if(hesap_araba_hp == 0){
            mesaj += "- Arabanın motor gücü 0'dan büyük olmalı. Sokakları daha sonra izlersin.<br>";
        }
        else if(hesap_araba_hp > 1000){
            mesaj += "- Arabanın motor gücü 1000'den büyük olamaz. Araba bu roket değil!!!<br>";
        }
        else if(hesap_araba_hp.length == 0){
            mesaj += "- Motor gücü alanını boş bıraktın. Kaputun altını bir daha kontrol etsene...<br>";
        }
        mesaj += hesap_araba_plaka.length != 7 ? "- 7 haneli bir plakaya sahip olmalısın.<br>" : "";
        mesaj += hesap_erisim != "TAM" && hesap_erisim != "YARI" ? "- Erişim seviyeni doğru seçmedin." : ""; 
        onay_bildirimi_olustur("Hatalı Giriş", mesaj, null, null, tamam_fonk, "tamam");
        return false;
    }
    
    if(profil_turu === "polis"){
        fetch("/polisProfilGuncelle",{
            method: "POST",
            body: JSON.stringify({
                id: hesap_id,
                erisim: hesap_erisim,
                kullanici_adi: hesap_k_ad,
                sifre: hesap_sifre,
                rutbe: hesap_rutbe,
                sube: hesap_sube
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
    }
    else if(profil_turu === "yarisci"){

        const yarisci = await profilleri_getir("yarisci");
        const bu_yarisci = yarisci.find(yarisci => yarisci.id == hesap_id);
        const arabalar = await arabalari_getir();
        const bu_araba = arabalar.find(arabalar => arabalar.id == bu_yarisci.araba_id);

        fetch("/yarisciProfilGuncelle",{
            method: "POST",
            body: JSON.stringify({
                id: hesap_id,
                erisim: hesap_erisim,
                kullanici_adi: hesap_k_ad,
                sifre: hesap_sifre,
                araba_id: bu_araba.id,
                kazanilan_yarislar: bu_yarisci.kazanilan_yarislar,
                aranma_katsayisi: bu_yarisci.aranma_katsayisi,
                aranma_menzili: bu_yarisci.aranma_menzili,
                son_gorulme: bu_yarisci.son_gorulme,
                durum: bu_yarisci.durum
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        
        fetch("/arabaGuncelle",{
            method: "POST",
            body: JSON.stringify({
                id: bu_araba.id,
                marka: hesap_araba_marka,
                model: hesap_araba_model,
                hp: hesap_araba_hp * 1,
                plaka: hesap_araba_plaka
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
    }
    

}

const profilleri_getir = async function(hesap){
    const x = await fetch("./veri.json");
    const y = await x.json();
    if(hesap == "polis"){
        return await y[0].hesaplar[1].polis_hesap;
    }
    else{
        return await y[0].hesaplar[0].yarisci_hesap;
    }    
}

const yariscilari_getir = async() => {
    const x = await fetch("./veri.json");
    const y = await x.json();
    
    return y[0].yariscilar;
}
const arabalari_getir = async() => {
    const x = await fetch("./veri.json");
    const y = await x.json();
    
    return y[0].arabalar;
}
const yarislari_getir = async() => {
    const x = await fetch("./veri.json");
    const y = await x.json();
    
    return y[0].yarislar;
}

const bildirim_kapat = () =>{
    evet_btn.disabled = true;
    hayir_btn.disabled = true;
    bildirim_paneli.style.animation = "soru_menu_kapanis 0.1s forwards";
    setTimeout(() => {
        try{
            body.removeChild(bildirim_paneli);
        }
        catch{}
    }, 200);
    bildirim_onay_red.currentTime = 0;
    bildirim_cikis_red.currentTime = 0;
    bildirim_onay_red.play();
    bildirim_cikis_red.play();
}

var evet_btn;
var hayir_btn;
// BİLDİRİM PENCERESİ
async function bildirim_penceresi_olustur(panel_tur, bildirim_tur_text, mesaj_text, fonksiyon, ekleme_silme_turu, profil_yonet_hedef){

    if(body.querySelectorAll("#bildirim_paneli")){
        body.querySelectorAll("#bildirim_paneli").forEach(i =>{
            body.removeChild(i);
        })
    }
    if(body.contains(document.getElementById("ayarlar_menu_pencere"))){
        body.removeChild(document.getElementById("ayarlar_menu_pencere"));
    }

    //KESİN OLUŞUMLAR
    bildirim_paneli = document.createElement("div");
    const panel_baslik = document.createElement("div");
    const panel_mesaj = document.createElement("div");
    const mesaj = document.createElement("span");
    const panel_cevap = document.createElement("div");
    const butonlar = document.createElement("div");
    const uyari_img = document.createElement("img");
    const bildirim_tur = document.createElement("span");
    evet_btn = document.createElement("button");
    hayir_btn = document.createElement("button");
    
    bildirim_paneli.id = "bildirim_paneli";
    panel_baslik.id = "panel_baslik";
    uyari_img.src = "./galeri/uyari.png";
    bildirim_tur.id = "bildirim_tur";
    bildirim_tur.innerHTML = bildirim_tur_text;
    panel_mesaj.id = "panel_mesaj";
    mesaj.id = "mesaj";
    panel_cevap.id = "panel_cevap";
    butonlar.id = "butonlar";
    ////////////////

    
    if(panel_tur == "profilleri_yonet"){
        uyari_img.src = "./galeri/profiller.png";
        var polis_hesaplar;
        var yarisci_hesaplar;
        if(body.contains(ayarlar_menu_pencere)) {body.removeChild(ayarlar_menu_pencere);}
        hayir_btn.textContent = "Tamam";
        butonlar.appendChild(hayir_btn);

        //YENİ POLİS PROFİLİ OLUŞTUR BUTONU
        const polis_profili_ekle_btn = document.createElement("button");
        polis_profili_ekle_btn.id = "profil_polis_profili_ekle_btn";
        polis_profili_ekle_btn.textContent = "Yeni Polis Profili Oluştur";
        panel_mesaj.appendChild(polis_profili_ekle_btn);
        polis_profili_ekle_btn.onclick = () => {
            body.removeChild(bildirim_paneli);
            profil_olustur_buton.currentTime = 0; 
            profil_olustur_buton.play();
            bildirim_penceresi_olustur("profil_ekle", "Yeni Polis Profili", "", null, "polis");
        }
        polis_profili_ekle_btn.onmouseover = () => {
            menu_secim.currentTime = 0;
            menu_secim.play();
        }
        //
            polis_hesaplar = await profilleri_getir("polis");
            yarisci_hesaplar = await profilleri_getir("");
    
        //POLİS HESAPLARINI LİSTELE
        for(i in polis_hesaplar){
            const profil = document.createElement("button")
            profil.id = polis_hesaplar[i].id;
            profil.textContent = polis_hesaplar[i].kullanici_adi;

            profil.onclick = (event) =>{
                body.removeChild(bildirim_paneli);
                profil_olustur_buton.currentTime = 0; 
                profil_olustur_buton.play();
                bildirim_penceresi_olustur("profili_yonet","Profili Yönet", "", null, "polis", event.target.id);
            }
            profil.onmouseover = () => {
                menu_secim.currentTime = 0;
                menu_secim.play();
            }
            panel_mesaj.appendChild(profil);
        }

        //YENİ YARIŞÇI PROFİLİ OLUŞTUR BUTONU
        const yarisci_profili_ekle_btn = document.createElement("button");
        yarisci_profili_ekle_btn.id = "profil_yarisci_profili_ekle_btn";
        yarisci_profili_ekle_btn.textContent = "Yeni Yarışçı Profili Oluştur";
        panel_mesaj.appendChild(yarisci_profili_ekle_btn);
        yarisci_profili_ekle_btn.onclick = () => {
            body.removeChild(bildirim_paneli);
            profil_olustur_buton.currentTime = 0; 
            profil_olustur_buton.play();
            bildirim_penceresi_olustur("profil_ekle", "Yeni Yarışçı Profili", "", null, "yarisci");
        }
        yarisci_profili_ekle_btn.onmouseover = () => {
            menu_secim.currentTime = 0;
            menu_secim.play();
        }

        //YARIŞÇI PROFİLERİNİ LİSTELE
        for(i in yarisci_hesaplar){
            const profil = document.createElement("button")
            profil.id = yarisci_hesaplar[i].id;
            profil.textContent = yarisci_hesaplar[i].kullanici_adi;

            profil.onclick = (event) =>{
                body.removeChild(bildirim_paneli);
                profil_olustur_buton.currentTime = 0; 
                profil_olustur_buton.play();
                bildirim_penceresi_olustur("profili_yonet","Profili Yönet", "", null, "yarisci", event.target.id);
            }
            profil.onmouseover = () => {
                menu_secim.currentTime = 0;
                menu_secim.play();
            }
            panel_mesaj.appendChild(profil);
        }
    }
    else if(panel_tur == "profili_yonet"){
        uyari_img.src = "./galeri/profil_duzenle.png";
        
        //KESİN OLUŞACAK PROFİL YÖNETİM ELEMANLARI
        let kesin_olustur = async(Yonet_Hesap, index) =>{
            const yonet_hesap_id = document.createElement("input");
            const yonet_hesap_id_span = document.createElement("span");
            const yonet_profil_erisim = document.createElement("form");
                const yonet_profil_erisim_input = document.createElement("input");
                    const yonet_profil_erisim_data = document.createElement("datalist");
                        const yonet_profil_erisim_tam = document.createElement("option");
                        const yonet_profil_erisim_yari = document.createElement("option");
            const yonet_profil_erisim_span = document.createElement("span");
            const yonet_k_ad = document.createElement("input");
            const yonet_k_ad_span = document.createElement("span");
            const yonet_sifre = document.createElement("input");
            const yonet_sifre_span = document.createElement("span");

            yonet_hesap_id_span.textContent = "ID:"
            yonet_hesap_id.value = Yonet_Hesap[index].id;
            yonet_profil_erisim_span.textContent = "Erişim: ";
            yonet_profil_erisim_input.value = Yonet_Hesap[index].erisim;
            yonet_k_ad_span.textContent = "Kullanıcı Adı: ";
            yonet_k_ad.value = Yonet_Hesap[index].kullanici_adi;
            yonet_k_ad.autocomplete = "off";
            yonet_sifre_span.textContent = "Şifre: ";
            yonet_sifre.value = Yonet_Hesap[index].sifre;
            yonet_sifre.autocomplete = "off";


            yonet_hesap_id.readOnly = "true";
            yonet_hesap_id.style.backgroundColor = "#292929";

            yonet_profil_erisim_data.id = "profil_erisim_data";
            yonet_profil_erisim_tam.value = "TAM";
            yonet_profil_erisim_yari.value = "YARI";
            yonet_profil_erisim_input.setAttribute("list", "profil_erisim_data");

            yonet_profil_erisim_data.appendChild(yonet_profil_erisim_tam);
            yonet_profil_erisim_data.appendChild(yonet_profil_erisim_yari);
            yonet_profil_erisim.appendChild(yonet_profil_erisim_data);
            yonet_profil_erisim.appendChild(yonet_profil_erisim_input);

            yonet_profil_erisim_input.onclick = async() =>{
                yonet_profil_erisim_input.value = null;
                yonet_profil_erisim_input.placeholder = "TAM / YARI";
                
            }
            
            panel_mesaj.appendChild(yonet_hesap_id_span);
            panel_mesaj.appendChild(yonet_hesap_id);
            panel_mesaj.appendChild(yonet_profil_erisim_span);
            panel_mesaj.appendChild(yonet_profil_erisim);
            panel_mesaj.appendChild(yonet_k_ad_span);
            panel_mesaj.appendChild(yonet_k_ad);
            panel_mesaj.appendChild(yonet_sifre_span);
            panel_mesaj.appendChild(yonet_sifre);

            panel_mesaj.querySelectorAll("input").forEach(i => {
                i.autocomplete = "off";
            });
        }

        //GÜNCELLE VE SİL BUTONU
        const kesin_olustur2 = async(profil_turu ,buton_id) =>{

            const guncelle_btn = document.createElement("button");
            const sil_btn = document.createElement("button");
            const antiflex_div = document.createElement("div");
            
            guncelle_btn.id = buton_id;
            sil_btn.id = buton_id;

            guncelle_btn.textContent = "Güncelle";
            sil_btn.textContent = "Sil";
            guncelle_btn.style.width = "50%";
            guncelle_btn.style.marginRight = "5px";
            sil_btn.style.width = "50%";
            sil_btn.style.marginLeft = "5px",

            antiflex_div.style.display = "flex";
            antiflex_div.style.justifyContent = "space-around";
            antiflex_div.appendChild(guncelle_btn);
            antiflex_div.appendChild(sil_btn);

            sil_btn.onclick = () =>{
                let hesabi_sil = () =>{
                    profil_sil(profil_turu,buton_id);
                    sil_btn.disabled = true;
                    guncelle_btn.disabled = true;
                    const tamam_fonk = () => {
                        setTimeout(() => {
                            bildirim_penceresi_olustur("profilleri_yonet", "Profilleri Yönet", "", null);
                        }, 200);
                    }
                    onay_bildirimi_olustur("Profili yönet", "Profil silindi.", null,null, tamam_fonk,"tamam", "./galeri/profil_sil.png");
                    bildirim_kapat();
                }
                let iptal = () => {
                    sil_btn.disabled = false;
                    guncelle_btn.disabled = false;
                    hayir_btn.disabled = false;
                }
                sil_btn.disabled = true;
                guncelle_btn.disabled = true;
                hayir_btn.disabled = true;
                onay_bildirimi_olustur("Onay Bildirimi", "Profil silinecek. Onaylıyor musunuz?", hesabi_sil, iptal, null, "e/h", "./galeri/profil_sil.png");
            } 
            guncelle_btn.onclick = async() =>{
                let hesabi_guncelle = async() => {
                    sil_btn.disabled = true;
                    guncelle_btn.disabled = true;
                    hayir_btn.disabled = true;

                    let inputlar = panel_mesaj.querySelectorAll("input");
                    let erisim = inputlar[1].value.trim();
                    let k_adi = inputlar[2].value.trim();
                    let sifre = inputlar[3].value.trim();
                    let araba_marka = profil_turu != "polis" ? inputlar[4].value.trim() : null;
                    let araba_model = profil_turu != "polis" ? inputlar[5].value.trim() : null;
                    let araba_hp = profil_turu != "polis" ? inputlar[6].value.trim() : null;
                    let araba_plaka = profil_turu != "polis" ? inputlar[7].value.trim() : null;
                    let rutbe = profil_turu == "polis" ? inputlar[4].value.trim() : null;
                    let sube = profil_turu == "polis" ? inputlar[5].value.trim() : null;

                    if(profil_turu != "polis"){
                        for(i = 0; i < 8; i++){
                            inputlar[i].value = inputlar[i].value.trim();
                        }
                    }
                    else{
                        for(i = 0; i < 6; i++){
                            inputlar[i].value = inputlar[i].value.trim();
                        }
                    }

                    let sorunsuz = await profil_guncelle(profil_turu, guncelle_btn.id, erisim, k_adi, sifre, rutbe, sube, araba_marka, araba_model, araba_hp, araba_plaka);
                    if(sorunsuz != false){
                        sil_btn.disabled = true;
                        guncelle_btn.disabled = true;
                        hayir_btn.disabled = true;
                        const tamam_fonk = () => {
                            setTimeout(() => {
                                bildirim_penceresi_olustur("profilleri_yonet", "Profilleri Yönet", "", null);
                            }, 200);
                        }
                        onay_bildirimi_olustur("Profili yönet", "Profil güncellendi.", null,null, tamam_fonk,"tamam", "./galeri/profil_duzenle.png");
                        bildirim_kapat();
                    }
                }
                let iptal = () => {
                    sil_btn.disabled = false;
                    guncelle_btn.disabled = false;
                    hayir_btn.disabled = false;
                }
                sil_btn.disabled = true;
                guncelle_btn.disabled = true;
                hayir_btn.disabled = true;
                onay_bildirimi_olustur("Onay Bildirimi", "Profil güncellenecek. Onaylıyor musunuz?", hesabi_guncelle, iptal, null, "e/h", "./galeri/profil_duzenle.png");
            }


            [sil_btn, guncelle_btn].forEach(i => {
                i.onmouseover = () => {
                    menu_secim.currentTime = 0;
                    menu_secim.play();
                }
            });
            panel_mesaj.appendChild(antiflex_div);
        } 
        //
        hayir_btn.textContent = "İptal";
        butonlar.appendChild(hayir_btn);

        //YÖNETİLCEK HESABIN BİLGİLERİNİ MESAJ KUTUSUNA OLUŞTUR
        var yonet_hesap;
        if(ekleme_silme_turu == "polis"){
            yonet_hesap = await profilleri_getir("polis");
            for(i in yonet_hesap){
                if(yonet_hesap[i].id == profil_yonet_hedef){

                    kesin_olustur(yonet_hesap, i);

                    const yonet_rutbe = document.createElement("input");
                    const yonet_rutbe_span = document.createElement("span");
                    const yonet_sube = document.createElement("input");
                    const yonet_sube_span = document.createElement("span");

                    yonet_rutbe_span.textContent = "Rütbe: ";
                    yonet_rutbe.value = yonet_hesap[i].rutbe;
                    yonet_rutbe.autocomplete = "off";
                    yonet_sube_span.textContent = "Şube: ";
                    yonet_sube.value = yonet_hesap[i].sube;
                    yonet_sube.autocomplete = "off";

                    panel_mesaj.appendChild(yonet_rutbe_span);
                    panel_mesaj.appendChild(yonet_rutbe);
                    panel_mesaj.appendChild(yonet_sube_span);
                    panel_mesaj.appendChild(yonet_sube);

                    kesin_olustur2(ekleme_silme_turu, yonet_hesap[i].id);

                }
            }
            
        }
        else{
            yonet_hesap = await profilleri_getir("yarisci");
            for(i in yonet_hesap){
                if(yonet_hesap[i].id == profil_yonet_hedef){

                    kesin_olustur(yonet_hesap, i);


                    const arabalar = await arabalari_getir();
                    const yonet_araba = arabalar.find(arabalar => arabalar.id == yonet_hesap[i].araba_id);

                    const yonet_araba_marka = document.createElement("input");
                    const yonet_araba_model = document.createElement("input");
                    const yonet_araba_hp = document.createElement("input");
                    const yonet_araba_plaka = document.createElement("input");
                    const yonet_araba_marka_span = document.createElement("span");
                    const yonet_araba_model_span = document.createElement("span");
                    const yonet_araba_hp_span = document.createElement("span");
                    const yonet_araba_plaka_span = document.createElement("span");
        
                    yonet_araba_marka_span.textContent = "Araba Markası:",
                    yonet_araba_model_span.textContent = "Araba Modeli:";
                    yonet_araba_hp_span.textContent = "Arabanın Motor Gücü:";
                    yonet_araba_plaka_span.textContent = "Arabanın Plakası";

                    yonet_araba_hp.type = "number";
                    yonet_araba_hp.min = 0;
                    yonet_araba_hp.max = 1000;

                    yonet_araba_marka.value = yonet_araba.marka;
                    yonet_araba_model.value = yonet_araba.model;
                    yonet_araba_hp.value = yonet_araba.hp;
                    yonet_araba_plaka.value = yonet_araba.plaka;

                    panel_mesaj.appendChild(yonet_araba_marka_span);
                    panel_mesaj.appendChild(yonet_araba_marka);
                    panel_mesaj.appendChild(yonet_araba_model_span);
                    panel_mesaj.appendChild(yonet_araba_model);
                    panel_mesaj.appendChild(yonet_araba_hp_span);
                    panel_mesaj.appendChild(yonet_araba_hp);
                    panel_mesaj.appendChild(yonet_araba_plaka_span);
                    panel_mesaj.appendChild(yonet_araba_plaka);

                    kesin_olustur2(ekleme_silme_turu, yonet_hesap[i].id);
                }
            }
        }
    }
    else if(panel_tur == "profil_ekle"){
        //KESİN
        uyari_img.src = "./galeri/profil_olustur.png";
        const profil_erisim = document.createElement("form");
            const profil_erisim_input = document.createElement("input");
            const profil_erisim_data = document.createElement("datalist");
                const profil_erisim_tam = document.createElement("option");
                const profil_erisim_yari = document.createElement("option");
        const profil_k_ad = document.createElement("input");
        const profil_sifre = document.createElement("input");
        const profil_erisim_span = document.createElement("span");
        const profil_k_ad_span = document.createElement("span");
        const profil_sifre_span = document.createElement("span");
        ///

        let profil_rutbe;
        let profil_sube;
        let profil_rutbe_span;
        let profil_sube_span;

        let profil_araba_marka;
        let profil_araba_model;
        let profil_araba_hp;
        let profil_araba_plaka;
        let profil_araba_marka_span;
        let profil_araba_model_span;
        let profil_araba_hp_span;
        let profil_araba_plaka_span; 


        profil_k_ad.type = "text";
        profil_sifre.type = "text";
        profil_k_ad.autocomplete = "off";
        profil_sifre.autocomplete = "off";

        if(ekleme_silme_turu == "polis"){
            profil_rutbe = document.createElement("input");
            profil_sube = document.createElement("input");
            profil_rutbe_span = document.createElement("span");
            profil_sube_span = document.createElement("span");

            profil_rutbe.id = "profil_rutbe";
            profil_sube.id = "profil_sube";
            profil_rutbe.type = "text";
            profil_sube.type = "text";

            profil_rutbe_span.id = "profil_rutbe_span";
            profil_sube_span.id = "profil_sube_span";

            profil_rutbe_span.textContent = "Rütbe:";
            profil_sube_span.textContent = "Şube:";
        }
        else{
            profil_araba_marka = document.createElement("input");
            profil_araba_model = document.createElement("input");
            profil_araba_hp = document.createElement("input");
            profil_araba_plaka = document.createElement("input");
            profil_araba_marka_span = document.createElement("span");
            profil_araba_model_span = document.createElement("span");
            profil_araba_hp_span = document.createElement("span");
            profil_araba_plaka_span = document.createElement("span");

            profil_araba_marka.id = "profil_araba_marka";
            profil_araba_model.id = "profil_araba_model";
            profil_araba_hp.id = "profil_araba_hp";
            profil_araba_plaka.id = "profil_araba_plaka";
            profil_araba_marka.type = "text";
            profil_araba_model.type = "text";
            profil_araba_hp.type = "number";
            profil_araba_plaka.type = "text";
            profil_araba_hp.min = 0;
            profil_araba_hp.max = 1000;

            profil_araba_marka_span.id = "profil_araba_marka_span";
            profil_araba_model_span.id = "profil_araba_model_span";
            profil_araba_hp_span.id = "profil_araba_hp_span";
            profil_araba_plaka_span.id = "profil_araba_plaka_span";

            profil_araba_marka_span.textContent = "Araba Markası:",
            profil_araba_model_span.textContent = "Araba Modeli:";
            profil_araba_hp_span.textContent = "Arabanın Motor Gücü:";
            profil_araba_plaka_span.textContent = "Arabanın Plakası";
        }
        
        //KESİN
        profil_erisim.id = "profil_erisim";
            profil_erisim_input.id = "profil_erisim_input";
            profil_erisim_data.id = "profil_erisim_data";
                profil_erisim_tam.value = "TAM";
                profil_erisim_yari.value = "YARI";
        profil_k_ad.id = "k_ad";
        profil_sifre.id = "profil_sifre";        
        
        profil_erisim_span.id = "profil_erisim_span";
        profil_k_ad_span.id = "profil_k_ad_span";
        profil_sifre_span.id = "profil_sifre_span";

        profil_erisim_span.textContent = "Erişim:";
        profil_k_ad_span.textContent = "Kullanıcı Adı:";
        profil_sifre_span.textContent = "Şifre:";
        ///



        profil_erisim_data.appendChild(profil_erisim_tam);
        profil_erisim_data.appendChild(profil_erisim_yari);

        profil_erisim.appendChild(profil_erisim_input);
        profil_erisim_input.setAttribute("list", "profil_erisim_data");
        profil_erisim.appendChild(profil_erisim_data);

        panel_mesaj.appendChild(profil_erisim_span);
        panel_mesaj.appendChild(profil_erisim);
        panel_mesaj.appendChild(profil_k_ad_span);
        panel_mesaj.appendChild(profil_k_ad);
        panel_mesaj.appendChild(profil_sifre_span);
        panel_mesaj.appendChild(profil_sifre);
        
        if(ekleme_silme_turu == "polis"){
            panel_mesaj.appendChild(profil_rutbe_span);
            panel_mesaj.appendChild(profil_rutbe);
            panel_mesaj.appendChild(profil_sube_span);
            panel_mesaj.appendChild(profil_sube);
        }
        else{
            panel_mesaj.appendChild(profil_araba_marka_span);
            panel_mesaj.appendChild(profil_araba_marka);
            panel_mesaj.appendChild(profil_araba_model_span);
            panel_mesaj.appendChild(profil_araba_model);
            panel_mesaj.appendChild(profil_araba_hp_span);
            panel_mesaj.appendChild(profil_araba_hp);
            panel_mesaj.appendChild(profil_araba_plaka_span);
            panel_mesaj.appendChild(profil_araba_plaka);
        }

        panel_mesaj.querySelectorAll("input").forEach(i => {
            i.autocomplete = "off"
        });

        evet_btn.id = "evet";
        hayir_btn.id = "hayir";
        evet_btn.value = true;
        hayir_btn.value = false;
        evet_btn.textContent = "Onayla";
        hayir_btn.textContent = "Vazgeç";
        evet_btn.tabIndex = "4";
        hayir_btn.tabIndex = "5";
        butonlar.appendChild(evet_btn);
        butonlar.appendChild(hayir_btn);

        if(ekleme_silme_turu == "polis"){
            evet_btn.onclick = async() =>{
                evet_btn.disabled = true;
                hayir_btn.disabled = true;

                [profil_erisim_input, profil_k_ad, profil_sifre, profil_rutbe, profil_sube].forEach(i => {
                    i.value = i.value.trim();
                });

                let sorunsuz = await yeni_profil_olustur(profil_erisim_input.value.trim(), profil_k_ad.value.trim(), profil_sifre.value.trim(), profil_rutbe.value.trim(), profil_sube.value.trim(), null, null, null, null, "polis");
                if(sorunsuz != false){
                    const tamam_fonk = () => {
                        setTimeout(() => {
                            bildirim_penceresi_olustur("profilleri_yonet", "Profilleri Yönet", "", null);
                        }, 200);
                    }
                    onay_bildirimi_olustur("Profil Oluştur", `${profil_k_ad.value} Profili oluşturuldu.`, null,null,tamam_fonk,"tamam", "./galeri/profil_olustur.png");
                    bildirim_kapat();
                    evet_btn.disabled = true;
                    hayir_btn.disabled = true;
                }
            }
        }
        else{
            evet_btn.onclick = async() =>{
                evet_btn.disabled = true;
                hayir_btn.disabled = true;

                [profil_erisim_input, profil_k_ad, profil_sifre, profil_araba_marka, profil_araba_model, profil_araba_hp, profil_araba_plaka].forEach(i => {
                    i.value = i.value.trim();
                });

                let sorunsuz = await yeni_profil_olustur(profil_erisim_input.value.trim(), profil_k_ad.value.trim(), profil_sifre.value.trim(), null, null, profil_araba_marka.value.trim(), profil_araba_model.value.trim(), profil_araba_hp.value, profil_araba_plaka.value.trim(), "yarisci");
                if(sorunsuz != false){
                    const tamam_fonk = () => {
                        setTimeout(() => {
                            bildirim_penceresi_olustur("profilleri_yonet", "Profilleri Yönet", "", null);
                        }, 200);
                    }
                    onay_bildirimi_olustur("Profil Oluştur", `Sokaklar seni bekliyor ${profil_k_ad.value}!.`, null,null,tamam_fonk, "tamam", "./galeri/profil_olustur.png");
                    bildirim_kapat();
                    evet_btn.disabled = true;
                    hayir_btn.disabled = true;
                }
            }
        }

        profil_erisim_input.onclick = () =>{
            profil_erisim_input.value = null;
            profil_erisim_input.placeholder = "TAM / YARI";
        }

    }
    //VARSAYILAN EKLEMELER
    else{

        mesaj.innerHTML = mesaj_text;
        evet_btn.id = "evet";
        hayir_btn.id = "hayir";
        evet_btn.value = true;
        hayir_btn.value = false;
        evet_btn.textContent = "Evet";
        hayir_btn.textContent = "Hayır";
        evet_btn.tabIndex = "4";
        hayir_btn.tabIndex = "5";
        butonlar.appendChild(evet_btn);
        butonlar.appendChild(hayir_btn);
        

        //EVET BUTONUNA POLİS/YARIŞÇI MENÜSÜNÜ AÇ KOMUTU EKLE
        if(panel_tur === "polis_menu_button_event"){
            evet_btn.onclick = function(){

                clearTimeout(AFK_timer);
                window.onmousemove = () => {};
                window.onkeydown = () => {};
                window.onclick = () => {};

                giris_menu.style.opacity = "0";
                bildirim_paneli.style.animation = "soru_menu_kapanis 0.1s forwards";
                bildirim_onay_red.currentTime = 0;
                bildirim_cikis_red.currentTime = 0;
                bildirim_onay_red.play();
                bildirim_cikis_red.play();
                setTimeout(() => {
                    body.removeChild(bildirim_paneli);
                }, 200);
    
                statik_vid.play();
                statik_ses.play();
                
                statik_vid.style.animation = "statik_anim 1.5s forwards";
                statik_vid.style.zIndex = "99";
                
                setTimeout(() => {
                    fonksiyon("polis_menu");
                    polis_menu_acilis.play();
                    body.removeChild(giris_menu);
                }, 1000);
                setTimeout(() => {
                    statik_vid.style.animation = "";
                    statik_vid.pause();
                }, 2000);
            };
        }
        else if(panel_tur === "yarisci_menu_button_event"){
            evet_btn.onclick = function(){

                clearTimeout(AFK_timer);
                window.onmousemove = () => {};
                window.onkeydown = () => {};
                window.onclick = () => {};
        
                giris_menu.style.opacity = "0";
                bildirim_paneli.style.animation = "soru_menu_kapanis 0.1s forwards";
                bildirim_onay_red.currentTime = 0;
                bildirim_cikis_red.currentTime = 0;
                bildirim_onay_red.play();
                bildirim_cikis_red.play();
                setTimeout(() => {
                    body.removeChild(bildirim_paneli);
                }, 200);
    
                statik_vid2.currentTime = 0;
                statik_vid2.play();
                statik_ses2.play();
                
                statik_vid2.style.animation = "statik2_anim 4s forwards";
                statik_vid2.style.zIndex = "99";
                
                setTimeout(() => {
                    fonksiyon("yarisci_menu");
                    polis_menu_acilis.play();
                    body.removeChild(giris_menu);
                }, 2000);
                setTimeout(() => {
                    statik_vid2.style.animation = "";
                    statik_vid2.pause();
                }, 2300);
            };
        }
    }
    
    panel_cevap.appendChild(butonlar);
    panel_mesaj.appendChild(mesaj);
    panel_baslik.appendChild(uyari_img);
    panel_baslik.appendChild(bildirim_tur);
    bildirim_paneli.appendChild(panel_baslik);
    bildirim_paneli.appendChild(panel_mesaj);
    bildirim_paneli.appendChild(panel_cevap);
    body.appendChild(bildirim_paneli);

    bildirim_giris.currentTime = 0;
    bildirim_giris.play();
    
    //HAYIR TIKLAMASI
    hayir_btn.onclick = function(){
        if(panel_tur == "profili_yonet" || panel_tur == "profil_ekle"){
            setTimeout(() => {
                bildirim_penceresi_olustur("profilleri_yonet", "Profilleri Yönet", "", null);
            }, 200);
        }
        else if(panel_tur == "profilleri_yonet"){
            setTimeout(() => {
                ayarlar_penceresi_olustur();
            }, 200);
        }
        else if(panel_tur == "polis_menu_button_event" || panel_tur == "yarisci_menu_button_event"){
            giris_menu_secim_temizle();
        }
        bildirim_kapat();
    };

    [hayir_btn, evet_btn].forEach(i => {
        i.onmouseover = () => {
            menu_secim.currentTime = 0;
            menu_secim.play();
        }
    });
}

//ONAY BİLDİRİMİ

const onay_bildirimi_olustur = (bildirim_tur_text, mesaj_text, fonksiyon_evet, fonksiyon_hayir, fonksiyon_tamam, cevaplar, bildirim_img) =>{
    const onay_paneli = document.createElement("div");
    const panel_baslik = document.createElement("div");
    const panel_mesaj = document.createElement("div");
    const mesaj = document.createElement("span");
    const panel_cevap = document.createElement("div");
    const butonlar = document.createElement("div");
    const uyari_img = document.createElement("img");
    const bildirim_tur = document.createElement("span");
    const onay_evet_btn = document.createElement("button");
    const onay_hayir_btn = document.createElement("button");
    const onay_tamam_btn = document.createElement("button");
    
    onay_paneli.id = "bildirim_paneli";
    panel_baslik.id = "panel_baslik";
    uyari_img.src = bildirim_img != undefined ? bildirim_img : "./galeri/uyari.png";
    bildirim_tur.id = "bildirim_tur";
    bildirim_tur.innerHTML = bildirim_tur_text;
    panel_mesaj.id = "panel_mesaj";
    mesaj.id = "mesaj";
    panel_cevap.id = "panel_cevap";
    butonlar.id = "butonlar";

    mesaj.innerHTML = mesaj_text;
    if(cevaplar === "e/h"){
        onay_evet_btn.id = "evet";
        onay_hayir_btn.id = "hayir";
        onay_evet_btn.value = true;
        onay_hayir_btn.value = false;
        onay_evet_btn.textContent = "Evet";
        onay_hayir_btn.textContent = "Hayır";
        onay_evet_btn.tabIndex = "4";
        onay_hayir_btn.tabIndex = "5";
        butonlar.appendChild(onay_evet_btn);
        butonlar.appendChild(onay_hayir_btn);
    }
    else if(cevaplar === "tamam"){
        onay_tamam_btn.id = "tamam";
        onay_tamam_btn.textContent = "Tamam";
        onay_tamam_btn.tabIndex = "4";
        butonlar.appendChild(onay_tamam_btn);
    }
    
    panel_cevap.appendChild(butonlar);
    panel_mesaj.appendChild(mesaj);
    panel_baslik.appendChild(uyari_img);
    panel_baslik.appendChild(bildirim_tur);
    onay_paneli.appendChild(panel_baslik);
    onay_paneli.appendChild(panel_mesaj);
    onay_paneli.appendChild(panel_cevap);
    body.appendChild(onay_paneli);

    bildirim_giris.currentTime = 0;
    bildirim_giris.play();

    onay_evet_btn.onclick = () =>{
        onay_paneli.style.animation = "soru_menu_kapanis 0.1s forwards";
        bildirim_onay_red.currentTime = 0;
        bildirim_onay_red.play();
        setTimeout(() => {
            body.removeChild(onay_paneli);
        }, 150);
        if(fonksiyon_evet != null){
            fonksiyon_evet();
        }
    }

    onay_hayir_btn.onclick = () =>{
        onay_evet_btn.disabled = true;
        onay_hayir_btn.disabled = true;
        onay_paneli.style.animation = "soru_menu_kapanis 0.1s forwards";
        setTimeout(() => {
            body.removeChild(onay_paneli);
        }, 150);
        bildirim_onay_red.currentTime = 0;
        bildirim_cikis_red.currentTime = 0;
        bildirim_onay_red.play();
        bildirim_cikis_red.play();
        if(fonksiyon_hayir != null){
            fonksiyon_hayir();
        }
        menu_2.querySelector(".menu_butonlari").querySelectorAll("button").forEach(i => {
            i.onmouseover = () => {};
        });
    };
    onay_tamam_btn.onclick = () =>{
        onay_tamam_btn.disabled = true;
        onay_paneli.style.animation = "soru_menu_kapanis 0.1s forwards";
        setTimeout(() => {
            try{
            body.removeChild(onay_paneli);
            }
            catch{}
        }, 150);
        bildirim_onay_red.currentTime = 0;
        bildirim_cikis_red.currentTime = 0;
        bildirim_onay_red.play();
        bildirim_cikis_red.play();
        if(fonksiyon_tamam != null){
            fonksiyon_tamam();
        }
        // if(menu_sekmesi == 2 && menu_2 != null && menu_2 != undefined){
        //     menu_2.querySelector(".menu_butonlari").querySelectorAll("button").forEach(i => {
        //         i.onmouseover = () => {};
        //     });
        // }
    }
    [onay_evet_btn, onay_hayir_btn, onay_tamam_btn].forEach(i => {
        i.onmouseover = () => {
            menu_secim.currentTime = 0;
            menu_secim.play();
        }
    });
}

const yaris_yonet = async (yonetim_turu, bildirim_tur_text, post_yaris_id) =>{

    statik_vid.style.zIndex = "1";
    menu_2.style.filter = "blur(3px)";
    bildirim_giris.currentTime = 0;
    bildirim_giris.play()

    const yaris_yonetim_paneli = document.createElement("div");

    if(menu_1_center.contains(document.getElementById("bildirim_paneli"))){
        menu_1_center.querySelectorAll("#bildirim_paneli").forEach(i => {
            menu_1_center.removeChild(i);
        })
    }
    if(body.contains(document.getElementById("bildirim_paneli"))){
        body.querySelectorAll("#bildirim_paneli").forEach(i => {
            body.removeChild(i);
        })
    }
    
    const panel_baslik = document.createElement("div");
    const panel_mesaj = document.createElement("div");
    const panel_cevap = document.createElement("div");
    const butonlar = document.createElement("div");
    const uyari_img = document.createElement("img");
    const bildirim_tur = document.createElement("span");
    const yaris_yonet_evet_btn = document.createElement("button");
    const yaris_yonet_hayir_btn = document.createElement("button");
    const yaris_yonet_tamam_btn = document.createElement("button");

    const yaris_id = document.createElement("input");
    const yaris_id_span = document.createElement("span");
    const yaris_ad = document.createElement("input");
    const yaris_ad_span = document.createElement("span");
    const yaris_bolge = document.createElement("input");
    const yaris_bolge_span = document.createElement("span");
    const yaris_uzunluk = document.createElement("input");
    const yaris_uzunluk_span = document.createElement("span");
    const yaris_polis_sikligi = document.createElement("input");
    const yaris_polis_sikligi_span = document.createElement("span");
                                        
    yaris_id.type = "text";
    yaris_ad.type = "text";
    yaris_bolge.type = "text";
    yaris_uzunluk.type = "number";
    yaris_polis_sikligi.type = "number";
    yaris_uzunluk.min = 1;
    yaris_uzunluk.max = 1000;
    yaris_polis_sikligi.min = 0;
    yaris_polis_sikligi.max = 5;

    yaris_id_span.textContent = "ID:";
    yaris_ad_span.textContent = "Yarış Adı:"
    yaris_bolge_span.textContent = "Yarış Bölgesi:"
    yaris_uzunluk_span.textContent = "Yarış Uzunluğu(KM):"
    yaris_polis_sikligi_span.textContent = "Bölgedeki Polis Sıklığı:"

    yaris_yonet_evet_btn.textContent = "Onayla";
    yaris_yonet_hayir_btn.textContent = "İptal";
    yaris_yonet_tamam_btn.textContent = "Tamam";
    
    yaris_yonetim_paneli.id = "bildirim_paneli";
    panel_baslik.id = "panel_baslik";
    uyari_img.src = "./galeri/duzenle.png";
    bildirim_tur.id = "bildirim_tur";
    bildirim_tur.innerHTML = bildirim_tur_text;
    panel_mesaj.id = "panel_mesaj";
    panel_cevap.id = "panel_cevap";
    butonlar.id = "butonlar";

    yaris_id.value = post_yaris_id;
    yaris_id.readOnly = "true";
    yaris_id.style.backgroundColor = "#292929";
    yaris_id_span.textContent = "ID:"
    
    panel_baslik.appendChild(uyari_img);
    panel_baslik.appendChild(bildirim_tur);

    const yaris_yonet_bildirim_kapat = (filtre) =>{
        if(filtre){
            statik_vid.style.zIndex = "";
            menu_2.style.filter = "blur(0)";
        }
        yaris_yonet_evet_btn.disabled = true;
        yaris_yonet_hayir_btn.disabled = true;
        yaris_yonetim_paneli.style.animation = "soru_menu_kapanis 0.1s forwards";
        setTimeout(() => {
            menu_1_center.removeChild(yaris_yonetim_paneli);
        }, 150);
        bildirim_onay_red.currentTime = 0;
        bildirim_cikis_red.currentTime = 0;
        bildirim_onay_red.play();
        bildirim_cikis_red.play();
    }
    const butonlar_devre_disi = (durum) =>{
        if(durum){
            yaris_yonet_tamam_btn.disabled = true;
            yaris_yonet_hayir_btn.disabled = true;
            yaris_yonet_evet_btn.disabled = true;
        }
        else{
            yaris_yonet_tamam_btn.disabled = false;
            yaris_yonet_hayir_btn.disabled = false;
            yaris_yonet_evet_btn.disabled = false;
        }
    }
    const input_kontrol = () => {
        if(yaris_ad.value.length <= 0 || yaris_bolge.value.length <= 0 || yaris_uzunluk.value.length <= 0 || yaris_polis_sikligi.value.length <= 0 || yaris_uzunluk.value * 1000 < 10000 || yaris_uzunluk.value * 1000 > 200000 || yaris_polis_sikligi.value < 0 || yaris_polis_sikligi.value > 5){
            let mesaj = "";
            mesaj += yaris_ad.value.length <= 0 ? "- Yarış adını girmeyi unuttun. Sade olma, havalı bir şeyler düşün!</br>" : "";
            mesaj += yaris_bolge.value.length <= 0 ? "- Yarışı nerede yapacağız? Halının üzerinde mi???!!</br>" : "";
            if(yaris_uzunluk.value.length <= 0){
                mesaj += "- Yarış uzunluğu eksik. Cetvelini çıkar ve yolu ölçmeye başla!</br>";
            }
            else if(yaris_uzunluk.value * 1000 < 0){
                mesaj += "- Negatif yarış uzunluğu mu? DALGA MI GEÇİYORSUN!?</br>";
            }
            else if(yaris_uzunluk.value * 1000 < 10000){
                mesaj += "- Yarış uzunluğu 10KM'den az olamaz. Araban 10 saniyelik mi?</br>";
            }
            else if(yaris_uzunluk.value * 1000 > 200000){
                mesaj += "- Yarış uzunluğu 200KM'den fazla olamaz. Dünya turuna çıkmıyoruz!</br>";
            }
            if(yaris_polis_sikligi.value.length <= 0){
                mesaj += "- Polis sıklığı eksik. Biraz aksiyon sağla!</br>";
            }
            else if(yaris_polis_sikligi.value < 0){
                mesaj += "- Polis sıklığı 0'dan küçük olamaz. Korkak!</br>";
            }
            else if(yaris_polis_sikligi.value > 5){
                mesaj += "- Polis sıklığı 5'den büyük olamaz! KAFAYI MI YEDİN??!!!</br>";
            }
            return{
                sorunsuz: false,
                sorun: mesaj
            }
        }
        else{
            return{
                sorunsuz: true
            }
        }
    }
    const input_ekle = () => {
        panel_mesaj.appendChild(yaris_ad_span);
        panel_mesaj.appendChild(yaris_ad);
        panel_mesaj.appendChild(yaris_bolge_span);
        panel_mesaj.appendChild(yaris_bolge);
        panel_mesaj.appendChild(yaris_uzunluk_span);
        panel_mesaj.appendChild(yaris_uzunluk);
        panel_mesaj.appendChild(yaris_polis_sikligi_span);
        panel_mesaj.appendChild(yaris_polis_sikligi);
    }
    const menu_2_yenile = () => {
        statik_vid.style.zIndex = "";
        menu_1_center.removeChild(menu_2);
        menu_2_olustur("yarisci_menu", "yaris_listesi");
    }
    if(yonetim_turu == "yaris_ekle"){
        input_ekle();
        yaris_yonet_evet_btn.onclick = async() => {
            butonlar_devre_disi(true);

            [yaris_ad, yaris_bolge, yaris_uzunluk, yaris_polis_sikligi].forEach(i => {
                i.value = i.value.trim();
            });

            let kontrol = input_kontrol();
            if(kontrol.sorunsuz){
                yaris_yonet_bildirim_kapat();
                esc_engel = true;
                const tamam_fonk = () => {
                    menu_2_yenile();
                }
                let suan = new Date();
                const yarislar = await yarislari_getir();
                const son_yaris = yarislar[yarislar.length - 1];
                await fetch("/yarisEkle",{
                    method: "POST",
                    body: JSON.stringify({
                        id: (son_yaris.id * 1) + 1,
                        yaris_ad: yaris_ad.value,
                        bolge: yaris_bolge.value,
                        uzunluk: yaris_uzunluk.value * 1,
                        polis_sikligi: yaris_polis_sikligi.value * 1,
                        inaktif_sure: suan.toISOString()
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                });
                onay_bildirimi_olustur("Yarış Ekle", "Yarış bilgileri, veri tabanına eklendi. Asfalt seni bekliyor!", null, null, tamam_fonk, "tamam", "./galeri/yarisci_menu/yaris_logo.png");
            
            }
            else{
                const tamam_fonk = () => {
                    butonlar_devre_disi(false);
                }
                onay_bildirimi_olustur("Yarış Ekle", kontrol.sorun, null, null, tamam_fonk, "tamam", "./galeri/yarisci_menu/yaris_logo.png");
            }
        }

        yaris_yonet_hayir_btn.onclick = () => {
            yaris_yonet_bildirim_kapat(true);
        }
        butonlar.appendChild(yaris_yonet_evet_btn);
        butonlar.appendChild(yaris_yonet_hayir_btn);
    }
    else if(yonetim_turu == "yaris_duzenle"){
        panel_mesaj.appendChild(yaris_id_span);
        panel_mesaj.appendChild(yaris_id);
        input_ekle();

        const yarislar = await yarislari_getir();
        const bu_yaris = yarislar.find(yarislar => yarislar.id == post_yaris_id);

        yaris_ad.value = bu_yaris.yaris_ad;
        yaris_bolge.value = bu_yaris.bolge; 
        yaris_uzunluk.value = bu_yaris.uzunluk;
        yaris_polis_sikligi.value = bu_yaris.polis_sikligi;

        yaris_yonet_evet_btn.textContent = "Güncelle";
        yaris_yonet_hayir_btn.textContent = "Sil";
        yaris_yonet_tamam_btn.textContent = "İptal";
        butonlar.appendChild(yaris_yonet_evet_btn);
        butonlar.appendChild(yaris_yonet_hayir_btn);
        butonlar.appendChild(yaris_yonet_tamam_btn);

        yaris_yonet_evet_btn.onclick = () => {
            butonlar_devre_disi(true);
            [yaris_ad, yaris_bolge, yaris_uzunluk, yaris_polis_sikligi].forEach(i => {
                i.value = i.value.trim();
            });
            let kontrol = input_kontrol();
            if(kontrol.sorunsuz){
                const hayir_fonk = () => {
                    butonlar_devre_disi(false);
                }

                const evet_fonk = async() => {
                    yaris_yonet_bildirim_kapat();
                    esc_engel = true;
                    const tamam_fonk = () => {
                        menu_2_yenile();
                    }

                    await fetch("/yarisGuncelle",{
                        method: "POST",
                        body: JSON.stringify({
                            id: post_yaris_id * 1,
                            ad: yaris_ad.value,
                            bolge: yaris_bolge.value,
                            uzunluk: yaris_uzunluk.value * 1,
                            polis_sikligi: yaris_polis_sikligi.value * 1
                        }),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        }
                    });
                    onay_bildirimi_olustur("Yarışı Düzenle", "Yarış bilgileri güncellendi.", null, null, tamam_fonk, "tamam", "./galeri/yarisci_menu/yaris_logo.png");    
                }
                onay_bildirimi_olustur("Yarışı Düzenle", "Yarış bilgileri güncellenecek. Onaylıyor musun?", evet_fonk, hayir_fonk, null, "e/h", "./galeri/yarisci_menu/yaris_logo.png");    
            }
            else{
                const tamam_fonk = () => {
                    butonlar_devre_disi(false);
                }
                onay_bildirimi_olustur("Yarışı Düzenle", kontrol.sorun, null, null, tamam_fonk, "tamam", "./galeri/yarisci_menu/yaris_logo.png");    
            }
        }
        yaris_yonet_hayir_btn.onclick = () => {
            butonlar_devre_disi(true);
            const hayir_fonk = () => {
                butonlar_devre_disi(false);
            }

            const evet_fonk = async() => {
                yaris_yonet_bildirim_kapat();
                esc_engel = true;
                const tamam_fonk = () => {
                    menu_2_yenile();
                }

                await fetch("/yarisSil",{
                    method: "POST",
                    body: JSON.stringify({
                        id: post_yaris_id * 1
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                });
                onay_bildirimi_olustur("Yarışı Düzenle", "Yarış silindi.", null, null, tamam_fonk, "tamam", "./galeri/yarisci_menu/yaris_logo.png");    
            }

            onay_bildirimi_olustur("Yarışı Düzenle", "Yarış silinecek. Onaylıyor musun?", evet_fonk, hayir_fonk, null, "e/h", "./galeri/yarisci_menu/yaris_logo.png");    
        }
        yaris_yonet_tamam_btn.onclick = () => {
            yaris_yonet_bildirim_kapat(true);
        }
    }
    
    panel_mesaj.querySelectorAll("input").forEach(i => {
        i.autocomplete = "off";
    });
    [yaris_yonet_evet_btn, yaris_yonet_hayir_btn, yaris_yonet_tamam_btn].forEach(i => {
        i.onmouseover = () => {
            menu_secim.currentTime = 0;
            menu_secim.play();
        }
    });

    panel_cevap.appendChild(butonlar);

    yaris_yonetim_paneli.appendChild(panel_baslik);
    yaris_yonetim_paneli.appendChild(panel_mesaj);
    yaris_yonetim_paneli.appendChild(panel_cevap);

    menu_1_center.appendChild(yaris_yonetim_paneli);
}

const yarisci_yonet = async (yonetim_turu, bildirim_tur_text, post_yarisci_id , taraf) =>{

    statik_vid.style.zIndex = "1";

    const yarisci_yonetim_paneli = document.createElement("div");

    if(menu_1_center.contains(document.getElementById("bildirim_paneli"))){
        menu_1_center.removeChild(document.getElementById("bildirim_paneli"));
    }

    const panel_baslik = document.createElement("div");
    const panel_mesaj = document.createElement("div");
    const panel_cevap = document.createElement("div");
    const butonlar = document.createElement("div");
    const uyari_img = document.createElement("img");
    const bildirim_tur = document.createElement("span");
    const yarisci_yonet_evet_btn = document.createElement("button");
    const yarisci_yonet_hayir_btn = document.createElement("button");
    const yarisci_yonet_tamam_btn = document.createElement("button");

    const yarisci_isim = document.createElement("input");
    const yarisci_isim_span = document.createElement("span");
    const yarisci_araba_marka = document.createElement("input");
    const yarisci_araba_marka_span = document.createElement("span");
    const yarisci_araba_model = document.createElement("input");
    const yarisci_araba_model_span = document.createElement("span");
    const yarisci_araba_hp = document.createElement("input");
    const yarisci_araba_hp_span = document.createElement("span");
    const yarisci_araba_plaka = document.createElement("input");
    const yarisci_araba_plaka_span = document.createElement("span");
    var yarisci_durum_span, yarisci_durum, yarisci_durum_data, yarisci_durum_yakalandi, yarisci_durum_araniyor, yarisci_son_gorulme_span;
    
    const yarisci_durum_input = document.createElement("input");
    const yarisci_son_gorulme = document.createElement("input");
    if(taraf == "polis_menu"){
        yarisci_durum_span = document.createElement("span");
        yarisci_durum = document.createElement("form");
            yarisci_durum_data = document.createElement("datalist");
                yarisci_durum_yakalandi = document.createElement("option");
                yarisci_durum_araniyor = document.createElement("option");
        
        yarisci_durum_span.textContent = "Durum:"
        yarisci_durum_data.id = "yarisci_durum_data";
        yarisci_durum_yakalandi.value = "Yakalandı";
        yarisci_durum_araniyor.value = "Aranıyor";
        yarisci_durum_input.setAttribute("list", "yarisci_durum_data");

        yarisci_durum_data.appendChild(yarisci_durum_yakalandi);
        yarisci_durum_data.appendChild(yarisci_durum_araniyor);
        yarisci_durum.appendChild(yarisci_durum_data);
        yarisci_durum.appendChild(yarisci_durum_input);

        yarisci_durum_input.onclick = () =>{
            yarisci_durum_input.value = null;
            yarisci_durum_input.placeholder = "Yakalandı / Aranıyor";
        }

        yarisci_son_gorulme_span = document.createElement("span");
        yarisci_son_gorulme_span.textContent = "Son Görülme:";
        yarisci_son_gorulme.type = "text";
    }

    yarisci_isim.type = "text";
    yarisci_araba_marka.type = "text";
    yarisci_araba_model.type = "text";
    yarisci_araba_hp.type = "number";
    yarisci_araba_plaka.type = "text";
    yarisci_araba_hp.min = 0;
    yarisci_araba_hp.max = 1000;

    yarisci_isim_span.textContent = "Yarışçı İsmi:"
    yarisci_araba_marka_span.textContent = "Araba Markası:"
    yarisci_araba_model_span.textContent = "Araba Modeli:"
    yarisci_araba_hp_span.textContent = "Arabanın Motor Gücü:"
    yarisci_araba_plaka_span.textContent = "Arabanın Plakası:"

    yarisci_yonet_evet_btn.textContent = "Onayla";
    yarisci_yonet_hayir_btn.textContent = "İptal";
    yarisci_yonet_tamam_btn.textContent = "Tamam";
    
    yarisci_yonetim_paneli.id = "bildirim_paneli";
    panel_baslik.id = "panel_baslik";
    uyari_img.src = "./galeri/duzenle.png";
    bildirim_tur.id = "bildirim_tur";
    bildirim_tur.innerHTML = bildirim_tur_text;
    panel_mesaj.id = "panel_mesaj";
    panel_cevap.id = "panel_cevap";
    butonlar.id = "butonlar";

    const yariscilar = await yariscilari_getir();
    const arabalar = await arabalari_getir();
    var bu_yarisci_durum;
    if(yonetim_turu == "yarisci_ekle"){
        
        bildirim_giris.currentTime = 0;
        bildirim_giris.play();
        butonlar.appendChild(yarisci_yonet_evet_btn);
        butonlar.appendChild(yarisci_yonet_hayir_btn);
        menu_2.style.filter = "blur(3px)";

        yarisci_yonet_evet_btn.onclick = async() =>{
            
            yarisci_yonet_evet_btn.disabled = true;
            yarisci_yonet_hayir_btn.disabled = true;
            
            bildirim_giris.currentTime = 0;
            bildirim_giris.play();

            if(taraf == "polis_menu"){
                [yarisci_isim, yarisci_araba_marka, yarisci_araba_model, yarisci_araba_hp, yarisci_son_gorulme, yarisci_araba_plaka].forEach(i => {
                    i.value = i.value.trim();
                });
            }
            else{
                [yarisci_isim, yarisci_araba_marka, yarisci_araba_model, yarisci_araba_hp, yarisci_araba_plaka].forEach(i => {
                    i.value = i.value.trim();
                });
            }
            if(taraf == "polis_menu" && (yarisci_isim.value.length <= 0 || yarisci_araba_marka.value.length <= 0 || yarisci_araba_model.value.length <= 0 || yarisci_son_gorulme.value.length <= 0 || yarisci_araba_hp.value <= 0 || yarisci_araba_hp.value > 1000 || yarisci_araba_hp.value.length <= 0 || yarisci_araba_plaka.value.length != 7 || (yarisci_durum_input.value != "Aranıyor" && yarisci_durum_input.value != "Yakalandı"))){
                const tamam_fonk = () => {
                    body.querySelectorAll("#bildirim_paneli button").forEach(i => {
                        i.disabled = false;
                    });
                }
                let mesaj = "";
                mesaj += yarisci_isim.value <= 0 ? "- Yarışçının ismi belirtilmedi.<br>" : "";
                mesaj += yarisci_araba_marka.value <= 0 ? "- Araba markası belirtilmedi.<br>" : "";
                mesaj += yarisci_araba_model.value <= 0 ? "- Araba modeli belirtilmedi.<br>" : "";
                mesaj += yarisci_son_gorulme.value <= 0 ? "- Yarışçının son görüldüğü yer belirtilmedi.<br>" : "";
                if(yarisci_araba_hp.value.length <= 0){
                    mesaj += "- Motor gücü alanını boş bırakılamaz.<br>";
                }
                else if(yarisci_araba_hp.value < 0){
                    mesaj += "- Arabanın motor gücü 0'dan küçük olamaz.<br>";
                }
                else if(yarisci_araba_hp.value == 0){
                    mesaj += "- Arabanın motor gücü 0'dan büyük olmalı.<br>";
                }
                else if(yarisci_araba_hp.value > 1000){
                    mesaj += "- Arabanın motor gücü 1000'den büyük olamaz.<br>";
                }
                mesaj += yarisci_araba_plaka.value.length != 7 ? "- Plaka hatalı. Rockport plaka formatı 7 hane gerektirir.<br>" : "";
                mesaj += yarisci_durum_input.value != "Aranıyor" && yarisci_durum_input.value != "Yakalandı" ? "- Yarışçının durumu doğru belirtilmedi." : ""; 
                onay_bildirimi_olustur("Hatalı Giriş", mesaj, null, null, tamam_fonk, "tamam");
                return 0;
            }
            else if(taraf == "yarisci_menu" && (yarisci_isim.value.length <= 0 || yarisci_araba_marka.value.length <= 0 || yarisci_araba_model.value.length <= 0 || yarisci_araba_hp.value.length <= 0 || yarisci_araba_hp.value <= 0 || yarisci_araba_hp.value > 1000 || yarisci_araba_plaka.value.length != 7)){
                const tamam_fonk = () => {
                    body.querySelectorAll("#bildirim_paneli button").forEach(i => {
                        i.disabled = false;
                    });
                }
                let mesaj = "";
                mesaj += yarisci_isim.value <= 0 ? "- Yarışçının ismini belirtmedin.<br>" : "";
                mesaj += yarisci_araba_marka.value <= 0 ? "- Araba markasını belirtmedin.<br>" : "";
                mesaj += yarisci_araba_model.value <= 0 ? "- Araba modelini belirtmedin.<br>" : "";
                if(yarisci_araba_hp.length <= 0){
                    mesaj += "- Yarışçının arabasını motorsuz mu bırakacasın? Çok insafsızsın!<br>";
                }
                else if(yarisci_araba_hp.value < 0){
                    mesaj += "- Arabanın motor gücü 0'dan küçük olamaz!?!!?!?!<br>";
                }
                else if(yarisci_araba_hp.value == 0){
                    mesaj += "- Arabanın motor gücü 0'dan büyük olmalı. Hile mi yapmaya çalışıyorsun?<br>";
                }
                else if(yarisci_araba_hp.value > 1000){
                    mesaj += "- Arabanın motor gücü 1000'den büyük olamaz. Yarışçının NASA ile çalıştığını sanmıyorum.<br>";
                }
                mesaj += yarisci_araba_plaka.value.length != 7 ? "- Burada 7 haneli plakalar geçer. Korkma, parasını biz ödüyoruz." : ""; 
                onay_bildirimi_olustur("Hatalı Giriş", mesaj, null, null, tamam_fonk, "tamam");
                return 0;
            }

            yarisci_yonetim_paneli.style.animation = "soru_menu_kapanis 0.1s forwards";
            setTimeout(() => {
                menu_1_center.removeChild(yarisci_yonetim_paneli);
            }, 150);
            bildirim_onay_red.currentTime = 0;
            bildirim_cikis_red.currentTime = 0;
            bildirim_onay_red.play();
            bildirim_cikis_red.play();

            let sonid = (yariscilar[yariscilar.length - 1].id * 1) + 1;
            let sonArabaid = (arabalar[arabalar.length - 1].id * 1) + 1;

            let temp_durum = taraf == "polis_menu" ? yarisci_durum_input.value : "Aranıyor";
            let temp_son_gorulme = taraf == "polis_menu" ? yarisci_son_gorulme.value : "-";
            await fetch("/yarisciEkle",{
                method: "POST",
                body: JSON.stringify({
                    id: sonid,
                    isim: yarisci_isim.value,
                    araba_id: sonArabaid,
                    kazanilan_yarislar: 0,
                    aranma_katsayisi: 0,
                    son_gorulme: temp_son_gorulme,
                    durum: temp_durum
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });

            await fetch("/arabaEkle",{
                method: "POST",
                body: JSON.stringify({
                    id: sonArabaid,
                    marka: yarisci_araba_marka.value,
                    model: yarisci_araba_model.value,
                    hp: yarisci_araba_hp.value * 1,
                    plaka: yarisci_araba_plaka.value
                }, null, 4),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            });

            const tamam_fonk = () =>{
                menu_1_center.removeChild(menu_2);
                menu_2_olustur(taraf, "yarisci_listesi");
            }
            if(taraf == "polis_menu"){
                esc_engel = true;
                onay_bildirimi_olustur("Yarışçı Ekle", "Yarışçı bilgileri, veri tabanına eklendi.", null,null, tamam_fonk, "tamam");
            }
            else{
                esc_engel = true
                onay_bildirimi_olustur("Yarışçı Ekle", `${yarisci_isim.value} artık sokaklarda!`, null,null, tamam_fonk, "tamam", "./galeri/araba_listesi.png");
            }
        }
        yarisci_yonet_hayir_btn.onclick = () =>{
            statik_vid.style.zIndex = "";
            menu_2.style.filter = "blur(0)";
            yarisci_yonet_evet_btn.disabled = true;
            yarisci_yonet_hayir_btn.disabled = true;
            yarisci_yonetim_paneli.style.animation = "soru_menu_kapanis 0.1s forwards";
            setTimeout(() => {
                menu_1_center.removeChild(yarisci_yonetim_paneli);
            }, 150);
            bildirim_onay_red.currentTime = 0;
            bildirim_cikis_red.currentTime = 0;
            bildirim_onay_red.play();
            bildirim_cikis_red.play();
        };
    }
    else if(yonetim_turu == "yarisci_duzenle"){

        bildirim_giris.currentTime = 0;
        bildirim_giris.play();
        menu_2.style.filter = "blur(3px)";
        butonlar.appendChild(yarisci_yonet_evet_btn);
        butonlar.appendChild(yarisci_yonet_hayir_btn);
        butonlar.appendChild(yarisci_yonet_tamam_btn);

        yarisci_yonet_evet_btn.textContent = "Güncelle";
        yarisci_yonet_hayir_btn.textContent = "Sil";
        yarisci_yonet_tamam_btn.textContent = "İptal";

        
        const bu_yarisci = yariscilar.find(yariscilar => yariscilar.id == post_yarisci_id);
        const bu_araba = arabalar.find(arabalar => arabalar.id == bu_yarisci.araba_id);
        bu_yarisci_durum = bu_yarisci.durum;

        const yarisci_id = document.createElement("input");
        const yarisci_id_span = document.createElement("span");
        panel_mesaj.appendChild(yarisci_id_span);
        panel_mesaj.appendChild(yarisci_id)

        yarisci_id.value = post_yarisci_id;
        yarisci_id.readOnly = "true";
        yarisci_id.style.backgroundColor = "#292929";
        yarisci_id_span.textContent = "ID:"

        yarisci_isim.value = bu_yarisci.isim;
        yarisci_araba_marka.value = bu_araba.marka;
        yarisci_araba_model.value = bu_araba.model;
        yarisci_araba_hp.value = bu_araba.hp;
        yarisci_araba_plaka.value = bu_araba.plaka;
        if(taraf == "polis_menu"){
            yarisci_durum_input.value = bu_yarisci.durum;
            yarisci_son_gorulme.value = bu_yarisci.son_gorulme;
        }

        yarisci_yonet_evet_btn.onclick = async () => { // GÜNCELLEME İŞLEVİ

            yarisci_yonet_evet_btn.disabled = true;
            yarisci_yonet_hayir_btn.disabled = true;
            yarisci_yonet_tamam_btn.disabled = true;
            if(taraf == "polis_menu"){
                [yarisci_isim, yarisci_araba_marka, yarisci_araba_model, yarisci_araba_hp, yarisci_son_gorulme, yarisci_araba_plaka].forEach(i => {
                    i.value = i.value.trim();
                });
            }
            else{
                [yarisci_isim, yarisci_araba_marka, yarisci_araba_model, yarisci_araba_hp, yarisci_araba_plaka].forEach(i => {
                    i.value = i.value.trim();
                });
            }

            if(taraf == "polis_menu" && (yarisci_isim.value.length <= 0 || yarisci_araba_marka.value.length <= 0 || yarisci_araba_model.value.length <= 0 || yarisci_araba_hp.value.length <= 0 || yarisci_son_gorulme.value.length <= 0 || yarisci_araba_hp.value <= 0|| yarisci_araba_hp.value > 1000 || yarisci_araba_plaka.value.length != 7 || (yarisci_durum_input.value != "Aranıyor" && yarisci_durum_input.value != "Yakalandı"))){
                const tamam_fonk = () => {
                    body.querySelectorAll("#bildirim_paneli button").forEach(i => {
                        i.disabled = false;
                    });
                }
                let mesaj = "";
                mesaj += yarisci_isim.value.length <= 0 ? "- Yarışçının ismi belirtilmedi.<br>" : "";
                mesaj += yarisci_araba_marka.value.length <= 0 ? "- Araba markası belirtilmedi.<br>" : "";
                mesaj += yarisci_araba_model.value.length <= 0 ? "- Araba modeli belirtilmedi.<br>" : "";
                mesaj += yarisci_son_gorulme.value.length <= 0 ? "- Yarışçının son görüldüğü yer belirtilmedi.<br>" : "";
                if(yarisci_araba_hp.value.length <= 0){
                    mesaj += "- Motor gücü alanını boş bırakılamaz.<br>";
                }
                else if(yarisci_araba_hp.value < 0){
                    mesaj += "- Arabanın motor gücü 0'dan küçük olamaz.<br>";
                }
                else if(yarisci_araba_hp.value == 0){
                    mesaj += "- Arabanın motor gücü 0'dan büyük olmalı.<br>";
                }
                else if(yarisci_araba_hp.value > 1000){
                    mesaj += "- Arabanın motor gücü 1000'den büyük olamaz.<br>";
                }
                mesaj += yarisci_araba_plaka.value.length != 7 ? "- Plaka hatalı. Rockport plaka formatı 7 hane gerektirir.<br>" : "";
                mesaj += yarisci_durum_input.value != "Aranıyor" && yarisci_durum_input.value != "Yakalandı" ? "- Yarışçının durumu doğru belirtilmedi." : ""; 
                onay_bildirimi_olustur("Hatalı Giriş", mesaj, null, null, tamam_fonk, "tamam");
                return 0;
            }
            else if(taraf == "yarisci_menu" && (yarisci_isim.value == "" || yarisci_araba_marka.value == "" || yarisci_araba_model.value == "" || yarisci_araba_hp.value.length < 0 || yarisci_araba_hp.value < 0 || yarisci_araba_hp.value > 1000 || yarisci_araba_plaka.value.length != 7)){
                const tamam_fonk = () => {
                    body.querySelectorAll("#bildirim_paneli button").forEach(i => {
                        i.disabled = false;
                    });
                }
                let mesaj = "";
                mesaj += yarisci_isim.value.length <= 0 ? "- Gerçekten yarışçının adını mı unuttun?.<br>" : "";
                mesaj += yarisci_araba_marka.value.length <= 0 ? "- Araba markasını belirtmedin.<br>" : "";
                mesaj += yarisci_araba_model.value.length <= 0 ? "- Araba modelini belirtmedin.<br>" : "";
                if(yarisci_araba_hp.value.length <= 0){
                    mesaj += "- Yarışçının arabasını motorsuz mu bırakacasın? Yoksa motoru çaldın mı?!<br>";
                }
                else if(yarisci_araba_hp.value < 0){
                    mesaj += "- Arabanın motor gücü 0'dan küçük olamaz!?!!?!?!<br>";
                }
                else if(yarisci_araba_hp.value == 0){
                    mesaj += "- Arabanın motor gücü 0'dan büyük olmalı. Hile mi yapmaya çalışıyorsun?<br>";
                }
                else if(yarisci_araba_hp.value > 1000){
                    mesaj += "- Arabanın motor gücü 1000'den büyük olamaz. Yarışçının NASA ile çalıştığını sanmıyorum.<br>";
                }
                mesaj += yarisci_araba_plaka.value.length != 7 ? "- Burada 7 haneli plakalar geçer. Korkma, parasını biz ödüyoruz." : ""; 
                onay_bildirimi_olustur("Hatalı Giriş", mesaj, null, null, tamam_fonk, "tamam");
                return 0;
            }

            const yarisci_guncelle = async() =>{
                esc_engel = true;
                menu_1_center.removeChild(yarisci_yonetim_paneli);
                const tamam_fonk = () =>{
                    menu_1_center.removeChild(menu_2);
                    menu_2_olustur(taraf, "yarisci_listesi");
                }
                onay_bildirimi_olustur("Yarışçıyı Düzenle", "Yarışçı bilgileri güncellendi.", null,null, tamam_fonk, "tamam", "./galeri/araba_listesi.png");

                await fetch("/yarisciGuncelle",{
                    method: "POST",
                    body: JSON.stringify({
                        id: yarisci_id.value,
                        isim: yarisci_isim.value,
                        marka: yarisci_araba_marka.value,
                        model: yarisci_araba_model.value,
                        hp: yarisci_araba_hp.value,
                        plaka: yarisci_araba_plaka.value,
                        durum: yarisci_durum_input.value,
                        son_gorulme : yarisci_son_gorulme.value
                    }, null, 4),
                    headers: {"Content-type": "application/json; charset=UTF-8"}
                });
            }
            let iptal = () => {
                yarisci_yonet_evet_btn.disabled = false;
                yarisci_yonet_hayir_btn.disabled = false;
                yarisci_yonet_tamam_btn.disabled = false;
            }
            onay_bildirimi_olustur("Onay Bildirimi", "Yarışçı bilgileri güncellenecek. Onaylıyor musunuz?", yarisci_guncelle, iptal, null, "e/h");
            
        }

        yarisci_yonet_hayir_btn.onclick = () => { // SİLME İŞLEVİ
            yarisci_yonet_evet_btn.disabled = true;
            yarisci_yonet_hayir_btn.disabled = true;
            yarisci_yonet_tamam_btn.disabled = true;

            const yarisci_sil = async() => {
                esc_engel = true;
                menu_1_center.removeChild(yarisci_yonetim_paneli);
                const tamam_fonk = () =>{
                    menu_1_center.removeChild(menu_2);
                    menu_2_olustur(taraf, "yarisci_listesi");
                }
                onay_bildirimi_olustur("Yarışçıyı Düzenle", "Yarışçı bilgileri, veri tabanından silindi.", null,null, tamam_fonk, "tamam", "./galeri/duzenle.png");

                await fetch("/yarisciSil", {
                    method: "POST",
                    body: JSON.stringify({
                        id: yarisci_id.value * 1
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                });
            }
            let iptal = () => {
                yarisci_yonet_evet_btn.disabled = false;
                yarisci_yonet_hayir_btn.disabled = false;
                yarisci_yonet_tamam_btn.disabled = false;
            }
            onay_bildirimi_olustur("Onay Bildirimi", "Yarışçı bilgileri, veri tabanından silinecek. Onaylıyor musunuz?", yarisci_sil, iptal, null, "e/h");
        }

        yarisci_yonet_tamam_btn.onclick = () => { //İPTAL İŞLEVİ
            statik_vid.style.zIndex = "";
            menu_2.style.filter = "blur(0)";
            yarisci_yonet_evet_btn.disabled = true;
            yarisci_yonet_hayir_btn.disabled = true;
            yarisci_yonet_tamam_btn.disabled = true;            
            yarisci_yonetim_paneli.style.animation = "soru_menu_kapanis 0.1s forwards";
            setTimeout(() => {
                menu_1_center.removeChild(yarisci_yonetim_paneli);
            }, 150);
            bildirim_onay_red.currentTime = 0;
            bildirim_cikis_red.currentTime = 0;
            bildirim_onay_red.play();
            bildirim_cikis_red.play();
        }
    }
    panel_baslik.appendChild(uyari_img);
    panel_baslik.appendChild(bildirim_tur);

    panel_mesaj.appendChild(yarisci_isim_span);
    panel_mesaj.appendChild(yarisci_isim);
    panel_mesaj.appendChild(yarisci_araba_marka_span);
    panel_mesaj.appendChild(yarisci_araba_marka);
    panel_mesaj.appendChild(yarisci_araba_model_span);
    panel_mesaj.appendChild(yarisci_araba_model);
    panel_mesaj.appendChild(yarisci_araba_hp_span);
    panel_mesaj.appendChild(yarisci_araba_hp);
    panel_mesaj.appendChild(yarisci_araba_plaka_span);
    panel_mesaj.appendChild(yarisci_araba_plaka);
    
    if(taraf == "polis_menu"){
        panel_mesaj.appendChild(yarisci_durum_span);
        panel_mesaj.appendChild(yarisci_durum);
        panel_mesaj.appendChild(yarisci_son_gorulme_span);
        panel_mesaj.appendChild(yarisci_son_gorulme);
    }
    if(taraf == "yarisci_menu" && bu_yarisci_durum == "Yakalandı"){
        panel_mesaj.querySelectorAll("input").forEach(i => {
            i.readOnly = "true";
            i.style.backgroundColor = "#292929";
        });
        butonlar.removeChild(yarisci_yonet_evet_btn);
        butonlar.removeChild(yarisci_yonet_hayir_btn);
    }

    panel_mesaj.querySelectorAll("input").forEach(i => {
        i.autocomplete = "off";
    });
    [yarisci_yonet_evet_btn, yarisci_yonet_hayir_btn, yarisci_yonet_tamam_btn].forEach(i => {
        i.onmouseover = () => {
            menu_secim.currentTime = 0;
            menu_secim.play();
        }
    });

    panel_cevap.appendChild(butonlar);

    yarisci_yonetim_paneli.appendChild(panel_baslik);
    yarisci_yonetim_paneli.appendChild(panel_mesaj);
    yarisci_yonetim_paneli.appendChild(panel_cevap);

    menu_1_center.appendChild(yarisci_yonetim_paneli);
}

//AYARLAR
function ayarlar_penceresi_olustur(){

    if(body.querySelectorAll("#bildirim_paneli")){
        body.querySelectorAll("#bildirim_paneli").forEach(i =>{
            body.removeChild(i);
        })
    }
    if(body.contains(document.getElementById("ayarlar_menu_pencere"))){
        body.removeChild(document.getElementById("ayarlar_menu_pencere"));
    }

    ayarlar_menu_pencere = document.createElement("div");
    const ayarlar_baslik = document.createElement("div");
    const ayar_secenekleri = document.createElement("div");
    const muzik_alternatifleri = document.createElement("div");
    const ayarlar_txt = document.createElement("span");
    const m_ses_sev_txt = document.createElement("span");
    const e_ses_sev_txt = document.createElement("span");
    const m_ses_sev = document.createElement("input");
    const e_ses_sev = document.createElement("input");
    const polis_menu_muzik_alternatif_div = document.createElement("div");
        const polis_menu_muzik_alternatif_span = document.createElement("span");
        const polis_menu_muzik_alternatif_select = document.createElement("select");
            const polis_menu_muzik_alternatif_option1 = document.createElement("option");
            const polis_menu_muzik_alternatif_option2 = document.createElement("option");
    const yarisci_menu_muzik_alternatif_div = document.createElement("div");
        const yarisci_menu_muzik_alternatif_span = document.createElement("span");
        const yarisci_menu_muzik_alternatif_select = document.createElement("select");
            const yarisci_menu_muzik_alternatif_option1 = document.createElement("option");
            const yarisci_menu_muzik_alternatif_option2 = document.createElement("option");
    const yarisci_yaris_muzik_alternatif_div = document.createElement("div");
    const yarisci_yaris_muzik_alternatif_span = document.createElement("span");
    const yarisci_yaris_muzik_alternatif_select = document.createElement("select");
        const yarisci_yaris_muzik_alternatif_option1 = document.createElement("option");
        const yarisci_yaris_muzik_alternatif_option2 = document.createElement("option");      
    const profil_yonet = document.createElement("button");
    const panel_cevap = document.createElement("div");
        const butonlar = document.createElement("div");
            const tamam_btn = document.createElement("button");
    
    ayarlar_menu_pencere.id = "ayarlar_menu_pencere";
    ayarlar_baslik.id = "ayarlar_baslik";
    ayar_secenekleri.id = "ayar_secenekleri";
    panel_cevap.id = "panel_cevap";
    butonlar.id = "butonlar";

    ayarlar_txt.textContent = "Ayarlar & Yönetim";
    tamam_btn.textContent = "Tamam";
    
    let muzik_vol = (localStorage.getItem("muzik_vol") * 100).toFixed();
    let sfx_vol = (localStorage.getItem("sfx_vol") * 100).toFixed();
    m_ses_sev_txt.innerHTML = `Müzik Ses Seviyesi: ${muzik_vol}`;
    m_ses_sev.type = "range";
    m_ses_sev.min = 0;
    m_ses_sev.max = 100;
    m_ses_sev.value = muzik_vol;
    m_ses_sev.id = "M_ses_seviyesi";

    e_ses_sev_txt.innerHTML = `Efekt Ses Seviyesi: ${sfx_vol}`;
    e_ses_sev.type = "range";
    e_ses_sev.min = 0;
    e_ses_sev.max = 100;
    e_ses_sev.value = sfx_vol;
    e_ses_sev.id = "E_ses_seviyesi";

    muzik_alternatifleri.id = "muzik_alternatifleri";
        polis_menu_muzik_alternatif_span.textContent = "Polis Menüsü Müzikleri:";
        polis_menu_muzik_alternatif_select.id = "polis_menu_muzik_alternatif_select";
            polis_menu_muzik_alternatif_option1.value = "MW";
            polis_menu_muzik_alternatif_option2.value = "HP - MW2";
            polis_menu_muzik_alternatif_option1.textContent = "MW";
            polis_menu_muzik_alternatif_option2.textContent = "HP - MW2";
        yarisci_menu_muzik_alternatif_span.textContent = "Yarışçı Menüsü Müzikleri:";
        yarisci_menu_muzik_alternatif_select.id = "yarisci_menu_muzik_alternatif_select";
            yarisci_menu_muzik_alternatif_option1.value = "Carbon";
            yarisci_menu_muzik_alternatif_option2.value = "World";
            yarisci_menu_muzik_alternatif_option1.textContent = "Carbon";
            yarisci_menu_muzik_alternatif_option2.textContent= "World";
        yarisci_yaris_muzik_alternatif_span.textContent = "Yarış Müzikleri:";
        yarisci_yaris_muzik_alternatif_select.id = "yarisci_yaris_muzik_alternatif_select";
            yarisci_yaris_muzik_alternatif_option1.value = "Adaptif";
            yarisci_yaris_muzik_alternatif_option2.value = "Özel";
            yarisci_yaris_muzik_alternatif_option1.textContent = "Adaptif";
            yarisci_yaris_muzik_alternatif_option2.textContent = "Özel";    

    profil_yonet.textContent = "Profilleri Yönet";

    ayarlar_baslik.appendChild(ayarlar_txt);

    ayar_secenekleri.appendChild(m_ses_sev_txt);
    ayar_secenekleri.appendChild(m_ses_sev);
    m_ses_sev.style.marginBottom = "20px";

    ayar_secenekleri.appendChild(e_ses_sev_txt);
    ayar_secenekleri.appendChild(e_ses_sev);
    e_ses_sev.style.marginBottom = "20px";

    
    polis_menu_muzik_alternatif_div.appendChild(polis_menu_muzik_alternatif_span);
    [polis_menu_muzik_alternatif_option1, polis_menu_muzik_alternatif_option2].forEach(i => {
        polis_menu_muzik_alternatif_select.appendChild(i);
    });
    polis_menu_muzik_alternatif_div.appendChild(polis_menu_muzik_alternatif_select);
    muzik_alternatifleri.appendChild(polis_menu_muzik_alternatif_div);

    yarisci_menu_muzik_alternatif_div.appendChild(yarisci_menu_muzik_alternatif_span);
    [yarisci_menu_muzik_alternatif_option1, yarisci_menu_muzik_alternatif_option2].forEach(i => {
        yarisci_menu_muzik_alternatif_select.appendChild(i);
    });
    yarisci_menu_muzik_alternatif_div.appendChild(yarisci_menu_muzik_alternatif_select)
    muzik_alternatifleri.appendChild(yarisci_menu_muzik_alternatif_div);

    yarisci_yaris_muzik_alternatif_div.appendChild(yarisci_yaris_muzik_alternatif_span);
    [yarisci_yaris_muzik_alternatif_option1, yarisci_yaris_muzik_alternatif_option2].forEach(i => {
        yarisci_yaris_muzik_alternatif_select.appendChild(i);
    });
    yarisci_yaris_muzik_alternatif_div.appendChild(yarisci_yaris_muzik_alternatif_select);
    muzik_alternatifleri.appendChild(yarisci_yaris_muzik_alternatif_div);

    butonlar.appendChild(tamam_btn);
    panel_cevap.appendChild(butonlar);

    ayarlar_menu_pencere.appendChild(ayarlar_baslik);
    ayarlar_menu_pencere.appendChild(ayar_secenekleri);
    ayar_secenekleri.appendChild(muzik_alternatifleri);
    ayar_secenekleri.appendChild(profil_yonet);
    ayarlar_menu_pencere.appendChild(panel_cevap);

    body.appendChild(ayarlar_menu_pencere);

    // SEÇİMLERİ ÇEREZLERDEN AL
    polis_menu_muzik_alternatif_select.value = localStorage.getItem("polis_menu_muzik_alternatifi").toString();
    yarisci_menu_muzik_alternatif_select.value = localStorage.getItem("yarisci_menu_muzik_alternatifi").toString();
    yarisci_yaris_muzik_alternatif_select.value = localStorage.getItem("yarisci_yaris_muzik_alternatifi").toString();

    bildirim_giris.currentTime = 0;
    bildirim_giris.play();
    

    profil_yonet.onclick = () =>{
        bildirim_penceresi_olustur("profilleri_yonet", "Profilleri Yönet", "", null);
        profil_olustur_buton.currentTime = 0;
        profil_olustur_buton.play();
    }

    //SES AYARLARLARI
    e_ses_sev.addEventListener("input", function(){
        localStorage.setItem("sfx_vol", this.value / 100);   
        sfx.forEach(i => {
            i.volume = localStorage.getItem("sfx_vol");
        });
        e_ses_sev_txt.innerHTML = `Efekt Ses Seviyesi: ${(localStorage.getItem("sfx_vol") * 100).toFixed()}`;
    });

    m_ses_sev.addEventListener("input", function(){
        localStorage.setItem("muzik_vol", this.value / 100);
        muzikler.forEach(i => {
            i.volume = localStorage.getItem("muzik_vol");
        });
        m_ses_sev_txt.innerHTML = `Müzik Ses Seviyesi: ${(localStorage.getItem("muzik_vol") * 100).toFixed()}`;
    });

    // MÜZİK ALTERNATİFİ 
    polis_menu_muzik_alternatif_select.onchange = () => {
        localStorage.setItem("polis_menu_muzik_alternatifi", polis_menu_muzik_alternatif_select.value);
    }
    yarisci_menu_muzik_alternatif_select.onchange = () => {
        localStorage.setItem("yarisci_menu_muzik_alternatifi", yarisci_menu_muzik_alternatif_select.value);
    }
    yarisci_yaris_muzik_alternatif_select.onchange = () => {
        localStorage.setItem("yarisci_yaris_muzik_alternatifi", yarisci_yaris_muzik_alternatif_select.value);
    }

    tamam_btn.onclick = () => {
        tamam_btn.disabled = true;
        e_ses_sev.disabled = true;
        m_ses_sev.disabled = true;
        profil_yonet.disabled = true;
        ayarlar_menu_pencere.style.animation = "ayar_menu_kapanis 0.1s forwards";
        giris_menu_secim_temizle();
        setTimeout(() => {
            try{
                body.removeChild(ayarlar_menu_pencere);
            }
            catch{}
        }, 150);
        bildirim_onay_red.currentTime = 0;
        bildirim_cikis_red.currentTime = 0;
        bildirim_onay_red.play();
        bildirim_cikis_red.play();
    }

    [tamam_btn, profil_yonet].forEach(i => {
        i.onmouseover = () => {
            menu_secim.currentTime = 0;
            menu_secim.play();
        }
    });
}

var muzik_loop_timeout_liste = [];
var muzik_oynat = (intro, muzik, pause, _timeout, playlist, sonraki) =>{

    if((intro != null || intro != undefined) && !pause){
        intro.play();
        intro.currentTime = 0;
        _timeout.id = setTimeout((_muzik = muzik, __timeout = _timeout, _playlist = playlist, _sonraki = sonraki) => {
            intro.pause();
            muzik.play();
            muzik_oynat(null ,_muzik, false, __timeout, _playlist, _sonraki);
        }, (intro.duration.toFixed(3) - 0.07) * 1000); // virgülden sonra 3 hane al, 0.07 çıkar ve milisiniyeye çevir
        muzik_loop_timeout_liste.push(_timeout);
        return 1
    }
    else if((muzik != null || muzik != undefined) && !pause){
        muzik.play();
        muzik.currentTime = 0;
        _timeout.id = setTimeout((_muzik = muzik, __timeout = _timeout, _playlist = playlist) => {
            if(sonraki){
                while(true){
                    let keys = Object.keys(custom_playlist);
                    let rand = Math.floor(Math.random() * (keys.length - 1));
                    let rand_muzik = custom_playlist[keys[rand]];
                    if(rand_muzik.main != simdiki_muzik){
                        simdiki_muzik = rand_muzik.main
                        muzik_oynat(rand_muzik.intro, rand_muzik.main, false, __timeout, _playlist, true);
                        break
                    }
                }
            }
            else{
                muzik_oynat(null, _muzik, false, __timeout);
            }
        }, (muzik.duration.toFixed(3) - 0.07) * 1000);
        muzik_loop_timeout_liste.push(_timeout);
        return 1
    }
    else if(pause){
        if(intro){
            intro.pause();
        }
        if(muzik){
            muzik.pause();
        }
        if(playlist){
            muzik_durdur(playlist);
        }
        muzik_loop_timeout_sil(_timeout);
        return 1
    }
}


const muzik_loop_timeout_sil = (bu_timeout, hepsi) => {
    if(hepsi){
        muzik_loop_timeout_liste.forEach(i => {
            clearInterval(i.id);
        });
        muzik_loop_timeout_liste = [];
    }
    else{
        for (let i = 0; i < muzik_loop_timeout_liste.length; i++) {
            if (muzik_loop_timeout_liste[i].ad == bu_timeout.ad) {
                clearTimeout(muzik_loop_timeout_liste[i].id);
            }
        }
    }
}
const muzik_durdur = (liste) => {
        liste.forEach(e => {
            if(e.aralik == 2){
                for(i in e){
                    if(i != "aralik"){
                        for(k in e[i]){
                            if(e[i][k] instanceof HTMLAudioElement){
                                e[i][k].pause();
                            }
                        }
                    }
                }
            }
            else{
                for(i in e){
                    for(k in e[i]){
                        if(e[i] instanceof HTMLAudioElement){
                            e[i].pause();
                        }
                    }
                }
            }
        });
}


const rastgele_muzik_oynat = (taraf) => {
    if(taraf == "yarisci_menu"){
        let keys = Object.keys(yarisci_menu_muzikler);
        if(localStorage.getItem("yarisci_menu_muzik_alternatifi") == "Carbon"){
            max = 2; 
            min = 0;
        }
        else{
            max = 4;
            min = 2;
        }
        let rand = Math.floor(Math.random() * (max - min) + min);
        let rand_muzik = yarisci_menu_muzikler[keys[rand]];
        muzik_oynat(rand_muzik.intro, rand_muzik.main, false, a = {id: null, ad: "menu_muzik"}, yarisci_menu_muzikler);
    }
    else{
        let keys = Object.keys(polis_menu_muzikler);
        if(localStorage.getItem("polis_menu_muzik_alternatifi") == "MW"){
            max = 2; 
            min = 0;
        }
        else{
            max = 4;
            min = 2;
        }
        let rand = Math.floor(Math.random() * (max - min) + min);
        let rand_muzik = polis_menu_muzikler[keys[rand]];
        muzik_oynat(null, rand_muzik.main, false, a = {id: null, ad: "menu_muzik"}, polis_menu_muzikler);
    }
}


//LOGIN EKRANI OLUŞTUR
var input_ad, input_sifre, output_id, output_rutbe, output_sube, output_erisim, menu_1_center, oturum_turu, aktif_sunucu_id;
var oturum_aktif_check = false;
function login_olustur(login_turu){

    menu_sekmesi = 1
    AFK_event();
    window.onmousemove = () => {AFK_event()};
    window.onkeydown = () => {AFK_event()};
    window.onclick = () => {AFK_event()};

    oturum_turu = login_turu == "yarisci_menu" ? "yarisci_menu" : "polis_menu";
    const klavye_ses_tuslari = "\"1234567890*-qwertyuıopğüasdfghjklşizxcvbnmöç.+QWERTYUIOPĞÜASDFGHJKLŞİZXCVBNMÖÇ, Backspace ArrowLeft ArrowRight ArrowUp ArrowDown Home End CapsLock"

    statik_vid.style.zIndex = "99";
    statik_vid2.style.zIndex = "99";
    login_aktif = false;
    
    const beyaz_cikis = document.createElement("div");
    beyaz_cikis.id = "beyaz_cikis";
    beyaz_cikis.style.animation = "";

    menu_1_center = document.createElement("div");
    menu_1_center.className = "menu_1_center";

    //LOGIN EKRANININ ELEMANLARI
        const login = document.createElement("div");
            const login_baslik = document.createElement("div");
        const login_logo = document.createElement("div");
            const login_logo_img = document.createElement("img");
            const login_logo_span = document.createElement("span");
        const login_ekran = document.createElement("div");
            const login_ekran_div1 = document.createElement("div");
                const login_ekran_span1 = document.createElement("span");
                const login_ekran_kullaniciAd = document.createElement("input");
            const login_ekran_div2 = document.createElement("div");
                const login_ekran_span2 = document.createElement("span");
                const login_ekran_sifre = document.createElement("input");
        const login_ekran_log = document.createElement("div");
            const login_ekran_log_span = document.createElement("span");
            const login_ekran_log_span2 = document.createElement("span");
        const menu_butonlari = document.createElement("div");
            const menu_butonlari_buton1 = document.createElement("button");
                const menu_butonlari_buton1_img = document.createElement("img");
                const menu_butonlari_buton1_span = document.createElement("span");
            const menu_butonlari_buton2 = document.createElement("button");
                const menu_butonlari_buton2_img = document.createElement("img");
                const menu_butonlari_buton2_span = document.createElement("span");
                

    menu_butonlari_buton2_span.textContent = "Onayla";
    menu_butonlari_buton2_img.src = "./galeri/enter.png";
    menu_butonlari_buton1_span.textContent = "Çıkış";
    menu_butonlari_buton1_img.src = "./galeri/esc.png";

    login_ekran_log_span.textContent = "Kullanıcı adı ve şifre giriniz.";

    login_ekran_log_span2.textContent = "/--";
    login_ekran_log_span2.id = "loading_spin"
    
    login_ekran_sifre.type = "password";
    login_ekran_sifre.id = "sifre";
    login_ekran_sifre.name = "sifre";
    login_ekran_sifre.tabIndex = "2";
    login_ekran_sifre.autocomplete = "off";
    login_ekran_span2.textContent = "ŞİFRE: ";
    
    login_ekran_kullaniciAd.type = "text";
    login_ekran_kullaniciAd.id = "kullanici_adi";
    login_ekran_kullaniciAd.name = "kullanici_adi";
    login_ekran_kullaniciAd.tabIndex = "1";
    login_ekran_kullaniciAd.autocomplete = "off";
    login_ekran_span1.textContent = "KULLANICI ADI: ";

    login_logo.className = "login_logo";

    login_baslik.className = "login_baslik";
    login_baslik.textContent = "VERİ TABANINA BAĞLANILIYOR...";
    
        menu_butonlari.className = "menu_butonlari";//
        login_logo_span.textContent = "ROCKPORT POLİS DEPARTMANI";//
        login_logo_img.src = "./galeri/polis_menu/polis_login_logo.png";//
        login_ekran_log.className = "login_ekran_log";//
        login_ekran.className = "login_ekran";//
        login.className = "login";//
    
    if(login_turu === "yarisci_menu"){
        favicon.href = "./galeri/favicon/yarisci_menu_logo.png";
        document.title = "Fairhaven V1 Giriş Ekranı";
        
        menu_butonlari.classList.add("yarisci_menu_butonlari");
        login_logo_span.textContent = "FAIRHAVEN V1";
        login_logo_img.src = "./galeri/yarisci_menu/yarisci_login_logo.png";
        login_logo_img.style.width = "50vh"; 
        login_logo_img.style.filter = "hue-rotate(200deg)";
        login_ekran_log.classList.add("yarisci_login_ekran_log");//
        login_ekran.classList.add("yarisci_login_ekran");//
        login.classList.add("yarisci_login");//
    }
    else{
        favicon.href = "./galeri/favicon/polis_menu_logo.png";
        document.title = "Rockport Polis Departmanı Giriş Ekranı";
    }
    //////


    let span_animation = login_turu === "yarisci_menu" ? "yarisci_login_span_giris 0.3s forwards linear" : "login_span_giris 0.3s forwards linear";
    let input_animation = login_turu === "yarisci_menu" ? "yarisci_login_input_giris 0.2s linear" : "login_input_giris 0.2s linear"; 

//ANİMASYONLU LOGIN OLUŞUMU
    login.appendChild(login_baslik);

    login_ekran_div2.appendChild(login_ekran_span2);
    login_ekran_div2.appendChild(login_ekran_sifre);
    login_ekran_div1.appendChild(login_ekran_span1);
    login_ekran_div1.appendChild(login_ekran_kullaniciAd);
    login_ekran.appendChild(login_ekran_div1);
    login_ekran.appendChild(login_ekran_div2);

    login.appendChild(login_logo);

    menu_1_center.appendChild(login);
    if(!document.contains(document.getElementById("beyaz_cikis"))){
        menu_1_center.appendChild(beyaz_cikis);
    }
    body.appendChild(menu_1_center);
    
    //LOGIN LOGOSUNU OLUŞTUR
    setTimeout(() => {
        polis_login_logo_acilis.play();
        login_baslik.style.visibility = "hidden";
        login_logo.appendChild(login_logo_img);
        login_logo.appendChild(login_logo_span);
        login_logo_img.style.animation = login_turu == "polis_menu" ? "login_logo_giris_dikey 0.2s linear" : "login_logo_giris_yatay 0.2s linear";
        
        setTimeout(() => {
            login_logo_span.style.visibility = "visible";
            login_logo_span.style.animation = span_animation;
        
            //LOGIN EKRANINI OLUŞTUR
            setTimeout(() => {
                polis_login_ekran_acilis.play();
                login.appendChild(login_ekran);
        
                //LOGINDEKİ INPUT1İ OLUŞTUR
                setTimeout(() => {
                    polis_login_ekran_div_acilis.play();
                    login_ekran_span1.style.visibility = "visible";
                    login_ekran_kullaniciAd.style.visibility = "visible";
                    login_ekran_span1.style.animation = span_animation;    
                    login_ekran_kullaniciAd.style.animation = input_animation;
                    login_ekran_kullaniciAd.onkeydown = (event) =>{
                        if(klavye_ses_tuslari.lastIndexOf(event.key) != -1){
                            polis_menu_klavye.currentTime = 0;
                            polis_menu_klavye.play()
                        }
                        
                    }

                    //LOGINDEKİ INPUT2Yİ OLUŞTUR
                    setTimeout(() => {
                        polis_login_ekran_div_acilis.play();
                        login_ekran_span2.style.visibility = "visible";
                        login_ekran_sifre.style.visibility = "visible";
                        login_ekran_span2.style.animation = span_animation; 
                        login_ekran_sifre.style.animation = input_animation;
                        //LOGIN INPUTLARININ KLAVYE SESLERİ
                        login_ekran_sifre.onkeydown = (event) =>{
                            if(klavye_ses_tuslari.lastIndexOf(event.key) != -1){
                                polis_menu_klavye.currentTime = 0;
                                polis_menu_klavye.play()
                        }
                        }

                        //LOGINDEKİ BUTONLARI OLUŞTUR
                        setTimeout(() => {
                            polis_menu_butonlar_acilis.play();
                            menu_butonlari_buton1.appendChild(menu_butonlari_buton1_img);
                            menu_butonlari_buton1.appendChild(menu_butonlari_buton1_span);
                            menu_butonlari_buton2.appendChild(menu_butonlari_buton2_img);
                            menu_butonlari_buton2.appendChild(menu_butonlari_buton2_span);
                            menu_butonlari.appendChild(menu_butonlari_buton1);
                            menu_butonlari.appendChild(menu_butonlari_buton2);

                            login_ekran_log.appendChild(login_ekran_log_span);
                            login_ekran_log.appendChild(login_ekran_log_span2);

                            login.appendChild(login_ekran_log);
                            login.appendChild(menu_butonlari);
                        
                            menu_butonlari_buton1.onclick = () =>{
                                login_menu_cikis();
                            }

                            statik_vid.style.zIndex = "";
                            statik_vid2.style.zIndex = "";

                        }, 500);
                    }, 500);
                }, 500);
            }, 300);
        }, 100);
    }, 1500);

    //RASTGELE MÜZİK OYNAT

        rastgele_muzik_oynat(login_turu);

    var sifre_eslesme = false;
    var ad_eslesme = false;
    var yakalandi_check = false;

    //VERİ TABANINI AL
    polis_veriTabani_hesapAl = async function(kullanici_adi, sifre){ // Polis logini için hesap bilgi kontrolü
        const x = await fetch("./veri.json"); // veri tabanını al
        const y = await x.json(); // gelen veriyi jsona çevir
        const z = await y[0].hesaplar[1].polis_hesap; // yarışçı hesaplarını al
    
        for(var i in z){
            if(z[i].kullanici_adi == kullanici_adi && z[i].sifre == sifre){
                ad_eslesme = true;
                sifre_eslesme = true;
                output_rutbe = z[i].rutbe;
                output_id = z[i].id;
                output_sube = z[i].sube;
                output_erisim = z[i].erisim;
                break;
            }
        }
    }
    yarisci_veriTabani_hesapAl = async function(kullanici_adi, sifre){ // Yarışçı logini için hesap bilgi kontrolü
        const x = await fetch("./veri.json"); // veri tabanını al
        const y = await x.json(); // gelen veriyi jsona çevir
        const z = await y[0].hesaplar[0].yarisci_hesap; // yarışçı hesaplarını al
    
        for(var i in z){
            if(z[i].kullanici_adi == kullanici_adi && z[i].sifre == sifre && z[i].durum != "Yakalandı"){
                ad_eslesme = true;
                sifre_eslesme = true;
                output_id = z[i].id;
                output_erisim = z[i].erisim;
                break;
            }
            else if(z[i].kullanici_adi == kullanici_adi && z[i].sifre == sifre && z[i].durum == "Yakalandı"){
                yakalandi_check = true;
                break;
            }
        }
    }

    const login_menu_cikis = function(){
        document.getElementById("beyaz_cikis").style.animation = "beyaz_cikis_anim 0.3s linear forwards";
        polis_menu_acilis.play();
        muzik_oynat(null, null, true, a = {id: null, ad: "menu_muzik"}, ana_menu_playlist);
        menu_1_center.removeChild(login);
        setTimeout(() => {
            body.removeChild(menu_1_center);
        }, 600);
        baslangic_olustur();
    }

    const giris_yap = async() =>{
        login_aktif = true;
        yakalandi_check = false;
        input_ad = login_ekran_kullaniciAd.value;
        input_sifre = login_ekran_sifre.value;

        if(login_turu === "yarisci_menu"){
            await yarisci_veriTabani_hesapAl(input_ad, input_sifre);
        }
        else{
            await polis_veriTabani_hesapAl(input_ad, input_sifre);
        }
        if(ad_eslesme && sifre_eslesme && !yakalandi_check){
            polis_login_giris_yukleniyor.play();
            login_ekran_log_span.style.color = "";
            login_ekran_log_span.textContent = "GİRİŞ YAPILIYOR"
            login_ekran_log_span2.style.display = "inline";
            menu_butonlari_buton1.onclick = null;
            menu_butonlari_buton2.onclick = null;

            [login_ekran_kullaniciAd, login_ekran_sifre].forEach(i => { // girişleri devre dışı bırak
                i.readOnly = true;
                i.blur();
            });

            setTimeout(() => {
                menu_1_center.removeChild(login);
                menu_1_olustur(output_id, input_ad, output_sube, output_rutbe, login_turu);
            }, 2000);
        }
        else if(yakalandi_check){
            polis_login_ekran_div_acilis.currentTime = 0;
            polis_login_ekran_div_acilis.play();
            login_ekran_log_span.style.color = "red";
            login_ekran_log_span.textContent = "Erişim reddedildi!";
        }
        else{
            polis_login_ekran_div_acilis.currentTime = 0;
            polis_login_ekran_div_acilis.play();
            login_ekran_log_span.style.color = "red";
            login_ekran_log_span.textContent = "Kullanıcı adı veya şifre hatalı.";
        }
    }

    menu_butonlari_buton2.onclick = () =>{
        giris_yap();
    }
    [login_ekran_kullaniciAd, login_ekran_sifre].forEach(i => {
        i.addEventListener("keydown", (event) => {
            if(event.key == "Enter"){
                giris_yap();
            }
        });
    });
}


let para_noktala = (profil, ikramiye) =>{
    let bu_para;
    if(ikramiye != null || ikramiye != undefined){
        bu_para = ikramiye;
    }
    else{
        bu_para = profil.ikramiye * 1;
    }
    bu_para = bu_para.toFixed().toString();            
    let cikti_para = "";
    for(i = 0; i < bu_para.length; i++){
        if(i > 0 && (bu_para.length - i) % 3 == 0){
            cikti_para += ".";
        }
        cikti_para += bu_para[i];
    }
    return cikti_para;
}
//MENU_1
async function menu_1_olustur(id, isim, polis_sube, polis_rutbe, olusturma_turu){

    login_aktif = false;
    esc_engel = false;
    menu_sekmesi = 1
    statik_vid.style.zIndex = "99";
    statik_vid2.style.zIndex = "99";

    const beyaz_cikis = document.createElement("div");
    beyaz_cikis.id = "beyaz_cikis";
    beyaz_cikis.style.animation = ""

    menu_1 = document.createElement("div");
        const baslik = document.createElement("div");
            const baslik_img = document.createElement("img");
            const baslik_span = document.createElement("span");

        const bilgi = document.createElement("div");
            const bilgi_div = document.createElement("div");
                
    
        const menuler = document.createElement("div");
            const menuler_span = document.createElement("span");
                const menuler_btn1 = document.createElement("button");
                    const btn1_div = document.createElement("div");
                    const btn1_span = document.createElement("span");
                const menuler_btn2 = document.createElement("button");
                    const btn2_div = document.createElement("div");
                    const btn2_span = document.createElement("span");
                const menuler_btn3 = document.createElement("button");
                    const btn3_div = document.createElement("div");
                    const btn3_span = document.createElement("span");

        const butonlar = document.createElement("div");
            const butonlar_btn1 = document.createElement("button");
                const btn1_img = document.createElement("img");
                const B_btn1_span = document.createElement("span");
            const butonlar_span = document.createElement("span");

        menu_1.className = "menu_1"; // her zaman eklenecek
            baslik.id = "baslik";
        
            bilgi.id = "bilgi";
            
            menuler.id = "menuler";
                menuler_span.textContent = "ANA MENÜ:";
                
                if(olusturma_turu === "polis_menu"){
                    favicon.href = "./galeri/favicon/polis_menu_logo.png"
                    document.title = "Rockport Polis Departmanı Veri Tabanı";
                    //POLİS ALT MENÜLERİ
                    menuler_btn1.tabIndex = "1";
                    btn1_span.textContent = output_erisim == "YARI" ? "Sokak Yarışçıları Listesi" : "Sokak Yarışçısı Bilgilerini Yönet";
                    btn1_span.textContent += " | Takip Başlat";
                    menuler_btn2.tabIndex = "2";
                    btn2_span.textContent = "Ekipman Marketi";
                    
                    menuler_btn1.appendChild(btn1_div);
                    menuler_btn2.appendChild(btn2_div);
                    menuler_btn1.appendChild(btn1_span);
                    menuler_btn2.appendChild(btn2_span);
                }
                else{
                    favicon.href = "./galeri/favicon/yarisci_menu_logo.png"
                    document.title = "Fairhaven V1 Veri Tabanı";
                    //YARIŞÇI ALT MENÜLERİ
                    menuler_btn1.tabIndex = "1";
                    btn1_span.textContent = "Kara Liste";
                    menuler_btn2.tabIndex = "2";
                    btn2_span.textContent = "Kara Liste Arabaları";
                    menuler_btn3.tabIndex = "3";
                    btn3_span.textContent = output_erisim == "TAM" ? "Yarışları Yönet | Yarış Başlat" : "Yarışlar Listesi | Yarış Başlat"; 

                    menuler_btn1.appendChild(btn1_div);
                    menuler_btn2.appendChild(btn2_div);
                    menuler_btn3.appendChild(btn3_div);
                    menuler_btn1.appendChild(btn1_span);
                    menuler_btn2.appendChild(btn2_span);
                    menuler_btn3.appendChild(btn3_span);
                }
            
            butonlar.className = "menu_butonlari";
                butonlar_btn1.tabIndex = "5"
                btn1_img.src = "./galeri/esc.png";
                B_btn1_span.textContent = "Çıkış";

                if(!oturum_aktif_check){
                    let polis_sunucu = ["RP42N83FFK", "RP567NLP21", "RP50FGLB24"];
                    let yarisci_sunucu = ["FH8884RTKL", "FH96NK2TR1", "FH569991AE"]
                    let random_x = Math.round(Math.random()*2);
                    aktif_sunucu_id = olusturma_turu === "yarisci_menu" ? "Sunucu: " + yarisci_sunucu[random_x] : "Sunucu: " + polis_sunucu[random_x];
                    butonlar_span.textContent = aktif_sunucu_id;
                    oturum_aktif_check = true;
                }
                else{
                    butonlar_span.textContent = aktif_sunucu_id;
                }
                
        if(olusturma_turu === "polis_menu"){
            baslik_img.src = "./galeri/polis_menu/polis_menu_logo.png";//
            baslik_span.textContent = "Rockport Polis Departmanı Veri Tabanı";//
        }
        else{
            menu_1.classList.add("yarisci_menu_1");
            butonlar.classList.add("yarisci_menu_butonlari");
            baslik_img.src = "./galeri/yarisci_menu/yarisci_menu_logo.png";//
            baslik_span.textContent = "Fairhaven V1 Veri Tabanı";//
        }
    
    //butonlar
    butonlar_btn1.appendChild(btn1_img);
    butonlar_btn1.appendChild(B_btn1_span);
    butonlar.appendChild(butonlar_btn1);
    butonlar.appendChild(butonlar_span);
    

    const polis_menu_cikis = function(){
        document.getElementById("beyaz_cikis").style.animation = "beyaz_cikis_anim 0.3s linear forwards";
        polis_menu_acilis.play();
        muzik_oynat(null, null, true, a = {id: null, ad: "menu_muzik"}, ana_menu_playlist);
        menu_1_center.removeChild(menu_1);
        setTimeout(() => {
            body.removeChild(menu_1_center);
        }, 600);
        baslangic_olustur();
    }
    
    //ANİMASYONLU OLUŞUM

    let menu_buton_fade_giris = olusturma_turu === "yarisci_menu" ? "yarisci_menu1_menuler_buton_fade_giris 0.15s forwards" : "menu1_menuler_buton_fade_giris 0.15s forwards"
    setTimeout(() => {
        menu_1.appendChild(menuler);
        polis_menu_menuler_acilis.play();
        let a = olusturma_turu === "polis_menu" ? [menuler_span, menuler_btn1, menuler_btn2, "son"] : [menuler_span, menuler_btn1, menuler_btn2, menuler_btn3, "son"]
        var t = 0;
        setTimeout(() => {
            a.forEach(i => {
                setTimeout(() => {
                    if(i != "son"){
                        menuler.appendChild(i);
                        polis_menu_menuler_buton_acilis.currentTime = 0;
                        polis_menu_menuler_buton_acilis.play();
                        if(i == menuler_span){
                            i.style.animation = "menu1_fade_giris 0.1s forwards";
                        }
                        else{
                            i.style.animation = menu_buton_fade_giris;
                        }

                        if(i != menuler_span){
                            setTimeout(() => {
                                    i.onmouseenter = () =>{
                                    polis_menu_buton_hover.currentTime = 0;
                                    polis_menu_buton_hover.play();
                                    i.style.animation = "";
                                }
                            }, (a.length -1 ) * 100);
                        }
                    }
                    else{
                        menu_1.appendChild(butonlar);
                        polis_menu_butonlar_acilis.play();
                        statik_vid.style.zIndex = "";
                        statik_vid2.style.zIndex = "";
                        
                        butonlar_btn1.onclick = () =>{
                            polis_menu_cikis();
                        }
                        menuler.querySelectorAll("button").forEach(i => {
                            i.style.animation = "";
                        });
                        
                        //ALT MENÜLER
                        menuler_btn1.onclick = () =>{
                            menu_1_center.removeChild(menu_1);
                            menu_2_olustur(olusturma_turu, "yarisci_listesi");
                            polis_menu_acilis.play();
                        }
                        if(olusturma_turu == "polis_menu"){
                            menuler_btn1.oncontextmenu = () =>{
                                menu_1_center.removeChild(menu_1);
                                menu_2_olustur(olusturma_turu, "takip_baslat");
                                polis_menu_acilis.play();
                            }  
                        }
                        if(olusturma_turu == "yarisci_menu"){
                            menuler_btn2.onclick = () =>{
                                menu_1_center.removeChild(menu_1);
                                menu_2_olustur(olusturma_turu, "araba_listesi");
                                polis_menu_acilis.play();
                            }
                            menuler_btn3.onclick = () => {
                                menu_1_center.removeChild(menu_1);
                                menu_2_olustur(olusturma_turu, "yaris_listesi");
                                polis_menu_acilis.play();
                            }
                            menuler_btn3.oncontextmenu = () => {
                                menu_1_center.removeChild(menu_1);
                                menu_2_olustur(olusturma_turu, "yaris_baslat");
                                polis_menu_acilis.play();
                            }
                        }
                        else{
                            menuler_btn2.onclick = () =>{
                                menu_1_center.removeChild(menu_1);
                                menu_3_olustur();
                                polis_menu_acilis.play();
                            }
                        }
                    }

                }, t);
                t+=100;
            });
        }, 300);
            
    }, 500);

    //bilgi
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    p1.textContent = `ID: ${id}`;
    p2.textContent = `İsim: ${isim}`;
    bilgi_div.appendChild(p1);
    bilgi_div.appendChild(p2);

    if(olusturma_turu === "polis_menu"){
        const a = await profilleri_getir("polis");
        const polis = a.find(a => a.id == id);
        const yarisci_profiller = await profilleri_getir("yarisci");

        let p3 = document.createElement("p");
        let p4 = document.createElement("p");
        let p5 = document.createElement("p");
        let p6 = document.createElement("p");
        p3.textContent = `Şube: ${polis_sube}`;
        p4.textContent = `Rütbe: ${polis_rutbe} `;
        p5.textContent = `Yakalanan Yarışçılar: ${polis.yakalanan_yariscilar + yarisci_profiller.filter(yarisci_profiller => yarisci_profiller.durum == "Yakalandı").length}`;
        p6.textContent = `İkramiye: ₺${para_noktala(polis)}`;
        bilgi_div.appendChild(p3);
        bilgi_div.appendChild(p4);
        bilgi_div.appendChild(p5);
        bilgi_div.appendChild(p6);
    }
    else{
        const a = await profilleri_getir("yarisci");
        const yarisci = a.find(a => a.id == id);
        const b = await arabalari_getir();
        const araba = b.find(b => b.id == yarisci.araba_id)

        let p3 = document.createElement("p");
        let p4 = document.createElement("p");
        let p5 = document.createElement("p");
        p3.textContent = `Kazanılan Yarışlar: ${yarisci.kazanilan_yarislar}`;
        p4.textContent = `Katılınan Son Yarış: ${yarisci.son_gorulme}`;
        p5.textContent = `Araba: ${araba.marka + " " + araba.model} `;
        bilgi_div.appendChild(p3);
        bilgi_div.appendChild(p4);
        bilgi_div.appendChild(p5);

    }
    bilgi.appendChild(bilgi_div);

    //baslik
    baslik.appendChild(baslik_img);
    baslik.appendChild(baslik_span);

    //menu_1
    polis_menu_acilis.currentTime = 0;
    polis_menu_acilis.play();
    menu_1.appendChild(baslik);
    menu_1.appendChild(bilgi);

    menu_1_center.appendChild(menu_1);
    if(!document.contains(document.getElementById("beyaz_cikis"))){
        menu_1_center.appendChild(beyaz_cikis);
    }

    document.body.appendChild(menu_1_center);
}


//ALT MENÜLER
var menu_2;
async function menu_2_olustur(alt_menu_tur, liste_turu){

    statik_vid.style.zIndex = "99";
    menu_sekmesi = 2
    esc_engel = false;

    if(!body.contains(menu_1_center)){
        menu_1_center = document.createElement("div");
        menu_1_center.className = "menu_1_center";
    }

    menu_2 = document.createElement("div");
        const baslik = document.createElement("div");
            const baslik_img = document.createElement("img");
            const baslik_span = document.createElement("span");

        const bilgi = document.createElement("div");
            const bilgi_div = document.createElement("div");
                
        const menuler = document.createElement("div");
            const tablo = document.createElement("table");
                const tablo_baslik = document.createElement("tr");
                const tablo_baslik_id = document.createElement("th");
                const tablo_baslik_isim = document.createElement("th");
                const tablo_baslik_araba = document.createElement("th");
                const tablo_baslik_kaz_yarislar = document.createElement("th");
                const tablo_baslik_aranma_katsayisi = document.createElement("th");
                const tablo_baslik_son_gorulme = document.createElement("th");
                const tablo_baslik_durum = document.createElement("th");
                const tablo_baslik_potansiyel_ikramiye = document.createElement("th");
                const tablo_baslik_marka = document.createElement("th");
                const tablo_baslik_model = document.createElement("th");
                const tablo_baslik_hp = document.createElement("th");
                const tablo_baslik_plaka = document.createElement("th");
                const tablo_baslik_yaris_ad = document.createElement("th");
                const tablo_baslik_bolge = document.createElement("th");
                const tablo_baslik_uzunluk = document.createElement("th");
                const tablo_baslik_polis_sikligi = document.createElement("th");
                const tablo_baslik_inaktif_sure = document.createElement("th");

        const butonlar = document.createElement("div");
            const butonlar_btn1 = document.createElement("button");
                const btn1_img = document.createElement("img");
                const B_btn1_span = document.createElement("span");
            const butonlar_btn2 = document.createElement("button");
                const btn2_img = document.createElement("img");
                const B_btn2_span = document.createElement("span");
            const butonlar_btn3 = document.createElement("button");
                const btn3_img = document.createElement("img");
                const B_btn3_span = document.createElement("span");
            const butonlar_btn4 = document.createElement("button");
                const btn4_img = document.createElement("img");
                const B_btn4_span = document.createElement("span");


    menu_2.className = "menu_1"; // her zaman eklenecek

        baslik.id = "baslik";
        baslik_img.src = "./galeri/araba_listesi.png";
        if(alt_menu_tur == "polis_menu"){
            if(liste_turu == "takip_baslat"){
                favicon.href = "./galeri/polis_menu/takip_baslat.png";
                baslik_img.src ="./galeri/polis_menu/takip_baslat.png";
                baslik_span.textContent = document.title = "Takip Başlat";
            }
            else{
                favicon.href = "./galeri/favicon/araba_listesi.png";
                baslik_img.src = "./galeri/araba_listesi.png";
                baslik_span.textContent = document.title = output_erisim == "YARI" ? "Sokak Yarışçıları Listesi" : "Sokak Yarışçısı Bilgilerini Yönet";
            }        
        }
        else{
            if(liste_turu == "araba_listesi"){
                favicon.href = "./galeri/favicon/araba_listesi.png";
                baslik_span.textContent = document.title = "Kara Liste Arabaları";
            }
            else if(liste_turu == "yaris_listesi" || liste_turu == "yaris_baslat"){
                favicon.href = "./galeri/favicon/yaris_logo.png";
                baslik_img.src = "./galeri/yarisci_menu/yaris_logo.png";
                if(liste_turu == "yaris_listesi"){
                    baslik_span.textContent = document.title = output_erisim == "TAM" ? "Yarışları Yönet" : "Yarışlar Listesi";
                }
                else{
                    baslik_span.textContent = document.title = "Yarış Başlat";
                }
            }
            else{
                favicon.href = "./galeri/favicon/araba_listesi.png";
                baslik_span.textContent = document.title = "Kara Liste";
            }
            
            menu_2.classList.add("yarisci_menu_1");
            butonlar.classList.add("yarisci_menu_butonlari");
        }
        
        bilgi.id = "bilgi";
            
        menuler.id = "menuler";

        butonlar.classList.add("menu_butonlari");
            butonlar_btn1.tabIndex = "5";
            butonlar_btn1.id = "cikis_btn";
            btn1_img.src = "./galeri/esc.png";
            B_btn1_span.textContent = "Geri";
            butonlar_btn2.tabIndex = "6";
            butonlar_btn2.id = "sirala_btn";
            btn2_img.src = "./galeri/enter.png";
            B_btn2_span.textContent = "Sırala";
            butonlar_btn3.tabIndex = "7";
            butonlar_btn3.id = "yazdir_btn";
            btn3_img.src = "./galeri/P.png";
            B_btn3_span.textContent = "Yazdır";
            butonlar_btn4.tabIndex = "8";
            butonlar_btn4.id = "ileri_sar_btn";
            btn4_img.src = "./galeri/T.png";
            B_btn4_span.textContent = "İleri Sar";

        butonlar_btn1.appendChild(btn1_img);
        butonlar_btn1.appendChild(B_btn1_span);
        butonlar_btn2.appendChild(btn2_img);
        butonlar_btn2.appendChild(B_btn2_span);
        butonlar.appendChild(butonlar_btn1);
        butonlar.appendChild(butonlar_btn2);
        if(liste_turu != "yaris_baslat" && liste_turu != "takip_baslat"){
            butonlar_btn3.appendChild(btn3_img);
            butonlar_btn3.appendChild(B_btn3_span);
            butonlar.appendChild(butonlar_btn3);
        }
        if(liste_turu != "araba_listesi"){
            butonlar_btn4.appendChild(btn4_img);
            butonlar_btn4.appendChild(B_btn4_span);
            butonlar.appendChild(butonlar_btn4);
        }

    baslik.appendChild(baslik_img);
    baslik.appendChild(baslik_span);

    var yarisci = await yariscilari_getir();
    var arabalar = await arabalari_getir();
    var yarisci_profiller = await profilleri_getir("yarisci");
    var yarislar = await yarislari_getir();

    let yakalanan_yariscilar = yarisci.filter(yarisci => yarisci.durum == "Yakalandı");
    let yakalanan_profil_yariscilar = yarisci_profiller.filter(yarisci_profiller => yarisci_profiller.durum == "Yakalandı");
    yakalanan_yariscilar = yakalanan_yariscilar.length + yakalanan_profil_yariscilar.length;
    let ortalama = 0;
    let AK_ort = 0;
    let PI_ort = 0;
    let uzunluk_ort = 0;
    let inaktif = 0;
    if(liste_turu == "araba_listesi"){
        for(i in arabalar){
            let profil_arabasi_check = yarisci_profiller.find(yarisci_profiller => yarisci_profiller.araba_id == arabalar[i].id)
            if(profil_arabasi_check == undefined){
                ortalama += arabalar[i].hp * 1;
            }
        }
        ortalama /= (arabalar.length - yarisci_profiller.length); 
        ortalama = ortalama.toFixed(2).replace(".", ",");
    }
    else if(liste_turu == "yaris_listesi" || liste_turu == "yaris_baslat"){
        for(i in yarislar){
            ortalama += yarislar[i].polis_sikligi * 1;
            uzunluk_ort += yarislar[i].uzunluk * 1;
            let suan = new Date();
            let oan = new Date(yarislar[i].inaktif_sure);
            if(oan > suan){
                inaktif += 1;
            }
        }
        ortalama = ((ortalama / (yarislar.length * 5)) * 100).toFixed(2);
        uzunluk_ort /= yarislar.length;
        uzunluk_ort = uzunluk_ort.toFixed(2).replace(".", ",");
    }
    else if(liste_turu == "yarisci_listesi" || liste_turu == "takip_baslat"){
        for(i in yarisci.filter(yarisci => yarisci.durum == "Aranıyor")){
            AK_ort += yarisci[i].aranma_katsayisi * 1;
            PI_ort += yarisci[i].kazanilan_yarislar * yarisci[i].aranma_katsayisi * 1000;
        }
        AK_ort /= yarisci.length;
        PI_ort /= yarisci.length;
    }

    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    bilgi_div.appendChild(p1);
    if(liste_turu != "takip_baslat" && liste_turu != "yaris_baslat"){
        bilgi_div.appendChild(p2);
    }
    if(liste_turu == "yarisci_listesi" || liste_turu == "takip_baslat"){
        let p3 = document.createElement("p");
        bilgi_div.appendChild(p3);
        p1.textContent = liste_turu != "takip_baslat" ? `Toplam Yarışçı: ${yarisci.length + yakalanan_profil_yariscilar.length}` : `Toplam Yarışçı: ${yarisci.length - yakalanan_yariscilar}`;
        p2.textContent = `Yakalanan Yarışçı: ${yakalanan_yariscilar}`;
        p3.textContent = `Ortalama Aranma Katsayısı: ${AK_ort.toFixed()}`;
        if(alt_menu_tur == "polis_menu"){
            let p4 = document.createElement("p");
            bilgi_div.appendChild(p4);
            p4.textContent = `Ortalama Potansiyel İkramiye: ₺${para_noktala(null,PI_ort)}`;
        }
    }
    else if(liste_turu == "araba_listesi"){
        p1.textContent = `Toplam Araba: ${arabalar.length - yarisci_profiller.length}`;
        p2.textContent = `Ortalama Motor Gücü: ${ortalama}HP`;
    }
    else if(liste_turu == "yaris_listesi" || liste_turu == "yaris_baslat"){
        let p3 = document.createElement("p");
        bilgi_div.appendChild(p3);
        let p4 = document.createElement("p");
        bilgi_div.appendChild(p4);
        p1.textContent = liste_turu != "yaris_baslat" ? `Toplam Yarış: ${yarislar.length}` : `Toplam Yarış: ${yarislar.length - inaktif}`;
        p2.textContent = `İnaktif Yarış: ${inaktif}`;
        p3.textContent = `Polis Sıklığı Yüzdesi: %${ortalama}`;
        p4.textContent = `Ortalama Uzunluk: ${uzunluk_ort} KM`;
    }
    bilgi.appendChild(bilgi_div);


    let menu_row_fade_giris = alt_menu_tur == "yarisci_menu" ? "yarisci_menu1_menuler_buton_fade_giris 0.15s forwards" : "menu1_menuler_buton_fade_giris 0.15s forwards"
    //ANİMASYONLU OLUŞUM
        menu_2.appendChild(baslik);
        menu_2.appendChild(bilgi);

        setTimeout(async() => {
            menu_2.appendChild(menuler);
            polis_menu_menuler_acilis.play();
            var t = 250;
                //YARIŞÇILAR LİSTESİ OLUŞUMU
                tablo_baslik_id.textContent = "ID";
                tablo_baslik_isim.textContent = liste_turu == "yarisci_listesi" ? "İSİM" : "SAHİBİ";
                tablo_baslik_araba.textContent = "ARABA";
                tablo_baslik_kaz_yarislar.textContent = "KAZANILAN YARIŞLAR";
                tablo_baslik_aranma_katsayisi.textContent = "ARANMA KATSAYISI";
                tablo_baslik_son_gorulme.textContent = "SON GÖRÜLME";
                tablo_baslik_durum.textContent = "DURUM";
                tablo_baslik_potansiyel_ikramiye.textContent = "POTANSİYEL İKRAMİYE";
                tablo_baslik_marka.textContent = "MARKA";
                tablo_baslik_model.textContent = "MODEL";
                tablo_baslik_hp.textContent = "MOTOR GÜCÜ";
                tablo_baslik_plaka.textContent = "PLAKA";
                tablo_baslik_yaris_ad.textContent = "YARIŞ ADI"; 
                tablo_baslik_bolge.textContent = "BÖLGE"; 
                tablo_baslik_uzunluk.textContent = "UZUNLUK(KM)";
                tablo_baslik_polis_sikligi.textContent = "POLİS SIKLIĞI";
                tablo_baslik_inaktif_sure.textContent = "İNAKTİFLİK";

                let tablo_basliklari;
                if(liste_turu == "yarisci_listesi" && alt_menu_tur == "yarisci_menu"){
                    tablo_basliklari = [tablo_baslik_id, tablo_baslik_isim, tablo_baslik_araba, tablo_baslik_kaz_yarislar, tablo_baslik_aranma_katsayisi, tablo_baslik_durum];
                }
                else if((liste_turu == "yarisci_listesi" && alt_menu_tur == "polis_menu") || liste_turu == "takip_baslat"){
                    tablo_basliklari = [tablo_baslik_id, tablo_baslik_isim, tablo_baslik_araba, tablo_baslik_plaka, tablo_baslik_aranma_katsayisi, tablo_baslik_son_gorulme, tablo_baslik_durum, tablo_baslik_potansiyel_ikramiye];
                }
                else if(liste_turu == "araba_listesi"){
                    tablo_basliklari = [tablo_baslik_id, tablo_baslik_isim, tablo_baslik_marka, tablo_baslik_model, tablo_baslik_hp, tablo_baslik_plaka];
                }
                else if(liste_turu == "yaris_listesi" || liste_turu == "yaris_baslat"){
                    tablo_basliklari = [tablo_baslik_id, tablo_baslik_yaris_ad, tablo_baslik_bolge, tablo_baslik_uzunluk, tablo_baslik_polis_sikligi, tablo_baslik_inaktif_sure];
                }

                tablo_basliklari.forEach(i => {
                    tablo_baslik.appendChild(i);
                });
                setTimeout(() => {
                    tablo.appendChild(tablo_baslik)
                }, t);
                if(liste_turu == "yarisci_listesi" || liste_turu == "takip_baslat"){
                    for(i in yarisci){//YARIŞÇI BİLGİLERİNİ YAZ
                        let yakalandi_check = false;
                        const yarisci_row = document.createElement("tr");
                        yarisci_row.id = yarisci[i].id;
                        for(k in yarisci[i]){
                            if(k == "kazanilan_yarislar" && alt_menu_tur == "polis_menu"){
                                continue;
                            }
                            else if(k == "son_gorulme" && alt_menu_tur == "yarisci_menu"){
                                continue;
                            }
                            if(k != "araba_id"){
                                const yarisci_bilgi = document.createElement("td");
                                yarisci_bilgi.textContent = yarisci[i][k];
                                    if(yarisci[i][k] == "Yakalandı"){
                                        if(liste_turu == "takip_baslat"){
                                            yakalandi_check = true;
                                        }
                                        yarisci_row.style.color = "red";
                                        yarisci_row.onmouseover = () => {
                                            yarisci_row.style.animation = "menu_secim_hover_yakalandi 1.2s infinite"
                                        }
                                        yarisci_row.onmouseout = () => {
                                            yarisci_row.style.animation = "none"
                                        }
                                    }
                                yarisci_row.appendChild(yarisci_bilgi);
                            }
                            else{
                                const yarisci_bilgi = document.createElement("td");
                                const araba = arabalar.find(arabalar => yarisci[i][k] == arabalar.id);
                                yarisci_bilgi.textContent = araba.marka + " " + araba.model;
                                yarisci_row.appendChild(yarisci_bilgi);
                                if(alt_menu_tur == "polis_menu"){
                                    const yarisci_bilgi_plaka = document.createElement("td");
                                    yarisci_bilgi_plaka.textContent = araba.plaka;
                                    yarisci_row.appendChild(yarisci_bilgi_plaka);
                                }
                            }
                        }
                        if(alt_menu_tur == "polis_menu"){ //YARIŞÇIYA POTANSİYEL İKRAMİYESİNİ YAZ
                            const yarisci_ikramiye = document.createElement("td");

                            if(yarisci[i].durum != "Yakalandı"){
                                const ikramiye = yarisci[i].aranma_katsayisi * yarisci[i].kazanilan_yarislar * 1000;
                                yarisci_ikramiye.textContent = ikramiye > 0 ? `₺${para_noktala(null, ikramiye)}`: "-";
                            }
                            else{
                                yarisci_ikramiye.textContent = "-";
                            }
                            yarisci_row.appendChild(yarisci_ikramiye);
                        }
                        if(!yakalandi_check){
                            if(output_erisim != "YARI" && liste_turu != "takip_baslat"){
                                yarisci_row.onclick = () => {
                                    yarisci_yonet("yarisci_duzenle", "Yarışçıyı Düzenle", yarisci_row.id, alt_menu_tur);
                                }
                            }
                            else{
                                yarisci_row.onclick = () => {
                                    menu_2.style.filter = "blur(3px)";
                                    statik_vid.style.zIndex = "1";

                                    const hayir_fonk = () => {
                                        menu_2.style.filter = "blur(0)";
                                        statik_vid.style.zIndex = "";
                                    }
                                    const evet_fonk = () => {
                                        menu_2.style.filter = "blur(0)";
                                        statik_vid.style.zIndex = "";
                                    }
                                    onay_bildirimi_olustur("Takip Başlat", `${(yarisci.find(yarisci => yarisci.id == yarisci_row.id)).isim} üzerinde takip başlatılsın mı?`, evet_fonk, hayir_fonk, null, "e/h", "./galeri/polis_menu/takip_baslat.png")
                                }
                            }
                            setTimeout(() => {
                                polis_menu_menuler_buton_acilis.currentTime = 0;
                                polis_menu_menuler_buton_acilis.play();
                                yarisci_row.style.animation = menu_row_fade_giris;

                                tablo.appendChild(yarisci_row)
                            }, t);
                            t += 100
                        }
                        }
                        if(output_erisim != "YARI" && liste_turu != "takip_baslat"){//YARIŞÇIYI DÜZENLEME OLAYINI EKLE
                            setTimeout(() => {
                                const ekleme_row = document.createElement("tr");
                                for(i in tablo_basliklari){
                                    const arti = document.createElement("td");
                                    arti.textContent = "+";
                                    ekleme_row.appendChild(arti);
                                }
                                polis_menu_menuler_buton_acilis.currentTime = 0;
                                polis_menu_menuler_buton_acilis.play();
                                ekleme_row.id = "ekleme_row";
                                tablo.appendChild(ekleme_row);
                                ekleme_row.onclick = () =>{
                                    yarisci_yonet("yarisci_ekle", "Yarışçı Ekle", null, alt_menu_tur);
                                }
                            }, t);
                        }
                        for(f in yarisci_profiller){
                            if(yarisci_profiller[f].durum != "Yakalandı" || liste_turu == "takip_baslat"){
                                continue;
                            }
                            const yarisci_row = document.createElement("tr");
                            yarisci_row.id = yarisci_profiller[f].id;
                            for(z in yarisci_profiller[f]){
                                if(z == "kazanilan_yarislar" && alt_menu_tur == "polis_menu"){
                                    continue;
                                }
                                else if(z == "son_gorulme" && alt_menu_tur == "yarisci_menu"){
                                    continue;
                                }
                                if(z != "araba_id" && z != "sifre" && z != "erisim"){
                                    const yarisci_bilgi = document.createElement("td");
                                    yarisci_bilgi.textContent = yarisci_profiller[f][z];
                                        if(yarisci_profiller[f][z] == "Yakalandı"){
                                            yarisci_row.style.color = "red";
                                            menu_secim_hover_yakalandi = "none"
                                            
                                            yarisci_row.onmouseover = () => {
                                                yarisci_row.style.animation = "menu_secim_hover_yakalandi 1.2s infinite"
                                            }
                                            yarisci_row.onmouseout = () => {
                                                yarisci_row.style.animation = "none"
                                            }
                                        }
                                    yarisci_row.appendChild(yarisci_bilgi);
                                }
                                else if(z == "araba_id"){
                                        const yarisci_bilgi = document.createElement("td");
                                        
                                        const araba = arabalar.find(arabalar => yarisci_profiller[f][z] == arabalar.id);
                                        yarisci_bilgi.textContent = araba.marka + " " + araba.model;
                                        yarisci_row.appendChild(yarisci_bilgi);
                                        if(alt_menu_tur == "polis_menu"){
                                            const yarisci_bilgi_plaka = document.createElement("td");
                                            yarisci_bilgi_plaka.textContent = araba.plaka;
                                            yarisci_row.appendChild(yarisci_bilgi_plaka);
                                        }
                                }
                                if(output_erisim != "YARI" && alt_menu_tur != "yarisci_menu"){
                                    yarisci_row.onclick = () => {
                                        statik_vid.style.zIndex = "1";
                                        menu_2.style.filter = "blur(3px)";
                                        let iptal = () => {
                                            menu_2.style.filter = "blur(0)";
                                            statik_vid.style.zIndex = "";
                                        }
                                        let serbest_birak = async() => {
                                            await fetch("/yarisciProfilGuncelle",{
                                                method: "POST",
                                                body: JSON.stringify({
                                                    id: yarisci_row.id,
                                                    serbest_birak_check: true
                                                }),
                                                headers: {
                                                    "Content-type": "application/json; charset=UTF-8"
                                                }
                                            });
                                            statik_ses.play();
                                            statik_vid.play();
                        
                                            statik_vid.style.animation = "statik_anim 1.5s forwards";
                                            statik_vid.style.zIndex = "99";
                                            setTimeout(() => {
                                                statik_vid.style.zIndex = "";
                                                statik_vid.style.animation = "";
                                                statik_vid.pause();
                                            }, 1500);
                                            setTimeout(() => {
                                                muzik_oynat(null, null, true, a = {id: null, ad: "menu_muzik"}, ana_menu_playlist);
                                                polis_menu_acilis.play();
                                                document.getElementById("beyaz_cikis").style.animation = "beyaz_cikis_anim 0.3s linear forwards";
                                                menu_1_center.removeChild(menu_2);
                                                setTimeout(() => {
                                                    body.removeChild(menu_1_center);
                                                    favicon.href = "./galeri/favicon/sistem.png";
                                                    document.title = "????????";
                                                    onay_bildirimi_olustur("Sistem", "Bağlantı kesildi.", null, null, baslangic_olustur, "tamam", "./galeri/favicon/sistem.png");
                                                }, 400);
                                            }, 1000); 
                                        } 
                                        onay_bildirimi_olustur("????????", "Serbest bırak?", serbest_birak, iptal, null, "e/h", "./galeri/soru_isareti.png");
                                    }
                                }
                            }
                            
                            setTimeout(() => {
                                polis_menu_menuler_buton_acilis.currentTime = 0;
                                polis_menu_menuler_buton_acilis.play();
                                yarisci_row.style.animation = menu_row_fade_giris;

                                tablo.appendChild(yarisci_row)
                            }, t);

                            if(alt_menu_tur == "polis_menu"){
                                const yarisci_ikramiye = document.createElement("td");
                                yarisci_ikramiye.textContent = `-`;
                                yarisci_row.appendChild(yarisci_ikramiye);
                            }
        
                            setTimeout(() => {
                                polis_menu_menuler_buton_acilis.currentTime = 0;
                                polis_menu_menuler_buton_acilis.play();
                                tablo.appendChild(yarisci_row)
                            }, t);
                            t += 100
                        }
                        
                }
                else if(liste_turu == "araba_listesi"){
                    for(i in arabalar){//ARABA BİLGİLERİNİ YAZ
                        let profil_arabasi_check;
                        profil_arabasi_check = yarisci_profiller.find(yarisci_profiller => yarisci_profiller.araba_id == arabalar[i].id)
                        if(profil_arabasi_check != undefined){
                            continue;
                        }
                        
                        const araba_row = document.createElement("tr");

                        for(k in arabalar[i]){//ARABA BİLGİLERİNİ SATIRA EKLE
                            const araba_bilgi = document.createElement("td");
                            araba_bilgi.textContent = arabalar[i][k];
                            araba_row.appendChild(araba_bilgi);
                            if(k == "id"){
                                const araba_sahibi = document.createElement("td");
                                let bu_yarisci = yarisci.find(yarisci => yarisci.araba_id == arabalar[i].id);
                                araba_sahibi.textContent = bu_yarisci != undefined ? bu_yarisci.isim : " ";
                                araba_row.appendChild(araba_sahibi);
                            }
                        }
                        setTimeout(() => { //ARABALARI TABLOYA EKLE
                            polis_menu_menuler_buton_acilis.currentTime = 0;
                            polis_menu_menuler_buton_acilis.play();
                            araba_row.style.animation = menu_row_fade_giris;
                            tablo.appendChild(araba_row);
                        }, t);
                        t += 100
                    }
                }
                else if(liste_turu == "yaris_listesi" || liste_turu == "yaris_baslat"){
                    for(i in yarislar){
                        let inaktif_check = false;
                        const yaris_row = document.createElement("tr");
                        yaris_row.id = yarislar[i].id;

                        for(k in yarislar[i]){
                            const yaris_bilgi = document.createElement("td");
                            if(k != "inaktif_sure" && k != "polis_sikligi"){
                                yaris_bilgi.textContent = yarislar[i][k];
                            }
                            else if(k == "inaktif_sure"){
                                let suan = new Date();
                                let oan = new Date(yarislar[i][k]);
                                if(oan < suan){
                                    yaris_bilgi.textContent = "Müsait";
                                }
                                else{
                                    if(liste_turu == "yaris_baslat"){
                                        inaktif_check = true;
                                    }
                                    yaris_row.style.color = "red";
                                    yaris_row.onmouseover = () => {
                                        yaris_row.style.animation = "menu_secim_hover_yakalandi 1.2s infinite";
                                    }
                                    yaris_row.onmouseout = () => {
                                        yaris_row.style.animation = "none";
                                    }
                                    fark = zaman_fark(suan, oan);
                                    yaris_bilgi.textContent = `${fark.saat}:${fark.dakika}:${fark.saniye}`;
                                }
                            }
                            else if(k == "polis_sikligi"){
                                switch(yarislar[i][k]){
                                    case 0:
                                        yaris_bilgi.textContent = "Hiç";
                                        break;
                                    case 1:
                                        yaris_bilgi.textContent = "Nadir";
                                        break;
                                    case 2:
                                        yaris_bilgi.textContent = "Normal";
                                        break;
                                    case 3:
                                        yaris_bilgi.textContent = "Sık";
                                        break;
                                    case 4:
                                        yaris_bilgi.textContent = "Çok Sık";
                                        break;
                                    case 5:
                                        yaris_bilgi.textContent = "Köşebaşı";
                                        break;
                                    default:
                                        yaris_bilgi.textContent = "Anormal";
                                        break;
                                }
                            }
                            if(output_erisim != "YARI" && liste_turu != "yaris_baslat"){
                                yaris_row.onclick = () => {
                                    yaris_yonet("yaris_duzenle", "Yarışı Düzenle", yaris_row.id);
                                }
                            }
                            else{
                                if((yarisci.filter(yarisci => yarisci.durum == "Aranıyor")).length < 1){
                                    yaris_row.onclick = () => {
                                        menu_2.style.filter = "blur(3px)";
                                        statik_vid.style.zIndex = "1";
    
                                        const tamam_fonk = () => {
                                            menu_2.style.filter = "blur(0)";
                                            statik_vid.style.zIndex = "";
                                        }
                                        onay_bildirimi_olustur("Yarış Başlat", `Yarış başlatmak için yeterli yarışçı yok. Tek başına yarışmanın ne anlamı var!`, null, null, tamam_fonk, "tamam", "./galeri/yarisci_menu/yaris_logo.png");
                                    }

                                }
                                else{
                                    yaris_row.onclick = () => {
                                        menu_2.style.filter = "blur(3px)";
                                        statik_vid.style.zIndex = "1";
    
                                        const hayir_fonk = () => {
                                            menu_2.style.filter = "blur(0)";
                                            statik_vid.style.zIndex = "";
                                        }
                                        const evet_fonk = () => {

                                            let yarisci_muzikler = [];
                                            for(i in yarisci_menu_muzikler){
                                                for(k in yarisci_menu_muzikler[i]){
                                                    if(yarisci_menu_muzikler[i][k] != null){
                                                        yarisci_muzikler.push(yarisci_menu_muzikler[i][k])
                                                    }
                                                }
                                            }
                                            

                                            muzik_kis(yarisci_muzikler, 200, true, () => muzik_oynat(null, null, true, a = {id: null, ad: "menu_muzik"}, ana_menu_playlist));

                                            statik_vid2.currentTime = 0;
                                            statik_vid2.play();
                                            statik_ses2.play();
                                            statik_vid2.style.animation = "statik2_anim 4s forwards";
                                            statik_vid2.style.zIndex = "99";

                                            menu_2.style.transform = "scale(0.95)";
                                            menu_2.style.opacity = "0";
                                            setTimeout(() => {
                                                menu_1_center.removeChild(menu_2);
                                                statik_vid2.style.zIndex = "";
                                            }, 500);

                                            setTimeout(() => {
                                                statik_vid2.pause();
                                                statik_vid2.style.animation = "";
                                                let bu_yaris = yarislar.find(yarislar => yarislar.id == yaris_row.id);
                                                event_baslat("yaris", bu_yaris.uzunluk * 1 ,output_id);

                                                favicon.href = "./galeri/favicon/yaris_logo.png";
                                                document.title = bu_yaris.yaris_ad;
                                            }, 2300);
                                        }
                                        onay_bildirimi_olustur("Yarış Başlat", `${(yarislar.find(yarislar => yarislar.id == yaris_row.id)).yaris_ad} yarışını başlatmak istediğine emin misin?`, evet_fonk, hayir_fonk, null, "e/h", "./galeri/yarisci_menu/yaris_logo.png");
                                    }
                                }
                            }
                            yaris_row.appendChild(yaris_bilgi);
                        }
                        if(!inaktif_check){
                            setTimeout(() => { //YARIŞLARI TABLOYA EKLE
                                polis_menu_menuler_buton_acilis.currentTime = 0;
                                polis_menu_menuler_buton_acilis.play();
                                yaris_row.style.animation = menu_row_fade_giris;
                                tablo.appendChild(yaris_row);
                            }, t);
                            t += 100
                        }
                    }
                    if(output_erisim != "YARI" && liste_turu != "yaris_baslat"){
                        setTimeout(() => {
                            const ekleme_row = document.createElement("tr");
                            for(i in tablo_basliklari){
                                const arti = document.createElement("td");
                                arti.textContent = "+";
                                ekleme_row.appendChild(arti);
                            }
                            polis_menu_menuler_buton_acilis.currentTime = 0;
                            polis_menu_menuler_buton_acilis.play();
                            ekleme_row.id = "ekleme_row";
                            tablo.appendChild(ekleme_row);
                            ekleme_row.onclick = () =>{
                                yaris_yonet("yaris_ekle", "Yarış Ekle", null);
                            }
                        }, t);
                        
                    }
                }
                menuler.appendChild(tablo);

                setTimeout(() => {
                    polis_menu_butonlar_acilis.currentTime = 0;
                    polis_menu_butonlar_acilis.play();
                    menu_2.appendChild(butonlar);

                    butonlar_btn1.onclick = () => {
                        menu_2_kapat();
                    }
                    const sirala_secim = (buton, tablo_hedef) => {
                        let index;
                        switch(buton.textContent){
                            case "Sırala":
                                sirala(0, false, "sayi", tablo_hedef);
                                buton.textContent = "ID [+]";
                                break;
                            case "ID [+]": 
                                sirala(0, true, "sayi", tablo_hedef);
                                buton.textContent = "ID [-]";
                                break;
                            case "ID [-]": 
                                if(liste_turu == "yaris_listesi"){
                                    buton.textContent = "Yarış Adı [+]"
                                    sirala(1, false, null, tablo_hedef);
                                }
                                else{
                                    buton.textContent = liste_turu == "araba_listesi" ? "Sahibi [+]" : "İsim [+]";
                                    sirala(1, false, null, tablo_hedef);
                                }
                                break;
                            case "İsim [+]": 
                                sirala(1, true, null, tablo_hedef);
                                buton.textContent = "İsim [-]";
                                break;
                            case "İsim [-]": 
                                sirala(2, false, null, tablo_hedef);
                                buton.textContent = "Araba [+]";
                                break;
                            case "Sahibi [+]": 
                                sirala(1, true, null, tablo_hedef);
                                buton.textContent = "Sahibi [-]";
                                break;
                            case "Sahibi [-]": 
                                sirala(2, false, null, tablo_hedef);
                                buton.textContent = "Marka [+]";
                                break;
                            case "Marka [+]": 
                                sirala(2, true, null, tablo_hedef);
                                buton.textContent = "Marka [-]";
                                break;
                            case "Marka [-]": 
                                sirala(3, false, null, tablo_hedef);
                                buton.textContent = "Model [+]";
                                break;
                            case "Model [+]": 
                                sirala(3, true, null, tablo_hedef);
                                buton.textContent = "Model [-]";
                                break;
                            case "Model [-]": 
                                sirala(4, false, null, tablo_hedef);
                                buton.textContent = "HP [+]";
                                break;
                            case "HP [+]": 
                                sirala(4, true, null, tablo_hedef);
                                buton.textContent = "HP [-]";
                                break;
                            case "HP [-]": 
                                sirala(5, false, null, tablo_hedef);
                                buton.textContent = "Plaka [+]";
                                break;
                            case "Araba [+]": 
                                sirala(2, true, null, tablo_hedef);
                                buton.textContent = "Araba [-]";
                                break;
                            case "Araba [-]": 
                                index = alt_menu_tur == "polis_menu" ? 3 : 3;
                                if(alt_menu_tur == "polis_menu"){
                                    sirala(index, false, null, tablo_hedef);
                                }
                                else{
                                    sirala(index, false, "sayi", tablo_hedef);
                                }
                                buton.textContent = alt_menu_tur == "polis_menu" ? "Plaka [+]" : "K.Y. [+]";
                                break;
                            case "Plaka [+]":
                                index = liste_turu == "araba_listesi" ? 5 : 3;
                                sirala(index, true, null, tablo_hedef);
                                buton.textContent = "Plaka [-]";
                                break;
                            case "Plaka [-]":
                                index = liste_turu == "araba_listesi" ? 0 : 4;
                                sirala(index, false, "sayi", tablo_hedef);
                                buton.textContent = liste_turu == "araba_listesi" ? "ID [+]" : "A.K. [+]";
                                break;
                            case "A.K. [+]": 
                                index = alt_menu_tur == "polis_menu" ? 4 : 4;
                                sirala(index, true, "sayi", tablo_hedef);
                                buton.textContent = "A.K. [-]";
                                break;
                            case "A.K. [-]": 
                                index = alt_menu_tur == "polis_menu" ? 5 : 5;
                                sirala(index, false, null, tablo_hedef);
                                buton.textContent = alt_menu_tur == "polis_menu" ? "Son G. [+]" : "Durum [+]";
                                break;
                            case "Son G. [+]": 
                                sirala(5, true, null, tablo_hedef);
                                buton.textContent = "Son G. [-]";
                                break;
                            case "Son G. [-]": 
                                index = alt_menu_tur == "polis_menu" ? 6 : 5;
                                sirala(index, false, null, tablo_hedef);
                                buton.textContent = "Durum [+]";
                                break;
                            case "Durum [+]":
                                index = alt_menu_tur == "polis_menu" ? 6 : 5;
                                sirala(index, true, null, tablo_hedef);
                                buton.textContent = "Durum [-]";
                                break;
                            case "Durum [-]":
                                index = alt_menu_tur == "polis_menu" ? 7 : 0;
                                if(alt_menu_tur == "polis_menu"){
                                    sirala(index, false, "para", tablo_hedef);
                                }
                                else{
                                    sirala(index, false, "sayi", tablo_hedef);
                                }
                                buton.textContent = alt_menu_tur == "polis_menu" ? "P.İ. [+]" : "ID [+]";
                                break;
                            case "P.İ. [+]":
                                sirala(7, true, "para", tablo_hedef);
                                buton.textContent = "P.İ. [-]";
                                break;
                            case "P.İ. [-]":
                                sirala(0, false, "sayi", tablo_hedef);
                                buton.textContent = "ID [+]";
                                break;
                            case "K.Y. [+]":
                                sirala(3, true, "sayi", tablo_hedef);
                                buton.textContent = "K.Y. [-]";
                                break;
                            case "K.Y. [-]":
                                sirala(4, false, "sayi", tablo_hedef);
                                buton.textContent = "A.K. [+]";
                                break;
                            case "Yarış Adı [+]": 
                                sirala(1, true, null, tablo_hedef);
                                buton.textContent = "Yarış Adı [-]";
                                break;
                            case "Yarış Adı [-]": 
                                sirala(2, false, null, tablo_hedef);
                                buton.textContent = "Bölge [+]";
                                break;
                            case "Bölge [+]": 
                                sirala(2, true, null, tablo_hedef);
                                buton.textContent = "Bölge [-]";
                                break;
                            case "Bölge [-]": 
                                sirala(3, false, "sayi", tablo_hedef);
                                buton.textContent = "Uzunluk [+]";
                                break;
                            case "Uzunluk [+]": 
                                sirala(3, true, "sayi", tablo_hedef);
                                buton.textContent = "Uzunluk [-]";
                                break;
                            case "Uzunluk [-]": 
                                sirala(4, false, null, tablo_hedef);
                                buton.textContent = "P.S. [+]";
                                break;
                            case "P.S. [+]": 
                                sirala(4, true, null, tablo_hedef);
                                buton.textContent = "P.S. [-]";
                                break;
                            case "P.S. [-]": 
                                sirala(5, false, null, tablo_hedef);
                                buton.textContent = "İnaktiflik [+]";
                                break;
                            case "İnaktiflik [+]": 
                                sirala(5, true, null, tablo_hedef);
                                buton.textContent = "İnaktiflik [-]";
                                break;
                            case "İnaktiflik [-]": 
                                sirala(0, false, "sayi", tablo_hedef);
                                buton.textContent = "ID [+]";
                                break;
                        }
                    }
                    const sirala = (index, ters, veri_tipi, tablo_hedef) => {
                        var rows = tablo_hedef.getElementsByTagName("tr");
                        var rowsArray = Array.from(rows);
                        const ekleme_row = rowsArray.find(rowsArray => rowsArray.id == "ekleme_row");
                        const rowsSearch = rowsArray.slice(1);
                        if(output_erisim == "TAM" && liste_turu != "araba_listesi"){
                            rowsSearch.splice(rowsSearch.indexOf(ekleme_row), 1);
                        }
                        var sortedRows = rowsSearch.sort(function(a, b) {
                            var A = a.getElementsByTagName("td")[index].textContent.toUpperCase();
                            var B = b.getElementsByTagName("td")[index].textContent.toUpperCase();

                            if (/[\u0080-\u024F]/.test(A) || /[\u0080-\u024F]/.test(B)) {
                                return A.localeCompare(B, 'tr');
                            }
                                
                            switch(true){
                                case (veri_tipi == "sayi"):
                                    A *= 1;
                                    B *= 1;
                                    break;
                                case veri_tipi == "para":
                                    A = A.replace("₺", "");
                                    B = B.replace("₺", "");
                                    A *= 1;
                                    B *= 1;
                                    break;
                                default:
                                    break;
                            }

                            if (A < B) {
                            return -1;
                            }
                            if (A > B) {
                            return 1;
                            }
                            return 0;
                        });
                        
                        if(ters){
                            sortedRows.reverse();
                        }

                        sortedRows.forEach((row) => {
                            tablo_hedef.appendChild(row);
                        });
                        if(output_erisim == "TAM" && liste_turu != "araba_listesi"){
                            tablo_hedef.appendChild(ekleme_row);
                        }
                    }
                    butonlar_btn2.onclick = () => {
                        butonlar_btn2.blur();
                        polis_menu_klavye.currentTime = 0;
                        polis_menu_klavye.play();
                        sirala_secim(B_btn2_span, tablo);
                        
                    }
                    butonlar_btn3.onclick = () => {
                        butonlar_btn3.blur();
                        bildirim_onay_red.currentTime = 0;
                        bildirim_onay_red.play()

                        if(menu_1_center.contains(document.getElementById("bildirim_paneli"))){
                            menu_1_center.querySelectorAll("#bildirim_paneli").forEach(i => {
                                menu_1_center.removeChild(i);
                            })
                        }
                        if(body.contains(document.getElementById("bildirim_paneli"))){
                            body.querySelectorAll("#bildirim_paneli").forEach(i => {
                                body.removeChild(i);
                            })
                        }

                        statik_vid.style.zIndex = "1";
                        menu_2.style.filter = "blur(3px)";
                        let mesaj = alt_menu_tur == "polis_menu" ? "Yazdırma işlemi için açılan tarayıcı penceresini kontrol edin." : "Kağıt israfı sağ tarafta ->";
                        const tamam_fonk = () => {
                            statik_vid.style.zIndex = "";
                            menu_2.style.filter = "blur(0px)";
                            [butonlar_btn3, butonlar_btn2, butonlar_btn1].forEach(i => {
                                i.onmouseover = () => {};
                            });
                        }
                        onay_bildirimi_olustur("Yazdır", mesaj, null, null, tamam_fonk, "tamam", "./galeri/favicon/yazici.png");

                        const yazdir_sayfa = window.open("./yazdir.html", "_blank");
                        
                        if(output_erisim == "TAM"){
                            let temp_tablo = tablo.cloneNode(true);
                            let temp_array = Array.from(temp_tablo.querySelectorAll("tr"));
                            let ekleme_row = temp_array.find(temp_array => temp_array.id == "ekleme_row");
                            if(ekleme_row){
                                temp_tablo.deleteRow(temp_array.indexOf(ekleme_row));
                            }

                            yazdir_sayfa.sessionStorage.setItem("tablo", temp_tablo.outerHTML);
                        }
                        else{
                            yazdir_sayfa.sessionStorage.setItem("tablo", tablo.outerHTML);
                        }

                        var baslik_yazi = alt_menu_tur == "polis_menu" ? "Rockport Polis Departmanı - " : "Fairhaven V1 - ";
                        if(liste_turu == "araba_listesi"){
                            baslik_yazi += "Kara Liste Arabaları";
                        }
                        else if(liste_turu == "yarisci_listesi"){
                            baslik_yazi += alt_menu_tur == "polis_menu" ? "Sokak Yarışçıları Listesi" : "Kara Liste";
                        }
                        else if(liste_turu == "yaris_listesi"){
                            baslik_yazi += "Yarışlar Listesi";
                        }
                        if(alt_menu_tur == "polis_menu"){
                            yazdir_sayfa.sessionStorage.setItem("logo", "./galeri/polis_menu/polis_login_logo.png");
                            yazdir_sayfa.sessionStorage.setItem("logo_boyut", "60%");
                            yazdir_sayfa.sessionStorage.setItem("baslik", baslik_yazi);
                            yazdir_sayfa.sessionStorage.setItem("scroll", "polis_scroll");
                        }
                        else{
                            yazdir_sayfa.sessionStorage.setItem("logo", "./galeri/yarisci_menu/yarisci_login_logo.png");
                            yazdir_sayfa.sessionStorage.setItem("logo_boyut", "90%");
                            yazdir_sayfa.sessionStorage.setItem("baslik", baslik_yazi);
                            yazdir_sayfa.sessionStorage.setItem("scroll", "yarisci_scroll");
                        }

                        yazdir_sayfa.sessionStorage.setItem("bilgi", menu_2.querySelector("#bilgi").querySelector("div").innerHTML);

                        yazdir_sayfa.addEventListener("DOMContentLoaded", () => {

                            if(alt_menu_tur == "yarisci_menu"){
                                yazdir_sayfa.document.getElementsByClassName("menu_butonlari")[0].classList.add("yarisci_menu_butonlari");
                            }
                            yazdir_sayfa.document.getElementsByClassName("menu_butonlari")[0].querySelectorAll("button").forEach(i => {
                                i.style.display = "inline-flex";
                            });

                            yazdir_sayfa.document.getElementById("btn_1").onclick = () => {
                                polis_menu_acilis.currentTime = 0;
                                polis_menu_acilis.play();
                                yazdir_sayfa.window.close();
                                let panel = document.getElementById("bildirim_paneli");
                                if(panel){
                                    panel.querySelector("#panel_cevap").querySelector("button").click();
                                }
                            }
                        });
                    }
                    butonlar_btn4.onclick = async() => {

                        menu_sekmesi = 0;
                        statik_vid.style.zIndex = "10";
                        clearTimeout(AFK_timer);
                        window.onmousemove = () => {};
                        window.onkeydown = () => {};
                        window.onclick = () => {};

                        let temp_interval;
                        temp_interval = setInterval(() => {
                            if(!(filter.frequency.value.toFixed(2) < 2000)){
                                filter.frequency.value -= 500; 
                            }
                            else{
                                filter.frequency.value = 1000;
                                clearInterval(temp_interval);
                            }
                        }, 10);

                        menu_1_center.style.opacity = "0";

                        const ileri_sar = document.createElement("div");
                            const ileri_sar_logo = document.createElement("img");
                            const ileri_sar_cizgi = document.createElement("div");
                            const ileri_sar_sure = document.createElement("p");
                        
                            [ileri_sar_logo, ileri_sar_cizgi, ileri_sar_sure].forEach(i => {
                                ileri_sar.appendChild(i);
                            });
                            body.appendChild(ileri_sar);

                        ileri_sar.id = "ileri_sar";
                        ileri_sar_cizgi.id = "ileri_sar_cizgi";
                        ileri_sar_logo.src = "./galeri/ileri_sar_logo.png";
                        ileri_sar.style.opacity = "1";
                        var gecen_sure = Math.round(Math.random()*30 + 15);
                        gecen_sure = gecen_sure < 1 ? 1 : gecen_sure;
                        ileri_sar_sure.textContent = `${gecen_sure} GÜN SONRA`;

                        const yakalandilar = yarisci.filter(yarisci => yarisci.durum == "Yakalandı");
                        for(i in yakalandilar){// Yakalananları şansa bağlı olarak serbest bırak
                            if(Math.random()*5 > 2.5){
                                await fetch("/yarisciGuncelle",{
                                    method: "POST",
                                    body: JSON.stringify({
                                        id: yakalandilar[i].id * 1,
                                        durum: "Aranıyor",
                                        kazanilan_yarislar: 0,
                                        aranma_katsayisi: 0,
                                        son_gorulme : "-",
                                        ileri_sar_check: true
                                    }, null, 4),
                                    headers: {"Content-type": "application/json; charset=UTF-8"}
                                });
                            }
                        }
                        yarisci = await yariscilari_getir();
                        const arananlar = yarisci.filter(yarisci => yarisci.durum == "Aranıyor");
                        for(i in arananlar){
                            let bu_yarisci_ky = arananlar[i].kazanilan_yarislar;
                            let bu_yarisci_ak = arananlar[i].aranma_katsayisi;

                            let rand = Math.round(Math.random()*20);
                            if(rand == 0){ // 0 gelirse yakalansın
                                await fetch("/yarisciGuncelle",{
                                    method: "POST",
                                    body: JSON.stringify({
                                        id: arananlar[i].id * 1,
                                        durum: "Yakalandı",
                                        kazanilan_yarislar: 0,
                                        aranma_katsayisi: 0,
                                        son_gorulme : "-",
                                        ileri_sar_check: true
                                    }, null, 4),
                                    headers: {"Content-type": "application/json; charset=UTF-8"}
                                });
                            }
                            else{ // 0 gelmezse yarışlara girsin
                                let pozitif_yaris = Math.round(Math.random()*gecen_sure); 

                                if(pozitif_yaris > gecen_sure / 2){
                                    if(pozitif_yaris > (gecen_sure * 3) / 4){
                                        bu_yarisci_ak = bu_yarisci_ak + 2 > 5 ? 5 : bu_yarisci_ak + 2;
                                    }
                                    else{
                                        bu_yarisci_ak = bu_yarisci_ak + 1 > 5 ? 5 : bu_yarisci_ak + 1;
                                    }
                                }
                                else if(pozitif_yaris < gecen_sure / 6){
                                    bu_yarisci_ak = bu_yarisci_ak - 1 < 0 ? 0 : bu_yarisci_ak - 1;
                                }

                                bu_yarisci_ky += pozitif_yaris;

                                await fetch("/yarisciGuncelle",{
                                    method: "POST",
                                    body: JSON.stringify({
                                        id: arananlar[i].id * 1,
                                        durum: arananlar[i].durum,
                                        kazanilan_yarislar: bu_yarisci_ky * 1,
                                        aranma_katsayisi: bu_yarisci_ak * 1,
                                        son_gorulme: arananlar[i].son_gorulme,
                                        ileri_sar_check: true
                                    }, null, 4),
                                    headers: {"Content-type": "application/json; charset=UTF-8"}
                                });
                            }
                        }
                        
                        for(i in yarislar){
                            await fetch("/yarisGuncelle",{
                                method: "POST",
                                body: JSON.stringify({
                                    id: yarislar[i].id * 1,
                                    polis_sikligi: Math.round(Math.random()*5),
                                    ileri_sar_check: true
                                }),
                                headers: {
                                    "Content-type": "application/json; charset=UTF-8"
                                }
                            });
                        }

                        setTimeout(() => {
                            menu_1_center.removeChild(menu_2);
                            ileri_sar_logo.style.opacity = "0";
                            ileri_sar_sure.style.opacity = "1";
                            setTimeout(() => {
                                ileri_sar.style.opacity = "0";
                                menu_1_center.style.opacity = "1";
                                setTimeout(() => {
                                    menu_2_olustur(alt_menu_tur,liste_turu);
                                    body.removeChild(ileri_sar);
                                    AFK_event();
                                    window.onmousemove = () => {AFK_event()};
                                    window.onkeydown = () => {AFK_event()};
                                    window.onclick = () => {AFK_event()};
                                    temp_interval = setInterval(() => {
                                        if(!(filter.frequency.value.toFixed(2) > 20000)){
                                            filter.frequency.value += 500; 
                                        }
                                        else{
                                            filter.frequency.value = 22050;
                                            clearInterval(temp_interval);
                                        }
                                    }, 10);
                                }, 500);
                            }, 2000);
                        }, 2500);
                    }
                
                    //Ekleme tamamlandıktan sonra stilleri resetler
                    statik_vid.style.zIndex = "";
                    menuler.querySelectorAll("tr").forEach(i => {
                        if((liste_turu == "araba_listesi" || output_erisim != "TAM") && (liste_turu != "yaris_baslat" && liste_turu != "takip_baslat")){
                            i.style.animation = "none";
                            i.style.pointerEvents = "none";
                        }
                        else{
                            i.style.animation = "";
                        }
                    })
                }, t);
        }, 500);

    menu_1_center.appendChild(menu_2);
    body.appendChild(menu_1_center);

    const menu_2_kapat = () =>{
        if(body.contains(menu_2) && body.contains(butonlar) && !body.contains(document.getElementById("bildirim_paneli"))){
            menu_1_center.removeChild(menu_2);
            menu_1_olustur(output_id, input_ad, output_sube, output_rutbe, alt_menu_tur);
        }
    }

    const zaman_fark = (tarih1ISO, tarih2ISO) => {
        var tarih1 = new Date(tarih1ISO);
        var tarih2 = new Date(tarih2ISO);
    
        var farkMilisaniye = Math.abs(tarih1 - tarih2);
    
        var farkSaat = Math.floor(farkMilisaniye / (1000 * 60 * 60));
        var farkDakika = Math.floor((farkMilisaniye % (1000 * 60 * 60)) / (1000 * 60));
        var farkSaniye = Math.floor((farkMilisaniye % (1000 * 60)) / 1000);

        farkSaat = farkSaat < 10 ? "0" + farkSaat : farkSaat;
        farkDakika = farkDakika < 10 ? "0" + farkDakika : farkDakika;
        farkSaniye = farkSaniye < 10 ? "0" + farkSaniye : farkSaniye;

        return {
            saat: farkSaat,
            dakika: farkDakika,
            saniye: farkSaniye
        };
    }
}

var menu_3;
async function menu_3_olustur(){

    favicon.href = "./galeri/favicon/civi_seridi_logo.png";
    document.title = "Ekipmanı Marketi";

    statik_vid.style.zIndex = "99";
    menu_sekmesi = 2

    if(!body.contains(menu_1_center)){
        menu_1_center = document.createElement("div");
        menu_1_center.className = "menu_1_center";
        body.appendChild(menu_1_center);
    }

    menu_3 = document.createElement("div");
        const baslik = document.createElement("div");
            const baslik_img = document.createElement("img");
            const baslik_span = document.createElement("span");

        const bilgi = document.createElement("div");
            const bilgi_div = document.createElement("div");
                
        const menuler = document.createElement("div");
            const menuler_span = document.createElement("span");
                const menuler_btn1 = document.createElement("button");
                    const btn1_div = document.createElement("div");
                    const btn1_span = document.createElement("span");
                const menuler_btn2 = document.createElement("button");
                    const btn2_div = document.createElement("div");
                    const btn2_span = document.createElement("span");
                const menuler_btn3 = document.createElement("button");
                    const btn3_div = document.createElement("div");
                    const btn3_span = document.createElement("span");
                const menuler_btn4 = document.createElement("button");
                    const btn4_div = document.createElement("div");
                    const btn4_span = document.createElement("span");

        const butonlar = document.createElement("div");
            const butonlar_btn1 = document.createElement("button");
                const btn1_img = document.createElement("img");
                const B_btn1_span = document.createElement("span");


    menu_3.className = "menu_1"; // her zaman eklenecek

        baslik.id = "baslik";
        baslik_img.src = "./galeri/polis_menu/civi_seridi.png";
        baslik_span.textContent = "Ekipman Marketi";

        
        const polis_profiller = await profilleri_getir("polis");
        const bu_polis = polis_profiller.find(polis_profiller => polis_profiller.id == output_id);
        bilgi.id = "bilgi";
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let p4 = document.createElement("p");
        let p5 = document.createElement("p");
                    
        p1.id = "ikramiye";
        p2.id = "EMP";
        p3.id = "civi_seridi";
        p4.id = "helikopter";
        p5.id = "barikat";
        p1.textContent = `İkramiye: ₺${para_noktala(bu_polis)}`;
        p2.textContent = `EMP: ${bu_polis.EMP}`;
        p3.textContent = `Çivi Şeridi: ${bu_polis.civi_seridi}`;
        p4.textContent = `Helikopter: ${bu_polis.helikopter}`;
        p5.textContent = `Barikat: ${bu_polis.barikat}`;
        bilgi_div.appendChild(p1);
        bilgi_div.appendChild(p2);
        bilgi_div.appendChild(p3);
        bilgi_div.appendChild(p4);
        bilgi_div.appendChild(p5);
        bilgi.appendChild(bilgi_div);
            
        menuler.id = "menuler";
        menuler_span.textContent = "Ekipmanlar:";
            btn1_span.textContent = "EMP: ₺60.000";
            btn2_span.textContent = "Çivi Şeridi: ₺40.000";
            btn3_span.textContent = "Helikopter: ₺100.000";
            btn4_span.textContent = "Barikat: ₺30.000";
            
            menuler_btn1.appendChild(btn1_div);
            menuler_btn2.appendChild(btn2_div);
            menuler_btn3.appendChild(btn3_div);
            menuler_btn4.appendChild(btn4_div);
            menuler_btn1.appendChild(btn1_span);
            menuler_btn2.appendChild(btn2_span);
            menuler_btn3.appendChild(btn3_span);
            menuler_btn4.appendChild(btn4_span);

        butonlar.classList.add("menu_butonlari");
                butonlar_btn1.tabIndex = "5"
                btn1_img.src = "./galeri/esc.png";
                B_btn1_span.textContent = "Geri";

        butonlar_btn1.appendChild(btn1_img);
        butonlar_btn1.appendChild(B_btn1_span);
        butonlar.appendChild(butonlar_btn1);

    baslik.appendChild(baslik_img);
    baslik.appendChild(baslik_span);

    menu_3.appendChild(baslik);
    menu_3.appendChild(bilgi);
    
    setTimeout(() => {
        menu_3.appendChild(menuler);
        polis_menu_menuler_acilis.play();
        let a = [menuler_span, menuler_btn1, menuler_btn2, menuler_btn3, menuler_btn4, "son"];
        var t = 0;
        setTimeout(() => {
            a.forEach(i =>{
                setTimeout(() => {
                    if(i != "son"){
                        menuler.appendChild(i);
                        polis_menu_menuler_buton_acilis.currentTime = 0;
                        polis_menu_menuler_buton_acilis.play();
                        if(i == menuler_span){
                            i.style.animation = "menu1_fade_giris 0.1s forwards";
                        }
                        else{
                            i.style.animation = "menu1_menuler_buton_fade_giris 0.15s forwards";
                        }
    
                        if(i != menuler_span){
                            setTimeout(() => {
                                    i.onmouseenter = () =>{
                                    polis_menu_buton_hover.currentTime = 0;
                                    polis_menu_buton_hover.play();
                                    i.style.animation = "";
                                }
                            }, (a.length -1 ) * 100);
                        }
                    }
                    else{
                        menu_3.appendChild(butonlar);
                        polis_menu_butonlar_acilis.play();
                        statik_vid.style.zIndex = "";
    
                        butonlar_btn1.onclick = () => {
                            menu_1_center.removeChild(menu_3);
                            menu_1_olustur(output_id, input_ad, output_sube, output_rutbe, "polis_menu");
                        }
                        menuler.querySelectorAll("button").forEach(i => {
                            i.style.animation = "";
                        });
                    }
                }, t);
                t += 100;
            });
        }, 300);
    }, 500);

    menu_1_center.appendChild(menu_3);

    let satin_al_ses = () =>{
        polis_menu_klavye.currentTime = 0;
        polis_menu_klavye.play();
    }
    menuler_btn1.onclick = () =>{
        satin_al_ses();
        ekipman_al("EMP", 60000);
    }
    menuler_btn2.onclick = () =>{
        satin_al_ses();
        ekipman_al("civi_seridi", 40000);
    }
    menuler_btn3.onclick = () =>{
        satin_al_ses();
        ekipman_al("helikopter", 100000);
    }
    menuler_btn4.onclick = () =>{
        satin_al_ses();
        ekipman_al("barikat", 30000);
    }

    menuler_btn1.oncontextmenu = () =>{
        satin_al_ses();
        ekipman_sat("EMP", 60000);
    }
    menuler_btn2.oncontextmenu = () =>{
        satin_al_ses();
        ekipman_sat("civi_seridi", 40000);
    }
    menuler_btn3.oncontextmenu = () =>{
        satin_al_ses();
        ekipman_sat("helikopter", 100000);
    }
    menuler_btn4.oncontextmenu = () =>{
        satin_al_ses();
        ekipman_sat("barikat", 30000);
    }

    let ekipman_al = async(al_ekipman, ekipman_fiyat) => {
        
        if(!(bu_polis.ikramiye < ekipman_fiyat)){ 
            switch(al_ekipman){
                case "EMP":
                    bu_polis.ikramiye -= ekipman_fiyat;
                    bu_polis.EMP += 1;
                    p1.textContent = `İkramiye: ₺${para_noktala(bu_polis)}`;
                    p2.textContent = `EMP: ${bu_polis.EMP}`;
                    renk_parlat(p2, "#97ff00");
                    break;
                case "civi_seridi":
                    bu_polis.ikramiye -= ekipman_fiyat;
                    bu_polis.civi_seridi += 1;
                    p1.textContent = `İkramiye: ₺${para_noktala(bu_polis)}`;
                    p3.textContent = `Çivi Şeridi: ${bu_polis.civi_seridi}`;
                    renk_parlat(p3, "#97ff00");
                    break;
                case "helikopter":
                    bu_polis.ikramiye -= ekipman_fiyat;
                    bu_polis.helikopter += 1;
                    p1.textContent = `İkramiye: ₺${para_noktala(bu_polis)}`;
                    p4.textContent = `Helikopter: ${bu_polis.helikopter}`;
                    renk_parlat(p4, "#97ff00");
                    break;
                case "barikat":
                    bu_polis.ikramiye -= ekipman_fiyat;
                    bu_polis.barikat += 1;
                    p1.textContent = `İkramiye: ₺${para_noktala(bu_polis)}`;
                    p5.textContent = `Barikat: ${bu_polis.barikat}`;
                    renk_parlat(p5, "#a0f81b");
                    break;
                default:
                    console.log("Ekipman türü geçersiz.");
                    break; 
            }
    
            await fetch("/ekipmanAl",{
                method: "POST",
                body: JSON.stringify({
                    id: output_id,
                    ekipman: al_ekipman,
                    fiyat: ekipman_fiyat
                }, null, 4),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            });
        }
        else{
            polis_menu_satin_al_basarisiz.currentTime = 0;
            polis_menu_satin_al_basarisiz.play();
            renk_parlat(p1, "red");
        }   
    }
    let ekipman_sat = async(sat_ekipman, ekipman_fiyat) => {
        
        if(!(bu_polis[sat_ekipman] < 1)){ 
            switch(sat_ekipman){
                case "EMP":
                    bu_polis.ikramiye += ekipman_fiyat;
                    bu_polis.EMP -= 1;
                    p1.textContent = `İkramiye: ₺${para_noktala(bu_polis)}`;
                    p2.textContent = `EMP: ${bu_polis.EMP}`;
                    renk_parlat(p2, "#97ff00");
                    break;
                case "civi_seridi":
                    bu_polis.ikramiye += ekipman_fiyat;
                    bu_polis.civi_seridi -= 1;
                    p1.textContent = `İkramiye: ₺${para_noktala(bu_polis)}`;
                    p3.textContent = `Çivi Şeridi: ${bu_polis.civi_seridi}`;
                    renk_parlat(p3, "#97ff00");
                    break;
                case "helikopter":
                    bu_polis.ikramiye += ekipman_fiyat;
                    bu_polis.helikopter -= 1;
                    p1.textContent = `İkramiye: ₺${para_noktala(bu_polis)}`;
                    p4.textContent = `Helikopter: ${bu_polis.helikopter}`;
                    renk_parlat(p4, "#97ff00");
                    break;
                case "barikat":
                    bu_polis.ikramiye += ekipman_fiyat;
                    bu_polis.barikat -= 1;
                    p1.textContent = `İkramiye: ₺${para_noktala(bu_polis)}`;
                    p5.textContent = `Barikat: ${bu_polis.barikat}`;
                    renk_parlat(p5, "#a0f81b");
                    break;
                default:
                    console.log("Ekipman türü geçersiz.");
                    break; 
            }
    
            await fetch("/ekipmanSat",{
                method: "POST",
                body: JSON.stringify({
                    id: output_id,
                    ekipman: sat_ekipman,
                    fiyat: ekipman_fiyat
                }, null, 4),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            });
        }
        else{
            polis_menu_satin_al_basarisiz.currentTime = 0;
            polis_menu_satin_al_basarisiz.play();
            renk_parlat(document.getElementById(sat_ekipman), "red");
        }   
    }
    let renk_parlat = (eleman, renk) =>{
        eleman.style.transition = "none";
        eleman.style.color = renk;
        setTimeout(() => {
            eleman.style.transition = "";
            eleman.style.color = "";
        }, 500);
    }
}