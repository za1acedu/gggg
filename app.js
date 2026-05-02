// =====================================================
//  IMPOSTOR — baza haseł z podpowiedziami
//  Każde hasło: { w: "słowo", h: "podpowiedź" }
// =====================================================
const CATEGORIES = {
  "Zwierzęta": {
    icon: "🐾",
    words: [
      { w: "Słoń", h: "kieł" }, { w: "Pingwin", h: "smoking" }, { w: "Krokodyl", h: "bagno" },
      { w: "Żyrafa", h: "szyja" }, { w: "Hipopotam", h: "błoto" }, { w: "Jeż", h: "kolce" },
      { w: "Sowa", h: "mądrość" }, { w: "Kameleon", h: "barwa" }, { w: "Delfin", h: "skok" },
      { w: "Wilk", h: "wataha" }, { w: "Pszczoła", h: "miód" }, { w: "Mrówka", h: "siła" },
      { w: "Lew", h: "grzywa" }, { w: "Tygrys", h: "pasy" }, { w: "Kangur", h: "torba" },
      { w: "Wieloryb", h: "głębina" }, { w: "Nietoperz", h: "echolokacja" }, { w: "Pająk", h: "sieć" },
      { w: "Goryl", h: "srebrny" }, { w: "Foka", h: "plaża" }, { w: "Borsuk", h: "nora" },
      { w: "Lis", h: "spryt" }, { w: "Wąż", h: "jad" }, { w: "Sokół", h: "lot" },
      { w: "Pantera", h: "czerń" }, { w: "Niedźwiedź", h: "gawra" }
    ]
  },

  "Jedzenie": {
    icon: "🍕",
    words: [
      { w: "Pizza", h: "Włochy" }, { w: "Pierogi", h: "lepienie" }, { w: "Sushi", h: "ryż" },
      { w: "Hamburger", h: "bułka" }, { w: "Kebab", h: "nocny" }, { w: "Ramen", h: "bulion" },
      { w: "Spaghetti", h: "sos" }, { w: "Schabowy", h: "tłuczek" }, { w: "Bigos", h: "kapusta" },
      { w: "Naleśniki", h: "patelnia" }, { w: "Lody", h: "wafelek" }, { w: "Sernik", h: "twaróg" },
      { w: "Czekolada", h: "kakao" }, { w: "Tiramisu", h: "kawa" }, { w: "Frytki", h: "ketchup" },
      { w: "Taco", h: "Meksyk" }, { w: "Croissant", h: "masło" }, { w: "Gołąbki", h: "zawijanie" },
      { w: "Pączek", h: "tłusty" }, { w: "Zapiekanka", h: "Kazimierz" }, { w: "Burrito", h: "tortilla" },
      { w: "Pulpety", h: "mielone" }, { w: "Żurek", h: "zakwas" }, { w: "Rosół", h: "niedziela" },
      { w: "Sałatka", h: "dieta" }, { w: "Kanapka", h: "chleb" }
    ]
  },

  "Sport": {
    icon: "⚽",
    words: [
      { w: "Tenis", h: "rakieta" }, { w: "Siatkówka", h: "siatka" }, { w: "Pływanie", h: "basen" },
      { w: "Boks", h: "ring" }, { w: "Szachy", h: "mat" }, { w: "Curling", h: "kamień" },
      { w: "Łyżwiarstwo", h: "pirouette" }, { w: "Narciarstwo", h: "stok" }, { w: "Hokej", h: "krążek" },
      { w: "Golf", h: "dołek" }, { w: "Maraton", h: "dystans" }, { w: "Snowboard", h: "deska" },
      { w: "Surfing", h: "fala" }, { w: "Łucznictwo", h: "tarcza" }, { w: "Judo", h: "mata" },
      { w: "Karate", h: "pas" }, { w: "Koszykówka", h: "wsad" }, { w: "Futbol", h: "touchdown" },
      { w: "Bilard", h: "kij" }, { w: "Rugby", h: "młyn" }, { w: "Krykiet", h: "wicket" },
      { w: "Wioślarstwo", h: "wiosło" }, { w: "Lekkoatletyka", h: "bieżnia" },
      { w: "Kolarstwo", h: "peleton" }, { w: "Zapasy", h: "chwyt" }, { w: "Szermierka", h: "touché" }
    ]
  },

  "Kraje": {
    icon: "🌍",
    words: [
      { w: "Polska", h: "orzeł" }, { w: "Japonia", h: "sakura" }, { w: "Brazylia", h: "karnawał" },
      { w: "Egipt", h: "piramida" }, { w: "Włochy", h: "makaron" }, { w: "Francja", h: "wieża" },
      { w: "Hiszpania", h: "corrida" }, { w: "Grecja", h: "Akropol" }, { w: "Niemcy", h: "piwo" },
      { w: "Australia", h: "koala" }, { w: "Indie", h: "Ganges" }, { w: "Meksyk", h: "sombrero" },
      { w: "Norwegia", h: "fiordy" }, { w: "Kanada", h: "klon" }, { w: "Chiny", h: "mur" },
      { w: "Islandia", h: "gejzer" }, { w: "Tajlandia", h: "świątynia" }, { w: "Maroko", h: "bazar" },
      { w: "Portugalia", h: "azulejo" }, { w: "Turcja", h: "baklawa" }, { w: "Szwecja", h: "IKEA" },
      { w: "Holandia", h: "tulipan" }, { w: "Argentyna", h: "tango" }, { w: "Wietnam", h: "pho" },
      { w: "Kuba", h: "cygaro" }, { w: "Kenia", h: "safari" }
    ]
  },

  "Zawody": {
    icon: "👷",
    words: [
      { w: "Lekarz", h: "recepta" }, { w: "Strażak", h: "wóz" }, { w: "Policjant", h: "odznaka" },
      { w: "Nauczyciel", h: "tablica" }, { w: "Piekarz", h: "drożdże" }, { w: "Pilot", h: "kokpit" },
      { w: "Kucharz", h: "przepis" }, { w: "Architekt", h: "projekt" }, { w: "Programista", h: "bug" },
      { w: "Fryzjer", h: "nożyczki" }, { w: "Mechanik", h: "klucz" }, { w: "Ogrodnik", h: "rabata" },
      { w: "Listonosz", h: "paczka" }, { w: "Aktor", h: "scena" }, { w: "Dentysta", h: "borowanie" },
      { w: "Adwokat", h: "toga" }, { w: "Weterynarz", h: "łapa" }, { w: "Astronauta", h: "orbita" },
      { w: "Murarz", h: "cegła" }, { w: "Stolarz", h: "hebel" }, { w: "Hydraulik", h: "rura" },
      { w: "Elektryk", h: "kabel" }, { w: "Sędzia", h: "wyrok" }, { w: "Polityk", h: "debata" },
      { w: "Dziennikarz", h: "artykuł" }, { w: "Krawiec", h: "igła" }
    ]
  },

  "Owoce i warzywa": {
    icon: "🍎",
    words: [
      { w: "Banan", h: "skórka" }, { w: "Jabłko", h: "sad" }, { w: "Truskawka", h: "polana" },
      { w: "Arbuz", h: "pestka" }, { w: "Ananas", h: "tropik" }, { w: "Awokado", h: "guacamole" },
      { w: "Marchewka", h: "królik" }, { w: "Ziemniak", h: "pyra" }, { w: "Pomidor", h: "keczup" },
      { w: "Ogórek", h: "kiszony" }, { w: "Brokuł", h: "różyczka" }, { w: "Kiwi", h: "włochaty" },
      { w: "Mango", h: "smoothie" }, { w: "Papryka", h: "strąk" }, { w: "Granat", h: "ziarnka" },
      { w: "Cytryna", h: "kwaśna" }, { w: "Bakłażan", h: "fiolet" }, { w: "Czosnek", h: "wampir" },
      { w: "Cebula", h: "łzy" }, { w: "Kalafior", h: "biały" }, { w: "Sałata", h: "liść" },
      { w: "Rzodkiewka", h: "chrupka" }, { w: "Brzoskwinia", h: "meszek" }, { w: "Wiśnia", h: "kompot" },
      { w: "Śliwka", h: "powidła" }, { w: "Gruszka", h: "Villiams" }
    ]
  },

  "Pojazdy": {
    icon: "🚗",
    words: [
      { w: "Samolot", h: "turbulencja" }, { w: "Pociąg", h: "wagon" }, { w: "Helikopter", h: "śmigło" },
      { w: "Statek", h: "kotwica" }, { w: "Motocykl", h: "kask" }, { w: "Rower", h: "pedał" },
      { w: "Hulajnoga", h: "wynajem" }, { w: "Czołg", h: "pancerz" }, { w: "Tramwaj", h: "szyny" },
      { w: "Autobus", h: "przystanek" }, { w: "Taksówka", h: "taksometr" }, { w: "Ciężarówka", h: "naczepa" },
      { w: "Rakieta", h: "kosmos" }, { w: "Karetka", h: "sygnał" }, { w: "Quad", h: "teren" },
      { w: "Balon", h: "kosz" }, { w: "Kajak", h: "wiosło" }, { w: "Skuter", h: "miasto" },
      { w: "Limuzyna", h: "gala" }, { w: "Furgonetka", h: "dostawa" }, { w: "Bryczka", h: "koń" },
      { w: "Sanie", h: "renifer" }, { w: "Łódź", h: "żagiel" }, { w: "Okręt", h: "admirał" },
      { w: "Trolejbus", h: "pantograf" }, { w: "Wózek", h: "zakupy" }
    ]
  },

  "Muzyka": {
    icon: "🎵",
    words: [
      { w: "Gitara", h: "struny" }, { w: "Pianino", h: "klawisze" }, { w: "Skrzypce", h: "smyczek" },
      { w: "Perkusja", h: "pałeczki" }, { w: "Saksofon", h: "jazz" }, { w: "Trąbka", h: "fanfara" },
      { w: "Flet", h: "drewno" }, { w: "Akordeon", h: "miech" }, { w: "Harfa", h: "anioł" },
      { w: "Ukulele", h: "Hawaje" }, { w: "Opera", h: "aria" }, { w: "Rap", h: "flow" },
      { w: "Karaoke", h: "mikrofon" }, { w: "Chór", h: "głosy" }, { w: "Festiwal", h: "namiot" },
      { w: "Orkiestra", h: "dyrygent" }, { w: "Klarnet", h: "stroik" }, { w: "Mandolina", h: "Neapol" },
      { w: "Banjo", h: "country" }, { w: "Kontrabas", h: "pizzicato" }, { w: "Wiolonczela", h: "niska" },
      { w: "Bęben", h: "rytm" }, { w: "Cymbały", h: "talerz" }, { w: "Reggae", h: "Jamajka" },
      { w: "Rock", h: "wzmacniacz" }, { w: "Disco", h: "kula" }
    ]
  },

  "Technologia": {
    icon: "💻",
    words: [
      { w: "Smartfon", h: "ekran" }, { w: "Laptop", h: "przenośny" }, { w: "Drukarka", h: "toner" },
      { w: "Robot", h: "automat" }, { w: "Dron", h: "loty" }, { w: "Internet", h: "sieć" },
      { w: "Bluetooth", h: "bezprzewodowy" }, { w: "USB", h: "pendrive" }, { w: "Klawiatura", h: "klik" },
      { w: "Słuchawki", h: "basy" }, { w: "Mikrofon", h: "nagranie" }, { w: "GPS", h: "nawigacja" },
      { w: "Smartwatch", h: "nadgarstek" }, { w: "Tablet", h: "rysik" }, { w: "Pendrive", h: "pamięć" },
      { w: "Router", h: "WiFi" }, { w: "Modem", h: "sygnał" }, { w: "Procesor", h: "rdzeń" },
      { w: "Monitor", h: "piksele" }, { w: "Aparat", h: "obiektyw" }, { w: "Skaner", h: "skan" },
      { w: "Konsola", h: "pad" }, { w: "Mysz", h: "kursor" }, { w: "Kamera", h: "streaming" },
      { w: "Hologram", h: "projekcja" }, { w: "Powerbank", h: "ładowanie" }
    ]
  },

  "Bajki Disneya": {
    icon: "🏰",
    words: [
      { w: "Frozen", h: "lód" }, { w: "Aladyn", h: "lampa" }, { w: "Vaiana", h: "ocean" },
      { w: "Zwierzogród", h: "marchewka" }, { w: "Coco", h: "gitara" }, { w: "Roszpunka", h: "wieża" },
      { w: "Mulan", h: "miecz" }, { w: "Pocahontas", h: "wiatr" }, { w: "Kopciuszek", h: "pantofelek" },
      { w: "Encanto", h: "magia" }, { w: "Iniemamocni", h: "rodzina" }, { w: "Bambi", h: "polana" },
      { w: "Dumbo", h: "uszy" }, { w: "Pinokio", h: "nos" }, { w: "Tarzan", h: "liana" },
      { w: "Herkules", h: "Olimp" }, { w: "Stitch", h: "kosmita" }, { w: "Simba", h: "skała" },
      { w: "Ariel", h: "ogon" }, { w: "Buzz", h: "nieskończoność" }, { w: "Bella", h: "róża" },
      { w: "Aurora", h: "wrzeciono" }, { w: "Auta", h: "wyścig" }, { w: "Shrek", h: "bagno" },
      { w: "Nemo", h: "rafa" }
    ]
  },

  "Polskie miasta": {
    icon: "🏙️",
    words: [
      { w: "Warszawa", h: "syrenka" }, { w: "Kraków", h: "smok" }, { w: "Gdańsk", h: "bursztyn" },
      { w: "Wrocław", h: "krasnale" }, { w: "Poznań", h: "rogale" }, { w: "Łódź", h: "fabryki" },
      { w: "Zakopane", h: "górale" }, { w: "Sopot", h: "molo" }, { w: "Toruń", h: "pierniki" },
      { w: "Częstochowa", h: "pielgrzymka" }, { w: "Lublin", h: "koziołek" }, { w: "Katowice", h: "Spodek" },
      { w: "Białystok", h: "podlasie" }, { w: "Szczecin", h: "port" }, { w: "Olsztyn", h: "jeziora" },
      { w: "Bydgoszcz", h: "Brda" }, { w: "Rzeszów", h: "lotnisko" }, { w: "Malbork", h: "zamek" },
      { w: "Gdynia", h: "skwer" }, { w: "Opole", h: "piosenka" }, { w: "Kielce", h: "góry" },
      { w: "Radom", h: "broń" }, { w: "Gniezno", h: "korona" }, { w: "Płock", h: "rafineria" },
      { w: "Tarnów", h: "ratusz" }, { w: "Świnoujście", h: "prom" }
    ]
  },

  "Sławni Polacy": {
    icon: "🇵🇱",
    words: [
      { w: "Lewandowski", h: "bramka" }, { w: "Skłodowska", h: "rad" }, { w: "Chopin", h: "nokturn" },
      { w: "Kopernik", h: "heliocentryzm" }, { w: "Wałęsa", h: "stocznia" }, { w: "Małysz", h: "skok" },
      { w: "Szymborska", h: "wiersz" }, { w: "Sienkiewicz", h: "trylogia" }, { w: "Wajda", h: "reżyser" },
      { w: "Stoch", h: "Zakopane" }, { w: "Świątek", h: "kort" }, { w: "Doda", h: "szok" },
      { w: "Kościuszko", h: "kopiec" }, { w: "Piłsudski", h: "marszałek" }, { w: "Polański", h: "kino" },
      { w: "Miłosz", h: "Nobel" }, { w: "Pilecki", h: "raport" }, { w: "Wojtyła", h: "papież" },
      { w: "Mickiewicz", h: "Pan" }, { w: "Słowacki", h: "dramat" }, { w: "Tusk", h: "premier" },
      { w: "Reksio", h: "animacja" }, { w: "Boniek", h: "Juventus" }, { w: "Kubica", h: "bolid" },
      { w: "Penderecki", h: "kompozytor" }, { w: "Reymont", h: "chłopi" }
    ]
  },

  "Mitologia": {
    icon: "⚡",
    words: [
      { w: "Zeus", h: "piorun" }, { w: "Posejdon", h: "trójząb" }, { w: "Hades", h: "podziemie" },
      { w: "Atena", h: "tarcza" }, { w: "Afrodyta", h: "piękno" }, { w: "Apollo", h: "słońce" },
      { w: "Ares", h: "bitwa" }, { w: "Hermes", h: "sandały" }, { w: "Herakles", h: "prace" },
      { w: "Pegaz", h: "skrzydła" }, { w: "Centaur", h: "strzała" }, { w: "Minotaur", h: "labirynt" },
      { w: "Meduza", h: "kamień" }, { w: "Cyklop", h: "oko" }, { w: "Odyseusz", h: "podróż" },
      { w: "Achilles", h: "pięta" }, { w: "Thor", h: "młot" }, { w: "Loki", h: "sztuczka" },
      { w: "Hera", h: "zazdrość" }, { w: "Artemida", h: "łuk" }, { w: "Persefona", h: "wiosna" },
      { w: "Dionizos", h: "wino" }, { w: "Odyn", h: "kruk" }, { w: "Walkiria", h: "wojowniczka" },
      { w: "Hefajstos", h: "kuźnia" }, { w: "Eros", h: "strzała" }
    ]
  },

  "Zabawki i gry": {
    icon: "🎮",
    words: [
      { w: "Lalka", h: "domek" }, { w: "Lego", h: "klocek" }, { w: "Miś", h: "pluszowy" },
      { w: "Rubik", h: "kostka" }, { w: "Bączek", h: "kręci" }, { w: "Skakanka", h: "skok" },
      { w: "Domino", h: "kostki" }, { w: "Monopoly", h: "bankrut" }, { w: "Scrabble", h: "litery" },
      { w: "Memory", h: "pary" }, { w: "Puzzle", h: "układanka" }, { w: "Twister", h: "kolory" },
      { w: "Karty", h: "talia" }, { w: "Yo-yo", h: "sznurek" }, { w: "Konsola", h: "pad" },
      { w: "PlayStation", h: "Sony" }, { w: "Minecraft", h: "kopanie" }, { w: "Frisbee", h: "dysk" },
      { w: "Warcaby", h: "bicia" }, { w: "Pinball", h: "kulka" }, { w: "Bierki", h: "drżenie" },
      { w: "Pajacyk", h: "sznurek" }, { w: "Kalambury", h: "rysowanie" }, { w: "Klocki", h: "wieża" },
      { w: "Kapsle", h: "piłka" }
    ]
  },

  "Polska impreza": {
    icon: "🥳",
    words: [
      { w: "Wódka", h: "czysta" }, { w: "Kac", h: "poranek" }, { w: "Wujek", h: "taniec" },
      { w: "Karaoke", h: "fałsz" }, { w: "Pizza", h: "zamówienie" }, { w: "Kebab", h: "nocny" },
      { w: "Disco", h: "kula" }, { w: "Polonez", h: "para" }, { w: "Szampan", h: "korek" },
      { w: "Piwo", h: "kufel" }, { w: "Tańce", h: "parkiet" }, { w: "Toast", h: "zdrowie" },
      { w: "Nalewka", h: "babcia" }, { w: "Bimber", h: "garaż" }, { w: "Imieniny", h: "kalendarz" },
      { w: "Andrzejki", h: "wosk" }, { w: "Sylwester", h: "fajerwerki" }, { w: "Setka", h: "kieliszek" },
      { w: "Shot", h: "duszkiem" }, { w: "Grill", h: "kiełbasa" }, { w: "Ognisko", h: "gitara" },
      { w: "Sąsiad", h: "cisza" }, { w: "Patelnia", h: "jajecznica" }, { w: "Lampka", h: "wino" },
      { w: "Drzemka", h: "kanapa" }, { w: "Bałagan", h: "sprzątanie" }
    ]
  },

  "Polskie wesele": {
    icon: "💒",
    words: [
      { w: "Welon", h: "tiulowy" }, { w: "Bukiet", h: "rzut" }, { w: "Tort", h: "piętra" },
      { w: "Polonez", h: "pierwszy" }, { w: "Oczepiny", h: "północ" }, { w: "Świadek", h: "obrączka" },
      { w: "Druhna", h: "sukienka" }, { w: "Toast", h: "gorzko" }, { w: "Szampan", h: "bąbelki" },
      { w: "Konfetti", h: "kolorowe" }, { w: "Pierścionek", h: "brylant" }, { w: "Garnitur", h: "krawat" },
      { w: "Suknia", h: "biała" }, { w: "Obrączki", h: "złoto" }, { w: "Kelner", h: "tacka" },
      { w: "Konferansjer", h: "zabawy" }, { w: "Wesele", h: "sala" }, { w: "Ślub", h: "przysięga" },
      { w: "Ksiądz", h: "kazanie" }, { w: "Orszak", h: "para" }, { w: "Goście", h: "koperty" },
      { w: "Bramy", h: "wódka" }, { w: "Korowód", h: "muzyka" }, { w: "Kotlety", h: "obiad" },
      { w: "Kapela", h: "disco" }, { w: "Limuzyna", h: "biała" }
    ]
  },

  "Klubowa noc": {
    icon: "🪩",
    words: [
      { w: "Bramkarz", h: "selekcja" }, { w: "Strobo", h: "światło" }, { w: "Drink", h: "koktajl" },
      { w: "Selfie", h: "lusterko" }, { w: "Taksówka", h: "powrót" }, { w: "Glitter", h: "brokat" },
      { w: "Bar", h: "lada" }, { w: "Klub", h: "kolejka" }, { w: "Tańce", h: "bass" },
      { w: "Numer", h: "telefon" }, { w: "Portfel", h: "zgubiony" }, { w: "Telefon", h: "bateria" },
      { w: "Muzyka", h: "głośno" }, { w: "Szatnia", h: "kurtka" }, { w: "Stempel", h: "ręka" },
      { w: "Shot", h: "kolejka" }, { w: "Kolejka", h: "toaleta" }, { w: "Kibel", h: "lustro" },
      { w: "Garderoba", h: "numerek" }, { w: "Parkiet", h: "taniec" }, { w: "Wejściówka", h: "cena" },
      { w: "Lampka", h: "nastrój" }, { w: "Imprezowicz", h: "energia" }, { w: "Tequila", h: "sól" },
      { w: "Mojito", h: "mięta" }, { w: "DJ", h: "mikser" }
    ]
  },

  "Imprezowy poranek": {
    icon: "😵",
    words: [
      { w: "Kac", h: "głowa" }, { w: "Tabletka", h: "ratunek" }, { w: "Pizza", h: "wczorajsza" },
      { w: "Mleko", h: "lodówka" }, { w: "Spacer", h: "powietrze" }, { w: "Smutek", h: "portfel" },
      { w: "Wstyd", h: "wspomnienia" }, { w: "Galeria", h: "zdjęcia" }, { w: "Drzemka", h: "południe" },
      { w: "Mdłości", h: "żołądek" }, { w: "Migrena", h: "ciemność" }, { w: "Rosół", h: "babcia" },
      { w: "Apap", h: "dawka" }, { w: "Łazienka", h: "lustro" }, { w: "Sen", h: "kołdra" },
      { w: "Płacz", h: "powód" }, { w: "Wyrzuty", h: "sumienie" }, { w: "Ucieczka", h: "taxi" },
      { w: "Kawa", h: "podwójna" }, { w: "Aspiryna", h: "bąbelki" }, { w: "Cisza", h: "proszę" },
      { w: "Niedziela", h: "stracona" }, { w: "Telefon", h: "wiadomości" }, { w: "Wymioty", h: "łazienka" },
      { w: "Wstanie", h: "trudne" }, { w: "Pościel", h: "schowanie" }
    ]
  },

  // ========== NOWE KATEGORIE ==========

  "TikTok Brainrot": {
    icon: "🧠",
    words: [
      { w: "Skibidi", h: "toaleta" }, { w: "Sigma", h: "samotnik" }, { w: "Rizz", h: "czar" },
      { w: "Ohio", h: "dziwne" }, { w: "Gyatt", h: "reakcja" }, { w: "Mewing", h: "szczęka" },
      { w: "NPC", h: "automat" }, { w: "Delulu", h: "złudzenia" }, { w: "Slay", h: "królowa" },
      { w: "Bussin", h: "pyszne" }, { w: "Vibe", h: "nastrój" }, { w: "Sus", h: "podejrzany" },
      { w: "Simp", h: "adoracja" }, { w: "Ratio", h: "lajki" }, { w: "Aura", h: "punkty" },
      { w: "Goated", h: "najlepszy" }, { w: "Fanum Tax", h: "jedzenie" }, { w: "Looksmaxxing", h: "lustro" },
      { w: "Mogging", h: "dominacja" }, { w: "Gigachad", h: "idealny" }, { w: "Bombardiro", h: "krokodyl" },
      { w: "Tralalero", h: "włoski" }, { w: "Tung Tung", h: "sahur" }, { w: "Cameraman", h: "kamera" },
      { w: "Speakerman", h: "głośnik" }, { w: "Griddy", h: "taniec" }
    ]
  },

  "Memy internetowe": {
    icon: "🐸",
    words: [
      { w: "Doge", h: "pieseł" }, { w: "Pepe", h: "żaba" }, { w: "Rickroll", h: "pułapka" },
      { w: "Stonks", h: "wykres" }, { w: "Wojak", h: "smutek" }, { w: "Karen", h: "menedżer" },
      { w: "Nyan Cat", h: "tęcza" }, { w: "Harambe", h: "goryl" }, { w: "Trollface", h: "problem" },
      { w: "Distracted", h: "chłopak" }, { w: "Drakepost", h: "gest" }, { w: "Shrek", h: "bagno" },
      { w: "Amogus", h: "kosmita" }, { w: "Bonk", h: "pałka" }, { w: "Grumpy Cat", h: "nie" },
      { w: "Cheems", h: "piesek" }, { w: "Gigachad", h: "broda" }, { w: "Coffin Dance", h: "Ghana" },
      { w: "This Is Fine", h: "pożar" }, { w: "Surprised Pikachu", h: "szok" },
      { w: "Kombucha Girl", h: "mina" }, { w: "Woman Yelling", h: "kot" },
      { w: "Polska Gurom", h: "duma" }, { w: "Bober", h: "kurwa" },
      { w: "Nosacz", h: "Borneo" }, { w: "Vibing Cat", h: "bęben" }
    ]
  },

  "Filmy kultowe": {
    icon: "🎬",
    words: [
      { w: "Matrix", h: "pigułka" }, { w: "Titanic", h: "góra" }, { w: "Gwiezdne Wojny", h: "miecz" },
      { w: "Harry Potter", h: "różdżka" }, { w: "Władca Pierścieni", h: "Mordor" },
      { w: "Gladiator", h: "arena" }, { w: "Joker", h: "schody" }, { w: "Avengers", h: "drużyna" },
      { w: "Forrest Gump", h: "bieganie" }, { w: "Incepcja", h: "sen" }, { w: "Interstellar", h: "czas" },
      { w: "Zielona Mila", h: "korytarz" }, { w: "Chłopaki nie płaczą", h: "walizka" },
      { w: "Miś", h: "Rączka" }, { w: "Shrek", h: "osioł" }, { w: "Piraci z Karaibów", h: "rum" },
      { w: "Batman", h: "jaskinia" }, { w: "Spider-Man", h: "pajęczyna" },
      { w: "Skazani na Shawshank", h: "tunel" }, { w: "Pulp Fiction", h: "walizka" },
      { w: "Król Lew", h: "sawanna" }, { w: "Szybcy i wściekli", h: "rodzina" },
      { w: "Top Gun", h: "odrzutowiec" }, { w: "Rocky", h: "schody" },
      { w: "Deadpool", h: "chimichanga" }, { w: "Oppenheimer", h: "bomba" }
    ]
  },

  "Seriale": {
    icon: "📺",
    words: [
      { w: "Breaking Bad", h: "chemia" }, { w: "Squid Game", h: "lalka" },
      { w: "Stranger Things", h: "demogorgon" }, { w: "Przyjaciele", h: "kanapa" },
      { w: "The Office", h: "biuro" }, { w: "Wiedźmin", h: "miecz" },
      { w: "Dom z Papieru", h: "maska" }, { w: "Peaky Blinders", h: "kaszkiet" },
      { w: "Wednesday", h: "Addams" }, { w: "The Crown", h: "korona" },
      { w: "Narcos", h: "kartel" }, { w: "Dark", h: "jaskinia" },
      { w: "Ranczo", h: "Wilkowyje" }, { w: "1670", h: "szlachta" },
      { w: "Klan", h: "Lubiczowie" }, { w: "M jak Miłość", h: "Mostowiacy" },
      { w: "The Mandalorian", h: "dziecko" }, { w: "Black Mirror", h: "ekran" },
      { w: "Arcane", h: "Jinx" }, { w: "Gra o Tron", h: "żelazny" },
      { w: "Ted Lasso", h: "trener" }, { w: "Chernobyl", h: "reaktor" },
      { w: "The Last of Us", h: "grzyb" }, { w: "One Piece", h: "kapelusz" },
      { w: "Euphoria", h: "liceum" }, { w: "Severance", h: "winda" }
    ]
  },

  "Gry wideo": {
    icon: "🕹️",
    words: [
      { w: "Minecraft", h: "kopanie" }, { w: "Fortnite", h: "budowanie" },
      { w: "GTA", h: "kradzież" }, { w: "FIFA", h: "boisko" },
      { w: "Mario", h: "grzyb" }, { w: "Zelda", h: "Triforce" },
      { w: "Wiedźmin", h: "Geralt" }, { w: "Cyberpunk", h: "Night City" },
      { w: "Among Us", h: "impostor" }, { w: "Roblox", h: "klocki" },
      { w: "League of Legends", h: "linia" }, { w: "Counter-Strike", h: "bomba" },
      { w: "Tetris", h: "klocek" }, { w: "Pokémon", h: "piłka" },
      { w: "Call of Duty", h: "strzał" }, { w: "Dark Souls", h: "śmierć" },
      { w: "Elden Ring", h: "pierścień" }, { w: "Valorant", h: "agent" },
      { w: "Overwatch", h: "drużyna" }, { w: "Apex Legends", h: "skok" },
      { w: "Stardew Valley", h: "farma" }, { w: "Animal Crossing", h: "wyspa" },
      { w: "Diablo", h: "piekło" }, { w: "World of Warcraft", h: "gildia" },
      { w: "The Sims", h: "budowanie" }, { w: "Hogwarts Legacy", h: "magia" }
    ]
  },

  "Szkoła": {
    icon: "🏫",
    words: [
      { w: "Klasówka", h: "stres" }, { w: "Przerwa", h: "dzwonek" },
      { w: "Nauczyciel", h: "kreda" }, { w: "Ściąga", h: "rękaw" },
      { w: "Dyrektor", h: "gabinet" }, { w: "Świadectwo", h: "pasek" },
      { w: "Wagarowanie", h: "ucieczka" }, { w: "Odpytywanie", h: "palec" },
      { w: "Szafka", h: "zamek" }, { w: "Stołówka", h: "zupa" },
      { w: "WF", h: "dres" }, { w: "Wywiadówka", h: "rodzice" },
      { w: "Plecak", h: "ciężki" }, { w: "Zeszyt", h: "margines" },
      { w: "Tablica", h: "gąbka" }, { w: "Dziennik", h: "oceny" },
      { w: "Matura", h: "arkusz" }, { w: "Korepetycje", h: "matma" },
      { w: "Wycieczka", h: "autokar" }, { w: "Akademia", h: "apel" },
      { w: "Woźny", h: "klucze" }, { w: "Sklepik", h: "drożdżówka" },
      { w: "Piątka", h: "wzorowy" }, { w: "Jedynka", h: "uwaga" },
      { w: "Podręcznik", h: "wypożyczony" }, { w: "Dyżurny", h: "tablica" }
    ]
  },

  "Social Media": {
    icon: "📱",
    words: [
      { w: "TikTok", h: "scroll" }, { w: "Instagram", h: "stories" },
      { w: "YouTube", h: "subskrypcja" }, { w: "Twitter", h: "ptaszek" },
      { w: "Snapchat", h: "duszek" }, { w: "Discord", h: "serwer" },
      { w: "Reddit", h: "karma" }, { w: "WhatsApp", h: "grupy" },
      { w: "Twitch", h: "stream" }, { w: "BeReal", h: "powiadomienie" },
      { w: "Influencer", h: "współpraca" }, { w: "Hejter", h: "komentarz" },
      { w: "Follower", h: "obserwacja" }, { w: "Viral", h: "milion" },
      { w: "Hashtag", h: "kratka" }, { w: "Reels", h: "filmik" },
      { w: "Lajk", h: "serduszko" }, { w: "Algorytm", h: "polecane" },
      { w: "Moderator", h: "banhammer" }, { w: "Troll", h: "prowokacja" },
      { w: "Clickbait", h: "tytuł" }, { w: "Unboxing", h: "paczka" },
      { w: "Podcast", h: "mikrofon" }, { w: "Meme", h: "szablon" },
      { w: "Streamer", h: "donacja" }, { w: "Ghosting", h: "cisza" }
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
  } else {
    $("card-word-box").classList.remove("hidden");
    $("card-impostor").classList.add("hidden");
    $("card-word").textContent = state.word;
    $("card-hint").textContent = `💡 ${state.hint}`;
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
});
