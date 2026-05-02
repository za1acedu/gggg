// =====================================================
//  IMPOSTOR — baza haseł z podpowiedziami
//  Podpowiedź: luźne skojarzenie, NIE synonim/tłumaczenie
// =====================================================
const CATEGORIES = {
  "Zwierzęta": {
    icon: "🐾",
    words: [
      { w: "Słoń", h: "pamięć" }, { w: "Pingwin", h: "smoking" }, { w: "Krokodyl", h: "łezka" },
      { w: "Żyrafa", h: "akacja" }, { w: "Hipopotam", h: "rzeczny" }, { w: "Jeż", h: "jabłko" },
      { w: "Sowa", h: "Hogwart" }, { w: "Kameleon", h: "tło" }, { w: "Delfin", h: "show" },
      { w: "Wilk", h: "bajka" }, { w: "Pszczoła", h: "taniec" }, { w: "Mrówka", h: "piknik" },
      { w: "Lew", h: "Narnia" }, { w: "Tygrys", h: "bengal" }, { w: "Kangur", h: "boks" },
      { w: "Wieloryb", h: "Jonasz" }, { w: "Nietoperz", h: "strych" }, { w: "Pająk", h: "kąt" },
      { w: "Goryl", h: "banan" }, { w: "Foka", h: "klaśnięcie" }, { w: "Borsuk", h: "nornik" },
      { w: "Lis", h: "Mały Książę" }, { w: "Wąż", h: "Eden" }, { w: "Sokół", h: "pikowanie" },
      { w: "Pantera", h: "Wakanda" }, { w: "Niedźwiedź", h: "Wojtek" }
    ]
  },

  "Jedzenie": {
    icon: "🍕",
    words: [
      { w: "Pizza", h: "trójkąt" }, { w: "Pierogi", h: "wigilia" }, { w: "Sushi", h: "taśma" },
      { w: "Hamburger", h: "drive-thru" }, { w: "Kebab", h: "nocny" }, { w: "Ramen", h: "anime" },
      { w: "Spaghetti", h: "western" }, { w: "Schabowy", h: "tłuczek" }, { w: "Bigos", h: "myśliwski" },
      { w: "Naleśniki", h: "nadzienie" }, { w: "Lody", h: "kulka" }, { w: "Sernik", h: "Wiedeń" },
      { w: "Czekolada", h: "grzech" }, { w: "Tiramisu", h: "warstwa" }, { w: "Frytki", h: "Belgia" },
      { w: "Taco", h: "wtorek" }, { w: "Croissant", h: "poranek" }, { w: "Gołąbki", h: "kapuściane" },
      { w: "Pączek", h: "czwartek" }, { w: "Zapiekanka", h: "Kazimierz" }, { w: "Burrito", h: "zawinięty" },
      { w: "Pulpety", h: "Szwecja" }, { w: "Żurek", h: "Wielkanoc" }, { w: "Rosół", h: "niedziela" },
      { w: "Sałatka", h: "miska" }, { w: "Kanapka", h: "przerwa" }
    ]
  },

  "Sport": {
    icon: "⚽",
    words: [
      { w: "Tenis", h: "zero" }, { w: "Siatkówka", h: "plażowa" }, { w: "Pływanie", h: "czepek" },
      { w: "Boks", h: "rękawica" }, { w: "Szachy", h: "wieża" }, { w: "Curling", h: "lód" },
      { w: "Łyżwiarstwo", h: "pirouette" }, { w: "Narciarstwo", h: "alpejskie" }, { w: "Hokej", h: "Kanada" },
      { w: "Golf", h: "osiemnastka" }, { w: "Maraton", h: "Ateny" }, { w: "Snowboard", h: "halfpipe" },
      { w: "Surfing", h: "Hawaje" }, { w: "Łucznictwo", h: "Robin" }, { w: "Judo", h: "Japonia" },
      { w: "Karate", h: "cegła" }, { w: "Koszykówka", h: "Jordan" }, { w: "Futbol", h: "przyłbica" },
      { w: "Bilard", h: "trójkąt" }, { w: "Rugby", h: "jajko" }, { w: "Krykiet", h: "herbata" },
      { w: "Wioślarstwo", h: "regaty" }, { w: "Lekkoatletyka", h: "Olimpiada" },
      { w: "Kolarstwo", h: "Francja" }, { w: "Zapasy", h: "Turcja" }, { w: "Szermierka", h: "muszka" }
    ]
  },

  "Kraje": {
    icon: "🌍",
    words: [
      { w: "Polska", h: "barszcz" }, { w: "Japonia", h: "czerń" }, { w: "Brazylia", h: "piątka" },
      { w: "Egipt", h: "sfinks" }, { w: "Włochy", h: "Vespa" }, { w: "Francja", h: "rewolucja" },
      { w: "Hiszpania", h: "siesta" }, { w: "Grecja", h: "toga" }, { w: "Niemcy", h: "autostrada" },
      { w: "Australia", h: "bumerang" }, { w: "Indie", h: "przyprawy" }, { w: "Meksyk", h: "kaktus" },
      { w: "Norwegia", h: "ropa" }, { w: "Kanada", h: "łoś" }, { w: "Chiny", h: "jedwab" },
      { w: "Islandia", h: "gejzer" }, { w: "Tajlandia", h: "uśmiech" }, { w: "Maroko", h: "mięta" },
      { w: "Portugalia", h: "bacalhau" }, { w: "Turcja", h: "hamam" }, { w: "Szwecja", h: "meble" },
      { w: "Holandia", h: "rower" }, { w: "Argentyna", h: "Messi" }, { w: "Wietnam", h: "motor" },
      { w: "Kuba", h: "oldtimer" }, { w: "Kenia", h: "maraton" }
    ]
  },

  "Zawody": {
    icon: "👷",
    words: [
      { w: "Lekarz", h: "biały" }, { w: "Strażak", h: "drabina" }, { w: "Policjant", h: "patrol" },
      { w: "Nauczyciel", h: "wrzesień" }, { w: "Piekarz", h: "świt" }, { w: "Pilot", h: "turbulencja" },
      { w: "Kucharz", h: "czapka" }, { w: "Architekt", h: "makieta" }, { w: "Programista", h: "kawa" },
      { w: "Fryzjer", h: "fotel" }, { w: "Mechanik", h: "smar" }, { w: "Ogrodnik", h: "konewka" },
      { w: "Listonosz", h: "rower" }, { w: "Aktor", h: "Oscar" }, { w: "Dentysta", h: "fotel" },
      { w: "Adwokat", h: "toga" }, { w: "Weterynarz", h: "kociak" }, { w: "Astronauta", h: "cisza" },
      { w: "Murarz", h: "kielnia" }, { w: "Stolarz", h: "trociny" }, { w: "Hydraulik", h: "Mario" },
      { w: "Elektryk", h: "bezpiecznik" }, { w: "Sędzia", h: "gwizdek" }, { w: "Polityk", h: "krawat" },
      { w: "Dziennikarz", h: "deadline" }, { w: "Krawiec", h: "miarka" }
    ]
  },

  "Owoce i warzywa": {
    icon: "🍎",
    words: [
      { w: "Banan", h: "minion" }, { w: "Jabłko", h: "Newton" }, { w: "Truskawka", h: "polana" },
      { w: "Arbuz", h: "plaża" }, { w: "Ananas", h: "hawajska" }, { w: "Awokado", h: "millennial" },
      { w: "Marchewka", h: "wzrok" }, { w: "Ziemniak", h: "Irlandia" }, { w: "Pomidor", h: "czerwień" },
      { w: "Ogórek", h: "maseczka" }, { w: "Brokuł", h: "drzewko" }, { w: "Kiwi", h: "Nowa Zelandia" },
      { w: "Mango", h: "Bollywood" }, { w: "Papryka", h: "strąk" }, { w: "Granat", h: "rubinowy" },
      { w: "Cytryna", h: "herbata" }, { w: "Bakłażan", h: "emoji" }, { w: "Czosnek", h: "Dracula" },
      { w: "Cebula", h: "Shrek" }, { w: "Kalafior", h: "mózg" }, { w: "Sałata", h: "Caesar" },
      { w: "Rzodkiewka", h: "wiosna" }, { w: "Brzoskwinia", h: "aksamit" }, { w: "Wiśnia", h: "likier" },
      { w: "Śliwka", h: "węgierka" }, { w: "Gruszka", h: "Villiams" }
    ]
  },

  "Pojazdy": {
    icon: "🚗",
    words: [
      { w: "Samolot", h: "turbulencja" }, { w: "Pociąg", h: "peron" }, { w: "Helikopter", h: "ratunkowy" },
      { w: "Statek", h: "horyzont" }, { w: "Motocykl", h: "wolność" }, { w: "Rower", h: "Amsterdam" },
      { w: "Hulajnoga", h: "aplikacja" }, { w: "Czołg", h: "gąsienica" }, { w: "Tramwaj", h: "bilet" },
      { w: "Autobus", h: "szkolny" }, { w: "Taksówka", h: "żółta" }, { w: "Ciężarówka", h: "autostrada" },
      { w: "Rakieta", h: "odliczanie" }, { w: "Karetka", h: "syrena" }, { w: "Quad", h: "piasek" },
      { w: "Balon", h: "Kappadocja" }, { w: "Kajak", h: "spływ" }, { w: "Skuter", h: "Rzym" },
      { w: "Limuzyna", h: "bal" }, { w: "Furgonetka", h: "hippie" }, { w: "Bryczka", h: "Zakopane" },
      { w: "Sanie", h: "grudzień" }, { w: "Łódź", h: "wędkowanie" }, { w: "Okręt", h: "flaga" },
      { w: "Trolejbus", h: "pantograf" }, { w: "Wózek", h: "Biedronka" }
    ]
  },

  "Muzyka": {
    icon: "🎵",
    words: [
      { w: "Gitara", h: "ognisko" }, { w: "Pianino", h: "salon" }, { w: "Skrzypce", h: "Titanic" },
      { w: "Perkusja", h: "garaż" }, { w: "Saksofon", h: "dym" }, { w: "Trąbka", h: "Louis" },
      { w: "Flet", h: "czarodziejski" }, { w: "Akordeon", h: "Paryż" }, { w: "Harfa", h: "chmura" },
      { w: "Ukulele", h: "plaża" }, { w: "Opera", h: "Phantom" }, { w: "Rap", h: "ulica" },
      { w: "Karaoke", h: "Japonia" }, { w: "Chór", h: "kościół" }, { w: "Festiwal", h: "Woodstock" },
      { w: "Orkiestra", h: "filharmonia" }, { w: "Klarnet", h: "Mozart" }, { w: "Mandolina", h: "Neapol" },
      { w: "Banjo", h: "Appalachy" }, { w: "Kontrabas", h: "pizzicato" }, { w: "Wiolonczela", h: "Bach" },
      { w: "Bęben", h: "plemienny" }, { w: "Cymbały", h: "talerz" }, { w: "Reggae", h: "relaks" },
      { w: "Rock", h: "garaż" }, { w: "Disco", h: "Saturday" }
    ]
  },

  "Technologia": {
    icon: "💻",
    words: [
      { w: "Smartfon", h: "kieszeń" }, { w: "Laptop", h: "kawiarnia" }, { w: "Drukarka", h: "papier" },
      { w: "Robot", h: "fabryka" }, { w: "Dron", h: "paczka" }, { w: "Internet", h: "kawiarnia" },
      { w: "Bluetooth", h: "wiking" }, { w: "USB", h: "zawsze odwrotnie" }, { w: "Klawiatura", h: "QWERTY" },
      { w: "Słuchawki", h: "metro" }, { w: "Mikrofon", h: "scena" }, { w: "GPS", h: "satelita" },
      { w: "Smartwatch", h: "kroki" }, { w: "Tablet", h: "dziecko" }, { w: "Pendrive", h: "zgubiony" },
      { w: "Router", h: "miganie" }, { w: "Modem", h: "pisk" }, { w: "Procesor", h: "gorący" },
      { w: "Monitor", h: "biurko" }, { w: "Aparat", h: "wakacje" }, { w: "Skaner", h: "biuro" },
      { w: "Konsola", h: "kanapa" }, { w: "Mysz", h: "podkładka" }, { w: "Kamera", h: "YouTube" },
      { w: "Hologram", h: "koncert" }, { w: "Powerbank", h: "lotnisko" }
    ]
  },

  "Bajki Disneya": {
    icon: "🏰",
    words: [
      { w: "Frozen", h: "siostra" }, { w: "Aladyn", h: "życzenie" }, { w: "Vaiana", h: "ocean" },
      { w: "Zwierzogród", h: "marchewka" }, { w: "Coco", h: "marigold" }, { w: "Roszpunka", h: "wieża" },
      { w: "Mulan", h: "honor" }, { w: "Pocahontas", h: "wiatr" }, { w: "Kopciuszek", h: "dynia" },
      { w: "Encanto", h: "kolumbia" }, { w: "Iniemamocni", h: "kostium" }, { w: "Bambi", h: "łąka" },
      { w: "Dumbo", h: "cyrk" }, { w: "Pinokio", h: "świerszcz" }, { w: "Tarzan", h: "dżungla" },
      { w: "Herkules", h: "megara" }, { w: "Stitch", h: "Hawaje" }, { w: "Simba", h: "król" },
      { w: "Ariel", h: "głos" }, { w: "Buzz", h: "ranger" }, { w: "Bella", h: "biblioteka" },
      { w: "Aurora", h: "wrzeciono" }, { w: "Auta", h: "Zygzak" }, { w: "Shrek", h: "cebula" },
      { w: "Nemo", h: "szukanie" }
    ]
  },

  "Polskie miasta": {
    icon: "🏙️",
    words: [
      { w: "Warszawa", h: "syrenka" }, { w: "Kraków", h: "hejnał" }, { w: "Gdańsk", h: "żuraw" },
      { w: "Wrocław", h: "mosty" }, { w: "Poznań", h: "koziołki" }, { w: "Łódź", h: "Piotrkowska" },
      { w: "Zakopane", h: "oscypek" }, { w: "Sopot", h: "festiwal" }, { w: "Toruń", h: "Kopernik" },
      { w: "Częstochowa", h: "pielgrzymka" }, { w: "Lublin", h: "brama" }, { w: "Katowice", h: "węgiel" },
      { w: "Białystok", h: "żubr" }, { w: "Szczecin", h: "Odra" }, { w: "Olsztyn", h: "Mazury" },
      { w: "Bydgoszcz", h: "opera" }, { w: "Rzeszów", h: "podkarpackie" }, { w: "Malbork", h: "krzyżacy" },
      { w: "Gdynia", h: "modernizm" }, { w: "Opole", h: "amfiteatr" }, { w: "Kielce", h: "targi" },
      { w: "Radom", h: "radar" }, { w: "Gniezno", h: "Mieszko" }, { w: "Płock", h: "Wisła" },
      { w: "Tarnów", h: "renesans" }, { w: "Świnoujście", h: "tunel" }
    ]
  },

  "Sławni Polacy": {
    icon: "🇵🇱",
    words: [
      { w: "Lewandowski", h: "Barcelona" }, { w: "Skłodowska", h: "Paryż" }, { w: "Chopin", h: "Żelazowa" },
      { w: "Kopernik", h: "Toruń" }, { w: "Wałęsa", h: "mur" }, { w: "Małysz", h: "Wisła" },
      { w: "Szymborska", h: "kotka" }, { w: "Sienkiewicz", h: "pustynia" }, { w: "Wajda", h: "popiół" },
      { w: "Stoch", h: "orzeł" }, { w: "Świątek", h: "Paryż" }, { w: "Doda", h: "rydwan" },
      { w: "Kościuszko", h: "Racławice" }, { w: "Piłsudski", h: "Belweder" }, { w: "Polański", h: "Chinatown" },
      { w: "Miłosz", h: "Wilno" }, { w: "Pilecki", h: "ochotnik" }, { w: "Wojtyła", h: "Wadowice" },
      { w: "Mickiewicz", h: "Litwa" }, { w: "Słowacki", h: "Balladyna" }, { w: "Tusk", h: "platforma" },
      { w: "Reksio", h: "buda" }, { w: "Boniek", h: "Juventus" }, { w: "Kubica", h: "Montreal" },
      { w: "Penderecki", h: "Lśnienie" }, { w: "Reymont", h: "łódzkie" }
    ]
  },

  "Mitologia": {
    icon: "⚡",
    words: [
      { w: "Zeus", h: "chmura" }, { w: "Posejdon", h: "koń" }, { w: "Hades", h: "trzyłeb" },
      { w: "Atena", h: "oliwka" }, { w: "Afrodyta", h: "muszla" }, { w: "Apollo", h: "wawrzyn" },
      { w: "Ares", h: "krew" }, { w: "Hermes", h: "sandały" }, { w: "Herakles", h: "dwanaście" },
      { w: "Pegaz", h: "źródło" }, { w: "Centaur", h: "mędrzec" }, { w: "Minotaur", h: "Kreta" },
      { w: "Meduza", h: "lustro" }, { w: "Cyklop", h: "kowal" }, { w: "Odyseusz", h: "nikt" },
      { w: "Achilles", h: "Troja" }, { w: "Thor", h: "czwartek" }, { w: "Loki", h: "kłamca" },
      { w: "Hera", h: "pawie" }, { w: "Artemida", h: "jeleń" }, { w: "Persefona", h: "granat" },
      { w: "Dionizos", h: "maska" }, { w: "Odyn", h: "runy" }, { w: "Walkiria", h: "Wagner" },
      { w: "Hefajstos", h: "wulkan" }, { w: "Eros", h: "opaska" }
    ]
  },

  "Zabawki i gry": {
    icon: "🎮",
    words: [
      { w: "Lalka", h: "Barbie" }, { w: "Lego", h: "Dania" }, { w: "Miś", h: "dziecko" },
      { w: "Rubik", h: "Węgry" }, { w: "Bączek", h: "obrót" }, { w: "Skakanka", h: "podwórko" },
      { w: "Domino", h: "efekt" }, { w: "Monopoly", h: "więzienie" }, { w: "Scrabble", h: "punkty" },
      { w: "Memory", h: "odkrywanie" }, { w: "Puzzle", h: "element" }, { w: "Twister", h: "plamy" },
      { w: "Karty", h: "poker" }, { w: "Yo-yo", h: "Filipiny" }, { w: "Konsola", h: "kanapa" },
      { w: "PlayStation", h: "Sony" }, { w: "Minecraft", h: "kopanie" }, { w: "Frisbee", h: "park" },
      { w: "Warcaby", h: "damka" }, { w: "Pinball", h: "dźwignia" }, { w: "Bierki", h: "cierpliwość" },
      { w: "Pajacyk", h: "drewno" }, { w: "Kalambury", h: "rysowanie" }, { w: "Klocki", h: "zamek" },
      { w: "Kapsle", h: "boisko" }
    ]
  },

  "Polska impreza": {
    icon: "🥳",
    words: [
      { w: "Wódka", h: "Żubrówka" }, { w: "Kac", h: "obietnica" }, { w: "Wujek", h: "taniec" },
      { w: "Karaoke", h: "fałsz" }, { w: "Pizza", h: "zamówienie" }, { w: "Kebab", h: "nocny" },
      { w: "Disco", h: "polo" }, { w: "Polonez", h: "para" }, { w: "Szampan", h: "korek" },
      { w: "Piwo", h: "ogródek" }, { w: "Tańce", h: "parkiet" }, { w: "Toast", h: "zdrowie" },
      { w: "Nalewka", h: "piwnica" }, { w: "Bimber", h: "wieś" }, { w: "Imieniny", h: "kalendarz" },
      { w: "Andrzejki", h: "listopad" }, { w: "Sylwester", h: "countdown" }, { w: "Setka", h: "kieliszek" },
      { w: "Shot", h: "duszkiem" }, { w: "Grill", h: "ogródek" }, { w: "Ognisko", h: "gitara" },
      { w: "Sąsiad", h: "policja" }, { w: "Patelnia", h: "jajecznica" }, { w: "Lampka", h: "wino" },
      { w: "Drzemka", h: "kanapa" }, { w: "Bałagan", h: "rano" }
    ]
  },

  "Polskie wesele": {
    icon: "💒",
    words: [
      { w: "Welon", h: "tiulowy" }, { w: "Bukiet", h: "rzut" }, { w: "Tort", h: "piętra" },
      { w: "Polonez", h: "pierwszy" }, { w: "Oczepiny", h: "zabawa" }, { w: "Świadek", h: "mowa" },
      { w: "Druhna", h: "pastel" }, { w: "Toast", h: "gorzko" }, { w: "Szampan", h: "bąbelki" },
      { w: "Konfetti", h: "kolorowe" }, { w: "Pierścionek", h: "kolano" }, { w: "Garnitur", h: "krawat" },
      { w: "Suknia", h: "salon" }, { w: "Obrączki", h: "palec" }, { w: "Kelner", h: "tacka" },
      { w: "Konferansjer", h: "zabawy" }, { w: "Wesele", h: "Smarzowski" }, { w: "Ślub", h: "przysięga" },
      { w: "Ksiądz", h: "kazanie" }, { w: "Orszak", h: "para" }, { w: "Goście", h: "koperty" },
      { w: "Bramy", h: "wódka" }, { w: "Korowód", h: "ulica" }, { w: "Kotlety", h: "obiad" },
      { w: "Kapela", h: "biesiadna" }, { w: "Limuzyna", h: "parking" }
    ]
  },

  "Klubowa noc": {
    icon: "🪩",
    words: [
      { w: "Bramkarz", h: "lista" }, { w: "Strobo", h: "epilepsja" }, { w: "Drink", h: "słomka" },
      { w: "Selfie", h: "lusterko" }, { w: "Taksówka", h: "powrót" }, { w: "Glitter", h: "policzek" },
      { w: "Bar", h: "stołek" }, { w: "Klub", h: "piwnica" }, { w: "Tańce", h: "bass" },
      { w: "Numer", h: "serwetka" }, { w: "Portfel", h: "zgubiony" }, { w: "Telefon", h: "martwy" },
      { w: "Muzyka", h: "głośno" }, { w: "Szatnia", h: "numerek" }, { w: "Stempel", h: "nadgarstek" },
      { w: "Shot", h: "rząd" }, { w: "Kolejka", h: "toaleta" }, { w: "Kibel", h: "graffiti" },
      { w: "Garderoba", h: "plakat" }, { w: "Parkiet", h: "stopy" }, { w: "Wejściówka", h: "cena" },
      { w: "Lampka", h: "nastrój" }, { w: "Imprezowicz", h: "ostatni" }, { w: "Tequila", h: "robak" },
      { w: "Mojito", h: "Kuba" }, { w: "DJ", h: "słuchawka" }
    ]
  },

  "Imprezowy poranek": {
    icon: "😵",
    words: [
      { w: "Kac", h: "obietnica" }, { w: "Tabletka", h: "woda" }, { w: "Pizza", h: "karton" },
      { w: "Mleko", h: "lodówka" }, { w: "Spacer", h: "powietrze" }, { w: "Smutek", h: "portfel" },
      { w: "Wstyd", h: "wspomnienia" }, { w: "Galeria", h: "zdjęcia" }, { w: "Drzemka", h: "południe" },
      { w: "Mdłości", h: "okno" }, { w: "Migrena", h: "ciemność" }, { w: "Rosół", h: "ratunkowy" },
      { w: "Apap", h: "apteczka" }, { w: "Łazienka", h: "porcelana" }, { w: "Sen", h: "kołdra" },
      { w: "Płacz", h: "powód" }, { w: "Wyrzuty", h: "obietnica" }, { w: "Ucieczka", h: "buty" },
      { w: "Kawa", h: "podwójna" }, { w: "Aspiryna", h: "szklanka" }, { w: "Cisza", h: "proszę" },
      { w: "Niedziela", h: "stracona" }, { w: "Telefon", h: "wiadomości" }, { w: "Wymioty", h: "porcelana" },
      { w: "Wstanie", h: "heroizm" }, { w: "Pościel", h: "schowanie" }
    ]
  },

  // ========== NOWE KATEGORIE ==========

  "TikTok Brainrot": {
    icon: "🧠",
    words: [
      { w: "Skibidi", h: "porcelana" }, { w: "Sigma", h: "wilk" }, { w: "Rizz", h: "podejście" },
      { w: "Ohio", h: "kukurydza" }, { w: "Gyatt", h: "spojrzenie" }, { w: "Mewing", h: "postawa" },
      { w: "NPC", h: "skrypt" }, { w: "Delulu", h: "crush" }, { w: "Slay", h: "catwalk" },
      { w: "Bussin", h: "stołówka" }, { w: "Vibe", h: "check" }, { w: "Sus", h: "wentylacja" },
      { w: "Simp", h: "parasol" }, { w: "Ratio", h: "odpowiedź" }, { w: "Aura", h: "sto" },
      { w: "Goated", h: "trofeum" }, { w: "Fanum Tax", h: "kęs" }, { w: "Looksmaxxing", h: "siłownia" },
      { w: "Mogging", h: "cień" }, { w: "Gigachad", h: "mem" }, { w: "Bombardiro", h: "samolot" },
      { w: "Tralalero", h: "rekin" }, { w: "Tung Tung", h: "sahur" }, { w: "Cameraman", h: "Skibidi" },
      { w: "Speakerman", h: "sojusznik" }, { w: "Griddy", h: "touchdown" }
    ]
  },

  "Memy internetowe": {
    icon: "🐸",
    words: [
      { w: "Doge", h: "wow" }, { w: "Pepe", h: "rzadki" }, { w: "Rickroll", h: "pułapka" },
      { w: "Stonks", h: "garnitur" }, { w: "Wojak", h: "czuć" }, { w: "Karen", h: "menedżer" },
      { w: "Nyan Cat", h: "piksel" }, { w: "Harambe", h: "zoo" }, { w: "Trollface", h: "problem" },
      { w: "Distracted", h: "czerwona" }, { w: "Drakepost", h: "gest" }, { w: "Shrek", h: "warstwy" },
      { w: "Amogus", h: "wentylacja" }, { w: "Bonk", h: "więzienie" }, { w: "Grumpy Cat", h: "poniedziałek" },
      { w: "Cheems", h: "bonk" }, { w: "Gigachad", h: "tak" }, { w: "Coffin Dance", h: "Ghana" },
      { w: "This Is Fine", h: "kubek" }, { w: "Surprised Pikachu", h: "otwarte" },
      { w: "Kombucha Girl", h: "mina" }, { w: "Woman Yelling", h: "stół" },
      { w: "Polska Gurom", h: "PCMR" }, { w: "Bober", h: "tama" },
      { w: "Nosacz", h: "Janusz" }, { w: "Vibing Cat", h: "turek" }
    ]
  },

  "Filmy kultowe": {
    icon: "🎬",
    words: [
      { w: "Matrix", h: "łyżka" }, { w: "Titanic", h: "drzwi" }, { w: "Gwiezdne Wojny", h: "ojciec" },
      { w: "Harry Potter", h: "blizna" }, { w: "Władca Pierścieni", h: "przygoda" },
      { w: "Gladiator", h: "pszenica" }, { w: "Joker", h: "schody" }, { w: "Avengers", h: "pstryknięcie" },
      { w: "Forrest Gump", h: "czekoladki" }, { w: "Incepcja", h: "bączek" }, { w: "Interstellar", h: "kukurydza" },
      { w: "Zielona Mila", h: "korytarz" }, { w: "Chłopaki nie płaczą", h: "Bolec" },
      { w: "Miś", h: "Rączka" }, { w: "Shrek", h: "osioł" }, { w: "Piraci z Karaibów", h: "rum" },
      { w: "Batman", h: "Gotham" }, { w: "Spider-Man", h: "Nowy Jork" },
      { w: "Skazani na Shawshank", h: "plakat" }, { w: "Pulp Fiction", h: "taniec" },
      { w: "Król Lew", h: "Hakuna" }, { w: "Szybcy i wściekli", h: "rodzina" },
      { w: "Top Gun", h: "Maverick" }, { w: "Rocky", h: "Filadelfia" },
      { w: "Deadpool", h: "czwarta ściana" }, { w: "Oppenheimer", h: "pustynia" }
    ]
  },

  "Seriale": {
    icon: "📺",
    words: [
      { w: "Breaking Bad", h: "pustynia" }, { w: "Squid Game", h: "cukierek" },
      { w: "Stranger Things", h: "jedynka" }, { w: "Przyjaciele", h: "Central Perk" },
      { w: "The Office", h: "zszywacz" }, { w: "Wiedźmin", h: "monety" },
      { w: "Dom z Papieru", h: "czerwony" }, { w: "Peaky Blinders", h: "whiskey" },
      { w: "Wednesday", h: "Nevermore" }, { w: "The Crown", h: "pałac" },
      { w: "Narcos", h: "Kolumbia" }, { w: "Dark", h: "jaskinia" },
      { w: "Ranczo", h: "Wilkowyje" }, { w: "1670", h: "szlachta" },
      { w: "Klan", h: "Lubiczowie" }, { w: "M jak Miłość", h: "Mostowiacy" },
      { w: "The Mandalorian", h: "mówić" }, { w: "Black Mirror", h: "ocena" },
      { w: "Arcane", h: "most" }, { w: "Gra o Tron", h: "zima" },
      { w: "Ted Lasso", h: "ciastko" }, { w: "Chernobyl", h: "grafitowy" },
      { w: "The Last of Us", h: "Joel" }, { w: "One Piece", h: "kapelusz" },
      { w: "Euphoria", h: "neon" }, { w: "Severance", h: "piętro" }
    ]
  },

  "Gry wideo": {
    icon: "🕹️",
    words: [
      { w: "Minecraft", h: "creeper" }, { w: "Fortnite", h: "autobus" },
      { w: "GTA", h: "radio" }, { w: "FIFA", h: "paczka" },
      { w: "Mario", h: "rura" }, { w: "Zelda", h: "ocarina" },
      { w: "Wiedźmin", h: "Kaer Morhen" }, { w: "Cyberpunk", h: "Johnny" },
      { w: "Among Us", h: "wentylacja" }, { w: "Roblox", h: "robux" },
      { w: "League of Legends", h: "toksyk" }, { w: "Counter-Strike", h: "rush" },
      { w: "Tetris", h: "Rosja" }, { w: "Pokémon", h: "złap" },
      { w: "Call of Duty", h: "lobby" }, { w: "Dark Souls", h: "ognisko" },
      { w: "Elden Ring", h: "drzewo" }, { w: "Valorant", h: "spike" },
      { w: "Overwatch", h: "leczenie" }, { w: "Apex Legends", h: "skakanie" },
      { w: "Stardew Valley", h: "ślub" }, { w: "Animal Crossing", h: "Tom Nook" },
      { w: "Diablo", h: "loot" }, { w: "World of Warcraft", h: "gildia" },
      { w: "The Sims", h: "drabina" }, { w: "Hogwarts Legacy", h: "miotła" }
    ]
  },

  "Szkoła": {
    icon: "🏫",
    words: [
      { w: "Klasówka", h: "niespodzianka" }, { w: "Przerwa", h: "dzwonek" },
      { w: "Nauczyciel", h: "kreda" }, { w: "Ściąga", h: "rękaw" },
      { w: "Dyrektor", h: "gabinet" }, { w: "Świadectwo", h: "pasek" },
      { w: "Wagarowanie", h: "park" }, { w: "Odpytywanie", h: "loteria" },
      { w: "Szafka", h: "zamek" }, { w: "Stołówka", h: "kompot" },
      { w: "WF", h: "zwolnienie" }, { w: "Wywiadówka", h: "strach" },
      { w: "Plecak", h: "ciężki" }, { w: "Zeszyt", h: "margines" },
      { w: "Tablica", h: "gąbka" }, { w: "Dziennik", h: "Vulcan" },
      { w: "Matura", h: "maj" }, { w: "Korepetycje", h: "matma" },
      { w: "Wycieczka", h: "autokar" }, { w: "Akademia", h: "apel" },
      { w: "Woźny", h: "klucze" }, { w: "Sklepik", h: "drożdżówka" },
      { w: "Piątka", h: "bańka" }, { w: "Jedynka", h: "uwaga" },
      { w: "Podręcznik", h: "ciężar" }, { w: "Dyżurny", h: "gąbka" }
    ]
  },

  "Social Media": {
    icon: "📱",
    words: [
      { w: "TikTok", h: "zegar" }, { w: "Instagram", h: "filtr" },
      { w: "YouTube", h: "czerwony" }, { w: "Twitter", h: "limit" },
      { w: "Snapchat", h: "duszek" }, { w: "Discord", h: "gaming" },
      { w: "Reddit", h: "karma" }, { w: "WhatsApp", h: "ptaszki" },
      { w: "Twitch", h: "czat" }, { w: "BeReal", h: "powiadomienie" },
      { w: "Influencer", h: "kod" }, { w: "Hejter", h: "klawiatura" },
      { w: "Follower", h: "licznik" }, { w: "Viral", h: "udostępnienie" },
      { w: "Hashtag", h: "trend" }, { w: "Reels", h: "pionowy" },
      { w: "Lajk", h: "kciuk" }, { w: "Algorytm", h: "bańka" },
      { w: "Moderator", h: "banhammer" }, { w: "Troll", h: "most" },
      { w: "Clickbait", h: "strzałka" }, { w: "Unboxing", h: "nożyczki" },
      { w: "Podcast", h: "odcinek" }, { w: "Meme", h: "szablon" },
      { w: "Streamer", h: "donacja" }, { w: "Ghosting", h: "przeczytane" }
    ]
  },

  "Plaża i wakacje": {
    icon: "🏖️",
    words: [
      { w: "Krem", h: "filtr" }, { w: "Parawan", h: "Bałtyk" }, { w: "Walizka", h: "kółka" },
      { w: "Paszport", h: "kontrola" }, { w: "Lotnisko", h: "bramka" }, { w: "Hotel", h: "gwiazdki" },
      { w: "Basen", h: "chlor" }, { w: "Klapki", h: "lato" }, { w: "Maska", h: "rurka" },
      { w: "Muszelka", h: "Adriatyk" }, { w: "Pocztówka", h: "babcia" }, { w: "Bursztyn", h: "żywica" },
      { w: "Bilet", h: "last-minute" }, { w: "Termos", h: "herbata" }, { w: "Snorkel", h: "rafa" },
      { w: "Jacht", h: "Mazury" }, { w: "Recepcja", h: "klucz" }, { w: "Materac", h: "kemping" },
      { w: "Lornetka", h: "ptaki" }, { w: "Słońce", h: "udar" }, { w: "Plaża", h: "Sopot" },
      { w: "Opalenizna", h: "czerwień" }, { w: "Sorbet", h: "patyk" }, { w: "Płetwy", h: "żabka" },
      { w: "Pamiątka", h: "magnesik" }, { w: "Koktajl", h: "palma" }
    ]
  },

  "Boże Narodzenie": {
    icon: "🎄",
    words: [
      { w: "Choinka", h: "igliwie" }, { w: "Bombka", h: "krucha" }, { w: "Lampki", h: "migotanie" },
      { w: "Prezent", h: "kokarda" }, { w: "Mikołaj", h: "komin" }, { w: "Renifer", h: "Rudolf" },
      { w: "Opłatek", h: "życzenia" }, { w: "Karp", h: "wanna" }, { w: "Makowiec", h: "rolada" },
      { w: "Piernik", h: "Toruń" }, { w: "Kolęda", h: "Cicha" }, { w: "Stajenka", h: "Betlejem" },
      { w: "Anioł", h: "skrzydła" }, { w: "Gwiazdka", h: "pierwsza" }, { w: "Łańcuch", h: "bibuła" },
      { w: "Bałwan", h: "marchewka" }, { w: "Worek", h: "prezenty" }, { w: "Roraty", h: "świt" },
      { w: "Pasterka", h: "północ" }, { w: "Adwent", h: "wieniec" }, { w: "Mikołajki", h: "buty" },
      { w: "Wieczerza", h: "dwanaście" }, { w: "Kompot", h: "suszony" }, { w: "Sianko", h: "obrus" },
      { w: "Trzej", h: "królowie" }, { w: "Jemioła", h: "pocałunek" }
    ]
  },

  "Pogoda": {
    icon: "🌦️",
    words: [
      { w: "Burza", h: "piorun" }, { w: "Deszcz", h: "parasol" }, { w: "Śnieg", h: "iglo" },
      { w: "Tęcza", h: "siedem" }, { w: "Wiatr", h: "młyn" }, { w: "Mgła", h: "Londyn" },
      { w: "Grad", h: "kulki" }, { w: "Chmura", h: "wata" }, { w: "Mróz", h: "dziadek" },
      { w: "Upał", h: "Sahara" }, { w: "Wichura", h: "drzewa" }, { w: "Tornado", h: "Kansas" },
      { w: "Zamieć", h: "biel" }, { w: "Plucha", h: "szarość" }, { w: "Susza", h: "pęknięcie" },
      { w: "Powódź", h: "worki" }, { w: "Halny", h: "Tatry" }, { w: "Rosa", h: "poranek" },
      { w: "Szron", h: "okno" }, { w: "Smog", h: "Kraków" }, { w: "Zorza", h: "polarna" },
      { w: "Prognoza", h: "TVN" }, { w: "Antycyklon", h: "słońce" }, { w: "Kałuża", h: "kalosze" },
      { w: "Nawałnica", h: "alarm" }, { w: "Lód", h: "Antarktyda" }
    ]
  },

  "Praca w biurze": {
    icon: "💼",
    words: [
      { w: "Spotkanie", h: "kalendarz" }, { w: "Email", h: "spam" }, { w: "Slack", h: "powiadomienie" },
      { w: "Excel", h: "arkusz" }, { w: "Powerpoint", h: "slajd" }, { w: "Deadline", h: "panika" },
      { w: "Kawa", h: "poniedziałek" }, { w: "Szef", h: "Zoom" }, { w: "Korpo", h: "open-space" },
      { w: "Onboarding", h: "pierwszy" }, { w: "KPI", h: "wykres" }, { w: "Brief", h: "klient" },
      { w: "Sprint", h: "Agile" }, { w: "Standup", h: "piętnaście" }, { w: "Burnout", h: "wypalenie" },
      { w: "Korytarz", h: "plotki" }, { w: "Faktura", h: "VAT" }, { w: "Word", h: "dokument" },
      { w: "Lunch", h: "przerwa" }, { w: "Premia", h: "grudzień" }, { w: "Urlop", h: "26" },
      { w: "Wniosek", h: "podpis" }, { w: "CV", h: "LinkedIn" }, { w: "Rozmowa", h: "kwalifikacyjna" },
      { w: "HR", h: "kadry" }, { w: "Awans", h: "krzesło" }
    ]
  },

  "Anime": {
    icon: "🎌",
    words: [
      { w: "Naruto", h: "kunai" }, { w: "Goku", h: "Kamehameha" }, { w: "Pikachu", h: "iskra" },
      { w: "Sailor Moon", h: "księżyc" }, { w: "Dragon Ball", h: "siedem" }, { w: "Death Note", h: "zeszyt" },
      { w: "Attack on Titan", h: "mur" }, { w: "Demon Slayer", h: "Tanjiro" }, { w: "Jujutsu Kaisen", h: "Gojo" },
      { w: "My Hero Academia", h: "quirk" }, { w: "Bleach", h: "kosa" }, { w: "Hunter x Hunter", h: "Gon" },
      { w: "Spirited Away", h: "Ghibli" }, { w: "Totoro", h: "parasol" }, { w: "Mononoke", h: "wilk" },
      { w: "Akira", h: "motor" }, { w: "Berserk", h: "miecz" }, { w: "Cowboy Bebop", h: "jazz" },
      { w: "Evangelion", h: "robot" }, { w: "Inuyasha", h: "kieł" }, { w: "Miyazaki", h: "studio" },
      { w: "Manga", h: "czytanie" }, { w: "Otaku", h: "pokój" }, { w: "Cosplay", h: "przebranie" },
      { w: "Senpai", h: "starszy" }, { w: "Waifu", h: "ulubiona" }
    ]
  },

  "Kosmos": {
    icon: "🚀",
    words: [
      { w: "Księżyc", h: "Apollo" }, { w: "Słońce", h: "korona" }, { w: "Mars", h: "rdzawy" },
      { w: "Wenus", h: "miłość" }, { w: "Saturn", h: "pierścienie" }, { w: "Asteroida", h: "Bruce Willis" },
      { w: "Kometa", h: "ogon" }, { w: "Galaktyka", h: "Mleczna" }, { w: "Gwiazda", h: "życzenie" },
      { w: "Supernowa", h: "wybuch" }, { w: "Teleskop", h: "Hubble" }, { w: "Łazik", h: "Curiosity" },
      { w: "Skafander", h: "kask" }, { w: "Stacja", h: "ISS" }, { w: "NASA", h: "Houston" },
      { w: "Pluton", h: "wykluczony" }, { w: "Jowisz", h: "olbrzym" }, { w: "Merkury", h: "termometr" },
      { w: "UFO", h: "spisek" }, { w: "Roswell", h: "1947" }, { w: "Voyager", h: "płyta" },
      { w: "Eklipsa", h: "ciemność" }, { w: "Planetoida", h: "pas" }, { w: "Czarna dziura", h: "horyzont" },
      { w: "Wszechświat", h: "Hawking" }, { w: "Astronom", h: "luneta" }
    ]
  }
};

