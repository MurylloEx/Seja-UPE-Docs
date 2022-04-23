## 1.1 Requisitos do Sistema

Requisitos são, além de funções, objetivos, propriedades, restrições que o sistema deve possuir para satisfazer contratos, padrões ou especificações de acordo com o(s) usuário(s). De forma mais geral um requisito é uma condição necessária para satisfazer um objetivo.

### 1.1.1 Requisitos Funcionais

Os requisitos funcionais determinam as funcionalidades que o software deve ter para ser útil para o cliente ou utilizador do sistema. As funcionalidades ou ações são consideradas funções, objetivos que o sistema deve permitir que o usuário execute dentro do sistema. Veja os requisitos funcionais do **Seja UPE**:

| Requisito | Descrição | Classificação |
| --- | --- | --- |
| RF001. Exibir cursos de um determinado Campus | O usuário deverá ser capaz de visualizar quais cursos são ofertados pela UPE em todo o estado. | Essencial | 
| RF002. Transparecer informações de concorrência | O usuário deverá ser capaz de visualizar as informações de concorrência de cada um dos cursos ofertados pela UPE. | Essencial | 
| RF003. Indicar notas de corte | O usuário deverá ser capaz de visualizar as notas de corte de cada um dos cursos ofertados pela UPE. | Essencial | 
| RF004. Divulgar maiores notas do curso no ano anterior | O usuário deverá ser capaz de visualizar as maiores notas alcançadas em cada um dos cursos da UPE no ano anterior. | Essencial |
| RF005. Informar maneiras de ingressar | O usuário deverá ser capaz de visualizar quais são as maneiras possíveis de ingressar em um dos cursos da UPE. | Desejável |
| RF006. Apresentar informações sobre o curso | O usuário deverá ser capaz de visualizar informações gerais sobre cada um dos cursos ofertados pela UPE. | Desejável |
| RF007. Exibir perfil do curso | O usuário deverá ser capaz de visualizar informações detalhadas sobre como cada um dos cursos ofertados pela UPE é estruturado. | Desejável |
| RF008. Informar corpo docente | O usuário deverá ser capaz de visualizar o corpo docente de cada um dos cursos ofertados pela UPE. | Desejável |
| RF009. Detalhar docentes | O usuário deverá ser capaz de visualizar detalhes sobre cada um dos docentes dos cursos ofertados pela UPE. | Desejável |
| RF010. Apresentar áreas de atuação | O usuário deverá ser capaz de visualizar as possíveis áreas de atuação de cada um dos cursos ofertados pela UPE. | Desejável |
| RF011. Mostrar visão do mercado de trabalho | O usuário deverá ser capaz de visualizar as perspectivas de mercado de trabalho para cada um dos cursos ofertados pela UPE. | Desejável |
| RF012. Disponibilizar Programa Pedagógico do Curso | O usuário deverá ser capaz de visualizar o PPC (Plano Pedagógico de Curso) de cada um dos cursos ofertados pela UPE. | Desejável |
| RF013. Retratar contexto histórico do Curso | O usuário deverá ser capaz de visualizar o contexto histórico de cada um dos cursos ofertados pela UPE. | Desejável |
| RF014. Realizar Teste Vocacional | O usuário deverá ser capaz de responder um tipo de teste vocacional lúdico para identificar quais cursos se encaixam melhor no meu perfil. | Essencial |
| RF015. Ilustrar potencial de vocação para o curso | O usuário deverá ser capaz de visualizar através de porcentagens quais cursos me identifico mais dentro das opções ofertadas pela UPE em todo o estado. | Essencial |
| RF016. Ofertar possibilidade de refazer teste | O usuário deverá ser capaz de poder refazer o teste visando aprimorar preferências do curso. | Essencial |
| RF017. Exibir descrição do Campus | O usuário deverá ser capaz de visualizar a descrição dos Campus da UPE. | Importante |
| RF018. Informar redes sociais | O usuário deverá ser capaz de visualizar a informação das principais redes sociais pertencentes aos Campus da UPE. | Desejável |
| RF019. Apresentar localização do Campus | O usuário deverá ser capaz de visualizar com exatidão a localização dos Campus da UPE. | Importante |
| RF020. Exibir principais eventos | O usuário deverá ser capaz de visualizar os principais eventos dos Campus da UPE. | Desejável |
| RF021. Informar meios de contato | O usuário deverá ser capaz de visualizar todos os meios de contatos importantes. | Desejável |
| RF022. Interagir pelo bate-papo | O usuário deverá ser capaz de se comunicar com outros usuários através de um chat online em tempo real. | Desejável |
| RF023. Avaliar a sugestão de cursos | O usuário deverá ser capaz de avaliar a sugestão de curso exposta pelo aplicativo. | Importante |
| RF024. Avaliar determinado curso | O usuário deverá ser capaz de “curtiu” ou não “curtiu” o curso em que ele entrou. | Importante |
| RF025. Realizar login | O usuário deverá ser capaz de realizar login via SSO com sua conta do Google. | Essencial |
| RF026. Pesquisar cursos | O usuário deverá ser capaz de filtrar informações para encontrar determinado curso. | Essencial |
| RF027. Lembrete de Teste Vocacional | O usuário deverá ser capaz de ser alertado sobre o status do preenchimento do seu teste vocacional, com o objetivo de melhorar sua experiência no aplicativo. | Importante |

