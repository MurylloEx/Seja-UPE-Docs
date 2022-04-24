### • Como a arquitetura está sendo exibida?

A arquitetura está sendo expressa por meio deste documento através da abordagem de diagramação de arquitetura de software C4 Model. A documentação deste projeto está sendo dividida em 4 tópicos, sendo o quarto tópico contendo 4 níveis conforme a estrutura hierárquica a seguir:

```
\ Arquitetura de Software (Esta página)
  \-> Requisitos Arquiteturais
  \-> Qualidade do Software
  \-> Implantação
  \-> C1. Visão Geral
    \-> C2. Sistema
      \-> C3. Aplicação Mobile (Client)
        \-> C4. Visão de Caso de Uso
        \-> C4. Visão de Implementação
        \-> C4. Visão de Processo
        \-> C4. Visão Lógica
      \-> C3. Endpoints RESTful (Server)
        \-> C4. Visão de Caso de Uso
        \-> C4. Visão de Implementação
        \-> C4. Visão de Processo
        \-> C4. Visão Lógica
```

| Nome da seção | Propósito e breve descrição |
| --- | --- |
| Arquitetura de Software | Nesta seção você verá um pouco sobre o que é o C4 Model, qual a abordagem utilizada na documentação, a proposta do sistema, um pouco sobre cada tecnologia utilizada e, claro, alguns acrônimos e explanações a respeito do C4 Model, a abordagem utilizada para documentar o software. |
| Requisitos Arquiteturais | Nesta seção você terá um breve vislumbre sobre o que são esses requisitos arquiteturais e também como eles impactam na arquitetura proposta. |
| Qualidade do Software | Nesta seção você verá quais requisitos impactam no fator desempenho, tamanho do software além de entender a abordagem de testes e como ela impacta na arquitetura. Dessa forma, você entende como o sistema possui a capacidade de ser testável, já que isso é algo favorecido pela arquitetura. |
| Implantação | Nesta seção você verá como o software é implantado, sua infraestrutura, quais as abordagens DevOps utilizadas, versionamento, publish e acesso antecipado. |
| C1. Visão Geral | Nesta seção você verá o primeiro nível do C4 Model, sendo uma perspectiva de contexto da arquitetura do sistema. |
| C2. Sistema | Nesta seção você verá o sistema como um todo do ponto de vista de contâineres, os quais se relacionam. Nessa visão são expostos os relacionamentos entre esses contâineres para garantir que a arquitetura funcione. |
| C3. Aplicação Mobile (Client) e C3. Endpoints RESTful (Server) | Nestas seções são expressos os detalhes da arquitetura do front-end móvel, como por exemplo as camadas do sofware, como novas funcionalidades devem ser implementadas respeitando a arquitetura, os padrões e convenções de nomenclatura, etc. |
| Níveis C4 | Por fim, mas não menos importante, as seções C4 abordam, cada uma, visões arquiteturais seguindo a ideia de Philippe Kruchten. Neste nível, é exigido conhecimento técnico em programação para entender as ilustrações e diagramas UML que mostram os casos de uso que realizam a arquitetura vigente. |

Ao longo de toda esta documentação, você verá em detalhes como a arquitetura é dividida, suas tecnologias e, claro, como elas se relacionam. A imagem a seguir ilustra de forma superficial como o projeto está dividido em back-end e front-end e seus principais componentes internos, explanados ao longo das seções.<br>

![Diagrama de Definição de Arquitetura](asset_architecture_definition_diagram.png "Diagrama de Definição de Arquitetura")

### • O que é o C4 Model?

O modelo C4 é uma abordagem fácil de aprender e amigável ao desenvolvedor para diagramação de arquitetura de software. Bons diagramas de arquitetura de software auxiliam na comunicação dentro/fora das equipes de desenvolvimento/produto de software, integração eficiente de novos funcionários, revisões/avaliações de arquitetura, identificação de riscos (por exemplo, tempestade de riscos), modelagem de ameaças (por exemplo, STRIDE/LINDDUN), etc.

