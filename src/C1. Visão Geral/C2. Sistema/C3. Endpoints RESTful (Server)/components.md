### C3.1 Como foi idealizado o uso do framework NestJS?

A maioria dos WebServices da atualidade são feitos em tecnologias que suportam nativamente o padrão arquitetural MVC. Com o **Seja UPE** não poderia ser diferente. A escolha do **NestJS** foi tomada com foco em resolver um problema que o **Express** e o **Node.js** sozinhos não conseguem resolver: a arquitetura. O **NestJS** foi idealizado para ser utilizado como a base arquitetural do sistema, sendo esta fortemente embasada na arquitetura **Angular**. O Nest é um framework fortemente opinativo e não deixa lacunas em sua implementação tanto lógica quanto estrutural. Numa equipe com 5 pessoas torna-se difícil implementar os casos de uso de forma padronizada e seguindo normas rígidas se são utilizados apenas documentos e advertências verbais. É necessário algo mais. Esse algo mais é a imposição das decisões arquiteturais de forma intransponível, feita em nível de código. O **NestJS** impõe como se deve implementar um controller, service, module, guard, interceptor e vários outros recursos que o back-end necessita para funcionar sem a necessidade de uma equipe inteira pensar em como fazer isso. 

De forma resumida, o **Seja UPE** foi idealizado para utilizar o NestJS de forma que favoreça a **produtividade**, **escalabilidade**, **portabilidade**, **padronização** e a **uniformidade** na implementação de seus casos de uso. Com **NestJS** o back-end foi feito de forma muito mais rápida levando em conta a **experiência da equipe com o Angular em projetos comerciais já vivenciados**.

> [!WARNING]
> Leia mais a respeito sobre o porque **NestJS** foi escolhido como o framework base do projeto e entenda a sua filosofia com ênfase na arquitetura na seção **2. Qualidade de Software**.

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

Os controladores são responsáveis ​​por lidar com solicitações recebidas e retornar respostas ao cliente. A finalidade de um controlador é receber solicitações específicas para o aplicativo. O mecanismo de roteamento controla qual controlador recebe quais solicitações. Frequentemente, cada controlador tem mais de uma rota, e diferentes rotas podem realizar ações diferentes. Para criar um controlador básico, usamos classes e decoradores. Os decoradores associam as classes aos metadados necessários e permitem que o Nest crie um mapa de roteamento (vincule solicitações aos controladores correspondentes). No **Seja UPE** há controllers que realizam as operações do sistema, são eles:

- ``AuthController``: Responsável pela autenticação no sistema;
- ``CampusController``: Responsável por fornecer informações dos campus da universidade;
- ``CourseController``: Responsável por fornecer informações dos cursos de um campus;
- ``EvaluationController``: Responsável por permitir que o usuário avalie um curso ou o questionário/teste vocacional;
- ``ProfessorController``: Responsável por fornecer informações dos professores de um curso.

No **Seja UPE**, criar um controller é uma atividade fácil, felizmente, pois é necessário criar um arquivo com o padrão de nomenclatura ``name.controller.ts`` no pacote ``src.controllers`` ou utilizar o comando ``nest g controller <name>``. Veja o snippet de código a seguir:

``course.controller.ts``
```ts
import { Controller, Get } from "@nestjs/common";

@Controller("courses")
export class CourseController {

  @Get()
  findAll(): string[] {
    return ["lc", "es", "bio", "mat", "geo"];
  }

}
```

#### C3.2.2 As Exceptions

As exceções no **Seja UPE** são utilizadas para retornar erros para os casos de uso. Quando uma operação não permitida ou errada ocorre ou é acionada pelo usuário, uma exceção especializada de ``HttpException`` é emitida. Esse tratamento é preferido na arquitetura pois evita um fenômeno chamado **Código Hadouken** o qual as verificações exaustivas por erros e tratamentos de retorno imediatos realizados nos serviços causam um aninhamento lateral direito excessivo com muitos condicionais sendo aninhados. Devido à arquitetura ter sido projetada para lidar com exceções personalizadas não tratadas e fornecer um retorno para essas exceções quando são capturadas, é possível utilizar a abordagem de exceções para lidar com o tratamento de regras de negócio.

