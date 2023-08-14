<h1>Projeto-Cypress-Gbmarketplace</h1>

### [Site ultilizado para os testes](https://gb-markeplace-react.vercel.app)

## Caso de Teste com GHERKIN: [TestCase](testCase.md)

## Funcionalidade de Carrinho
- Deve mostrar os dados do produto adicionado ao carrinho
- Deve remover o produto do carrinho
- Deve exibir uma mensagem se não houver produto no carrinho
  
![cart cy js](https://github.com/GabrielBento299/Projeto-GbMarketplace-Cypress/assets/86307663/b4e7a119-ca6f-486b-8f05-9e8e65b0dc56)

## Funcionalidade Page Home
- Deve exibir uma mensagem quando adicionar o produto no carrinho
- Deve aumentar a quantidade ao adicionar um item ao carrinho
- Deve exibir uma mensagem quando remover o produto no carrinho
- Deve diminuir a quantidade ao adicionar um item ao carrinho

![commerce cy js](https://github.com/GabrielBento299/Projeto-GbMarketplace-Cypress/assets/86307663/1dce54de-75bb-44de-9a8f-c66440e9c8f3)

## Funcionalidade de Busca
- Deve pesquisar um produto com sucesso
- Deve exibir um erro ao pesquisar um produto que não existe

![search cy js](https://github.com/GabrielBento299/Projeto-GbMarketplace-Cypress/assets/86307663/9fe01732-da30-4319-bb1d-10ac02694ba0)

# Resultado dos testes:
![Captura de tela 2023-08-10 173312](https://github.com/GabrielBento299/Projeto-GbMarketplace-Cypress/assets/86307663/b2488b3a-d579-4c5c-ba33-bb2f4e1c0384)

## Pré-requisitos:
- [NodeJS](https://nodejs.org/en/download/ "NodeJS")

## Ferramentas utilizadas:
- [VSCode](https://code.visualstudio.com/ "VSCode")
- [Cypress](https://www.npmjs.com/package/cypress "Cypress")
#####

## Tutorial, Instalação e execução

### Executar este projeto em sua maquina

* Em um terminal, dentro da pasta do projeto, execute o seguinte comando:

**Instalar as dependências:**  
```
npm install
```

### Utilizando o cypress

* Em um terminal execute o comando abaixo para abrir o cypress:
```
npx cypress open 
```

* Para executar os testes diretamente use:
```
npx cypress run 
```

Feito com 💜 &nbsp;por Gabriel Bento 👋 &nbsp;[Meu linkedin](https://www.linkedin.com/in/santosgabriel299/)