### • Como ler a documentação da forma correta?

Entenda que o C4 Model é uma abordagem minimalista para se expressar uma arquitetura de software com um conjunto rico de diagramas e recursos intertextuais. Dessa forma, você precisa imaginar a documentação como um mapa arquitetural. Neste mapa arquitetural você poderá dar um zoom e a cada nível descido aumentar o nível de granularidade das informações, sendo possível visualizar cada vez mais detalhes.<br>
No nível C1 você verá o sistema, do ponto de vista de contexto do sistema e da perspectiva de um usuário, não técnico ou técnico que seja de dentro ou de fora da equipe de desenvolvimento. No nível C2 você poderá ver o sistema do ponto de vista de containers e seus relacionamentos, da perspectiva de um usuário técnico de dentro ou fora da equipe de desenvolvimento, com capacidade de entender as informações expressas. No nível C3 você conseguirá enxergar o sistema do ponto de vista dos componentes deste containeres vistos no nível C2. Aqui, é necessário um alto grau de entendimento técnico, sendo o público alvo desenvolvedores, engenheiros de software. Já no nível C4, por fim, podemos enxergar toda a parte mais baixo nível do sistema, através do seu código sendo expresso por recursos visuais como diagramas, textos e imagens. Neste nível, há uma subdivisão em 4 visões arquiteturais de acordo com a abordagem de Philippe Kruchten onde o código é visto como uma composição de diferentes visões arquiteturais que contém certos conjuntos de diagramas. Essas visões arquiteturais são:<br>

1. **Visão de Caso de Uso**<br>
Descreve a arquitetura do sistema através do uso de Diagramas de casos de uso. Cada diagrama descreve sequências de interações entre os objetos e processos. São usados para identificar elementos de arquiteturra e ilustrar e validar o design de arquitetura.
2. **Visão de Implementação**<br>
Ilustra o sistema do ponto de vista do programador e se preocupa com o gerenciamento do projeto. Esta visão também é conhecida como visão de implementação. Usa o Diagrama de componentes ou Diagrama de pacotes. 
3. **Visão de Processo**<br>
Permite visualizar as partes dinâmicas do sistema, explicar os processos e como eles se comunicam, focando no comportamento do sistema. A visão de processo se encarrega da concorrência, distribuição, integração, performance e escalabilidade. O Diagrama de atividades é usado nesta visão.
4. **Visão Lógica**<br>
Se concentra na funcionalidade que o sistema disponibiliza para o usuároi final. Os diagramas UML usados para representar a visão lógica incluem: Diagrama de classes, Diagrama de comunicação e Diagrama de sequencia. 

Há outra visão arquitetural que se encontra fora do nível C4 pois diz respeito tanto ao front-end como ao back-end, sendo ela a **visão de implantação**. Esta visão, mostra o sistema do ponto de vista do engenheiro. Se preocupa com a topologia dos componentes de software (no contexto físico) assim como a comunicação entre esses componentes. Esta visão também é conhecida como visão de implantação. Os diagramas UML usados para descrever esta visão incluem o Diagrama de implantação.

### • Principais tecnologias envolvidas

