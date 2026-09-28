var kursy = [
  { nazwa: "React", godziny: 30, aktywny: true },
  { nazwa: "Node.js", godziny: 20, aktywny: false },
  { nazwa: "MySQL", godziny: 15, aktywny: true },
  { nazwa: "Bootstrap", godziny: 10, aktywny: true }
];


const nazwyAktywnych = (tablica) => tablica.filter(v => v.aktywny)

const sumaGodzin = (tablica) => tablica.reduce((v, r) => r += v.godziny, 0)

const opis = (kurs) => `Kurs ${kurs.nazwa} trawa ${kurs.godziny} godzin`
