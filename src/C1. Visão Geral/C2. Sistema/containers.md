### C2.1 Quais são as principais tecnologias utilizadas no sistema?

As principais tecnologias utilizadas para a construção do projeto são dois frameworks muito populares, sendo o [React Native](https://reactnative.dev/) e o [NestJS](https://nestjs.com/). Há também a utilização de banco de dados relacional [SQLite](https://www.sqlite.org/index.html) para a persistência de dados e o sistema de envio de e-mails transacionais através do protocolo SMTP chamado [SMTP2GO](https://www.smtp2go.com/). A biblioteca [@muryllo/mailer](https://www.npmjs.com/package/@muryllo/mailer) foi utilizada para se conectar a esse serviço.

### C2.2 Quais são os frameworks utilizados dentro do sistema?

Os principais frameworks utilizados dentro do projeto foram: React Native (Aplicação móvel) e NestJS (Backend).
A escolha do **React Native**, como framework para desenvolvimento da aplicação se deve pelos seguintes pontos:

- Ferramenta de desenvolvimento multi-plataforma, podendo ser utilizada tanto para desenvolver aplicações móveis (Android e iOS), desktop ou web;
- Bases de códigos unificadas. A base de código que será utilizada para as diferentes plataformas será a mesma, podendo ser customizadas, caso seja necessário. Visto, que o **React Native** deixa visível o código nativo para que o desenvolvedor possa realizar qualquer alteração.
- Uso de JavaScript (ou o superset TypeScript), linguagem amplamente utilizada e consagrada no mercado de desenvolvimento web;
- Uso da biblioteca React para construções de UI o que permite reaproveitamento de conhecimentos do desenvolvimento web com ReactJS;

Já a escolha do **NestJS**, como framework para desenvolvimento de todo o backend da aplicação se deve pelos seguintes pontos:

- Tem como filosofia resolver o principal problema dos projetos Web: **A Arquitetura**;
- Utiliza uma arquitetura baseada na do Angular, completamente opinativa e garante a aplicação de princípios SOLID e muitos padrões de projetos;
- É escalável, elegante e utiliza o melhor de outros frameworks (Asp.Net, Spring, Express, Fastify, etc.);
- Facilita integrações com ORMs e também com outros provedores de bancos de dados;
- Facilita a validação de dados utilizando decoradores, sem utilizar exaustivas expressões regulares que evidenciam projetos imaturos de pessoas sem experiência em desenvolvimento, já que tornam muito suja a visão do código;
- Utiliza nativamente o padrão de arquitetura MVC, acrescentando o conceito de módulos e serviços para compartimentar regras de negócio, etc.

### C2.3 Quais são as linguagens de programação utilizadas dentro do projeto?

A principal linguagem de programação utilizada dentro do projeto é JavaScript em conjunto com o seu superset TypeScript, que adiciona tipagem para a linguagem e o paradigma orientado a objetos completo, além de generics, collections, entre outros.

> [!INFO]
> Para mais informações sobre o TypeScript, visite a documentação oficial clicando [**aqui**](https://www.typescriptlang.org/).

### C2.4 Em quais camadas são divididas o projeto?

O sistema **Seja UPE** utiliza um modelo de arquitetura cliente-servidor, que se baseia na conexão de vários clientes (No caso do Seja UPE, um cliente utilizando uma aplicação móvel) a um servidor (ex.: uma API REST). Em virtude desse modelo, as duas principais camadas de dentro do próprio sistema são a do **aplicativo móvel** e a do **servidor (API REST)**. No entanto, além delas existem as camadas de serviços que são importantes para o funcionamento do sistema, como: a de **sistema de e-mail**, **sistema de single sign-on**, **websocket** e **sistema de notificações**;

### C2.5 Como cada container se comunica dentro do projeto?

- **Aplicativo Móvel**:
  - O usuário final realiza suas ações na aplicação e se comunica com o container API REST, utilizando o protocolo HTTP e como formato de serialização humanamente legível o JSON. A comunicação é feita utilizando criptografia, por motivos de segurança, com certificados SSL/TLS válidos sendo utilizados. A comunicação é mediada por um **proxy reverso** chamado CloudFlare que será visto no próximo container, o container da API;
- **API REST**:
  - Se comunica tanto com o container da aplicação móvel, quanto com o do banco de dados, através de uma ORM (Nesse caso, a TypeORM), que persiste toda a informação do sistema. Este container tem sua comunicação mediada por um **proxy reverso** chamado CloudFlare que é responsável por criar um túnel criptografado entre o aplicativo móvel e a API REST. O seu principal objetivo é deter ataques e assegurar que os dados não sejam lidos enquanto trafegam para seu destino;
- **Banco de Dados**:
  - Se comunica com o container API REST e também com um arquivo no sistema de arquivos no diretório ``root/database/db.sqlite`` onde lê e escreve os dados da aplicação que devem ser persistidos;
- **WebSocket**:
  - Se comunica com o container do aplicativo móvel, com o intuito de manter uma conexão constante entre o aplicativo e o servidor. O Gateway WebSocket serve como um ponto de acesso para comunicação em tempo real entre o dispositivo móvel e o servidor de API;
- **Sistema de E-mail**:
  - Se comunica com o container da API REST, para enviar e-mails para o usuário. Esse sistema de e-mail se chama SMTP2GO e é um serviço de API para envio de e-mails SMTP transacionais;
- **Sistema de Notificações**:
  - Se comunica com o container do aplicativo móvel, para enviar notificações para o usuário. A solicitação de notificação push é recebida do próprio aplicativo móvel, que é então processada e enviada para os servidores Expo Push Notifications;
- **Sistema de Single Sign-On**:
  - Se comunica com o container do aplicativo móvel, para permitir o usuário se autenticar no sistema utilizando sua conta do Google. As solicitações de tokens de acesso são feitas pelo aplicativo móvel e então processadas pelo Sistema de Single Sign-On;

### C2.6 Quais são as convenções utilizadas no projeto?

Em todo o sistema (back e front) foram utilizadas as seguintes convenções:

- **Convenção de Nomenclatura de Arquivos e Diretórios** ([Filenames and File Types | Google Developers](https://developers.google.com/style/filenames));
- **Convenção de Nomenclatura de Variáveis JavaScript** ([AirBnb Naming Conventions](https://airbnb.io/javascript/#naming-conventions));
- **Convenção de Fluxo de Trabalho Git** ([GitFlow](https://danielkummer.github.io/git-flow-cheatsheet/));
- **Convenção de Commits** ([Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/) e o [Gitmoji](https://gitmoji.dev/));
- **Versionamento de Software - Com adaptações e aderência parcial** ([Semantic Versioning](https://semver.org/));

### C2.7 Quais são os padrões utilizados dentro do projeto?

No front-end mobile, foram utilizados os padrões:

- **MVS (Model, View, Service) pattern**: Padrão utilizado como uma adaptação do padrão MVC;
- **Service pattern**: Padrão utilizado para: envolver regras de negócio, definir o formato das requisições HTTP e também definir de que forma o cliente deverá se autenticar;
- **React Provider pattern**: Padrão utilizado para realizar a gestão de informações dentro do cliente, evitando prop-drilling;
- **Hook pattern**: Padrão amplamente utilizado para a reutilização de lógica entre os hooks components do React;

Já no back-end, foram utilizados:

- **MSC (Model, Service, Controller) pattern**: Utilizado como uma adaptação do padrão MVC, visto que por se tratar de uma API a camada de View não existe;
- **Pipe and filters pattern**: Utilizado para filtrar as exceções e retornar o erro de uma forma amigável para o cliente;
- **Interceptor pattern**: Utilizado para: modificar respostas, verificar a versão do cliente, estratégia de cache e para controlar o tempo de resposta da requisição;
- **Guard pattern**: Utilizado para gerenciar os acessos às rotas;
- **Decorator pattern**: Utilizado extensivamente ao longo de toda a aplicação, tanto para documentá-la, quanto para adicionar metadados;
- **Adapter pattern**: Utilizado no websocket, para envolver o serviço HTTP e adaptá-lo para ser um gateway de websocket;
- **Strategy pattern**: Utilizado para definir a estratégia de login;

### C2.8 Quais são as restrições e limitações do projeto?

As principais limitações e restrições do projeto são impostas devido a questões financeiras, requisitos do cliente, condições de hardware, escopo, tempo e vários outros desafios. A seguir podemos ver algumas dessas limitações e restrições.

- Uma linguagem de programação única (JavaScript) tanto para backend como para frontend mobile;
- O sistema ter que funcionar, de inicio, somente para android, devido ao alto custo de disponibilização de aplicativo na Apple Store;
- Todas as fontes de dados são coletadas manualmente, devido a não existência de uma API pública para a extração dos dados dos cursos, professores e demais envolvidos;
- Por motivos de interoperabilidade com dispositivos móveis, deve-se utilizar um dos seguintes protocolos para comunicação: HTTP, HTTPS, WebSocket (WS) WebSocket Secure (WSS), sem recorrer a protocolos como TCP/UDP diretamente, pois não são suportados com pouco esforço;
- Os dados devem ser serializados em JSON ou XML para facilitar a transferência, consumo e o tráfego de dados. O formato de tráfego de dados padrão do mercado é o JSON e deve ser adotado nas comunicações pela API;
- Deve ser utilizada criptografia nos protocolos de comunicação, para inibir ataques de Sniffing e MITM (Man In The Middle) que possam ser utilizados para ler ou modificar o conteúdo das requisições;

### C2.9 Como as responsabilidades são separadas entre os containers?

#### C2.9.1 Módulos

O **Seja UPE** divide seus containers internamente em pacotes, arquivos, módulos, serviços, classes, interfaces e subrotinas, com níveis de escopo reduzidos cada vez mais, respectivamente. Dentro de cada container podemos ter um ou mais dos níveis de escopo mencionados. Por exemplo, o front-end é dividido em pacotes, arquivos, serviços, classes, interfaces e subrotinas. Já o back-end tem o conceito de módulos, sendo dividido em pacotes, arquivos, serviços, módulos, classes, interfaces, subrotinas. 

As responsabilidades de um arquivo são maiores que as de uma classe, pois um arquivo engloba classes e outros recursos como interfaces e funções. Podemos enxergar os containers como o maior nível de escopo possível que descreve o projeto.

#### C2.9.2 Subsistemas

O **Seja UPE** interage com subsistemas desvinculados da aplicação principal. Isso ocorre pois nem todos os serviços necessários e recursos do sistema podem ser criados do zero, então, são utilizados sistemas prontos que possuem integrações disponíveis. Dessa forma, o sistema é composto por pequenos subsistemas como:

- **Expo Notifications**;
- **Google Single Sign-On**;
- **SMTP2GO (Sistema de E-mail)**;
- **WebSocket Gateway**;

#### C2.9.3 Sistema de Arquivos (Estrutura)

O **Seja UPE** divide todos os seus módulos e classes em arquivos, que contemplam as classes, interfaces e subrotinas. Os arquivos são importantes pois compõem a estrutura de arquivos do projeto no sistema de arquivos subjacente. Podemos visualizar a estrutura de arquivos do front-end e do back-end a seguir:

##### Estrutura de Arquivos do Front-end:

```
\ root
  \-> __mocks__
  \-> node_modules
  \-> assets
  \-> tests
  \-> src
    \-> assets
    \-> core
      \-> components
      \-> config
      \-> hooks
      \-> providers
      \-> services
      \-> themes
    \-> pages
    \-> routes
```

##### Estrutura de Arquivos do Back-end:

```
\ root
  \-> database
  \-> dist
  \-> node_modules
  \-> src
    \-> config
    \-> controllers
    \-> docs
    \-> exceptions
    \-> filters
    \-> hooks
    \-> models
    \-> modules
    \-> security
      \-> guards
    \-> services
    \-> validators
    \-> views
      \-> mails
    \-> websocket
```

#### C2.9.4 Containers e suas responsabilidades

- **Aplicativo Móvel:**
  - Provê aos usuários acesso as funcionalidades a partir do aplicativo (cliente móvel);
- **API REST:**
  - Provê as funcionalidades do Seja UPE via API REST JSON/HTTPS;
- **Banco de Dados:**
  - Armazena dados dos campi da UPE (Universidade de Pernambuco) e de todo o sistema;
- **WebSocket:**
  - É responsável por manter o envio e recebimento de mensagens dentro do chat do aplicativo;
- **Sistema de E-mail:**
  - É responsável por enviar os e-mails de boas-vindas ao usuário através do SMTP2GO;
- **Sistema de Notificações:**
  - É responsável por emitir as notificações no smartphone através do Expo Notifications para lembrar o usuário de interação com o aplicativo;
- **Sistema de SSO:**
  - É responsável por possibilitar ao usuário realizar login utilizando sua conta Google;
