# Projeto de Sistema Web com Menu Interativo, CRUD e Modal

## Landing Page

![Screenshot 2024-11-11 210110](https://github.com/user-attachments/assets/70ab00fa-d91c-4cf6-95b9-a23182b007d7)

## Landing Page Sing-in

![Screenshot 2024-11-11 210126](https://github.com/user-attachments/assets/dea70f16-3320-4a74-a562-9b963d953487)

 

Este projeto envolve a construção de uma aplicação web com funcionalidades de **CRUD (Create, Read, Update, Delete)** para a gestão de produtos, usuários e pedidos, com um menu interativo. O sistema também inclui modais, efeitos de sobreposição, e navegação através de dropdowns.

## Funcionalidades

1. **Menu Interativo**
   - O menu contém dropdowns para **Usuários**, **Produtos**, **Pedidos** e **Lojas**.
   - Cada item do menu oferece opções de CRUD para a gestão desses elementos (Cadastrar, Buscar, Excluir, Listar).



2. **Modais**
   - O sistema possui modais para os seguintes CRUDs:
     - **Usuários**: Cadastro, Busca, Excluir, Listar.
     - **Produtos**: Cadastro, Busca, Excluir, Listar.
     - **Pedidos**: Cadastro, Busca, Excluir, Listar.
     - **Lojas**: Cadastro, Busca, Excluir, Listar.
   - Todos os modais são controlados por um overlay para uma melhor experiência do usuário.
  
   -## Dropdowns
![Screenshot 2024-11-11 210149](https://github.com/user-attachments/assets/98858b4c-86f2-47b8-ba58-b28e16cc8589)


## Crud Exemplo
![Screenshot 2024-11-11 210214](https://github.com/user-attachments/assets/74f21155-6e80-4a49-862d-10c8cd0bcd2d)

4. **Função de Overlay**
   - O overlay é utilizado para destacar os modais, tornando o conteúdo da página de fundo desmarcado e bloqueando a interação com o restante da interface enquanto o modal está aberto.

5. **CRUD Completo para Produtos**
   - As telas de gestão de produtos possuem campos para nome, descrição e preço, com botões para adicionar ao carrinho.

6. **Responsividade**
   - O layout é responsivo e adaptável para diferentes tamanhos de tela.

7. **Botões e Links**
   - Cada operação de CRUD tem um botão ou link associado, e ao clicar no botão correto, o modal correspondente será exibido.

---

## Tecnologias Usadas

- **HTML5** para estruturação do conteúdo.
- **CSS3** para estilização e layout responsivo.
- **JavaScript** para lógica de interação, incluindo o gerenciamento de modais, dropdowns e eventos de formulário.
- **JSP (Java Server Pages)** para integrar a camada de apresentação com a lógica do servidor (ex: cadastro de usuários e produtos).

---

## Estrutura do Projeto

### 1. **Tela de Menu**

A tela de menu é composta por uma barra de navegação superior, que contém links dropdown para **Usuários**, **Produtos**, **Pedidos** e **Lojas**. Quando clicados, esses links exibem um submenu com as opções de CRUD.




## Funcionalidades CRUD (Create, Read, Update, Delete)

### **Usuários**
- **Cadastrar**: Permite criar um novo usuário, enviando os dados (nome, usuário e senha) para o servidor. O formulário de cadastro está disponível nos modais da interface.
- **Buscar**: O sistema permite buscar um usuário com base no nome ou no usuário cadastrado.
- **Excluir**: O usuário pode ser removido do sistema com um simples clique no botão de excluir, e isso resultará na remoção do registro do banco de dados.
- **Listar**: Exibe uma lista de todos os usuários cadastrados no sistema, com a opção de editar ou excluir cada usuário.

### **Produtos**
- **Cadastrar**: Permite registrar um novo produto com informações como nome, descrição e preço.
- **Buscar**: A funcionalidade de busca permite procurar produtos cadastrados por nome ou descrição.
- **Excluir**: O produto pode ser excluído do sistema ao clicar no botão de exclusão, o que o remove permanentemente.
- **Listar**: A lista de produtos disponíveis pode ser visualizada, mostrando todos os produtos cadastrados.

### **Pedidos**
- **Cadastrar**: Cria um novo pedido a partir das opções de produtos disponíveis.
- **Buscar**: Permite buscar por pedidos realizados anteriormente.
- **Excluir**: Exclui um pedido existente, removendo-o do sistema.
- **Listar**: Exibe todos os pedidos feitos pelos usuários.

---

## Demonstração

Aqui está um vídeo demonstrando as funcionalidades do sistema:

[**Vídeo Demonstrativo**](#) 

**Nota:** Este vídeo mostra as funcionalidades completas de cadastro, busca, exclusão e listagem de usuários, produtos e pedidos, interagindo com a interface do sistema.

---

## Considerações Finais

Este é um sistema web simples que usa modais e menus interativos para fornecer uma interface agradável e funcional para o gerenciamento de usuários, produtos e pedidos. A integração entre HTML, CSS, JavaScript e JSP permite um fluxo contínuo de dados, o que facilita a interação do usuário com a aplicação.

- **Site Original:** O design original foi inspirado no site oficial da Starbucks, acessível através do [link aqui](https://www.starbucks.in/dashboard).
- **Landing Page:** O layout da página de destino (landing page) foi criado por um designer profissional e, em seguida, foi clonado e personalizado com ajustes únicos para este projeto.

- 

Este sistema web foi desenvolvido para facilitar o gerenciamento de **Usuários**, **Produtos** e **Pedidos** por meio de uma interface simples, mas eficiente, utilizando **modais** e **menus interativos**. A integração entre **HTML**, **CSS**, **JavaScript** e **JSP** possibilita um fluxo contínuo de dados entre o front-end e o back-end, permitindo que o usuário interaja com a aplicação de forma intuitiva.

- A navegação entre os modais e a visualização de dados é feita de maneira fluida, com a ajuda de overlays e animações CSS.
- A interface é responsiva e se adapta a diferentes tamanhos de tela, garantindo que o sistema funcione em desktops, tablets e dispositivos móveis.
- A funcionalidade de **CRUD** é fundamental para que os administradores do sistema possam gerenciar os dados de forma eficiente.

Este projeto pode ser expandido com funcionalidades adicionais, como **autenticação de usuários**, **controle de acesso** e **edição de registros**, proporcionando uma experiência ainda mais completa.
