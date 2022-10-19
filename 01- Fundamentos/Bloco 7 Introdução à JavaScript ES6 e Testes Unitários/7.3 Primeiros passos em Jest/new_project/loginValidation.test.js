// loginValidation.test.js
const {
  greetingMessage,
  loginErrorMessage,
  verifyCredentials,
} = require("./loginValidation.js");

describe("Testa a função verifyCredentials()", () => {

  it("greetingMessage() retorna uma mensagem no formato: `Hello, ${user}! Que bom ter você de volta`", () => {
    expect(greetingMessage("Lucas")).toBe(
      "Hello, Lucas! Que bom ter você de volta"
    );
  });

  it("loginErrorMessage() retorna uma mensagem no formato: `Pessoa usuária '${user}' não encontrada, tente novamente!`", () => {
    expect(loginErrorMessage("Bob")).toBe(
      "Pessoa usuária 'Bob' não encontrada, tente novamente!"
    );
  });  
});