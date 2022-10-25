const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui

emailListInData.forEach(showEmailList);

//COMO EU FARIA COM UM FOR NORMAL//
//for (let index = 0; index < emailListInData.length; index += 1) {
//  console.log(`O email ${emailListInData} esta cadastrado em nosso banco de dados!`);
//}