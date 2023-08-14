Funcionalidade de Carrinho:

Como um comprador online,
<br>
Eu quero ver os detalhes do produto que adicionei ao carrinho,
<br>
Para confirmar que selecionei o item correto antes de finalizar a compra.

    Cenário: Mostrar dados do produto adicionado ao carrinho
    Dado que há um produto disponível
    Quando o usuário adiciona o produto ao carrinho
    Então os detalhes do produto devem ser exibidos no carrinho
    
    Cenário: Remover produto do carrinho
    Dado que há um produto no carrinho
    Quando o usuário remove o produto do carrinho
    Então o carrinho deve estar vazio
    
    Cenário: Exibir mensagem sem produto no carrinho
    Dado que o carrinho está vazio
    Quando o usuário tenta visualizar o carrinho
    Então uma mensagem informando que não há produtos no carrinho deve ser exibida

<------------------------------------------------------------------------------><------------------------------------------------------------------------->

Funcionalidade de Page Home:
Como um comprador online,
<br>
Quero uma experiência de compra mais tranquila ao utilizar a funcionalidade da Página Inicial.
<br>
Para confirmar que selecionei o item correto antes de finalizar a compra.

    Cenário 1: Exibir mensagem ao adicionar produto ao carrinho
    Dado que o usuário está na página inicial
    Quando o usuário adiciona um produto ao carrinho
    Então uma mensagem de confirmação de adição ao carrinho deve ser exibida
    
    Cenário 2: Aumentar quantidade ao adicionar item ao carrinho
    Dado que o usuário tem um item no carrinho
    Quando o usuário adiciona o mesmo item novamente
    Então a quantidade desse item no carrinho deve ser aumentada
    
    Cenário 3: Exibir mensagem ao remover produto do carrinho
    Dado que o usuário tem um produto no carrinho
    Quando o usuário remove o produto do carrinho
    Então uma mensagem de confirmação de remoção do carrinho deve ser exibida
    
    Cenário 4: Diminuir quantidade ao adicionar item ao carrinho
    Dado que o usuário tem um item no carrinho com quantidade maior que 1
    Quando o usuário adiciona o mesmo item novamente
    Então a quantidade desse item no carrinho deve ser aumentada em 1

<------------------------------------------------------------------------------><------------------------------------------------------------------------->


Funcionalidade de Busca:

    Cenário 1: Pesquisar produto com sucesso
    Dado que existem produtos disponíveis
    Quando o usuário pesquisa por um produto existente
    Então os resultados da pesquisa devem incluir o produto pesquisado
    
    Cenário 2: Exibir erro ao pesquisar produto inexistente
    Dado que existem produtos disponíveis
    Quando o usuário pesquisa por um produto inexistente
    Então uma mensagem de erro informando que o produto não foi encontrado deve ser exibida
    
    
