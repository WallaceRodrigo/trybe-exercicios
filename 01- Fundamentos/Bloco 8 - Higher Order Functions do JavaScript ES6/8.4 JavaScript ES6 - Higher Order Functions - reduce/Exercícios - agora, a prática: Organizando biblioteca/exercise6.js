const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

function studentAverage(students, grades) {
  // escreva seu código aqui
  return students.map((student, index) => ({ 
    name: student, 
    average: grades[index].reduce((acc, curr) => (acc + curr)) / grades[index].length }))
}

console.log(studentAverage(students, grades));