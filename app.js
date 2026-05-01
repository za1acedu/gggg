// =====================================================
//  IMPOSTOR — baza haseł z kategoriami i podpowiedziami
// =====================================================
const CATEGORIES = {
  "Zwierzęta": [
    { word: "Słoń",        hint: "Największy ssak lądowy z trąbą" },
    { word: "Pingwin",     hint: "Ptak w smokingu, który nie lata" },
    { word: "Krokodyl",    hint: "Zielony gad z mocnymi szczękami" },
    { word: "Żyrafa",      hint: "Ma najdłuższą szyję na świecie" },
    { word: "Hipopotam",   hint: "Ogromny i lubi wodę" },
    { word: "Jeż",         hint: "Mały, kolczasty, zwija się w kulkę" },
    { word: "Sowa",        hint: "Mądry ptak, poluje nocą" },
    { word: "Kameleon",    hint: "Zmienia kolor skóry" },
    { word: "Delfin",      hint: "Inteligentny ssak morski" },
    { word: "Wilk",        hint: "Wyje do księżyca, żyje w watasze" },
    { word: "Pszczoła",    hint: "Pasiasta i robi miód" },
    { word: "Mrówka",      hint: "Mała, ale podnosi ciężary" },
    { word: "Lew",         hint: "Król zwierząt z grzywą" },
    { word: "Tygrys",      hint: "Wielki kot w paski" },
    { word: "Kangur",      hint: "Skacze i ma torbę" },
    { word: "Wieloryb",    hint: "Największe zwierzę oceanu" },
    { word: "Nietoperz",   hint: "Lata nocą, śpi do góry nogami" },
    { word: "Pająk",       hint: "Tka sieci, ma osiem nóg" }
  ],

  "Jedzenie": [
    { word: "Pizza",       hint: "Włoski placek z serem i sosem" },
    { word: "Pierogi",     hint: "Polskie kluski z farszem" },
    { word: "Sushi",       hint: "Japońskie z ryżem i rybą" },
    { word: "Hamburger",   hint: "Bułka z mięsem, fast food" },
    { word: "Kebab",       hint: "Mięso z rożna w bułce" },
    { word: "Ramen",       hint: "Japońska zupa z makaronem" },
    { word: "Spaghetti",   hint: "Długi włoski makaron" },
    { word: "Schabowy",    hint: "Polski klasyczny obiad z ziemniakami" },
    { word: "Bigos",       hint: "Polska potrawka z kapusty i mięsa" },
    { word: "Naleśniki",   hint: "Cienkie placki z nadzieniem" },
    { word: "Lody",        hint: "Mrożony deser na patyku lub w wafelku" },
    { word: "Sernik",      hint: "Ciasto z białego sera" },
    { word: "Czekolada",   hint: "Słodka, brązowa, z kakao" },
    { word: "Tiramisu",    hint: "Włoski deser z mascarpone i kawą" },
    { word: "Kotlet mielony", hint: "Polski codzienny obiad domowy" },
    { word: "Frytki",      hint: "Pokrojone i smażone ziemniaki" },
    { word: "Taco",        hint: "Meksykańska tortilla z farszem" },
    { word: "Croissant",   hint: "Francuski rogalik" }
  ],

  "Sport": [
    { word: "Piłka nożna", hint: "Najpopularniejsza dyscyplina świata" },
    { word: "Koszykówka",  hint: "Wrzucasz piłkę do kosza" },
    { word: "Tenis",       hint: "Rakieta i kort" },
    { word: "Siatkówka",   hint: "Nad siatką, bez upadku piłki" },
    { word: "Pływanie",    hint: "Sport wodny, basen" },
    { word: "Boks",        hint: "Walka w rękawicach na ringu" },
    { word: "Szachy",      hint: "Sport umysłowy z królem i hetmanem" },
    { word: "Curling",     hint: "Kamienie i miotły na lodzie" },
    { word: "Łyżwiarstwo", hint: "Tańce na lodzie w łyżwach" },
    { word: "Narciarstwo", hint: "Zjazd ze stoku w zimie" },
    { word: "Hokej",       hint: "Krążek na lodzie i kije" },
    { word: "Golf",        hint: "Mała piłeczka i dziewiętnaście dołków" },
    { word: "Skok w dal",  hint: "Lekkoatletyka, jak najdalej" },
    { word: "Maraton",     hint: "Bieg na 42 kilometry" },
    { word: "Snowboard",   hint: "Deska na śniegu" },
    { word: "Surfing",     hint: "Deska na falach" },
    { word: "Łucznictwo",  hint: "Strzelasz strzałami do tarczy" },
    { word: "Judo",        hint: "Japońska sztuka walki w kimono" }
  ],

  "Kraje": [
    { word: "Polska",      hint: "Biało-czerwona flaga, ojczyzna pierogów" },
    { word: "Japonia",     hint: "Kraj kwitnącej wiśni i sushi" },
    { word: "Brazylia",    hint: "Karnawał, samba i Amazonia" },
    { word: "Egipt",       hint: "Piramidy i Nil" },
    { word: "Włochy",      hint: "But na mapie, pizza, makarony" },
    { word: "Francja",     hint: "Wieża Eiffla i bagietki" },
    { word: "Hiszpania",   hint: "Flamenco, paella, corrida" },
    { word: "Grecja",      hint: "Antyczne ruiny i wyspy" },
    { word: "Niemcy",      hint: "Sąsiad, samochody i kiełbaski" },
    { word: "Australia",   hint: "Kangury i Wielka Rafa" },
    { word: "Indie",       hint: "Curry, sari, Tadź Mahal" },
    { word: "Meksyk",      hint: "Sombrero, tequila i taco" },
    { word: "Norwegia",    hint: "Fiordy i zorza polarna" },
    { word: "Kanada",      hint: "Klon i hokej, sąsiad USA" },
    { word: "Chiny",       hint: "Wielki Mur i pandy" },
    { word: "Islandia",    hint: "Wyspa wulkanów i gejzerów" },
    { word: "Tajlandia",   hint: "Świątynie buddyjskie i pad thai" },
    { word: "Maroko",      hint: "Sahara, kolorowe targi i miętowa herbata" }
  ],

  "Zawody": [
    { word: "Lekarz",      hint: "Leczy ludzi w białym kitlu" },
    { word: "Strażak",     hint: "Gasi pożary, czerwony wóz" },
    { word: "Policjant",   hint: "Pilnuje porządku, mundurowy" },
    { word: "Nauczyciel",  hint: "Uczy w szkole" },
    { word: "Piekarz",     hint: "Wstaje wcześnie i piecze chleb" },
    { word: "Pilot",       hint: "Lata samolotem" },
    { word: "Kucharz",     hint: "Gotuje w restauracji" },
    { word: "Architekt",   hint: "Projektuje budynki" },
    { word: "Programista", hint: "Pisze kod komputerowy" },
    { word: "Fryzjer",     hint: "Strzyże i czesze włosy" },
    { word: "Mechanik",    hint: "Naprawia samochody" },
    { word: "Ogrodnik",    hint: "Pielęgnuje rośliny" },
    { word: "Listonosz",   hint: "Roznosi listy" },
    { word: "Aktor",       hint: "Gra w filmach i teatrze" },
    { word: "Dentysta",    hint: "Leczy zęby" },
    { word: "Adwokat",     hint: "Reprezentuje klientów w sądzie" },
    { word: "Weterynarz",  hint: "Lekarz dla zwierząt" },
    { word: "Astronauta",  hint: "Pracuje w kosmosie" }
  ],

  "Owoce i warzywa": [
    { word: "Banan",       hint: "Żółty, zakrzywiony, lubią go małpy" },
    { word: "Jabłko",      hint: "Czerwone, zielone, znalezione w raju" },
    { word: "Truskawka",   hint: "Czerwona, z pestkami na zewnątrz" },
    { word: "Arbuz",       hint: "Wielki, zielony, w środku różowy" },
    { word: "Ananas",      hint: "Kolczaste owoce, korona z liści" },
    { word: "Awokado",     hint: "Zielone, kremowe, do guacamole" },
    { word: "Marchewka",   hint: "Pomarańczowa, lubi króliki" },
    { word: "Ziemniak",    hint: "Polska podstawa obiadu" },
    { word: "Pomidor",     hint: "Bywa zielony, czerwony, do sałatki" },
    { word: "Ogórek",      hint: "Długi, zielony, do mizerii" },
    { word: "Brokuł",      hint: "Wygląda jak małe drzewko" },
    { word: "Kiwi",        hint: "Brązowy włochaty, w środku zielony" },
    { word: "Mango",       hint: "Słodki tropikalny owoc" },
    { word: "Papryka",     hint: "Czerwona, żółta lub zielona, ostra lub słodka" },
    { word: "Granat",      hint: "Czerwone pestki, owoc Persefony" },
    { word: "Cytryna",     hint: "Żółta i bardzo kwaśna" },
    { word: "Bakłażan",    hint: "Fioletowe podłużne warzywo" },
    { word: "Czosnek",     hint: "Mocny zapach, odstrasza wampiry" }
  ],

  "Pojazdy": [
    { word: "Samolot",     hint: "Lata po niebie ze skrzydłami" },
    { word: "Pociąg",      hint: "Jedzie po szynach" },
    { word: "Helikopter",  hint: "Lata, ma śmigło na górze" },
    { word: "Statek",      hint: "Pływa po morzu" },
    { word: "Łódź podwodna", hint: "Płynie pod wodą" },
    { word: "Motocykl",    hint: "Dwa koła, silnik, kask" },
    { word: "Rower",       hint: "Dwa koła, na pedały" },
    { word: "Hulajnoga",   hint: "Stoisz, odpychasz nogą" },
    { word: "Czołg",       hint: "Wojskowy, gąsienice i armata" },
    { word: "Tramwaj",     hint: "Miejski, jeździ po szynach po ulicy" },
    { word: "Autobus",     hint: "Komunikacja miejska, długi" },
    { word: "Taksówka",    hint: "Płacisz za przejazd, często żółta" },
    { word: "Ciężarówka",  hint: "Przewozi towary" },
    { word: "Rakieta",     hint: "Leci w kosmos" },
    { word: "Karetka",     hint: "Pogotowie ratunkowe na sygnale" },
    { word: "Quad",        hint: "Cztery koła, terenowy, dla zabawy" },
    { word: "Skuter wodny", hint: "Motocykl, ale na wodzie" },
    { word: "Balon",       hint: "Lata dzięki gorącemu powietrzu" }
  ],

  "Muzyka": [
    { word: "Gitara",      hint: "Sześć strun, popularna na ognisku" },
    { word: "Pianino",     hint: "Białe i czarne klawisze" },
    { word: "Skrzypce",    hint: "Smyczek i cztery struny" },
    { word: "Perkusja",    hint: "Bębny i talerze" },
    { word: "Saksofon",    hint: "Złoty, jazzowy instrument dęty" },
    { word: "Trąbka",      hint: "Dęta blaszana, hejnał" },
    { word: "Flet",        hint: "Cienki, dęty, drewniany" },
    { word: "Akordeon",    hint: "Miech i klawisze, lubiany w góralskich klimatach" },
    { word: "Harfa",       hint: "Duża, strunowa, anielska" },
    { word: "Ukulele",     hint: "Małe, hawajskie, cztery struny" },
    { word: "DJ",          hint: "Miksuje muzykę na imprezach" },
    { word: "Opera",       hint: "Klasyczne śpiewy w teatrze" },
    { word: "Rap",         hint: "Rytmiczne mówienie, hip-hop" },
    { word: "Disco polo",  hint: "Polski popularny gatunek z weseli" },
    { word: "Karaoke",     hint: "Śpiewasz piosenki z mikrofonem do tekstu na ekranie" },
    { word: "Chór",        hint: "Grupa śpiewa razem" },
    { word: "Festiwal",    hint: "Duża impreza muzyczna na otwartym powietrzu" },
    { word: "Orkiestra",   hint: "Wielu muzyków pod batutą dyrygenta" }
  ],

  "Technologia": [
    { word: "Smartfon",    hint: "Mały komputer w kieszeni" },
    { word: "Laptop",      hint: "Przenośny komputer" },
    { word: "Drukarka",    hint: "Drukuje dokumenty" },
    { word: "Drukarka 3D", hint: "Drukuje obiekty trójwymiarowe" },
    { word: "Robot",       hint: "Mechaniczny pracownik" },
    { word: "Dron",        hint: "Lata z kamerą, sterowany pilotem" },
    { word: "Internet",    hint: "Globalna sieć" },
    { word: "Bluetooth",   hint: "Łączy bezprzewodowo na krótko" },
    { word: "USB",         hint: "Złącze do urządzeń, podłączasz pendrive" },
    { word: "Klawiatura",  hint: "Wpisujesz na niej tekst" },
    { word: "Słuchawki",   hint: "Słuchasz przez nie muzyki" },
    { word: "Mikrofon",    hint: "Zbiera dźwięk" },
    { word: "GPS",         hint: "Pokazuje gdzie jesteś" },
    { word: "Sztuczna inteligencja", hint: "Uczy się i odpowiada na pytania" },
    { word: "VR",          hint: "Gogle, wirtualna rzeczywistość" },
    { word: "Smartwatch",  hint: "Zegarek-komputer na rękę" },
    { word: "Wi-Fi",       hint: "Bezprzewodowy internet" },
    { word: "QR kod",      hint: "Czarno-biały kwadrat do skanowania" }
  ],

  "Bajki Disneya": [
    { word: "Król Lew",       hint: "Simba, lew na sawannie" },
    { word: "Mała Syrenka",   hint: "Ariel pod wodą" },
    { word: "Aladyn",         hint: "Lampa z dżinem" },
    { word: "Frozen",         hint: "Elsa i Anna, zimowa kraina" },
    { word: "Toy Story",      hint: "Zabawki ożywają, Chudy i Buzz" },
    { word: "Auta",           hint: "Zygzak McQueen na torze" },
    { word: "Vaiana",         hint: "Wyspiarska podróż przez ocean" },
    { word: "Zwierzogród",    hint: "Króliczka i lis policjantami" },
    { word: "Coco",           hint: "Meksyk, kraina umarłych, gitara" },
    { word: "Roszpunka",      hint: "Bardzo długie blond włosy" },
    { word: "Mulan",          hint: "Chinka udająca wojownika" },
    { word: "Pocahontas",     hint: "Rdzenna Amerykanka i Anglik" },
    { word: "Piękna i Bestia", hint: "Zaklęty książę i Bella" },
    { word: "Kopciuszek",     hint: "Pantofelek i bal o północy" },
    { word: "Śpiąca Królewna", hint: "Sen na sto lat po ukłuciu wrzeciona" },
    { word: "Encanto",        hint: "Magiczny dom kolumbijskiej rodziny" },
    { word: "Iniemamocni",    hint: "Rodzina superbohaterów" },
    { word: "WALL-E",         hint: "Sprzątający robot na pustej Ziemi" }
  ],

  "Polskie miasta": [
    { word: "Warszawa",    hint: "Stolica, Pałac Kultury" },
    { word: "Kraków",      hint: "Wawel i Smok Wawelski" },
    { word: "Gdańsk",      hint: "Port, Neptun, Solidarność" },
    { word: "Wrocław",     hint: "Krasnale, Most Tumski" },
    { word: "Poznań",      hint: "Koziołki na ratuszu" },
    { word: "Łódź",        hint: "Piotrkowska, miasto fabryk" },
    { word: "Zakopane",    hint: "Stolica Tatr, Krupówki" },
    { word: "Sopot",       hint: "Molo i koncerty nad morzem" },
    { word: "Toruń",       hint: "Pierniki i Kopernik" },
    { word: "Częstochowa", hint: "Jasna Góra i Czarna Madonna" },
    { word: "Lublin",      hint: "Stare Miasto na wschodzie" },
    { word: "Katowice",    hint: "Spodek i Górny Śląsk" },
    { word: "Białystok",   hint: "Podlasie i Pałac Branickich" },
    { word: "Szczecin",    hint: "Wały Chrobrego, port nad Odrą" },
    { word: "Olsztyn",     hint: "Zamek na Warmii, kraina jezior" },
    { word: "Bydgoszcz",   hint: "Wyspa Młyńska i Brda" },
    { word: "Rzeszów",     hint: "Stolica Podkarpacia" },
    { word: "Malbork",     hint: "Największy ceglany zamek krzyżacki" }
  ],

  "Sławni Polacy": [
    { word: "Robert Lewandowski", hint: "Najlepszy polski piłkarz, snajper" },
    { word: "Maria Skłodowska-Curie", hint: "Dwa Noble, polon i rad" },
    { word: "Fryderyk Chopin",   hint: "Kompozytor, mazurki i polonezy" },
    { word: "Mikołaj Kopernik",  hint: "Wstrzymał Słońce, ruszył Ziemię" },
    { word: "Jan Paweł II",      hint: "Polski papież z Wadowic" },
    { word: "Lech Wałęsa",       hint: "Solidarność i Nobel" },
    { word: "Adam Małysz",       hint: "Skoczek narciarski, Orzeł z Wisły" },
    { word: "Wisława Szymborska", hint: "Poetka, Nobel z literatury" },
    { word: "Henryk Sienkiewicz", hint: "Quo Vadis, Trylogia" },
    { word: "Andrzej Wajda",     hint: "Reżyser, Człowiek z marmuru" },
    { word: "Kamil Stoch",       hint: "Trzykrotny mistrz olimpijski w skokach" },
    { word: "Iga Świątek",       hint: "Polska tenisistka, lider rankingu" },
    { word: "Doda",              hint: "Polska gwiazda popu" },
    { word: "Tadeusz Kościuszko", hint: "Bohater dwóch narodów" },
    { word: "Józef Piłsudski",   hint: "Marszałek, niepodległość 1918" },
    { word: "Roman Polański",    hint: "Reżyser Pianisty" },
    { word: "Czesław Miłosz",    hint: "Noblista, poeta emigracyjny" },
    { word: "Witold Pilecki",    hint: "Rotmistrz, ochotnik do Auschwitz" }
  ],

  "Mitologia": [
    { word: "Zeus",        hint: "Władca Olimpu, ciska piorunami" },
    { word: "Posejdon",    hint: "Bóg morza z trójzębem" },
    { word: "Hades",       hint: "Władca podziemi" },
    { word: "Atena",       hint: "Bogini mądrości i wojny" },
    { word: "Afrodyta",    hint: "Bogini miłości i piękna" },
    { word: "Apollo",      hint: "Bóg słońca, sztuki, łucznictwa" },
    { word: "Ares",        hint: "Bóg wojny" },
    { word: "Hermes",      hint: "Posłaniec bogów ze skrzydlatymi sandałami" },
    { word: "Herakles",    hint: "Heros, dwanaście prac" },
    { word: "Pegaz",       hint: "Skrzydlaty koń" },
    { word: "Centaur",     hint: "Pół człowiek, pół koń" },
    { word: "Minotaur",    hint: "Pół człowiek, pół byk, w labiryncie" },
    { word: "Meduza",      hint: "Włosy z węży, zamienia w kamień" },
    { word: "Cyklop",      hint: "Olbrzym z jednym okiem" },
    { word: "Odyseusz",    hint: "Sprytny bohater Odysei" },
    { word: "Achilles",    hint: "Słynna pięta, niezwyciężony wojownik" },
    { word: "Thor",        hint: "Nordycki bóg z młotem" },
    { word: "Loki",        hint: "Nordycki bóg podstępu" }
  ],

  "Zabawki i gry": [
    { word: "Lalka",       hint: "Klasyczna zabawka dla dzieci" },
    { word: "Klocki Lego", hint: "Składasz z kolorowych klocków" },
    { word: "Pluszowy miś", hint: "Miękka przytulanka" },
    { word: "Kostka Rubika", hint: "Sześcian, układasz kolory" },
    { word: "Bączek",      hint: "Kręci się i wiruje" },
    { word: "Skakanka",    hint: "Skaczesz przez nią" },
    { word: "Hula-hop",    hint: "Kręcisz wokół bioder" },
    { word: "Domino",      hint: "Czarne kostki z kropkami" },
    { word: "Monopoly",    hint: "Gra planszowa o pieniądzach" },
    { word: "Scrabble",    hint: "Układasz słowa z literek" },
    { word: "Memory",      hint: "Pary obrazków, trening pamięci" },
    { word: "Puzzle",      hint: "Łączysz kawałki w obrazek" },
    { word: "Twister",     hint: "Mata z kolorowymi kółkami i ruletka" },
    { word: "Karty",       hint: "52 sztuki w czterech kolorach" },
    { word: "Yo-yo",       hint: "Kółko na sznurku góra-dół" },
    { word: "Konsola",     hint: "Grasz na niej w gry wideo" },
    { word: "PlayStation", hint: "Konsola Sony" },
    { word: "Minecraft",   hint: "Gra z klocków pikseli" }
  ]
};