// =====================================================
//  Stan
// =====================================================
const state = {
  players: ["Gracz 1", "Gracz 2", "Gracz 3", "Gracz 4"],
  impostors: 1,
  category: "__random",
  impostorHint: true,
  roles: [],
  seen: [],
  word: null,
  hint: null,
  activeCategory: null,
  currentPick: -1
};

const STORAGE_KEY = "impostor.players";

// =====================================================
//  Pomocnicze
// =====================================================
const $ = (id) => document.getElementById(id);
const showScreen = (id) => {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(id).classList.add("active");
};
const randInt = (max) => Math.floor(Math.random() * max);
const shuffle = (arr) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = randInt(i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

// =====================================================
//  Lista uczestników (setup)
// =====================================================
function renderPlayersList() {
  const list = $("players-list");
  list.innerHTML = "";
  state.players.forEach((name, idx) => {
    const row = document.createElement("div");
    row.className = "player-row";
    row.innerHTML = `
      <input type="text" value="${escapeHtml(name)}" data-idx="${idx}" placeholder="Imię gracza" maxlength="20" />
      <button class="btn-remove" data-remove="${idx}" aria-label="Usuń">✕</button>
    `;
    list.appendChild(row);
  });

  list.querySelectorAll('input[type="text"]').forEach(inp => {
    inp.oninput = (e) => {
      state.players[+e.target.dataset.idx] = e.target.value;
      savePlayers();
    };
  });
  list.querySelectorAll(".btn-remove").forEach(btn => {
    btn.onclick = (e) => {
      const i = +e.currentTarget.dataset.remove;
      if (state.players.length <= 3) return;
      state.players.splice(i, 1);
      clampImpostors();
      renderPlayersList();
      savePlayers();
    };
  });
}

function addPlayer() {
  if (state.players.length >= 12) return;
  state.players.push(`Gracz ${state.players.length + 1}`);
  renderPlayersList();
  savePlayers();
}

function savePlayers() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.players)); } catch {}
}

