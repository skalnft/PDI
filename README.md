# Desafio PDI Angular - RxJS

Este projeto foi criado com [Angular CLI](https://github.com/angular/angular-cli) versão 14.1.2 and [Node](https://nodejs.org/) 16.16.0

## Objetivo:
O objetivo deste desafio é aprender um pouco mais sobre usar a biblioteca RxJS. Esta é uma lib bem extensa, com vários recursos. Vamos focar em coisas que possamos usar mais no dia a dia. 

## Desafio:
Para facilitar o desenvolvimento e acompanhamento do que vocễ fará, vamos estruturar esse desafio em pequenos passos. 

- Faça um fork deste projeto.
- Instale as dependências e coloque o projeto rodar com ng s.
- Verifique que o projeto terá os seguintes componentes:
  - O primeiro componente: é um componente que irá mostrar valores a cada 1 segundo.
  - O segundo componente, é somente um botão que irá consultar uma API de cotações de moedas e mostrar o valor do dólar em relação ao real, no momento em que for clicado no botão.
  - O terceiro componente é composto de outros dois componentes onde um enviará informações e outro deverá ouvir.
- Baseado nestes componentes, deverão ser feitos os desafios.


### Desafio do componente 1:

- Aqui você usará o componente timer.component.
- Usando o interval do RxJS, crie um observable.
- A partir deste observable, duas variáveis deverão ouví-lo. 
  - A primeira irá só mostrar o valor normal em tela. 
  - A segunda, deverá mostrar o valor multiplicado por 2 (utilize pipe e map).
- Faça com que os valores sejam mostrados em tela utilizando reatividade.


### Desafio do componente 2

- O nome do componente é “cotacao.component”.
- Hoje este componente faz a busca da cotação do real para dólar e mostra. Mas ele faz isso de forma imperativa, ou seja, eu preciso atualizar o valor da variável cotação para que reflita na tela, ao invés de ser de forma reativa, onde eu ouviria a chamada e alteraria automaticamente o valor na tela. 
- É isso que você precisa fazer: transforme essa forma imperativa de mostrar o valor da cotação em reativa.
- Porém, nada é tão simples kkk. Nesta requisição, não utilizaremos o HttpClient do Angular. Você mesmo terá que criar um Observable que retorne o resultado. Para isso, você vai usar o fetchAPI, que é do próprio JS. O fetch retorna uma Promise. Será necessário transformá-la num observable. 
- Para isso: 
  - crie um observable.
  - este observable deverá emitir o resultado da requisição logo quando a promise for finalizada e, na sequência, dar o complete.
    - se a promise for finalizada com sucesso (response.ok), deverá emitir o json;
    - senão, deverá emitir o HTTP status do erro.
  - se a requisição der erro, deverá emitir um erro.



### Desafio do componente 3

- Este vai usar o componente comunicacao.component.
- Dentro do trigger.component, utilizando o fromEvent do RxJS, fique ouvindo qualquer coisa que for digitada no input.
- Use alguns pipes, como:
  - debounceTime: para que o input só dispare a ação após 400ms.
  - distinctUntilChanged: para que só dispare a ação se houver mudanças no input após o tempo de espera do debounceTime.
  - map: transforme todas as letras em minúsculas.
- Após isso, emita o valor para o Subject que há no comunicacao.service. 
- Agora, lá no listener.component, faça uma subscrição no subject do comunicacao.service e, de forma reativa, mostre os valores alterados lá no HTML.

