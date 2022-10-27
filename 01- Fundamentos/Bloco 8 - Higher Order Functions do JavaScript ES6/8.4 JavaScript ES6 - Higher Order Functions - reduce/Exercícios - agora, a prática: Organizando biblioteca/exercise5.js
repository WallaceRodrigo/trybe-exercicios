const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

function containsA() {
  let totalOfLettersA = 0;
  names.forEach((name) => {
    const lettersFromName = name.split('');
    totalOfLettersA += lettersFromName.reduce((lettersAInName, currentLetter) => {
      if (currentLetter === 'a' || currentLetter === 'A') {
        return lettersAInName + 1;
      }
      return lettersAInName;
    }, 0);
  });
  return totalOfLettersA;
}

console.log(containsA());