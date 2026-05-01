# 🎭 Impostor — Gra Imprezowa

Webowa gra towarzyska po polsku. Jeden telefon krąży po stole — każdy widzi swoje
hasło lub dowiaduje się, że jest **impostorem**. Po dyskusji głosujecie kto blefował.

## Funkcje

- **15 kategorii**, ponad 250 haseł z podpowiedziami
- 3–12 graczy, regulowana liczba impostorów
- Tryb z podpowiedziami lub bez (trudniejszy)
- Wbudowany timer dyskusji
- 100 % offline po załadowaniu — działa na każdym telefonie

## Kategorie haseł

Zwierzęta · Jedzenie · Sport · Kraje · Zawody · Owoce i warzywa · Pojazdy ·
Muzyka · Technologia · Bajki Disneya · Polskie miasta · Sławni Polacy ·
Mitologia · Zabawki i gry

## Szybki deploy na Coolify

1. W Coolify utwórz **New Resource → Public Repository** i wskaż to repo.
2. Build Pack: **Dockerfile** (autodetekcja).
3. Exposed Port: `80`.
4. Deploy. Gotowe — Coolify sam ustawi domenę i HTTPS.

## Uruchomienie lokalne

```bash
docker compose up -d
# otwórz http://localhost:3000
```

## Jak grać

1. Wybierz liczbę graczy i kategorię.
2. Każdy gracz po kolei zagląda do swojej karty.
3. Każdy mówi **jedno słowo** opisujące hasło — impostor blefuje.
4. Głosujcie: kto jest impostorem?
