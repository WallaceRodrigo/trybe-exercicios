const { encode, decode } = require("./encodeDecode");

describe('Test Encode', () => {

  test('test encode is a function', () => {
    expect(typeof encode).toBe('function');
  })

  test('converte apenas a vogal "a" no número 1', () => {
    expect(encode('a')).toEqual('1');
  });

  test('converte a vogal "e" no número 2', () => {
    expect(encode('e')).toEqual('2');
  });

  test('converte a vogal "i" no número 3', () => {
    expect(encode('i')).toEqual('3');
  });

  test('converte a vogal "o" no número 4', () => {
    expect(encode('o')).toEqual('4');
  });

  test('converte a vogal "u" no número 5', () => {
    expect(encode('u')).toEqual('5');
  });

  test('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(encode('trybe').length).toEqual(5);;
  });
});

describe('Test Decode', () => {

  test('test decode is a function', () => {
    expect(typeof decode).toBe('function');
  })

  test('converte apenas a vogal "a" no número 1', () => {
    expect(encode('a')).toEqual('1');
  });

  test('converte a vogal "e" no número 2', () => {
    expect(encode('e')).toEqual('2');
  });

  test('converte a vogal "i" no número 3', () => {
    expect(encode('i')).toEqual('3');
  });

  test('converte a vogal "o" no número 4', () => {
    expect(encode('o')).toEqual('4');
  });

  test('converte a vogal "u" no número 5', () => {
    expect(encode('u')).toEqual('5');
  });

  test('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(encode('trybe').length).toEqual(5);;
  });
  
});