No **Seja UPE**, criar uma exceção personalizada é uma atividade fácil, felizmente, pois é necessário criar um arquivo com o padrão de nomenclatura ``name.exception.ts`` no pacote ``src.exceptions``. Veja o snippet de código a seguir:

``forbidden.exception.ts``
```ts
export class ForbiddenException extends HttpException {

  constructor() {
    super("Forbidden", HttpStatus.FORBIDDEN);
  }

}
```

> [!ATTENTION]
> Perceba que já existem exceções Http base como Forbidden, NotFound, etc. Se for necessário criar uma especialização, por exemplo, do erro 404, é preferível estender a classe NotFoundException a estender a classe HttpException.

#### C3.2.3 Os Filters

O Nest vem com uma camada de exceções integrada que é responsável por processar todas as exceções não tratadas em um aplicativo. Quando uma exceção não é tratada pelo código do aplicativo, ela é capturada por essa camada, que envia automaticamente uma resposta apropriada e amigável ao usuário.
Fora da caixa, essa ação é executada por um filtro de exceção global integrado , que trata exceções de tipo ``HttpException`` (e subclasses dele). Quando uma exceção não é reconhecida (não é ``HttpException`` nem uma classe que herda de ``HttpException``), o filtro de exceção integrado gera a seguinte resposta JSON padrão:

```json
{
  "statusCode": 500,
  "message": "Internal server error"
}
```

No **Seja UPE**, criar um filtro global de exceções é uma atividade fácil, felizmente, pois é necessário criar um arquivo com o padrão de nomenclatura ``name.filter.ts`` no pacote ``src.filters`` ou utilizar o comando ``nest g filter <name>``. Veja o snippet de código a seguir:

``http-exception.filter.ts``
```ts
import { Request, Response } from "express";
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from "@nestjs/common";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {

  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();
    const status = exception.getStatus();

    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
  }

}
```

> [!ATTENTION]
> O **Seja UPE** possui dois tipos de filtros, o filtro de exceções HTTP que são baseadas em regras de negócio e os filtros de erros não tratados, que são exceções genéricas. A ordem de prioridade da captura desses erros é: 1 - HTTP Exceptions, 2 - Unhandled Errors. Em um cenário competitivo onde vários filtros são criados para capturar o mesmo tipo de exceção ou classe de exceção, o filtro que terá prioridade é o que aparecer primeiro na ordem de declaração de uso. Há também o cenário em que os filtros sendo usados diretamente pelo controller tem precedência sobre os filtros globais.

#### C3.2.4 Os Interceptors/Hooks

Um interceptor é uma classe anotada com o decorador ``@Injectable()``, que implementa a interface ``NestInterceptor``. Os interceptores possuem um conjunto de recursos úteis que são inspirados na técnica de **Programação Orientada a Aspectos (AOP)**. Eles possibilitam:

- Vincular lógica extra antes/depois da execução do método;
- Transformar o resultado retornado de uma função;
- Transformar a exceção lançada de uma função;
- Estender o comportamento básico da função;
- Substituir completamente uma função dependendo de condições específicas (por exemplo, para fins de cache);

No **Seja UPE**, criar um interceptador é uma atividade fácil, felizmente, pois é necessário criar um arquivo com o padrão de nomenclatura ``name.interceptor.ts`` no pacote ``src.hooks`` ou utilizar o comando ``nest g interceptor <name>``. Veja o snippet de código a seguir:

``logging.interceptor.ts``
```ts
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log("Before...");

    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => console.log(`After... ${Date.now() - now}ms`)),
      );
  }

}
```

> [!TIP]
> O **Seja UPE** utiliza os interceptadores para estratégia de cache, padronização do formato JSON da resposta HTTP e verificar se a versão do cliente móvel é recente antes de transferir a execução para os controllers.