### 1.1.2 Requisitos Não Funcionais

Os requisitos não funcionais são aqueles requisitos que impactam na forma como o software será construído, especificando restrições e premissas que impactam do ponto de vista da qualidade como os requisitos funcionais deverão ser implementados. Veja os requisitos não funcionais do **Seja UPE**:

| Requisito | Descrição | Classificação |
| --- | --- | --- |
| RNF001. Tempo de Resposta | O aplicativo deverá apresentar tempos de resposta inferiores a 1000 ms, de forma a apresentar um carregamento suficientemente rápido. | Importante |
| RNF002. Usuário Online | O aplicativo deverá permitir a conexão de até 100 usuários online simultaneamente. | Importante |
| RNF003. Período Ativo | O aplicativo deve permanecer online 24 horas por dia, 7 dias por semana, com tolerância a interrupções de no máximo 2 horas em situações excepcionais para manutenções ou atualizações planejadas. | Importante |
| RNF004. Compatibilidade | O sistema deve essencialmente funcionar na plataforma Android, visto que o iOS é uma plataforma cara e não é acessível para o momento. | Essencial |
| RNF005. Proteção contra ataques DDoS | O sistema deverá utilizar CloudFlare para proteção contra ataques DDoS. | Desejável |
| RNF006. Criptografia | O sistema deverá utilizar o HTTPS (Hyper Text Transfer Protocol Secure) como forma de criptografia. | Importante |
| RNF007. Autenticação | O usuário deve ser capaz de realizar login através de sua conta Google utilizando o serviço SSO (Single Sign-On) da Google. | Essencial |
| RNF008. Documentação das APIs REST | O endpoint do aplicativo deve ser bem documentado para facilitar integrações futuras com outros sistemas ou correções de implementações no front-end. | Importante |

## 1.2 O que são os requisitos arquiteturais?

Os Requisitos Arquiteturais são todos os requisitos, sejam eles Funcionais ou Não-Funcionais que têm impacto direto sobre a Arquitetura do Sistema. Dessa forma, o Arquiteto precisa analisar os requisitos do sistema identificando algumas propriedades e então “filtrando” os Requisitos Arquiteturais. Como auxílio nesse processo de identificação, você pode realizar as seguintes perguntas para os requisitos que já foram levantados: 

- Oferece alto impacto sobre a Arquitetura? 
- Tem escopo abrangente? 
- Oferece alto risco para o negócio? 
- Possui restrições severas? 
- Dita a utilização de alguma tecnologia específica? 
- A implementação do requisito é complexa? 
- Exige a obediência de alguma legislação específica?

## 1.3 Requisitos arquiteturais do sistema

| []() | []() |
| --- | --- |
| Requisito Arquitetural | RF006. Apresentar informações sobre o curso |
| Atributo(s) de qualidade relacionados | Suportabilidade e Manutenibilidade |
| Classificação | Essencial |
| Por que é um Requisito Arquitetural? | Foi utilizado o SQLite pois ele se mostrou versátil para transferência e troca de dados entre os integrantes da equipe, uma vez que ele é composto por um único arquivo que pode ser facilmente intercambiado. |
| Decisões arquiteturais que foram tomadas | A escolha do banco de dados e o esquema relacional feito vão garantir que o requisito arquitetural seja contemplado pela arquitetura pois definem o padrão de armazenamento de dados do sistema, ou seja, as tabelas do sistema, as colunas, os dados necessários para serem exibidos nas telas. |
| Decisões arquiteturais que vão garantir que esse requisito seja contemplado pela arquitetura | Não é possível adicionar mais dados nem menos dados do que se é solicitado devido as constraints nas tabelas do banco de dados que impedem que os dados sejam inseridos de forma errada, por exemplo, quebrando relações. |
| Como será realizada a manutenção? | Solicitar a secretaria da UPE que enviassem novos dados para que fossem adicionados a base de dados atual, e todo esse processo seria manual. |

