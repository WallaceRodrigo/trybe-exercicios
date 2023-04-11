# Exercício 1
## Qual é a função do código de status 400 e 422?
De acordo com o site do MDN, status code com valores de 400 a 499, são erros do cliente:

400 Bad Request: Essa resposta significa que o servidor não entendeu a requisição, pois está com uma sintaxe inválida.
422 Unprocessable Entity: A requisição está bem formada mas inabilitada para ser seguida devido aos erros semânticos.


# Exercício 2
## Qual é a função do código de status 401?

Ainda de acordo com o site do MDN e na faixa dos status com valores 400:

401 Unauthorized: Embora o padrão HTTP especifique “unauthorized”, semanticamente, essa resposta significa “unauthenticated”. Ou seja, o cliente deve se autenticar para obter a resposta solicitada.