#### C3.2.5 Os Models

No **Seja UPE** todos os novos modelos devem ser uma classe que herda da entidade modelo base chamada ``BaseModel``. Todas as entidades do banco devem possuir um identificador único, uma coluna createdAt e outra updatedAt. Por esta razão, é necessário que novas entidades herdem da classe BaseModel. Veja a seguir como a classe ``BaseModel`` é constituída.

No **Seja UPE**, criar uma entidade objeto-relacional é uma atividade fácil, felizmente, pois é necessário criar um arquivo com o padrão de nomenclatura ``name.model.ts`` no pacote ``src.models``.

``base.model.ts``
```ts
import { IsInt, IsOptional, validate } from "class-validator";
import { OasCreatedAtProperty, OasUpdatedAtProperty } from "src/docs/decorators";
import { InvalidObjectException } from "src/exceptions";
import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  PrimaryGeneratedColumn
} from "typeorm";

export class BaseModel extends BaseEntity {

  @PrimaryGeneratedColumn("increment")
  public id: number;

  @OasCreatedAtProperty()
  @IsInt()
  @Column()
  public createdAt: number = +new Date;

  @OasUpdatedAtProperty()
  @IsOptional()
  @IsInt()
  @Column({ nullable: true })
  public updatedAt?: number = null;

  @BeforeInsert()
  @BeforeUpdate()
  async validate(){
    let errors = await validate(this);
    if (errors.length > 0)
      throw new InvalidObjectException(errors);
  }

  @BeforeUpdate()
  async update(){
    this.updatedAt = +new Date;
  }
  
}
```

Por fim a nova entidade deverá ter uma aparência similar a seguinte:

``my.model.ts``
```ts
import { Column, Entity, ManyToOne } from "typeorm";
import { BaseModel } from "./base.model";

@Entity({ name: "tbl_my" })
export class MyModel extends BaseModel {

  @Column()
  public myColumn: string;

}
```

