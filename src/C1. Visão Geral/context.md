### C1.1 O que é o sistema Seja UPE?

O aplicativo “Seja UPE” vem em um contexto onde o ingresso na universidade é sempre um
assunto que envolve os ânimos e expectativas de todos aqueles que se preparam durante anos
para alcançá-lo. Aliado a isso, surge uma grande pergunta: “Que curso devo fazer?”, ela é
bastante subjetiva e pode ser encarada com diversas perspectivas.

Numa tentativa de propor sugestões para auxiliar os vestibulandos e os futuros ingressantes na universidade, o aplicativo realiza perguntas aos vestibulandos que o utilizam e sugere cursos que melhor se aderem ao seu perfil de respostas. Por isso, é extremamente importante conhecer bem os cursos à sua disposição levando em conta aspectos como: notas de corte, localização, quantidade de vagas, matérias, período, maneiras de ingressar e entre outras informações. A partir delas é possível ter uma base melhor para definir quais cursos você possui mais afinidade e quais se adequam melhor aos seus planos pessoais. Daí surge a importância de universidades como a UPE (Universidade de Pernambuco) disponibilizarem essas informações de forma acessível a maior quantidade de pessoas possível. Ademais, também é interessante encontrar meios alternativos de auxiliar esses ingressantes a identificar suas próprias preferências.

Diante disso o “Seja UPE” apresenta-se como um aplicativo mobile que visa disponibilizar informações detalhadas sobre o Campus Garanhuns da UPE e seus cursos, aproximando a Universidade da sociedade. Além disso, através de meios lúdicos, pretende apoiar a tomada de decisão dos alunos que anseiam ingressar em algum dos cursos ofertados.

### C1.2 O que são as entidades presentes no diagrama?

- **Usuário**, quem irá interagir com o sistema buscando detalhes sobre a Universidade do Estado de Pernambuco (UPE), seus cursos, seus campi e etc.;
- **Sistema Seja UPE**, o sistema busca prover ao usuário, principalmente os pré-universitários, as mais variadas informações sobre a UPE e, além disso, ainda possui uma espécie de teste vocacional para que os estudantes possam descobrir com qual curso ele possui maior afinidade;
- **Sistema de SSO**, sistema de autenticação que possibilita o usuário utilizar o sistema Seja UPE com a sua conta Google;
- **WebSocket**, protocolo de comunicação que possibilita o usuário enviar e receber mensagens dentro do aplicativo;
- **Sistema de notificações**, provém a possibilidade do usuário receber notificações. Por exemplo, o status do seu teste vocacional.;
- **Sistema de e-mail**, possibilita o envio de um e-mail de boas-vindas para o usuário, assim que ele se cadastrar no sistema Seja UPE;

### C1.3 Como as entidades presentes no diagrama se relacionam para contribuir com o funcionamento do sistema?

- **Usuário**:

  - O usuário interage com as funcionalidades do sistema Seja UPE através de uma aplicação mobile, conseguindo:
    - Visualizar os cursos de um determinado Campus, assim como mais informações sobre eles, como:
      - Notas de corte;
      - Corpo docente;
      - Áreas de atuação;
      - Etc.;

- **Sistema Seja UPE**:

  - O sistema Seja UPE interage com as seguintes entidades:
    - Sistema de SSO, para realizar a autenticação do usuário dentro do sistema;
    - WebSocket, para que o usuário consiga enviar e receber mensagens dentro do sistema;
    - Sistema de notificações, para alertar o usuário sobre o status do preenchimento do teste vocacional dentro do aplicativo;
    - Sistema de e-mail, para enviar e-mail de boas-vindas ao usuário;

### C1.4 Quais são os atores do sistema?

- Apenas o usuário, que é o principal ator que realiza interações com o sistema para obter informações sobre a UPE. Esse usuário, na sua grande maioria, são pré-universitários que buscam informações sobre a UPE e seus cursos, no intuito de saber, por exemplo, se a universidade possui um curso de seu interesse.

### C1.5 Quais são os serviços externos ao sistema?

- Os sistemas externos utilizados no sistema são apenas 4, que são: **Sistema de SSO (oAuth2)**, **WebSocket (React Native useWebSocket)**, **Sistema de notificações (Expo Notification)**, **Sistema de e-mail (SMTP2GO)**
