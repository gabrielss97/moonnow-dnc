# Validação de formulário

Este projeto consiste em uma página com um formulário de inscrição, onde o usuário deve preencher seu nome e e-mail para poder se inscrever. Ao submeter o formulário, o código em JavaScript faz uma validação dos campos preenchidos antes de enviar o formulário para o servidor.

## Funcionamento

Ao clicar no botão "Enviar", o evento `submit` é disparado no formulário (`form`). O código em JavaScript cancela o comportamento padrão do evento, que é enviar o formulário para o servidor, usando o método `preventDefault()` do objeto `event`.

Em seguida, o código verifica se o campo de nome (`nameInput`) está preenchido corretamente. Se o campo estiver em branco, a mensagem de erro `Por favor, preencha seu nome` é exibida no elemento `nameError`. Caso contrário, o campo é considerado válido e a mensagem de erro é apagada. O campo é considerado válido se houver ao menos um caractere diferente de espaço em branco, para isso utilizamos a função `trim()`.

A validação do campo de e-mail (`emailInput`) é feita de maneira semelhante. Se o campo estiver em branco, a mensagem de erro `Por favor, preencha seu e-mail` é exibida. Se o campo estiver preenchido, a expressão regular `/\S+@\S+\.\S+/` é utilizada para validar se o valor do campo é um e-mail válido. Caso o valor do campo não passe na validação da expressão regular, a mensagem de erro `Insira um e-mail válido` é exibida. Caso o valor do campo passe na validação, é feita uma verificação adicional para validar se o provedor do e-mail é válido. Se o provedor for válido, o campo é considerado válido e a mensagem de erro é apagada. Caso o provedor não seja válido, a mensagem de erro `Insira um e-mail válido` é exibida.

O provedor do e-mail é obtido utilizando o método `split()` da classe `String`, que quebra a string em um array a cada ocorrência do caractere passado como argumento. Nesse caso, a string é quebrada em dois elementos: o nome do usuário e o provedor de e-mail, separados pelo caractere `@`. O provedor de e-mail é o segundo elemento do array retornado pelo método `split()`. A função `includes()` é utilizada para verificar se o provedor do e-mail está presente no array de provedores válidos (`emails`).

Se tanto o campo de nome quanto o campo de e-mail estiverem preenchidos corretamente, a mensagem de sucesso `Formulário enviado com sucesso` é exibida no elemento `success`, e a classe `success-style` é adicionada ao elemento. Os campos de nome e e-mail são limpos utilizando o valor `""`, as variáveis `namePass` e `emailPass` são reinicializadas para `false`. Caso algum dos campos não esteja preenchido corretamente, a mensagem de sucesso é apagada e a classe `success-style` é removida do elemento `success`.

## Principais métodos utilizados:

- `document.querySelector()`: método que seleciona o primeiro elemento que corresponde a um seletor CSS especificado. Neste código, é utilizado para selecionar elementos da página pelos seus ids.

- `event.preventDefault()`: método que previne o comportamento padrão do evento. Neste caso, é utilizado para evitar que o formulário seja enviado quando o usuário clica no botão "Enviar".

- `String.prototype.trim()`: método que remove os espaços em branco no início e no final de uma string. Neste código, é utilizado para verificar se o nome e o e-mail foram preenchidos com espaços em branco.

- `RegExp.prototype.test()`: método que testa se uma string corresponde a uma expressão regular. Neste código, é utilizado para verificar se o formato do e-mail é válido.

- `Array.prototype.includes()`: método que determina se um array inclui um determinado elemento, retornando true ou false. Neste código, é utilizado para verificar se o provedor de e-mail está presente na lista de provedores permitidos.

- `Element.classList.add()`: método que adiciona uma ou mais classes a um elemento. Neste código, é utilizado para adicionar a classe "error" ou "success-style" ao elemento que exibe as mensagens de erro ou sucesso.

- `Element.classList.remove()`: método que remove uma ou mais classes de um elemento. Neste código, é utilizado para remover a classe "error" ou "success-style" do elemento que exibe as mensagens de erro ou sucesso.

- `HTMLElement.textContent()`: propriedade que define ou retorna o conteúdo de texto de um elemento. Neste código, é utilizado para exibir as mensagens de erro ou sucesso ao usuário.

- `Element.value`: propriedade que define ou retorna o valor do atributo "value" de um elemento de formulário. Neste código, é utilizado para limpar o conteúdo dos campos do formulário após o envio bem-sucedido.

### Explicação detalhada da condição Regex

`!/\S+@\S+\.\S+/.test(emailInput.value.trim())`

Esse código é uma expressão regular que é usada para validar se o valor inserido em um campo de entrada de e-mail é um endereço de e-mail válido.

Vou explicar um pouco mais detalhadamente:

A barra invertida (!) no início da expressão é um operador de negação, que nega o resultado da expressão que vem a seguir.
Em seguida, temos a expressão regular /\S+@\S+.\S+/, que valida se a entrada tem pelo menos um caractere não-branco antes do símbolo de arroba (@), seguido pelo símbolo de arroba, seguido por pelo menos um caractere não-branco antes do ponto (.), e finalmente, seguido por pelo menos um caractere não-branco após o ponto.
O método .test() é chamado na string de entrada (emailInput.value.trim()) e retorna true se a string passada como parâmetro corresponder à expressão regular.
Portanto, a expressão !/\S+@\S+.\S+/.test(emailInput.value.trim()) retorna true se a string de entrada não corresponder à expressão regular, ou seja, se não for um endereço de e-mail válido.
