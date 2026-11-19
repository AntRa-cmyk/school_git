# Galeria

Strona galeria zaimplementowana w react'cie

# Funkcjonalność

- Podgląd listy zdjęć
- "Uwielbianie" zdjęć
- Usuwanie zdjęć
- Filtrowanie po kategori zdjęć
- Dodawanie zdjęć
- podgląd na pojedyńcze zdjęcie
- Obsługa gdy URL jest nieprawidłowy
- Losowanie losowego zdjęcia

# Podstrony

- `/` - Głowna strona galeri
- `/zdjecia/:id` - Strona szczegółów dla pojedyńczego zdjęcia o danym ID
- `/dodaj` - Strona z formularzem do dodawania zdjęć

inne URL'e są nieprawidłowe, i przekierują użytkownika do podstrony informującej że "nie odnaleziono podstrony"

# Architektura i konwencja

Kod źródłowy znajduje się w `src/`. I jest zorganizowany na katalogi:

- `src/components` - pojedyńcze komponenty react'a
- `src/hooks` - funkcje pomocnicze dla react'a
- `src/services` - funkcje pomocnicze które nie zależą na react'cie
- `src/pages` - podstrony aplikacji, zaimplementowane z użyciem `react-router-dom` jako komponenty

Wszelka logika powinna być w `src/services` lub `src/hooks`. Komponenty nie powinny implementować nie trivial'nej logiki

`PascalCase` jest używany dla nazw komponentów, podczas gdy `camelCase` jest używanych do innych zmiennych

# Uruchomienie

Najpierw, należy zainstalować wszystkie potrzebne paczki. Uruchom `npm install` w terminalu

Żeby uruchomić aplikacje należy uruchomić `npm run dev` w tym katalogu, oraz wejść na wskazaną stronę. Dokładny URL może się nieco różnić, ale najczęściej to `localhost:5173`

```sh
npm install
npm run dev
```