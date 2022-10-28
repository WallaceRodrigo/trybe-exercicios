
const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;
console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log(weekend); // ['Saturday', 'Sunday']

const weekdays = [...workDays, ...weekend];
console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']


const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brasileira',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const person = {...user, ...jobInfos}

const { name, age, nationality, profession, squad, squadInitials } = person

const infos = `Oi, meu nome é ${name}, eu tenho ${age} anos, e sou ${nationality}. Eu trabalho como ${profession} e meu squad é ${squadInitials} - ${squad}`
console.log(infos);