function loadPlayers() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const arr = JSON.parse(raw);
      if (Array.isArray(arr) && arr.length >= 3) state.players = arr;
    }
  } catch {}
}

// =====================================================
//  Kategorie — siatka kafelków
// =====================================================
function renderCategoryGrid() {
  const grid = $("category-grid");
  grid.innerHTML = "";

  // Losowa
  const randomBtn = document.createElement("button");
  randomBtn.className = "cat-tile selected";
  randomBtn.dataset.cat = "__random";
  randomBtn.innerHTML = `<span class="cat-icon">🎲</span><span class="cat-name">Losowa</span>`;
  randomBtn.onclick = () => selectCategory("__random");
  grid.appendChild(randomBtn);

  Object.entries(CATEGORIES).forEach(([name, data]) => {
    const btn = document.createElement("button");
    btn.className = "cat-tile";
    btn.dataset.cat = name;
    btn.innerHTML = `<span class="cat-icon">${data.icon}</span><span class="cat-name">${escapeHtml(name)}</span>`;
    btn.onclick = () => selectCategory(name);
    grid.appendChild(btn);
  });
}

function selectCategory(cat) {
  state.category = cat;
  document.querySelectorAll(".cat-tile").forEach(t => {
    t.classList.toggle("selected", t.dataset.cat === cat);
  });
}