// =====================================================
//  Stan gry
// =====================================================
const state = {
  players: 4,
  impostors: 1,
  category: "Zwierzęta",
  showHint: true,
  current: 0,
  roles: [],
  word: null,
  hint: null
};

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

// =====================================================
//  Setup ekran
// =====================================================
function initSetup() {
  // Wypełnij kategorie
  const select = $("category-select");
  select.innerHTML = '<option value="__random">🎲 Losowa</option>' +
    Object.keys(CATEGORIES).map(c => `<option value="${c}">${c}</option>`).join("");

  // Liczba graczy
  $("players-minus").onclick = () => updatePlayers(-1);
  $("players-plus").onclick  = () => updatePlayers(+1);
  $("imp-minus").onclick     = () => updateImpostors(-1);
  $("imp-plus").onclick      = () => updateImpostors(+1);

  $("show-hint").onchange = (e) => state.showHint = e.target.checked;
  select.onchange = (e) => state.category = e.target.value;

  $("start-btn").onclick = startGame;
  $("rules-btn").onclick = () => showScreen("screen-rules");
  document.querySelectorAll("[data-back]").forEach(b => b.onclick = () => showScreen("screen-setup"));

  $("home-btn").onclick = () => showScreen("screen-setup");
  $("play-again-btn").onclick = startGame;
  $("vote-btn").onclick = endRound;
  $("reveal-btn").onclick = revealCard;
  $("hide-btn").onclick = nextPlayer;

  initTimer();
}

