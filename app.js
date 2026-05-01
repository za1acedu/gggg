// =====================================================
//  IMPOSTOR — baza haseł (tylko jedno-wyrazowe)
// =====================================================
const CATEGORIES = {
  "Zwierzęta": [
    "Słoń", "Pingwin", "Krokodyl", "Żyrafa", "Hipopotam", "Jeż", "Sowa",
    "Kameleon", "Delfin", "Wilk", "Pszczoła", "Mrówka", "Lew", "Tygrys",
    "Kangur", "Wieloryb", "Nietoperz", "Pająk", "Goryl", "Foka", "Borsuk",
    "Lis", "Wąż", "Sokół", "Pantera", "Niedźwiedź"
  ],

  "Jedzenie": [
    "Pizza", "Pierogi", "Sushi", "Hamburger", "Kebab", "Ramen", "Spaghetti",
    "Schabowy", "Bigos", "Naleśniki", "Lody", "Sernik", "Czekolada", "Tiramisu",
    "Frytki", "Taco", "Croissant", "Gołąbki", "Pączek", "Zapiekanka", "Burrito",
    "Pulpety", "Żurek", "Rosół", "Sałatka", "Kanapka"
  ],

  "Sport": [
    "Tenis", "Siatkówka", "Pływanie", "Boks", "Szachy", "Curling", "Łyżwiarstwo",
    "Narciarstwo", "Hokej", "Golf", "Maraton", "Snowboard", "Surfing", "Łucznictwo",
    "Judo", "Karate", "Koszykówka", "Futbol", "Bilard", "Rugby", "Krykiet",
    "Wioślarstwo", "Lekkoatletyka", "Kolarstwo", "Zapasy", "Szermierka"
  ],

  "Kraje": [
    "Polska", "Japonia", "Brazylia", "Egipt", "Włochy", "Francja", "Hiszpania",
    "Grecja", "Niemcy", "Australia", "Indie", "Meksyk", "Norwegia", "Kanada",
    "Chiny", "Islandia", "Tajlandia", "Maroko", "Portugalia", "Turcja", "Szwecja",
    "Holandia", "Argentyna", "Wietnam", "Kuba", "Kenia"
  ],

  "Zawody": [
    "Lekarz", "Strażak", "Policjant", "Nauczyciel", "Piekarz", "Pilot", "Kucharz",
    "Architekt", "Programista", "Fryzjer", "Mechanik", "Ogrodnik", "Listonosz",
    "Aktor", "Dentysta", "Adwokat", "Weterynarz", "Astronauta", "Murarz",
    "Stolarz", "Hydraulik", "Elektryk", "Sędzia", "Polityk", "Dziennikarz", "Krawiec"
  ],

  "Owoce i warzywa": [
    "Banan", "Jabłko", "Truskawka", "Arbuz", "Ananas", "Awokado", "Marchewka",
    "Ziemniak", "Pomidor", "Ogórek", "Brokuł", "Kiwi", "Mango", "Papryka",
    "Granat", "Cytryna", "Bakłażan", "Czosnek", "Cebula", "Kalafior", "Sałata",
    "Rzodkiewka", "Brzoskwinia", "Wiśnia", "Śliwka", "Gruszka"
  ],

  "Pojazdy": [
    "Samolot", "Pociąg", "Helikopter", "Statek", "Motocykl", "Rower", "Hulajnoga",
    "Czołg", "Tramwaj", "Autobus", "Taksówka", "Ciężarówka", "Rakieta", "Karetka",
    "Quad", "Balon", "Kajak", "Skuter", "Limuzyna", "Furgonetka", "Bryczka",
    "Sanie", "Łódź", "Okręt", "Trolejbus", "Wózek"
  ],

  "Muzyka": [
    "Gitara", "Pianino", "Skrzypce", "Perkusja", "Saksofon", "Trąbka", "Flet",
    "Akordeon", "Harfa", "Ukulele", "Opera", "Rap", "Karaoke", "Chór", "Festiwal",
    "Orkiestra", "Klarnet", "Mandolina", "Banjo", "Kontrabas", "Wiolonczela",
    "Bęben", "Cymbały", "Reggae", "Rock", "Disco"
  ],

  "Technologia": [
    "Smartfon", "Laptop", "Drukarka", "Robot", "Dron", "Internet", "Bluetooth",
    "USB", "Klawiatura", "Słuchawki", "Mikrofon", "GPS", "Smartwatch", "Tablet",
    "Pendrive", "Router", "Modem", "Procesor", "Monitor", "Aparat", "Skaner",
    "Konsola", "Mysz", "Kamera", "Hologram", "Powerbank"
  ],

  "Bajki Disneya": [
    "Frozen", "Aladyn", "Vaiana", "Zwierzogród", "Coco", "Roszpunka", "Mulan",
    "Pocahontas", "Kopciuszek", "Encanto", "Iniemamocni", "Bambi", "Dumbo",
    "Pinokio", "Tarzan", "Herkules", "Stitch", "Simba", "Ariel", "Buzz",
    "Bella", "Aurora", "Auta", "Shrek", "Nemo"
  ],

  "Polskie miasta": [
    "Warszawa", "Kraków", "Gdańsk", "Wrocław", "Poznań", "Łódź", "Zakopane",
    "Sopot", "Toruń", "Częstochowa", "Lublin", "Katowice", "Białystok", "Szczecin",
    "Olsztyn", "Bydgoszcz", "Rzeszów", "Malbork", "Gdynia", "Opole", "Kielce",
    "Radom", "Gniezno", "Płock", "Tarnów", "Świnoujście"
  ],

  "Sławni Polacy": [
    "Lewandowski", "Skłodowska", "Chopin", "Kopernik", "Wałęsa", "Małysz",
    "Szymborska", "Sienkiewicz", "Wajda", "Stoch", "Świątek", "Doda", "Kościuszko",
    "Piłsudski", "Polański", "Miłosz", "Pilecki", "Wojtyła", "Mickiewicz",
    "Słowacki", "Tusk", "Reksio", "Boniek", "Kubica", "Penderecki", "Reymont"
  ],

  "Mitologia": [
    "Zeus", "Posejdon", "Hades", "Atena", "Afrodyta", "Apollo", "Ares", "Hermes",
    "Herakles", "Pegaz", "Centaur", "Minotaur", "Meduza", "Cyklop", "Odyseusz",
    "Achilles", "Thor", "Loki", "Hera", "Artemida", "Persefona", "Dionizos",
    "Odyn", "Walkiria", "Hefajstos", "Eros"
  ],

  "Zabawki i gry": [
    "Lalka", "Lego", "Miś", "Rubik", "Bączek", "Skakanka", "Domino", "Monopoly",
    "Scrabble", "Memory", "Puzzle", "Twister", "Karty", "Yo-yo", "Konsola",
    "PlayStation", "Minecraft", "Frisbee", "Warcaby", "Pinball", "Bierki",
    "Pajacyk", "Kalambury", "Klocki", "Kapsle"
  ],

  "Polska impreza": [
    "Wódka", "Kac", "Wujek", "Karaoke", "Pizza", "Kebab", "Disco", "Polonez",
    "Szampan", "Piwo", "Tańce", "Toast", "Nalewka", "Bimber", "Imieniny",
    "Andrzejki", "Sylwester", "Setka", "Shot", "Grill", "Ognisko", "Sąsiad",
    "Patelnia", "Lampka", "Drzemka", "Bałagan"
  ],

  "Polskie wesele": [
    "Welon", "Bukiet", "Tort", "Polonez", "Oczepiny", "Świadek", "Druhna",
    "Toast", "Szampan", "Konfetti", "Pierścionek", "Garnitur", "Suknia",
    "Obrączki", "Kelner", "Konferansjer", "Wesele", "Ślub", "Ksiądz", "Orszak",
    "Goście", "Bramy", "Korowód", "Kotlety", "Kapela", "Limuzyna"
  ],

  "Klubowa noc": [
    "Bramkarz", "Strobo", "Drink", "Selfie", "Taksówka", "Glitter", "Bar", "Klub",
    "Tańce", "Numer", "Portfel", "Telefon", "Muzyka", "Szatnia", "Stempel",
    "Shot", "Kolejka", "Kibel", "Garderoba", "Parkiet", "Wejściówka", "Lampka",
    "Imprezowicz", "Tequila", "Mojito", "DJ"
  ],

  "Imprezowy poranek": [
    "Kac", "Tabletka", "Pizza", "Mleko", "Spacer", "Smutek", "Wstyd", "Galeria",
    "Drzemka", "Mdłości", "Migrena", "Rosół", "Apap", "Łazienka", "Sen", "Płacz",
    "Wyrzuty", "Ucieczka", "Kawa", "Aspiryna", "Cisza", "Niedziela", "Telefon",
    "Wymioty", "Wstanie", "Pościel"
  ]
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
//  Setup ekran
// =====================================================
function initSetup() {
  const select = $("category-select");
  select.innerHTML = '<option value="__random">🎲 Losowa</option>' +
    Object.keys(CATEGORIES).map(c => `<option value="${c}">${c}</option>`).join("");

  $("imp-minus").onclick = () => updateImpostors(-1);
  $("imp-plus").onclick  = () => updateImpostors(+1);
  $("add-player-btn").onclick = addPlayer;

  select.onchange = (e) => state.category = e.target.value;

  $("start-btn").onclick = startGame;
  $("rules-btn").onclick = () => showScreen("screen-rules");
  document.querySelectorAll("[data-back]").forEach(b => b.onclick = () => showScreen("screen-setup"));

  $("home-btn").onclick = () => showScreen("screen-setup");
  $("play-again-btn").onclick = startGame;
  $("reveal-btn").onclick = revealCard;
  $("hide-btn").onclick = afterCard;
  $("back-to-setup-btn").onclick = () => showScreen("screen-setup");
  $("reveal-impostor-btn").onclick = endRound;
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

  const list = CATEGORIES[cat];
  state.word = list[randInt(list.length)];

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
  $("result-hint").textContent = state.activeCategory;
  const impNames = state.roles
    .map((r, i) => r === "impostor" ? state.players[i] : null)
    .filter(Boolean);
  $("result-impostor").textContent = impNames.join(", ");
  showScreen("screen-result");
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