// =====================================================
//  Setup ekran
// =====================================================
function initSetup() {
  $("imp-minus").onclick = () => updateImpostors(-1);
  $("imp-plus").onclick  = () => updateImpostors(+1);
  $("add-player-btn").onclick = addPlayer;

  $("impostor-hint-toggle").onchange = (e) => state.impostorHint = e.target.checked;
  $("start-btn").onclick = startGame;
  $("rules-btn").onclick = () => showScreen("screen-rules");
  document.querySelectorAll("[data-back]").forEach(b => b.onclick = () => showScreen("screen-setup"));

  $("home-btn").onclick = () => showScreen("screen-setup");
  $("play-again-btn").onclick = startGame;
  $("reveal-btn").onclick = revealCard;
  $("hide-btn").onclick = afterCard;
  $("back-to-setup-btn").onclick = () => showScreen("screen-setup");
  $("reveal-impostor-btn").onclick = endRound;

  renderCategoryGrid();
}

function clampImpostors() {
  const max = Math.max(1, state.players.length - 2);
  if (state.impostors > max) state.impostors = max;
  $("imp-count").textContent = state.impostors;
}

function updateImpostors(delta) {
  const max = Math.max(1, state.players.length - 2);
  state.impostors = Math.max(1, Math.min(max, state.impostors + delta));
  $("imp-count").textContent = state.impostors;
}