| []() | []() |
| --- | --- |
| Requisito Arquitetural | RF012. Disponibilizar Programa Pedagógico do Curso |
| Atributo(s) de qualidade relacionados | Usabilidade |
| Classificação | Desejável |
| Por que é um Requisito Arquitetural? | Foi necessário adaptar o front-end mobile para permitir que o usuário visualize documentos do tipo PDF e Docx na tela de programa pedagógico do curso. Essa adaptação adicionou novas dependências ao projeto e teve que se levar em consideração o tipo de arquivo do programa pedagógico para decidir qual tipo de leitor deveria ser usado. |
| Decisões arquiteturais que foram tomadas | Foi necessário instalar uma biblioteca do tipo WebView (react-native-webview) e também uma biblioteca do tipo leitor de PDF (rn-pdf-reader-js). |
| Decisões arquiteturais que vão garantir que esse requisito seja contemplado pela arquitetura | No banco de dados, todos os documentos que serão adicionados no futuro devem possuir qualquer formato do tipo Doc ou PDF. Qualquer documento que não seja um PDF será renderizado dentro de uma WebView garantindo que o usuário consiga visualizar o documento e evitando a necessidade de inserir uma dependência para ler cada tipo de arquivo. |
| Como será realizada a manutenção? | Atualizando as dependências das bibliotecas utilizadas (react-native-webview e rn-pdf-reader-js) para atender aos requisitos de exibição do programa pedagógico dos cursos. Além disso, os links para os documentos deverão ser atualizados periodicamente. |

| []() | []() |
| --- | --- |
| Requisito Arquitetural | RF019. Apresentar localização do Campus |
| Atributo(s) de qualidade relacionados | Usabilidade |
| Classificação | Importante |
| Por que é um Requisito Arquitetural? | Foi necessário instalar uma dependência para manipular coordenadas de latitude e longitude que eram enviadas através do banco de dados, e isso exigiu que as coordenadas armazendas no banco de dados tivessem uma precisão específica de quatro casas decimais. Além disso, foi necessário criar um componente de mapa personalizado para o aplicativo que utilizava essa dependência (react-native-maps). |
| Decisões arquiteturais que foram tomadas | Foi necessário instalar uma biblioteca (react-native-maps) e criar um componente personalizado para o aplicativo que exibisse o campus utilizando um marker personalizado do Seja UPE (ou seja, um indicador de posição). |
| Decisões arquiteturais que vão garantir que esse requisito seja contemplado pela arquitetura | No banco de dados há uma constraint para restringir a precisão da precisão das coordenadas inseridas a quatro casas decimais, impedindo que as coordenadas sejam inseridas de forma errada no banco. |
| Como será realizada a manutenção? | Mantendo as coordenadas armazenadas na base e atualizando as depências utilizadas para atender este requisito. |

| []() | []() |
| --- | --- |
| Requisito Arquitetural | RF022. Interagir pelo bate-papo |
| Atributo(s) de qualidade relacionados | Interoperabilidade |
| Classificação | Desejável |
| Por que é um Requisito Arquitetural? | Houve uma adaptação no back-end, criando um gateway para reaproveitar a porta HTTP aberta e provêr o serviço WebSocket através dela sem a necessidade de abrir uma nova porta para o serviço WebSocket. No front-end, teve que se instalar uma dependência chamada react-native-use-websocket, para se conectar ao servidor, respeitando a arquiteura do React, foi criado um hook personalizado (useChatWebSocket), este hook é quem mantém a conexão do chat aberta. |
| Decisões arquiteturais que foram tomadas | No back-end o padrão de projeto utilizado para se criar um gateway WebSocket foi o Adapter que envolve um servidor HTTP e o transforma num gateway de WebSocket. Para que o gateway funcione foi utilizado o paradigma de programação orientada a eventos. Já no lado do front-end, para se utilizar o chat houve a introdução de um custom hook que utiliza, em segundo plano, o react-native-use-websocket. |
| Decisões arquiteturais que vão garantir que esse requisito seja contemplado pela arquitetura | Para respeitar a arquitetura imposta, qualquer alteração ou interação com o serviço do chat deverá ser feita a partir do custom hook (useChatWebSocket) no lado cliente. Já no lado do servidor, qualquer alteração referente ao chat bem como adição de funcionalidades deverá ser realizada a devida alteração respeitando o padrão gateway WebSocket no NestJs. |
| Como será realizada a manutenção? | Serão realizadas atualizações periódicas das dependências do front-end e back-end. Também, serão realizados testes de aceitação para verificar se o chat está funcionando corretamente. |

