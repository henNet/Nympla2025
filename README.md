# Projeto Nympla

O projeto consiste em um sistema de gerenciamento de eventos e usuários semelhante ao site Sympla. O sistema irá possibilitar a inscrição em eventos, cadastro e login de usuários, autenticação e autorização, geração de comprovantes de inscrição, check-in de usuários, entre outras funcionalidades.

# Como executar a parte Back-end do projeto

1. Clonar o projeto ou baixar os arquivo para a sua máquina.
   
2. Instalar as dependências executando o comando abaixo dentro da pasta Back-end:

```
npm i
```

4. Executar o servidor (Back-end) com o comando:

```
npm run dev
```
# Dev Log

**Aula 04 - 22/09 (segunda)**

- [x] Estilização do front com bootstrap
  - [x] Leitura dos dados do back-end para renderizar o front

**Aula 03 - 16/09 (terça)**

- [x] Definição da estrutura do front-end
  - [x] Criação do index.html
  - [x] Criação do arquivo .env para guardar as variáveis de acesso ao banco

**Aula 02 - 15/09 (segunda)**

- [x] Definição da estrutura da tabela de eventos
  - [x] Criação do sequilize.js para conexão com o banco
  - [x] Criação das rotas /event/all e /event/register em Routes.js
  - [x] Criação das funções controladoras em eventControler.js

**Aula 01 - 09/09 (terça)**

- [x] Definição da estrutura do projeto e download das dependências **express**, **pg**, **cors**, **jsonwebtoken** e **sequelize**
  - [x] Criação do Server.js
  - [x] Criação do Routes.js
  - [x] Criação do eventControler.js