// =====================================================
//  Logika gry
// =====================================================
function startGame() {
  // Synchronizuj stan togglu — przeglądarki potrafią zapamiętać checkbox
  // przez F5/restore i rozjechać wewnętrzny state z UI.
  state.impostorHint = $("impostor-hint-toggle").checked;
  state.players = state.players.map((n, i) => (n && n.trim()) || `Gracz ${i + 1}`);
  if (state.players.length < 3) {
    alert("Potrzebujesz minimum 3 graczy.");
    return;
  }

  let cat = state.category;
  if (cat === "__random") {
    const keys = Object.keys(CATEGORIES);
    cat = keys[randInt(keys.length)];
  }
  state.activeCategory = cat;

  const list = CATEGORIES[cat].words;
  const pick = list[randInt(list.length)];
  state.word = pick.w;
  state.hint = pick.h;

  const roles = new Array(state.players.length).fill("crew");
  const impostorIdx = shuffle([...Array(state.players.length).keys()]).slice(0, state.impostors);
  impostorIdx.forEach(i => roles[i] = "impostor");
  state.roles = roles;
  state.seen = new Array(state.players.length).fill(false);
  state.currentPick = -1;

  renderPickList();
  showScreen("screen-pick");
}

function renderPickList() {
  const list = $("pick-list");
  list.innerHTML = "";
  state.players.forEach((name, idx) => {
    const btn = document.createElement("button");
    btn.className = "pick-btn" + (state.seen[idx] ? " seen" : "");
    btn.disabled = state.seen[idx];
    btn.innerHTML = `
      <span class="pick-name">${escapeHtml(name)}</span>
      <span class="pick-status">${state.seen[idx] ? "✅ Widział" : "👉 Kliknij"}</span>
    `;
    btn.onclick = () => pickPlayer(idx);
    list.appendChild(btn);
  });

  const allSeen = state.seen.every(Boolean);
  $("reveal-impostor-btn").classList.toggle("hidden", !allSeen);
}

