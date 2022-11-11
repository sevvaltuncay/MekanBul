"use strict";

var anasayfa = function anasayfa(req, res) {
  res.render('anasayfa', {
    "baslik": "Anasayfa",
    "sayfaBaslik": {
      "siteAd": "MekanBul",
      "slogan": "Civardaki Mekanları Keşfet!"
    },
    "mekanlar": [{
      "ad": "Starbucks",
      "puan": "3",
      "adres": "Iyaspark AVM",
      "imkanlar": ["Kahveler", "Tatlılar", "Dünya Kahveleri"],
      "mesafe": "3km"
    }, {
      "ad": "Gloria Jeans Coffee",
      "puan": "2",
      "adres": "SDU Dogu Yerleskesi",
      "imkanlar": ["Kahveler", "İçecekler"],
      "mesafe": "5km"
    }, {
      "ad": "Cam Kafe",
      "puan": "4",
      "adres": "Sdu Batı yerleskesi",
      "imkanlar": ["Tost", "Çay"],
      "mesafe": "10km"
    }]
  });
};

var mekanbilgisi = function mekanbilgisi(req, res) {
  res.render('mekanbilgisi', {
    "baslik": "Mekan Bilgisi",
    "mekanBaslik": "Starbucks",
    "mekanDetay": {
      "ad": "Starbucks",
      "puan": "4",
      "adres": "Iyaspark AVM",
      "imkanlar": ["Dünya Kahveleri", "Kekler", "Pastalar"],
      "saatler": [{
        "gunler": "Pazartesi-Cuma ",
        "acilis": "9:00",
        "kapanis": "23:00",
        "kapali": false
      }, {
        "gunler": "Cumartesi-Pazar",
        "acilis": "10:00",
        "kapanis": "22:00",
        "kapali": false
      }],
      "koordinatlar": {
        "enlem": "37.7",
        "boylam": "30.5"
      },
      "yorumlar": [{
        "yorumYapan": "Şevval Tuncay",
        "puan": "3",
        "tarih": "20 Ekim 2022",
        "yorumMetni": "Kahveleri ve pastaları güzel"
      }]
    }
  });
};

var yorumekle = function yorumekle(req, res) {
  res.render('yorumekle', {
    "title": "Yorum Sayfasi"
  });
};

module.exports = {
  anasayfa: anasayfa,
  mekanbilgisi: mekanbilgisi,
  yorumekle: yorumekle
};
//# sourceMappingURL=mekanlar.dev.js.map
