#### Infraestrutura

Para que o projeto possa ficar em execução por 24 horas por dia, 7 dias por semana é necessário hospedar o daemon da API REST em um servidor que suporte o Node.js na versão 12 ou superior.<br><br>
No cenário do **Seja UPE**, o servidor utilizado para hospedagem do sistema foi um servidor de placa única do tipo ASUS Tinkerboard com as seguintes especificações:

- Processador RK3288 Cortex-A17 SoC Quad-core;
- GPU ARM Mali-T760 MP4;
- Vídeo HDMI (resolução máxima de 4K) e MIPI DSI de 15 pinos (suporta até HD);
- Memória Dual Channel LPDDR3 2GB;
- Armazenamento em MicroSD(TF) de 32GB Sandisk Classe 10;
- Áudio com Codec RTL ALC4040;
- 4 Portas USB 2.0;
- Fonte de alimentação Monkey Business BR de 5 Volts DC/3 Ampères;
- Dimensões 3.37'' x 2.125'' (8.55cm x 5.4cm).

Além do servidor onde a API REST é hospedada, há um provedor externo de serviço de proteção DDoS e cache com rede AnyCast otimizada para redução de latência e encaminhamento inteligente baseado em geolocalização de resolução DNS, este provedor é o CloudFlare. O CloudFlare age como uma barreira de proteção pois assume o controle do nome de domínio e utiliza **proxies reversos** para filtrar requisições suspeitas e conter ataques de Slow Post, DDoS, SYN Flood, explorações genéricas e injeções de código em geral (principalmente SQL). Dessa forma, quando o usuário se conecta ao **Seja UPE**, na realidade está a se conectar ao servidor proxy do CloudFlare o qual mascara e oculta o real endereço de IP do servidor TinkerBoard.

>[!TIP]
>Faça o teste você mesmo, execute ``ping -n 1 sejaupe.website`` e veja o endereço de IP retornado. Copie esse endereço de IP e pesquise por ele em um banco de dados Whois e verá que o provedor é o CloudFlare Inc. e não o VcNet, conforme esperado.

A infraestrutura de rede do sistema **Seja UPE** conta também com outro proxy reverso, esse chamado Magic Proxy. O Magic Proxy possui recursos de balanceamento de carga Round-Robin e também um Gateway Websocket que roteia as conexões Websocket para um endereço virtual (roteamento baseado em domínio). Com isso, dentro da Tinkerboard R/BR é possível implantar dezenas de serviços Web e APIs que compartilham a mesma porta 80 (HTTP) e 443 (HTTPS). Essa técnica é conhecida como **Virtual Host** e é possível graças à RFC2616 que determina que toda requisição HTTP 1.1 deva possuir o cabeçalho Host da origem da requisição. O Magic Proxy então utiliza esse cabeçalho para descobrir qual foi o domínio envolvido na requisição e internamente roteia para o webservice ou API corretamente configurado para aquele domínio.

>[!ATTENTION]
>Note que muitas hospedagens compartilhadas utilizam desse recurso, como por exemplo o Heroku, Hostinger, Hostgator, entre outros. Por essa razão, há desvantagens significativas do ponto de vista arquitetural, pois se o cliente não estiver utilizando o protocolo HTTP 1.1 ou superior, essa técnica de roteamento não funciona. Dessa forma, não é possível rotear conexões TCP, pois não são acompanhadas de um indicador de cabeçalho Host. Essa técnica restringe o roteamento ao protocolo HTTP 1.1 e superior, bem como Websockets. Conexões TCP feitas diretamente ao endereço de IP do servidor de origem são dropados automaticamente, ocasionando o erro ERR_EMPTY_RESPONSE.

Por trás da API REST tem um banco de dados local, trata-se do SQLite. O SQLite é um banco de dados de arquivo único que não possui o suporte de um Sistema de Gerenciamento de Banco de Dados. Com o SQLite a aplicação insere, atualiza, consulta e apaga dados a qualquer momento utilizando um driver de banco de dados apropriado para Node.js, nesse caso node-sqlite.

>[!TIP]
>O SQLite é amplamente utilizado no Node.js, o TypeORM utiliza um dos drivers que você instala para se comunicar com o banco de dados, nesse caso o driver é o node-sqlite. Com esse driver o TypeORM consegue interagir com a base abstraindo todas as consultas SQL em relações de composição e herança baseadas no paradigma orientado a objetos. 

Finalizando a visão geral da infraestrutura do sistema, temos a parte que diz respeito ao usuário, seu dispositivo móvel. A aplicação móvel funciona através de um sistema operacional Android, mas devido a escolha da tecnologia de front-end, pode ser facilmente portável para iOS e demais sistemas operacionais. O cliente, que nesse caso está de posse do aparelho, utiliza o sistema que internamente desencadeia, eventualmente, uma série de solicitações através do protocolo HTTP 1.1 ao serviço de API REST. Todas as requisições feitas são stateless, necessitando do Json Web Token recebido no processo de autenticação SSO OAuth2 para manter o servidor ciente da sessão do usuário.

Ao longo desse tópico você pôde entender um pouco da infraestrutura do sistema, desde o hardware envolvido, aos serviços de terceiros na nuvem responsável pela proteção, banco de dados, detalhes de redes de computadores e por fim o hardware e software do usuário final. Nas seções seguintes abordaremos como o versionamento de código é feito utilizando Git, GitHub e GitFlow, assim como algums estratégias de DevOps que foram utilizadas para manter os serviços do Seja UPE, publicação e acesso de desenvolvimento na esteira de desenvolvimento do Expo Go.