function pickPlayer(idx) {
  if (state.seen[idx]) return;
  state.currentPick = idx;
  $("card-player-name").textContent = state.players[idx];
  $("card-cover").classList.remove("hidden");
  $("card-reveal").classList.add("hidden");
  showScreen("screen-card");
}

function revealCard() {
  $("card-cover").classList.add("hidden");
  $("card-reveal").classList.remove("hidden");

  const role = state.roles[state.currentPick];
  if (role === "impostor") {
    $("card-word-box").classList.add("hidden");
    $("card-impostor").classList.remove("hidden");
    $("impostor-category").textContent = state.activeCategory;
    if (state.impostorHint) {
      $("impostor-hint").textContent = state.hint;
      $("impostor-hint").parentElement.classList.remove("hidden");
    } else {
      $("impostor-hint").parentElement.classList.add("hidden");
    }
  } else {
    $("card-word-box").classList.remove("hidden");
    $("card-impostor").classList.add("hidden");
    $("card-word").textContent = state.word;
  }
}

function afterCard() {
  state.seen[state.currentPick] = true;
  state.currentPick = -1;
  renderPickList();
  showScreen("screen-pick");
}

function endRound() {
  $("result-word").textContent = state.word;
  $("result-hint").textContent = `${state.activeCategory} · 💡 ${state.hint}`;
  const impNames = state.roles
    .map((r, i) => r === "impostor" ? state.players[i] : null)
    .filter(Boolean);
  $("result-impostor").textContent = impNames.join(", ");
  showScreen("screen-result");
}

// =====================================================
//  PWA — rejestracja service workera
// =====================================================
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch(() => {});
}

// =====================================================
//  Init
// =====================================================
document.addEventListener("DOMContentLoaded", () => {
  loadPlayers();
  initSetup();
  renderPlayersList();
  $("imp-count").textContent = state.impostors;
  state.impostorHint = $("impostor-hint-toggle").checked;
});