| []() | []() |
| --- | --- |
| Requisito Arquitetural | RF025. Realizar login |
| Atributo(s) de qualidade relacionados | Compatibilidade e Reusabilidade |
| Classificação | Essencial |
| Por que é um Requisito Arquitetural? | Foi necessário instalar uma biblioteca (expo-google-app-auth) que fornece integração de autenticação do Google para aplicativos Expo usando um navegador da Web do sistema seguro com arquivos expo-app-auth. Além disso, foi necessário armazenar o token de autenticação no local storage, utilizando o serviço (Session). |
| Decisões arquiteturais que foram tomadas | O cliente, para realizar o login, é necessário, no aplicativo, utilizar o serviço de SSO (Single Sign-On) do Google, o OAuth2. Isso permite ao usuário ter o acesso geral a todas as funcionalidades do sistema, sendo pré-requisito para acessar todo sistema em si. |
| Decisões arquiteturais que vão garantir que esse requisito seja contemplado pela arquitetura | Para realizar o login será necessário, obrigatoriamente, utilizar o login com a conta Google. Caso a conta Google não esteja autenticada não será possível acessar o aplicativo utilizando o OAuth2 e, consequentemente, o aplicativo emitirá um alerta de erro indicando que o usuário precisa de uma conta Google. |
| Como será realizada a manutenção? | Atualizando as dependências da biblioteca utilizada (expo-google-app-auth) para atender ao requisito de autenticação no sistema. Além disso, verificar periodicamente alguma alteração no retorno das API’s. |

| []() | []() |
| --- | --- |
| Requisito Arquitetural | RF027. Lembrete de teste vocacional |
| Atributo(s) de qualidade relacionados | Usabilidade |
| Classificação | Importante |
| Por que é um Requisito Arquitetural? | Foi criado uma regra de negócio no local storage utlizando AsyncStorage (react-native-async-storage), que verifica se o usuário já realizou ou não o preenchimento do teste vocacional. Também, o expo-notificationsfornece uma API para buscar tokens de notificação push e apresentar, agendar, receber e responder a notificações.  |
| Decisões arquiteturais que foram tomadas | Foi implementado uma condição onde o usuário deverá ser capaz de ser alertado, no intervalo de 3 a 4 horas, sobre o status do preenchimento do seu teste vocacional, com o objetivo de melhorar sua experiência no aplicativo. |
| Decisões arquiteturais que vão garantir que esse requisito seja contemplado pela arquitetura | Para respeitar a arquitetura imposta, qualquer alteração ou interação com o serviço da notificação deverá ser feita a partir do serviço (Notification) no lado cliente.  |
| Como será realizada a manutenção? | Mantendo as coordenadas armazenadas na base e atualizando as depências utilizadas para atender este requisito. |

| []() | []() |
| --- | --- |
| Requisito Arquitetural | RNF001. Tempo de Resposta |
| Atributo(s) de qualidade relacionados | Performance |
| Classificação | Importante |
| Por que é um Requisito Arquitetural? | É um requisito arquitetural pois impacta no tempo em que uma requisição deve ser processada, consequentemente na forma que é processada dentro do sistema. |
| Decisões arquiteturais que foram tomadas | Foi implementado um interceptador na aplicação em NestJS utilizando o padrão pipe and filters que quando uma requisição é recebida, se uma resposta não for fornecida em um intervalo de tempo determinado uma exceção é disparada do tipo RequestTimeoutException. |
| Decisões arquiteturais que vão garantir que esse requisito seja contemplado pela arquitetura | Quando uma requisição demora demais para ser processada, o interceptador de tempo de resposta é acionado e rejeita a solicitação com um erro amigável. |
| Como será realizada a manutenção? | Não necessita de manutenção, uma vez que este requisito arquitetural é realizado por um interceptador de requisições dentro da aplicação NestJS. |

| []() | []() |
| --- | --- |
| Requisito Arquitetural | RNF003. Período Ativo |
| Atributo(s) de qualidade relacionados | Disponibilidade |
| Classificação | Importante |
| Por que é um Requisito Arquitetural? | É um requisito arquitetural pois impacta diretamente na infraestrutura de rede, no hardware e em medidas adotadas para manter o servidor em funcionamento pleno como redundância, resiliência e cache. |
| Decisões arquiteturais que foram tomadas | Foi adotado um cache no sistema para reduzir a carga no lado do servidor, além de ter sido introduzido um proxy reverso e Content Delivery Network (CDN) chamado CloudFlare. |
| Decisões arquiteturais que vão garantir que esse requisito seja contemplado pela arquitetura | A utilização do interceptador de cache garantirá que requisições do tipo GET sejam armazenadas em cache e a Content Delivery Network (CDN) do CloudFlare garante que mesmo que o cache do servidor não funcione, as requisições sejam armazenadas em cache antes que cheguem ao servidor. |
| Como será realizada a manutenção? | Periodicamente o cache do servidor deverá ser limpo e o status do CloudFlare deverá ser verificado. Em caso de problemas, a opção “Allow Direct Traffic” deve ser habilitada, invalidando o cache do CloudFlare. |

