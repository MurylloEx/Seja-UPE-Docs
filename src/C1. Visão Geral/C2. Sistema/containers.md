### C2.1 Quais são as principais tecnologias utilizadas no sistema?

As principais tecnologias utilizadas para a construção do projeto variam entre frameworks, como [React Native](https://reactnative.dev/) e [NestJS](https://nestjs.com/), à utilização de bancos de dados (RDBMS/SQLite) e sistema de e-mail (SMTP2GO).

### C2.2 Quais são os frameworks utilizados dentro do sistema?

Os principais frameworks utilizados dentro do projeto foram: React Native (Aplicação móvel) e NestJS (Backend).
A escolha do React Native, como framework para desenvolvimento da aplicação se deve pelos seguintes pontos:

- Ferramenta de desenvolvimento multi-plataforma, podendo ser utilizada tanto para desenvolver aplicações móveis (Android e iOS), desktop ou web;
- Bases de códigos unificadas. A base de código que será utilizada para as diferentes plataformas será a mesma, podendo ser customizadas, caso seja necessário. Visto, que o React Native deixa visível o código nativo para que o desenvolvedor possa realizar qualquer alteração.
- Uso de JavaScript (Ou o superset TypeScript), linguagem amplamente utilizada e consagrada no mercado de desenvolvimento web;
- Uso da biblioteca React para construções de UI o que permite reaproveitamento de conhecimentos do desenvolvimento web com ReactJS;

Já a escolha do NestJS, como framework para desenvolvimento de todo o backend da aplicação se deve pelos seguintes pontos:

- [TO DO]

### C2.3 Quais são as linguagens de programação utilizadas dentro do projeto?

A principal linguagem de programação utilizada dentro do projeto é JavaScript em conjunto com o seu superset TypeScript, que adicionar tipagem para a linguagem.

### C2.4 Em quais camadas são divididas o projeto?

O sistema Seja UPE se utiliza de um modelo cliente-servidor de arquitetura, que se baseia na conexão de vários clientes (No caso do Seja UPE, um cliente utilizando uma aplicação móvel) a um servidor (ex.: uma API REST). Em virtude desse modelo, as duas principais camadas de dentro do próprio sistema são a do **aplicativo móvel** e a do **servidor (API REST)**. No entanto, além delas existem as camadas de serviços que são importantes para o funcionamento do sistema, como: a de **sistema de e-mail**, **sistema de SSO**, **websocket** e **sistema de notificações**;

### C2.5 Como cada container se comunica dentro do projeto?

- Aplicativo Móvel:
  - Se comunica com o container API REST, se utilizando do protocolo HTTP e como formato de serialização humanamente legível o JSON;
- API REST:
  - Se comunica tanto com o container da aplicação móvel, quanto com o do banco de dados, através de uma ORM (Nesse caso, a TypeORM), que persiste toda a informação do sistema;
- Banco de Dados:
  - Se comunica com o container API REST;
- WebSocket:
  - Se comunica com o container do aplicativo móvel, com o intuito de manter uma conexão constante entre o aplicativo e o servidor;
- Sistema de E-mail:
  - Se comunica com o container do API REST, para enviar e-mails para o usuário;
- Sistema de Notificações:
  - Se comunica com o container do aplicativo móvel, para enviar notificações para o usuário;
- Sistema de SSO:
  - Se comunica com o container do aplicativo móvel, para permitir o usuário se autenticar no sistema utilizando sua conta do Google;

### C2.6 Quais são as convenções utilizadas no projeto?

Em todo o sistema (back e front) foram utilizadas as seguintes convenções:

- Para nome de variáveis:
  - Camel Case;
- Para nome de funções:
  - Camel Case;
- Para nome de classes:
  - Pascal Case;
- Para nome de pastas:
  - Uma palavra só toda em minúsculo;
- Para nome de arquivos:
  - `<nome do arquivo>.<tipo do arquivo>.<extensão do arquivo>``;
  - Ex.: `user.model.ts`, `user.service.ts`, `user.guard.ts`;
- Para código de versionamento:
  - Foi utilizado semantic versioning, com uma leve alteração do número referente ao patch (ex.: x.y.1); A alteração feita no patch, foi que mesmo aumentada o número referente ao major (ex.: 1.y.z) ou minor (ex.: x.1.z), a patch não era resetada, de acordo como é escrita na documentação do semantic versioning;
  - O uso do semantic versioning,
- Para commits:
- [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/) em conjunto com o [gitemoji](https://gitmoji.dev/).
- O conventional commits ainda entra em congruência com o padrão de versionamento semantic versioning, visto que o número dos tipos de commits (ex.: feat, fix, chore e etc.) influenciará no número da versão. Mais detalhes sobre isso pode ser visto no [seguinte link](https://www.conventionalcommits.org/pt-br/v1.0.0/#qual-a-rela%C3%A7%C3%A3o-com-o-semver);

### C2.7 Quais são as padrões utilizados dentro do projeto?

No frontend mobile, foram utilizados os padrões:

- MVS (Model, View, Service) pattern (Padrão utilizado como uma adaptação do padrão MVC);
- Service pattern (Padrão utilizado para: envolver regras de negócio, definir o formato das requisições HTTP e também definir de que forma o cliente deverá se autenticar);
- React Provider pattern (Padrão utilizado para realizar a gestão de informações dentro do cliente, evitando prop-drilling);
- Hook pattern (Padrão amplamente utilizado para a reutilização de lógica entre os hooks components do React);

Já no backend, foram utilizados:

- MSC (Model, Service, Controller) pattern (Utilizado como uma adaptação do padrão MVC, visto que por se tratar de uma API a camada de View não existe);
- Pipe and filters pattern (Utilizado para filtrar as exceções e retornar o erro de uma forma amigável para o cliente);
- Interceptor pattern (Utilizado para: modificar respostas, verificar a versão do cliente, estratégia de cache e para controlar o tempo de resposta da requisição);
- Guard pattern (Utilizado para gerenciar os acessos às rotas);
- Decorator pattern (Utilizado extensivamente ao longo de toda a aplicação, tanto para documentá-la, quanto para adicionar metadados);
- Adapter pattern (Utilizado no websocket, para envolver o serviço HTTP e adaptá-lo para ser um gateway de websocket);
- Strategy pattern (Utilizado para definir a estratégia de login);

### C2.8 Quais são as restrições do sistema?

As principais restrições do projeto são:

- Uma linguagem de programação única (JavaScript) tanto para backend como para frontend mobile;
- O sistema ter que funcionar, de inicio, somente para android, devido ao alto custo de disponibilização de aplicativo na AppleStore;
- Todas as fontes de dados terem que ter sido coletadas manualmente, devido a não existência de uma API pública;

### C2.9 Como as responsabilidades são separadas entre os containers?

- Aplicativo Móvel:
  - Provê aos usuários acesso as funcionalidades a partir do aplicativo (cliente móvel);
- API REST:
  - Provê as funcionalidades do Seja UPE via API REST JSON/HTTPS;
- Banco de Dados:
  - Armazena dados dos campi da UPE (Universidade de Pernambuco) e de todo o sistema;
- WebSocket:
  - É responsável por manter o envio e recebimento de mensagens dentro do chat do aplicativo;
- Sistema de E-mail:
  - É responsável por enviar os e-mails de boas-vindas ao usuário através do SMTP2GO;
- Sistema de Notificações:
  - É responsável por emitir as notificações no smartphone através do Expo Notifications para lembrar o usuário de interação com o aplicativo;
- Sistema de SSO:
  - É responsável por possibilitar ao usuário realizar login utilizando sua conta Google;