function updatePlayers(delta) {
  state.players = Math.max(3, Math.min(12, state.players + delta));
  $("players-count").textContent = state.players;
  // Impostor max = players - 2
  if (state.impostors > state.players - 2) {
    state.impostors = state.players - 2;
    $("imp-count").textContent = state.impostors;
  }
}

function updateImpostors(delta) {
  const max = Math.max(1, state.players - 2);
  state.impostors = Math.max(1, Math.min(max, state.impostors + delta));
  $("imp-count").textContent = state.impostors;
}

// =====================================================
//  Logika gry
// =====================================================
function startGame() {
  // Wybierz kategorię
  let cat = state.category;
  if (cat === "__random") {
    const keys = Object.keys(CATEGORIES);
    cat = keys[randInt(keys.length)];
  }
  state.activeCategory = cat;

  // Wybierz hasło
  const list = CATEGORIES[cat];
  const item = list[randInt(list.length)];
  state.word = item.word;
  state.hint = item.hint;

  // Przydziel role
  const roles = new Array(state.players).fill("crew");
  const impostorIdx = shuffle([...Array(state.players).keys()]).slice(0, state.impostors);
  impostorIdx.forEach(i => roles[i] = "impostor");
  state.roles = roles;
  state.current = 0;

  showCardCover();
  showScreen("screen-card");
}

