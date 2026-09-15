// Zadanie 2 — punkt wyjścia: kod w starym stylu (ES5).
// Tego pliku NIE poprawiamy. Zostaje jako dowód, co się zmieniło.

var kursy = [
  { nazwa: "React", godziny: 30, aktywny: true },
  { nazwa: "Node.js", godziny: 20, aktywny: false },
  { nazwa: "MySQL", godziny: 15, aktywny: true },
  { nazwa: "Bootstrap", godziny: 10, aktywny: true }
];

const nazwyAktywnych = (tablica) => tablica.filter((v) => v.aktywny)

const sumaGodzin = (tablica) => tablica.reduce((s, v) => s + v.godziny, 0)


const opis = (kurs) => `Kurs ${kurs.nazwa} trwa ${kurs.godziny} godzin`;


console.log(nazwyAktywnych(kursy))
console.log(sumaGodzin(kursy))
console.log(opis(kursy[1]))
