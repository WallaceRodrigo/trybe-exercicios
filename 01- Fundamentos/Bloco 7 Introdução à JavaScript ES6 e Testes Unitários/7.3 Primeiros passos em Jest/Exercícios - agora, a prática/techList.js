function techList (array, name) {
  if (array.length <= 0) {
    return 'Vazio!'
  }

  const techList = [];
  const sortedArray = array.sort();

  for (let index = 0; index < array.length; index += 1) {
    techList.push({
      tech: sortedArray[index],
      name,
    })
  }

  return techList;
};

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

module.exports = techList;