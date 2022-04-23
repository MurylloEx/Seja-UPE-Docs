### 2.1 Requisitos que impactam na qualidade

Quando se trata no contexto da Engenharia de Software, qualidade de software pode ser entendido como um método gerencial que através de procedimentos disseminados pela organização, procuram garantir que o software satisfaça às expectativas e necessidades do cliente, dentro do que foi proposto inicialmente. Dessa forma, qualidade pode ser entendida como um conjunto de características que devem ser satisfeitas, de modo que o produto esteja em conformidade com as necessidades dos usuários. Para aferir esse nível de qualidade são necessários critérios, parâmetros de aferição. Esses parâmetros compõem uma classe de requisitos não funcionais, que são os que qualificam e restrigem como os requisitos funcionais do sistema devem ser implementados, assim como as decisões arquiteturais que são tomadas buscando atender às conformidades com as necessidades dos usuários.<br>
A seguir você pode visualizar alguns dos requisitos não funcionais do **Seja UPE** que impactam na qualidade do sistema e seu impacto:

| Requisito | Impacto na Qualidade |
| --- | --- |
| RNF001 - Tempo de resposta | O requisito impacta na percepção das informações e carregamento de telas pelo usuário. |
| RNF002 - Período Ativo | O requisito impacta no tempo em que o aplicativo deve permanecer funcionando, bem como em serviço. |
| RNF004 - Proteção contra ataques DDoS | O requisito impacta na segurança do sistema e também na disponibilidade, podendo ser vital para manter o sistema funcionando corretamente. |
| RNF005 - Criptografia | O requisito impacta na segurança do sistema, sendo vital para preservar a privacidade dos usuários e sua segurança. |
| RNF007 - Documentação da API REST | O requisito impacta na capacidade de realizar manutenções, sendo vital para um bom entendimento do webservice. |

### 2.2 Características que impactam no tamanho do software

Há certas características e decisões arquiteturais que impactam no tamanho final do software. Essas características ou decisões tomadas visam facilitar o desenvolvimento, favorecendo um dos lados da tríade da Qualidade de Software no que diz respeito à **Custo**, **Tempo** e **Escopo**. A seguir, você pode visualizar algumas características da arquitetura do software que impactam no tamanho do software, mas que de forma direta ou indireta reduzem ou favorecem a equipe reduzindo o **Custo**, **Tempo** ou **Escopo** do sistema.

| Característica da Arquitetura | Impacto no tamanho |
| --- | --- |
| Framework de desenvolvimento para dispositivos móveis (React native) | O framework utilizado e seu SDK auxiliar (Expo) influenciam no tamanho do aplicativo final, que possui no mínimo 50MB de comprimento. |
| Framework de desenvolvimento para o back-end (NestJS) | O framework utilizado influenciam no tamanho do back-end e seu artefato final pois introduzem dependências a pacotes de terceiros que proveem compatibilidade com o Express e Fastify, criando abstrações orientadas a objetos que tornam extremamente mais versátil e flexível o desenvolvimento, abrindo portas para design patterns e padrões arquiteturais como o MVC e o Pipe and Filters. |
| Renderização de imagens e ícones de alta resolução | Para que o aplicativo no dispositivo móvel tenha uma aparência agradável e seja bem recebido por usuários de diferentes dispositivos móveis e diferentes resoluções de tela, os ícones e imagens do aplicativo foram armazenados localmente e sempre com a maior resolução dentre os dispositivos que possam garantir que a maioria dos usuários visualizassem ícones de qualidade, sem manchas e distorções.  |

### 2.3 Características que impactam no desempenho do software

Há certas características e decisões arquiteturais que impactam no desempenho do software. Assim como as características que impactam no tamanho do software, as características que impactam no desempenho visam facilitar o desenvolvimento, favorecendo um dos lados da tríade da Qualidade de Software no que diz respeito à **Custo**, **Tempo** e **Escopo**. O desempenho que o **Seja UPE** deve conter está descrito de acordo com as características abaixo, estão relacionados a velocidade do sistema e o retorno para o usuário fazendo com o que o usuário final não espere muito tempo para ter suas respostas.

| Característica da Arquitetura | Impacto no desempenho |
| --- | --- |
| Capacidade de usuários | O aplicativo deve suportar até 100 pessoas simultaneamente, dada as dimensões do servidor. |
| Taxa de Transferência | O servidor deve possuir uma largura de banda de no mínimo 30MB de Upload e 50MB de Download. |
| Tempo de Resposta | O servidor deve responder em até 1000 milissegundos por cada requisição. |

### 2.4 Abordagem de testes utilizada e como ela impacta na arquitetura

![Ciclo de Vida dos Testes](asset_tests_lifecycle_diagram.png "Ciclo de Vida dos Testes")

### 2.5 Escolhas tecnológicas e seu impacto na qualidade do software