1. [JavaScript](https://www.javascript.com/)<br>
JavaScript é uma linguagem de programação baseada em texto usada tanto no lado do cliente quanto no lado do servidor que permite que você torne as páginas da web interativas. Enquanto HTML e CSS são linguagens que dão estrutura e estilo às páginas da web, o JavaScript fornece às páginas da web elementos interativos que envolvem o usuário. Exemplos comuns de JavaScript que você pode usar todos os dias incluem a caixa de pesquisa na Amazon, um vídeo de recapitulação de notícias incorporado no The New York Times ou atualizar seu feed do Twitter.  

2. [TypeScript](https://www.typescriptlang.org/)<br>
TypeScript é uma linguagem de programação fortemente tipada que se baseia em JavaScript, oferecendo melhores ferramentas em qualquer escala. O TypeScript adiciona sintaxe adicional ao JavaScript para oferecer suporte a uma integração mais estreita com seu editor. Detecte erros no início do seu editor. O código TypeScript é convertido em JavaScript, que é executado em qualquer lugar que o JavaScript seja executado: em um navegador, em Node.js ou Deno e em seus aplicativos. O TypeScript entende JavaScript e usa inferência de tipos para fornecer ótimas ferramentas sem código adicional.

3. [React Native](https://reactnative.dev/)<br>
React Native é um framework JavaScript para escrever aplicativos móveis reais e de renderização nativa para iOS e Android. Ele é baseado no React, a biblioteca JavaScript do Facebook para construir interfaces de usuário, mas em vez de direcionar o navegador, ele tem como alvo plataformas móveis.

4. [NestJS](https://nestjs.com/)<br>
Nest (NestJS) é um framework para criar aplicativos Node.js eficientes e escaláveis ​​do lado do servidor. Ele usa JavaScript progressivo, é construído com e suporta totalmente TypeScript (ainda permite que os desenvolvedores codifiquem em JavaScript puro) e combina elementos de POO (Programação Orientada a Objetos), PF (Programação Funcional) e PRF (Programação Reativa Funcional).<br>
Sob o capô, o Nest faz uso de frameworks robustos de servidor HTTP como o Express (o padrão) e, opcionalmente, pode ser configurado para usar o Fastify também!
No entanto, embora existam muitas bibliotecas, auxiliares e ferramentas excelentes para Node (e JavaScript do lado do servidor), nenhuma delas resolve efetivamente o principal problema de - Arquitetura.<br>
A Nest fornece uma arquitetura de aplicativo pronta para uso que permite que desenvolvedores e equipes criem aplicativos altamente testáveis, escaláveis, pouco acoplados e de fácil manutenção. A arquitetura é fortemente inspirada no Angular.

5. [TypeORM](https://typeorm.io/)<br>
TypeORM é um ORM que pode ser executado em plataformas NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo e Electron e pode ser usado com TypeScript e JavaScript (ES5, ES6, ES7, ES8). Seu objetivo é sempre oferecer suporte aos recursos JavaScript mais recentes e fornecer recursos adicionais que o ajudem a desenvolver qualquer tipo de aplicativo que use bancos de dados - desde pequenos aplicativos com algumas tabelas até aplicativos corporativos de grande escala com vários bancos de dados. O TypeORM é altamente influenciado por outros ORMs, como Hibernate, Doctrine e Entity Framework.

6. [SQLite](https://www.sqlite.org/index.html)<br>
SQLite é uma biblioteca de linguagem C que implementa um mecanismo de banco de dados SQL pequeno, rápido, independente, de alta confiabilidade e com todos os recursos. SQLite é o mecanismo de banco de dados mais usado no mundo. O SQLite está embutido em todos os telefones celulares e na maioria dos computadores e vem dentro de inúmeros outros aplicativos que as pessoas usam todos os dias.

7. [WebSockets](https://developer.mozilla.org/pt-BR/docs/Web/API/WebSockets_API)<br>
WebSocket é uma tecnologia que permite a comunicação bidirecional por canais full-duplex sobre um único soquete Transmission Control Protocol (TCP). Ele é projetado para ser executado em browsers e servidores web que suportem o HTML5, mas pode ser usado por qualquer cliente ou servidor de aplicativos. A API WebSocket está sendo padronizada pelo W3C e o protocolo WebSocket está sendo padronizado pelo IETF.

8. [HTTP/S](https://datatracker.ietf.org/doc/html/rfc2616)<br>
O HTTP é um protocolo para buscar recursos como documentos HTML. É a base de qualquer troca de dados na Web e é um protocolo cliente-servidor, o que significa que as solicitações são iniciadas pelo destinatário, geralmente o navegador da Web. Um documento completo é reconstruído a partir dos diferentes subdocumentos obtidos, por exemplo, texto, descrição do layout, imagens, vídeos, scripts e muito mais.

9. [REST API](https://standards.rest/)<br>
API REST, também chamada de API RESTful, é uma interface de programação de aplicações (API ou API web) que está em conformidade com as restrições do estilo de arquitetura REST, permitindo a interação com serviços web RESTful. REST é a sigla em inglês para "Representational State Transfer", que em português significa tansferência de estado representacional. Essa arquitetura foi criada pelo cientista da computação Roy Fielding.

10. [Google OAuth2 Single Sign-On](https://docs.expo.dev/versions/latest/sdk/google/)<br>
OAuth 2.0, que significa “Autorização Aberta”, é um padrão projetado para permitir que um site ou aplicativo acesse recursos hospedados por outros aplicativos da Web em nome de um usuário. Ele substituiu o OAuth 1.0 em 2012 e agora é o padrão de fato do setor para autorização online. OAuth 2.0 fornece acesso consentido e restringe ações do que o aplicativo cliente pode realizar em recursos em nome do usuário, sem nunca compartilhar as credenciais do usuário.

11. [Expo SDK](https://expo.dev/)<br>
Expo é um framework e uma plataforma para aplicações React universais. É um conjunto de ferramentas e serviços construídos em torno de plataformas nativas e React Native que ajudam você a desenvolver, construir, implantar e iterar rapidamente em aplicativos iOS, Android e web a partir da mesma base de código JavaScript/TypeScript.

12. [Expo Go](https://expo.dev/client)<br>
O Expo Go/Expo Client fornece um SDK predefinido com APIs comumente usadas, como componentes básicos de visualização, imagens, acesso à câmera, notificações, informações do dispositivo e muito mais. O SDK predefinido atende às necessidades de muitos aplicativos profissionais que usam o fluxo de trabalho gerenciado de hoje.

### • Proposta do sistema

O aplicativo “Seja UPE” vem em um contexto onde o ingresso na universidade é sempre um assunto que envolve os ânimos e expectativas de todos aqueles que se preparam durante anos para alcançá-lo. Aliado a isso, surge uma grande pergunta: “Que curso devo fazer?”, ela é bastante subjetiva e pode ser encarada com diversas perspectivas. 

Numa tentativa de propor sugestões para auxiliar os vestibulandos e os futuros ingressantes na universidade, o aplicativo realiza perguntas aos vestibulandos que o utilizam e sugere cursos que melhor se aderem ao seu perfil de respostas. Por isso, é extremamente importante conhecer bem os cursos à sua disposição levando em conta aspectos como: notas de corte, localização, quantidade de vagas, matérias, período, maneiras de ingressar e entre outras informações. A partir delas é possível ter uma base melhor para definir quais cursos você possui mais afinidade e quais se adequam melhor aos seus planos pessoais. Daí surge a importância de universidades como a UPE (Universidade de Pernambuco) disponibilizarem essas informações de forma acessível a maior quantidade de pessoas possível. Ademais, também é interessante encontrar meios alternativos de auxiliar esses ingressantes a identificar suas próprias preferências. 

Diante disso o “Seja UPE” apresenta-se como um aplicativo mobile que visa disponibilizar informações detalhadas sobre o Campus Garanhuns da UPE e seus cursos, aproximando a Universidade da sociedade. Além disso, através de meios lúdicos, pretende apoiar a tomada de decisão dos alunos que anseiam ingressar em algum dos cursos ofertados.

### • Acrônimos

| Acrônimo/Abreviação | Significado e descrição |
| --- | --- |
| API | Interface de programação de aplicativos |
| UML | Unified Modeling Language |
| DDoS | Ataques cibernéticos com a finalidade de tornar o sistema indisponível |
| Framework | Uma estrutura de código genérica e padrão para se desenvolver um determinado software com maior ênfase na reutilização de código |
| RNF | Identificador de um requisito não funcional |
| MVC | Padrão de projeto Model-View-Controller para estruturamento de webservices |
| NestJS | Framework de desenvolvimento de aplicações webservice e serviços de back-end |
| Back-end | É um termo que representa a aplicação residente no lado do servidor |
| MSC | Model-Service-Controller para estruturamento do projeto |
