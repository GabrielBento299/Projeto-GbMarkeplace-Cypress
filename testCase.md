Funcionalidade de Carrinho:

Como um comprador do Gb Marktplace, 
<br>
quero interagir de maneira intuitiva com o carrinho de compras para gerenciar os produtos que desejo comprar,
<br>
proporcionando-me controle total sobre minha seleção antes de finalizar a compra.

    Cenário: Mostrar dados do produto adicionado ao carrinho
    Dado que há um produto disponível
    Quando eu adiciono um produto ao carrinho
    Então os detalhes do produto devem ser exibidos no carrinho
    
    Cenário: Remover produto do carrinho
    Dado que há um produto no carrinho
    Quando eu removo o produto do carrinho
    Então o carrinho deve estar vazio
    
    Cenário: Exibir mensagem sem produto no carrinho
    Dado que o carrinho está vazio
    Quando eu tentar visualizar o carrinho
    Então uma mensagem informando que não há produtos no carrinho deve ser exibida

<------------------------------------------------------------------------------><------------------------------------------------------------------------->

Funcionalidade de Page Home:
Como um comprador do Gb Marktplace, 
<br>
Quero uma experiência de compra mais tranquila ao utilizar a funcionalidade da Página Inicial,
<br>
Para confirmar que selecionei o item e a quantidade correta antes de ir para o carrinho.

    Cenário 1: Exibir mensagem ao adicionar produto ao carrinho
    Dado que eu estou na página inicial
    Quando eu adiciono um produto ao carrinho
    Então uma mensagem de confirmação de adição ao carrinho deve ser exibida

    Cenário 2: Aumentar quantidade ao adicionar item ao carrinho
    Dado que eu estou na página inicial
    Quando eu adiciono um produto ao carrinho
    Então a quantidade no carrinho deve ser aumentada
    
    Cenário 3: Exibir mensagem ao remover produto do carrinho
    Dado que eu estou na página inicial
    Quando eu removo um produto do carrinho
    Então uma mensagem de confirmação de remoção do carrinho deve ser exibida
    
    Cenário 4: Diminuir quantidade ao adicionar item ao carrinho
    Dado que eu estou na página inicial
    Quando eu removo um produto do carrinho
    Então a quantidade desse item no carrinho deve ser diminuidada

<------------------------------------------------------------------------------><------------------------------------------------------------------------->


Funcionalidade de Busca:
Como um comprador do Gb Marktplace, 
<br>
Quero uma maneira rápida e precisa de encontrar os produtos que estou procurando, 
<br>
Para a fim de agilizar minha experiência de compra.

    Cenário 1: Pesquisar produto com sucesso
    Dado que estou na página de busca
    Quando eu pesquiso nome de um produto existente 
    Então os resultados da pesquisa devem incluir o produto pesquisado
    
    Cenário 2: Exibir erro ao pesquisar produto inexistente
    Dado que estou na página de busca
    Quando eu pesquiso nome de um produto inexistente 
    Então uma mensagem de erro informando que o produto com o nome não foi encontrado deve ser exibida
    
    