function showCardCover() {
  $("card-player-name").textContent = `Gracz ${state.current + 1}`;
  $("card-cover").classList.remove("hidden");
  $("card-reveal").classList.add("hidden");
}

function revealCard() {
  $("card-cover").classList.add("hidden");
  $("card-reveal").classList.remove("hidden");

  const role = state.roles[state.current];
  if (role === "impostor") {
    $("card-word-box").classList.add("hidden");
    $("card-impostor").classList.remove("hidden");
    $("impostor-category").textContent = state.activeCategory;
  } else {
    $("card-word-box").classList.remove("hidden");
    $("card-impostor").classList.add("hidden");
    $("card-word").textContent = state.word;
    $("card-hint").textContent = state.showHint ? state.hint : "";
    $("card-hint").style.display = state.showHint ? "block" : "none";
  }
}

function nextPlayer() {
  state.current++;
  if (state.current >= state.players) {
    // Wszyscy obejrzeli - przejdź do dyskusji
    $("discuss-category").textContent = state.activeCategory;
    resetTimer();
    showScreen("screen-discuss");
  } else {
    showCardCover();
  }
}

function endRound() {
  stopTimer();
  $("result-word").textContent = state.word;
  $("result-hint").textContent = state.hint;
  const impIndices = state.roles
    .map((r, i) => r === "impostor" ? `Gracz ${i + 1}` : null)
    .filter(Boolean);
  $("result-impostor").textContent = impIndices.join(", ");
  showScreen("screen-result");
}

// =====================================================
//  Timer
// =====================================================
let timerInterval = null;
let timerSeconds = 120;

function initTimer() {
  $("timer-start").onclick = toggleTimer;
  $("timer-reset").onclick = resetTimer;
}

function updateTimerDisplay() {
  const m = String(Math.floor(timerSeconds / 60)).padStart(2, "0");
  const s = String(timerSeconds % 60).padStart(2, "0");
  $("timer-display").textContent = `${m}:${s}`;
}

function toggleTimer() {
  if (timerInterval) {
    stopTimer();
  } else {
    $("timer-start").textContent = "⏸ Pauza";
    timerInterval = setInterval(() => {
      timerSeconds--;
      updateTimerDisplay();
      if (timerSeconds <= 0) {
        stopTimer();
        if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
      }
    }, 1000);
  }
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  $("timer-start").textContent = "▶ Start";
}

function resetTimer() {
  stopTimer();
  timerSeconds = 120;
  updateTimerDisplay();
}

// =====================================================
//  Init
// =====================================================
document.addEventListener("DOMContentLoaded", () => {
  initSetup();
  updateTimerDisplay();
});