| []() | []() |
| --- | --- |
| Requisito Arquitetural | RNF004. Compatibilidade |
| Atributo(s) de qualidade relacionados | Portabilidade |
| Classificação | Essencial |
| Por que é um Requisito Arquitetural? | É um requisito arquitetural pois impacta diretamente na escolha das tecnologias e frameworks da aplicação móvel. |
| Decisões arquiteturais que foram tomadas | Foi adotado um framework que permite a utilização do JavaScript/TypeScript e reutilização de bibliotecas do back-end, sendo ele o Expo SDK com o React Native. |
| Decisões arquiteturais que vão garantir que esse requisito seja contemplado pela arquitetura | Para garantir que a aplicação móvel respeite a arquitetura e mantenha o requisito de compatibilidade, o React Native foi utilizado e as dependências nativas utilizadas são completamente compatíveis com o Android e possivelmente com o iOS. |
| Como será realizada a manutenção? | Atualização constante das bibliotecas e apenas dependências compatíveis com o sistema operacional Android serão adicionados. |

| []() | []() |
| --- | --- |
| Requisito Arquitetural | RNF006. Criptografia |
| Atributo(s) de qualidade relacionados | Confiabilidade |
| Classificação | Importante |
| Por que é um Requisito Arquitetural? | É um requisito arquitetural pois impacta na forma como a autenticação é feita e como os dados são trafegados no sistema e armazenados. Isso modifica a forma como a persistência é implementada e impacta no quesito confiabilidade do sistema. |
| Decisões arquiteturais que foram tomadas | Foi utilizado um algoritmo de criptografia e validação de mensagem assinadas HMAC256 para validar os Json Web Tokens recebidos no cabeçalho Authorization. Além disso, foi utilizado o protocolo HTTPS com um certificado digital da Let’s Encrypt Authority X3. |
| Decisões arquiteturais que vão garantir que esse requisito seja contemplado pela arquitetura | O sistema requer a criptografia de ambos os lados (cliente e servidor), além de o Android não permitir que requisições sejam feitas em texto puro (clear traffic). Dessa forma, torna obrigatório o uso de HTTPS e criptografia no tráfego de dados. Ainda melhor, o JWT que é quem encapsula a sessão do usuário é implementada nativamente pelo NestJS, dessa forma, não sendo removido com facilidade. |
| Como será realizada a manutenção? | Devido a adoção do Let’s Encrypt Authority X3 e sua política de termos de uso, periodicamente há a renovação dos certificados SSL/TLS, preferencialmente a cada 3 meses. Além disso, a troca das chaves secretas usadas pelo HMAC256 ocorre para inviabilizar ataques de correlação que possam a partir de um alto número de tokens emitidos, deduzir a chave secreta e por em cheque a assinatura HMAC256. |

| []() | []() |
| --- | --- |
| Requisito Arquitetural | RNF008. Documentação das APIs REST |
| Atributo(s) de qualidade relacionados | Manutenibilidade |
| Classificação | Importante |
| Por que é um Requisito Arquitetural? | É um requisito arquitetural pois impacta no atributo de qualidade manutenibilidade, já que a documentação deve ser refletida por cada alteração realizada no sistema. |
| Decisões arquiteturais que foram tomadas | Para se ter uma documentação no Swagger, foi utilizado um padrão de projeto chamado decorator que permite anotar classes e métodos com seus devidos metadados como descrição, método, retorno, etc. |
| Decisões arquiteturais que vão garantir que esse requisito seja contemplado pela arquitetura | Com a necessidade de se ter os endpoints especificados e a visibilidade deles, naturalmente o programador adicionará novos decoradores e atualizará a documentação vigente. |
| Como será realizada a manutenção? | A cada alteração, um arquivo chamado ``decorators.ts`` dentro do pacote docs deverá ser atualizado com as alterações sendo especificadas nos devidos decoradores. Após ser realizada a alteração, os decoradores devem ser adicionados nas suas devidas classes ou métodos. |