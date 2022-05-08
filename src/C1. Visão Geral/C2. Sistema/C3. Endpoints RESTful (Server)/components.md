### C3.1 Como foi idealizado o uso do framework NestJS?

### C3.2 Camadas da API REST

Para entender como as camadas funcionam no back-end, precisamos visualizar a sua estrutura de pacotes e então percorrer camada por camada a fim de visualizar o fluxo de um caso de uso complexo. Vejamos como a estrutura de arquivos está dividida:

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

Como você pode ver, há uma pasta src que contém todo o código da aplicação e dentro dela há ramificações de diretórios para ``config``, ``controllers``, ``docs``, ``exceptions``, ``filters``, ``hooks``, ``models``, ``modules``, ``security``, ``services``, ``validators``, ``views``, ``websocket``. Cada diretório desse possui um propósito, veremos todos eles a seguir.

- **config** - É o diretório onde reside toda a configuração do servidor como tokens, chaves-secretas JWT, etc. Não adotamos a abordagem de arquivos ``.env`` pois estes não permitem estruturas como arrays e objetos aninhados, logo a configuração do servidor é feita em arquivos JSON;
- **controllers** - É o diretório onde residem todos os controllers da aplicação, sendo estes arquivos com o padrão de nomenclatura ``name.controller.ts`` e contendo uma classe exportada via ``export`` com o padrão de nomenclatura ``NameController``;
- **docs** - É onde reside todos os decoradores utilizados para documentar as rotas por meio do OAS (Open Api Specification), também conhecido como **Swagger**;
- **exceptions** - É o diretório que contém todas as classes de exceções de regra de negócio utilizadas no **Seja UPE**. Cada e exceção segue o padrão de nome de arquivo ``name.exception.ts`` contendo uma classe exportada via ``export`` com o padrão de nomenclatura ``NameController``;
- **filters** - E o diretório que contém todos os filtros de exceções não tratadas. Esses filtros tem uma ordem de prioridade que depende da ordem alfabética do nome do arquivo. Os filtros possuem arquivos com um padrão de nomenclatura ``name.filter.ts`` e exportam uma classe via ``export`` com o padrão de nomenclatura ``NameExceptionFilter`` ou ``NameErrorFilter``. O nome a ser escolhido depende da natureza do evento a ser filtrado (Exception ou Error).
- **hooks** - É o diretório que contém todos os ``interceptors`` de requisições HTTP. Os interceptors são utilizados para manipular as requisições e respostas e alterá-las antes ou depois que elas atingem os controllers. São chamadas de ``hooks`` em referência ao que é feito nos sistemas operacionais Windows e Linux chamado de **API Hooking** que é um conceito de se interceptar e mudar o comportamento de uma chamada de API a fim de mudar o efeito colateral de uma chamada de função. Seu arquivo possui um padrão de nomenclatura escrito como ``name.interceptor.ts`` e cada arquivo de interceptação exporta uma classe com o padrão de nomenclatura ``NameInterceptor``;
- **models** - É o diretório que contém todos os modelos/entidades do sistema. Os modelos são classes com anotações de tipo e anotações de relacionamento utilizadas para modelar a base através de um mapeador objeto-relacional chamado ``TypeORM``. Cada modelo é um arquivo com o padrão de nomenclatura ``name.model.ts`` que exporta uma classe via ``export`` com o padrão de nomenclatura ``NameModel``;
- **modules** - É o diretório que contém todos os módulos do sistema. Módulos são classes que agrupam outros módulos e serviços. Dessa forma, é possível criar um módulo que contenha, por exemplo todos os serviços de um usuário, bastando apenas importar o módulo para ter acesso a estes serviços. Os módulos são arquivos que possuem o padrão de nomenclatura ``name.module.ts`` e contém uma classe exportada via ``export`` com o padrão de nomenclatura ``NameModule``;
- **security** - É o diretório mais importante para a autenticação e autorização do sistema pois é onde reside toda a lógica de segurança, decoradores de rotas de autenticação e autorização e também os papéis dos usuários no sistema. Dentro desse diretório há guardas que são classes responsáveis por permitir ou negar o acesso a uma rota ou até mesmo a um controller inteiro. Essas guardas tem um padrão de nomenclatura de arquivo ``name.guard.ts`` e exportam uma classe via ``export`` com o padrão de nomenclatura ``NameGuard``;
- **services** - É o diretório mais importante do sistema pois contém toda a regra de negócio e a realização substancial dos casos de uso do lado do servidor. Neste diretório cada serviço possui um arquivo com o padrão de nomenclatura ``name.service.ts`` que exporta uma classe com o padrão de nomenclatura ``NameService`` contendo várias funções e métodos com regras de negócio;
- **validators** - É o diretório que contém os validadores de entrada, popularmente conhecidos como ``Data Transfer Objects``. Na arquitetura do **Seja UPE** eles se chamam validadores e são compostos por um arquivo com o padrão de nomenclatura ``name.controller-name.vld.ts``. Por exemplo, o ``popularity.evaluation.vld.ts`` é o validador responsável por verificar se os dados de entrada de uma avaliação de popularidade de curso foram especificados corretamente no corpo da requisição feita para um controller chamamdo ``EvaluationController``. Cada validador exporta via ``export`` uma classe com o padrão de nomenclatura ``NameValidator``. Nesse cenário, os validadores são responsáveis por verificar se os dados foram formatados e passados corretamente, não são utilizados para trafegar dados entre o controller e o service, por exemplo;
- **views** - É o diretório que contém todas as views do sistema que, nesse cenário, se resumem a arquivos de visualização de e-mail. Ou seja, não há uma camada formal do ``MVC`` propriamente dita para ``views`` que permita a criação, por exemplo de páginas Web. Esse é um ponto importante a ser notado pois a arquitetura do sistema foi fundamentada para ser MSC (Model-Service-Controller) uma vez que não há instalado no back-end um renderizador como ejs, handlebars, mustache, blade ou similares;
- **websocket** - É o diretório que contém o Gateway WebSocket, uma espécie de classe que recebe as solicitações WebSocket e as manipula para devolver uma resposta.

> [!TIP]
> A maioria das entidades mencionadas acima podem ser geradas diretamente pela linha de comando do NestJS. Experimente executar ``nest g --help`` para ver como gerar cada um deles.

#### C3.2.1 Os Controllers

#### C3.2.2 As Exceptions

#### C3.2.3 Os Filters

#### C3.2.4 Os Interceptors/Hooks

#### C3.2.5 Os Models

#### C3.2.6 Os Modules

#### C3.2.7 As Guards

#### C3.2.8 Os Services

#### C3.2.9 Os Validators

#### C3.2.10 As Views

#### C3.2.11 O Gateway Websocket

### C3.3 Quais são as restrições e limitações do projeto e como são contornadas?

### C3.4 Implementando uma nova funcionalidade respeitando a arquitetura

#### C3.4.1 Quais camadas devem ser implementadas?

#### C3.4.2 Padrões e convenções de nomenclatura?

#### C3.4.3 Padrões de projeto utilizados?

#### C3.4.4 Módulos e serviços disponíveis para utilização?