> [!ATTENTION]
> Para mais informações a respeito de como montar o relacionamento de entidades, recomendamos fortemente a leitura da documentação oficial do **TypeORM** em [**TypeORM Docs**](https://typeorm.io/).

#### C3.2.6 Os Modules

No **Seja UPE**, criar um módulo é uma atividade fácil, felizmente, pois é necessário criar um arquivo com o padrão de nomenclatura ``name.module.ts`` no pacote ``src.modules`` ou utilizar o comando ``nest g module <name>``. Veja o snippet de código a seguir:

``my.module.ts``
```ts
import { Module } from "@nestjs/common";

@Module({
  imports: [
    //Your services...
  ],
  controllers: [
    //Your controllers...
  ]
})
export class MyModule {}
```

#### C3.2.7 As Guards

No **Seja UPE**, criar uma guarda é uma atividade fácil, felizmente, pois é necessário criar um arquivo com o padrão de nomenclatura ``name.guard.ts`` no pacote ``src.security.guards`` ou utilizar o comando ``nest g guard <name>``. Veja o snippet de código a seguir:

``authorize.guard.ts``
```ts
import { Reflector } from "@nestjs/core";
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

@Injectable()
export class AuthorizeGuard implements CanActivate {

  constructor(private reflector: Reflector){}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    return true; //If true the access is allowed, otherwise it's denied.
  }
}
```

#### C3.2.8 Os Services

Os provedores são um conceito fundamental no Nest. Muitas das classes básicas do Nest podem ser tratadas como um provedor – serviços, repositórios, fábricas, auxiliares e assim por diante. A ideia principal de um provedor é que ele pode ser injetado como uma dependência; isso significa que os objetos podem criar vários relacionamentos uns com os outros, e a função de "ligar" instâncias de objetos pode ser amplamente delegada ao sistema de tempo de execução Nest. O Nest é construído em torno do padrão de design forte comumente conhecido como **injeção de dependência**. No Nest, graças aos recursos do TypeScript, é extremamente fácil gerenciar dependências porque elas são resolvidas apenas por tipo. 

No **Seja UPE**, criar um service é uma atividade fácil, felizmente, pois é necessário criar um arquivo com o padrão de nomenclatura ``name.service.ts`` no pacote ``src.services`` ou utilizar o comando ``nest g service <name>``. Veja o snippet de código a seguir:

``user.service.ts``
```ts
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {

  getAllUsers(): string[] {
    return [
      'muryllo', 
      'kelvin', 
      'lucas', 
      'brenoly', 
      'luiz'
    ];
  }

}
```

Um serviço pode ser importado e resolvido a partir de outro serviço adicionando seu tipo ao construtor desse serviço. Por exemplo:

``auth.service.ts``
```ts
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {

  //In following example the userService is injected into property at runtime.
  constructor(private userService: UserService) {}

}
```

#### C3.2.9 Os Validators

Os validadores são classes concretas comuns que contém atributos de validação. Nem sempre queremos passar uma entidade completa pelo sistema, seja retornando ou recebendo. Um exemplo disso é a autenticação, onde passamos apenas usuário e senha, em muitos casos. Não faria sentido preencher todo o modelo de usuário para realizar a requisição, então, passamos apenas um objeto parcial. No **Seja UPE** este objeto é chamado de **validator** e tem características muito parecidas com as de um **Data Transfer Object**. Para criar um validador você deverá criar um arquivo no pacote ``src.validators`` contendo uma classe com as propriedades seguidas de suas anotações de tipo do ``Class Validator``. Veja um exemplo a seguir:

``login.auth.vld.ts``
```ts
import { IsDefined, IsNotEmpty, IsString } from "class-validator";

export class LoginValidator {

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  public username: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  public password: string;

}
```

#### C3.2.10 As Views

As Views se restrigem a templates html para e-mails, uma vez que no projeto não há um renderizador para transformar templates em páginas Web como o ejs, mustache, handlerbars, blade, etc. Para criar um novo template de e-mail é necessário criar um arquivo no pacote ``src.views.mails`` do tipo HTML.

#### C3.2.11 O Gateway Websocket

No Nest, um gateway é simplesmente uma classe anotada com ``@WebSocketGateway()`` decorador. Tecnicamente, os gateways são independentes de plataforma, o que os torna compatíveis com qualquer biblioteca WebSockets depois que um adaptador é criado. Há duas plataformas WS suportadas prontas para uso: ``socket.io`` e ``ws``. Você pode escolher aquele que melhor se adapta às suas necessidades.

No **Seja UPE**, criar um Gateway Websocket é uma atividade fácil, felizmente, pois é necessário criar um arquivo com o padrão de nomenclatura ``name.gateway.ts`` no pacote ``src.websocket`` ou utilizar o comando ``nest g gateway <name>``. Veja o snippet de código a seguir:

``websocket.gateway.ts``
```ts
import { WebSocket } from "ws";
import { MessageBody } from "@nestjs/websockets";
import { SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { OnGatewayConnection, OnGatewayDisconnect } from "@nestjs/websockets";

@WebSocketGateway()
export class WebSockGateway implements OnGatewayConnection, OnGatewayDisconnect {
  
  handleConnection(client: WebSocket, ...args: any[]) {
    //Handle the WebSocket connection event.
  }
  
  handleDisconnect(client: WebSocket) {
    //Handle the WebSocket disconnect event.
  }

  @SubscribeMessage("message-arrived")
  onMessageArrived(@MessageBody() data: any) {
    //Handle the message arrived event.
  }

}
```

### C3.3 Quais são as restrições e limitações do projeto e como são contornadas?

### C3.4 Implementando uma nova funcionalidade respeitando a arquitetura

#### C3.4.1 Quais camadas devem ser implementadas?

#### C3.4.2 Padrões e convenções de nomenclatura

#### C3.4.3 Padrões de projeto utilizados

#### C3.4.4 Módulos e serviços disponíveis para utilização

