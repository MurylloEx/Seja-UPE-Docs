### C1.1 O que é o sistema Seja UPE?

O aplicativo **Seja UPE** vem em um contexto onde o ingresso na universidade é sempre um
assunto que envolve os ânimos e expectativas de todos aqueles que se preparam durante anos
para alcançá-lo. Aliado a isso, surge uma grande pergunta: “Que curso devo fazer?”, ela é
bastante subjetiva e pode ser encarada com diversas perspectivas.

Numa tentativa de propor sugestões para auxiliar os vestibulandos e os futuros ingressantes na universidade, o aplicativo realiza perguntas aos vestibulandos que o utilizam e sugere cursos que melhor se aderem ao seu perfil de respostas. Por isso, é extremamente importante conhecer bem os cursos à sua disposição levando em conta aspectos como: notas de corte, localização, quantidade de vagas, matérias, período, maneiras de ingressar e entre outras informações. A partir delas é possível ter uma base melhor para definir quais cursos você possui mais afinidade e quais se adequam melhor aos seus planos pessoais. Daí surge a importância de universidades como a UPE (Universidade de Pernambuco) disponibilizarem essas informações de forma acessível a maior quantidade de pessoas possível. Ademais, também é interessante encontrar meios alternativos de auxiliar esses ingressantes a identificar suas próprias preferências.

Diante disso o **Seja UPE** apresenta-se como um aplicativo mobile que visa disponibilizar informações detalhadas sobre o Campus Garanhuns da UPE e seus cursos, aproximando a Universidade da sociedade. Além disso, através de meios lúdicos, pretende apoiar a tomada de decisão dos alunos que anseiam ingressar em algum dos cursos ofertados.

### C1.2 O que são as entidades presentes no diagrama?

- **Usuário**, quem irá interagir com o sistema buscando detalhes sobre a Universidade do Estado de Pernambuco (UPE), seus cursos, seus campi e etc. Este usuário são os concorrentes de vestibular SSA, SISU e potenciais ingressantes da universidade;
- **Sistema Seja UPE**, o sistema que será executado no dispositivo móvel e que proverá ao usuário, principalmente os pré-universitários, as mais variadas informações sobre a UPE e, além disso, ainda possui uma espécie de teste vocacional para que os estudantes possam descobrir com qual curso ele possui maior afinidade;
- **Sistema de Single Sign-On**, sistema de autenticação que possibilita o usuário utilizar o sistema **Seja UPE** com a sua conta Google;
- **WebSocket**, é um Gateway WebSocket, um serviço interno ao **Seja UPE** que é utilizado pelo aplicativo móvel e que possibilita o usuário enviar e receber mensagens dentro do aplicativo;
- **Sistema de Notificações**, é o serviço externo do Expo chamado Expo Push Notifications e quem provê a possibilidade do usuário receber notificações, por exemplo, o status do seu teste vocacional;
- **Sistema de E-mail**, é o serviço externo de envio de e-mails transacionais através do protocolo SMTP e quem possibilita o envio de um e-mail de boas-vindas para o usuário assim que ele se cadastrar no sistema **Seja UPE**;

### C1.3 Como as entidades presentes no diagrama se relacionam para contribuir com o funcionamento do sistema?

Nos tópicos a seguir você verá quais as comunicações que ocorrem entre o sistema **Seja UPE** e seus subsistemas, bem como a forma como essa comunicação ocorre.

- **Usuário**:
  - O usuário interage com as funcionalidades do sistema **Seja UPE** através de uma aplicação mobile, conseguindo:
    - Visualizar os cursos de um determinado Campus, assim como mais informações sobre eles, como:
      - Notas de corte;
      - Corpo docente;
      - Áreas de atuação;
      - Etc;

- **Sistema Seja UPE**:
  - O sistema **Seja UPE** interage com as seguintes entidades:
    - Sistema de SSO, utilizando o protocolo HTTP, para realizar a autenticação do usuário dentro do sistema;
    - WebSocket, utilizando o protocolo WebSocket, para que o usuário consiga enviar e receber mensagens dentro do sistema;
    - Sistema de notificações, utilizando o protocolo HTTP, para alertar o usuário sobre o status do preenchimento do teste vocacional dentro do aplicativo;
    - Sistema de e-mail, utilizando o protocolo HTTP e SMTP, para enviar e-mail de boas-vindas ao usuário;

### C1.4 Quais são os atores do sistema?

No sistema há apenas um ator: o usuário. O usuário é quem realiza interações com o sistema para obter informações sobre a UPE. Esse usuário, na sua grande maioria, são pré-universitários que buscam informações sobre a UPE e seus cursos, no intuito de saber, por exemplo, se a universidade possui um curso de seu interesse. Não há outros sistemas que sejam atores no momento, como ocorre em sistemas maiores que possuem integrações. No entanto, o Seja UPE é ator dos sistemas que depende, como por exemplo, o sistema de single sign-on.

### C1.5 Quais são os serviços externos ao sistema?

O Seja UPE se comunica com 3 serviços externos e um serviço interno, sendo estes:

- **Sistema de Single Sign-On (OAuth2)**
  É um serviço externo **gratuito** da Google que permite a autenticação de usuários a partir de suas contas do Gmail, sem a necessidade de fornecimento de senhas ou qualquer credencial de acesso.

- **Sistema de Notificações (Expo Notification)**
  É um serviço externo **gratuito** do Expo que permite o envio de notificações push para o dispositivo dos usuários através de um endpoint e um identificador do aparelho.

- **Sistema de E-mail (SMTP2GO)**
  É um serviço externo **gratuito** da SMTP2GO que permite o envio de e-mails transacionais através de requisições HTTP do tipo POST. É gratuita até certo ponto, sendo permitidos 1000 envios de e-mail por mês. Para maiores demandas de envio transacionais será necessário a contratação de um plano On-Demand.

- **WebSocket (Gateway WebSocket e React Native useWebSocket)**
  É um serviço interno do Seja UPE, sendo um Gateway que utiliza a porta HTTPS do servidor para fornecer o acesso ao protocolo WebSocket e permitir que os usuários de comuniquem no bate-papo com baixa latência. Esse Gateway reutiliza a instância do servidor HTTP e o envolve utilizando o padrão Adapter em um adaptador para uma instância de servidor WebSocket. Não há custos envolvidos pois se trata de um serviço interno.