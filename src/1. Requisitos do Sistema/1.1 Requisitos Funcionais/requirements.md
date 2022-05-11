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

| RF001 | Exibir cursos de um determinado Campus |
| --- | --- |
| Descrição: | O usuário deverá ser capaz de visualizar informações detalhadas sobre quais cursos são ofertados pela Universidade de Pernambuco em todo o estado. Uma lista deverá ser exibida na tela de seu respectivo Campus onde todos os cursos homologados deverão ser exibidos e o usuário poderá navegar por eles. |
| Atores: | Usuário Logado |
| Prioridade: | Essencial |
| Entradas e pré-condições: | Entradas: Não possui entradas. Pré-condições: Estar logado no aplicativo e ter entrado no campus desejado. |
| Saídas e pós-condições: | Saídas: Não possui saídas. Pós-condições: O Usuário é direcionado para a lista de cursos do campus escolhido. |


| RF002 | Transparecer informações de concorrência |
| --- | --- |
| Descrição: | O usuário deverá ser capaz de visualizar as informações de concorrência de cada um dos cursos ofertados pela Universidade de Pernambuco (número de concorrentes por vaga, um gráfico de Bezier deverá ilustrar a evolução das notas ao longo do tempo). |
| Atores: | Usuário Logado |
| Prioridade: | Essencial |
| Entradas e pré-condições: | Entradas: Não possui entradas. Pré-condições: Estar logado no aplicativo e ter selecionado as notas de corte do curso. |
| Saídas e pós-condições: | Saídas: O número de concorrentes por vaga e o gráfico de evolução da concorrência; Pós-condições: O Usuário é direcionado para o detalhamento da concorrência do curso desejado. |


| RF003 | Indicar notas de corte |
| --- | --- |
| Descrição: | O usuário deverá ser capaz de visualizar as notas de corte de cada um dos cursos ofertados pela Universidade de Pernambuco. São desejáveis os dados de nota de corte do SSA e nota de corte do SISU. Se possível, mas não obrigatoriamente, quando disponível o sistema deverá informar também os mesmos dados referentes a modalidade de concorrência cotista. |
| Atores: | Usuário Logado |
| Prioridade: | Essencial |
| Entradas e pré-condições: | Entradas: Não possui entradas. Pré-condições: Estar logado no aplicativo e ter selecionado as notas de corte do curso. Estar logado no aplicativo e ter pesquisado na aba “Já sei o que quero”. |
| Saídas e pós-condições: | Saídas: Os dados de notas de corte de ampla concorrência e dos cotistas; Pós-condições: O Usuário é direcionado para as notas de corte do curso desejado. |


| RF004 | Divulgar maiores notas do curso no ano anterior |
| --- | --- |
| Descrição: | O usuário deverá ser capaz de visualizar as maiores notas alcançadas em cada um dos cursos da Universidade de Pernambuco no ano anterior (SSA e Sisu, Ampla Concorrência e Cotista). |
| Atores: | Usuário Logado |
| Prioridade: | Essencial |
| Entradas e pré-condições: | Entradas: Não possui entradas. Pré-condições: Estar logado no aplicativo e ter selecionado as notas de corte do curso. Estar logado no aplicativo e ter pesquisado na aba “Já sei o que quero”. |
| Saídas e pós-condições: | Saídas: Não possui saídas. Pós-condições: O Usuário é direcionado para o detalhamento das notas do curso desejado. |


| RF005 | Informar maneiras de ingressar |
| --- | --- |
| Descrição: | O usuário deverá ser capaz de visualizar quais são as maneiras possíveis de ingressar em um dos cursos da Universidade de Pernambuco. |
| Atores: | Usuário Logado |
| Prioridade: | Desejável |
| Entradas e pré-condições: | Entradas: Não possui entradas. Pré-condições: Estar logado no aplicativo e ter selecionado um curso. |
| Saídas e pós-condições: | Saídas: Não possui saídas. Pós-condições: O Usuário é direcionado para a página do curso onde há os detalhes do mesmo. |


| RF006 | Apresentar informações sobre o curso |
| --- | --- |
| Descrição: | O usuário deverá ser capaz de visualizar informações gerais sobre cada um dos cursos ofertados pela Universidade de Pernambuco, como: Carga horária total, período, duração, etc. |
| Atores: | Usuário Logado |
| Prioridade: | Desejável |
| Entradas e pré-condições: | Entradas: Preenchimento do teste vocacional. Pré-condições: Estar logado no aplicativo e ter selecionado um curso. |
| Saídas e pós-condições: | Saídas: Não possui saídas. Pós-condições: O Usuário é direcionado para a página em que há o detalhamento dos cursos. |


| RF007 | Exibir perfil do curso |
| --- | --- |
| Descrição: | O usuário deverá ser capaz de visualizar informações detalhadas sobre como cada um dos cursos ofertados pela Universidade de Pernambuco é fundamentado. Deverão ser exibidos um ou mais tópicos abordando: Informações sobre as capacidades que os profissionais devem adquirir no curso; e Descrição do propósito desse curso, a ideologia por trás do curso. |
| Atores: | Usuário Logado |
| Prioridade: | Desejável |
| Entradas e pré-condições: | Entradas: Não possui entradas. Pré-condições: Estar logado no aplicativo e ter selecionado um curso. |
| Saídas e pós-condições: | Saídas: Não possui saídas. Pós-condições: O Usuário é direcionado para a página do curso onde há os detalhes do mesmo. |


| RF008 | Informar corpo docente |
| --- | --- |
| Descrição: | O usuário deverá ser capaz de visualizar o corpo docente de cada um dos cursos ofertados pela Universidade de Pernambuco. Deverá ser exibida uma lista contendo cards com uma biografia curta do professor, sua foto (se houver) e a suas áreas em formatos de tags na parte inferior do card. |
| Atores: | Usuário Logado |
| Prioridade: | Desejável |
| Entradas e pré-condições: | Entradas: Não possui entradas. Pré-condições: Estar logado no aplicativo e ter selecionado um curso. |
| Saídas e pós-condições: | Saídas: Não possui saídas. Pós-condições: O Usuário é direcionado para a página onde o corpo docente do curso desejado é exibido. |


| RF009 | Detalhar docente |
| --- | --- |
| Descrição: | O usuário deverá ser capaz de visualizar detalhes (nome, áreas, biografia completa, currículo Lattes e e-mail para contato) sobre cada um dos docentes dos cursos ofertados pela Universidade de Pernambuco. Neste requisito, uma tela contendo a foto em alta resolução e sua biografia completa devem ser exibidos. Além disso, deverá ser exibido um botão para visualizar o currículo Lattes do professor. |
| Atores: | Usuário Logado |
| Prioridade: | Desejável |
| Entradas e pré-condições: | Entradas: Não possui entradas. Pré-condições: Estar logado no aplicativo e ter selecionado um docente. |
| Saídas e pós-condições: | Saídas: Não possui saídas. Pós-condições: O Usuário é direcionado para a página onde há o detalhamento do docente. |


| RF010 | Apresentar áreas de atuação |
| --- | --- |
| Descrição: | O usuário deverá ser capaz de visualizar as possíveis áreas de atuação de cada um dos cursos ofertados pela Universidade de Pernambuco. |
| Atores: | Usuário Logado |
| Prioridade: | Desejável |
| Entradas e pré-condições: | Entradas: Não possui entradas. Pré-condições: Estar logado no aplicativo e ter selecionado um curso. |
| Saídas e pós-condições: | Saídas: Não possui saídas. Pós-condições: O Usuário é direcionado para a página do curso onde há os detalhes do mesmo. |


| RF011 | Mostrar visão do mercado de trabalho |
| --- | --- |
| Descrição: | O usuário deverá ser capaz de visualizar as perspectivas de mercado de trabalho para cada um dos cursos ofertados pela Universidade de Pernambuco. Essas informações virão em uma sanfona contendo os parágrafos descrevendo a visão de mercado de trabalho que o curso proporciona ao graduando. |
| Atores: | Usuário Logado |
| Prioridade: | Desejável |
| Entradas e pré-condições: | Entradas: Não possui entradas. Pré-condições: Estar logado no aplicativo e ter selecionado um curso. |
| Saídas e pós-condições: | Saídas: As informações em forma de parágrafo contendo a visão de mercado de trabalho; Pós-condições: O Usuário é direcionado para a página do curso onde há os detalhes do mesmo. |


| RF012 | Disponibilizar o Projeto Pedagógico do Curso |
| --- | --- |
| Descrição: | O usuário deverá ser capaz de visualizar o PPC (Projeto Pedagógico do Curso) de cada um dos cursos ofertados pela Universidade de Pernambuco. |
| Atores: | Usuário Logado |
| Prioridade: | Desejável |
| Entradas e pré-condições: | Entradas: Não possui entradas. Pré-condições: Estar logado no aplicativo e ter selecionado um curso. |
| Saídas e pós-condições: | Saídas: Um PDF é exibido na tela (se houver um PPC) contendo o projeto pedagógico do curso; Pós-condições: O Usuário é direcionado para a página do Programa Pedagógico onde há os detalhes do mesmo. |


| RF013 | Retratar contexto histórico do curso |
| --- | --- |
| Descrição: | O usuário deverá ser capaz de visualizar o contexto histórico de cada um dos cursos ofertados pela Universidade de Pernambuco. Esse histórico vem escrito em uma forma de parágrafo contendo uma breve história do Curso, quando foi fundado, o contexto inserido. |
| Atores: | Usuário Logado |
| Prioridade: | Desejável |
| Entradas e pré-condições: | Entradas: Não possui entradas. Pré-condição: Estar logado no aplicativo e ter selecionado um curso. |
| Saídas e pós-condições: | Saídas: Exibir resumo do contexto histórico do curso. Pós-condições: O Usuário é direcionado para a página do curso onde há os detalhes do mesmo. |

### Perfil Vocacional
O Perfil vocacional é onde o sistema irá identificar quais cursos se encaixam melhor no perfil do usuário logado. Eles foram divididos em 3 principais requisitos. Com esses requisitos o usuário responderá um questionário e será capaz de visualizar através de porcentagens quais cursos se encaixam melhor ao seu perfil bem como refazer ao questionário novamente.

| RF014 | Realizar teste vocacional |
| --- | --- |
| Descrição: | O usuário deverá ser capaz de responder um tipo de teste vocacional lúdico para identificar quais cursos se encaixam melhor no meu perfil. Este teste vocacional trata-se de uma série de perguntas, estrategicamente selecionadas e contendo alternativas com valores e pesos variáveis para cada curso. Esses valores serão utilizados mais tarde para contabilizar o potencial de vocação para o curso. |
| Atores: | Usuário Logado |
| Prioridade: | Essencial |
| Entradas e pré-condições: | Entradas: Realizar login via Google. Pré-condições: Estar logado no aplicativo. |
| Saídas e pós-condições: | Saídas: Não possui saídas. Pós-condições: O Usuário é direcionado para uma série de questionamentos visando direciona-lo para o curso que mais lhe representa. |


| RF015 | Ilustrar potencial de vocação para o curso |
| --- | --- |
| Descrição: | O usuário deverá ser capaz de visualizar através de porcentagens quais cursos me identifico mais dentro das opções ofertadas pela Universidade de Pernambuco em todo o estado. |
| Atores: | Usuário Logado |
| Prioridade: | Essencial |
| Entradas e pré-condições: | Entradas: Não possui entradas. Pré-condições: Estar logado no aplicativo, ter finalizado o teste vocacional. |
| Saídas e pós-condições: | Saídas: Não possui saídas. Pós-condições: O usuário é direcionado para uma lista dos cursos presentes na Universidade de Pernambuco e com uma porcentagem informando sua identificação com o tal. |


| RF016 | Ofertar possibilidade de refazer teste |
| --- | --- |
| Descrição: | O usuário deverá ser capaz de poder refazer o teste vocacional, visando aprimorar preferências do curso e modificar suas respostas, caso sua visão sobre a almejada profissão mude. |
| Atores: | Usuário Logado |
| Prioridade: | Essencial |
| Entradas e pré-condições: | Entradas: Não possui entradas. Pré-condições: Estar logado no aplicativo, ter finalizado o teste vocacional. |
| Saídas e pós-condições: | Saídas: Não possui saídas. Pós-condições: O usuário é direcionado para uma nova realização do teste vocacional. |

### Sobre a Universidade
A seção Sobre a Universidade é onde o sistema irá apresentar as informações acerca da universidade enquanto instituição. Ela foi dividida em 3 principais requisitos. Com esses requisitos o usuário poderá encontra detalhes e informações relevantes sobre o Campi.

| RF017 | Exibir descrição do Campus |
| --- | --- |
| Descrição: | O usuário deverá ser capaz de visualizar a descrição do Campi da Universidade de Pernambuco. |
| Atores: | Usuário Logado |
| Prioridade: | Importante |
| Entradas e pré-condições: | Entradas: Não possui entradas. Pré-condições: Estar logado no aplicativo, ter finalizado o teste vocacional. |
| Saídas e pós-condições: | Saídas: Um parágrafo contendo a descrição do Campus. Pós-condições: O Usuário é direcionado para a página do campus onde há detalhes do mesmo. |


| RF018 | Informar redes sociais |
| --- | --- |
| Descrição: | O usuário deverá ser capaz de visualizar a descrição do Campi da Universidade de Pernambuco. |
| Atores: | Usuário Logado |
| Prioridade: | Desejável |
| Entradas e pré-condições: | Entradas: Não possui entradas. Pré-condições: Estar logado no aplicativo e ter selecionado um campus. |
| Saídas e pós-condições: | Saídas: Não possui saídas. Pós-condições: O Usuário é direcionado para a página do campus onde há detalhes do mesmo. |


| RF019 | Apresentar localização do Campus |
| --- | --- |
| Descrição: | O usuário deverá ser capaz de visualizar com exatidão a localização do Campi da Universidade de Pernambuco. Essa localização será exibida através de um mapa presente na página do Campus. |
| Atores: | Usuário Logado |
| Prioridade: | Importante |
| Entradas e pré-condições: | Entradas: Não possui entradas. Pré-condições: Estar logado no aplicativo e ter selecionado um campus. |
| Saídas e pós-condições: | Saídas: Não possui saídas. Pós-condições: O Usuário é direcionado para a página do campus onde há detalhes do mesmo. |

### Principais Eventos
Os eventos da universidade ocorrem em períodos específicos do ano e às vezes os discentes não os conhecem ou não sabem quais são os principais eventos. É importante para os ingressantes conhecer as principais atrações, eventos, conferências e simpósios do meio acadêmico em que frequentam. Diante desta problemática o aplicativo deve exibir os principais eventos de um Campus em uma de suas páginas.

| RF020 | Exibir principais eventos |
| --- | --- |
| Descrição: | O usuário deverá ser capaz de visualizar os principais eventos do Campi da Universidade de Pernambuco. |
| Atores: | Usuário Logado |
| Prioridade: | Desejável |
| Entradas e pré-condições: | Entradas: Não possui entradas. Pré-condições: Estar logado no aplicativo e ter selecionado um campus de um curso. |
| Saídas e pós-condições: | Saídas: Não possui saídas. Pós-condições: O Usuário é direcionado para a página dos eventos existentes no campus do curso. |

### Informações Importantes
A Universidade possui ramais de comunicação, mídias sociais e páginas oficiais por onde se comunica e divulga informações importantes para a sua comunidade. Dentro dessa perspectiva, o aplicativo “Seja UPE” deve dispor uma página para exibir tais informações.

| RF021 | Informar meios de contato |
| --- | --- |
| Descrição: | O usuário deverá ser capaz de visualizar todos os meios de contatos importantes, como: Escolaridade, Biblioteca, etc. Essas informações devem ser extraídas do Guia do Estudante 2021. |
| Atores: | Usuário Logado |
| Prioridade: | Desejável |
| Entradas e pré-condições: | Entradas: Não possui entradas. Pré-condições: Estar logado no aplicativo e ter selecionado um campus de um curso. |
| Saídas e pós-condições: | Saídas: Não possui saídas. Pós-condições: O Usuário é direcionado para a página dos contatos existentes no campus do curso. |

### Comunicação
Como uma área desejável dentro do aplicativo, seria interessante haver a possibilidade de se trocar mensagens, deixar recados ou perguntas em uma espécie de bate-papo dentro do aplicativo. Os vestibulandos possuem muitas dúvidas, com um pouco de sorte alguém estará disposto a responde-las.

| RF022 | Interagir pelo bate-papo |
| --- | --- |
| Descrição: | O usuário deverá ser capaz de se comunicar com outros usuários através de um bate-papo em tempo real dentro do aplicativo. Neste bate-papo deverá ser exibido uma animação de um robô explicando ao usuário que ele pode deixar seus recados ali. As mensagens devem ficar disponíveis por tempo indeterminado, mas apenas as últimas 25 serão exibidas. |
| Atores: | Usuário Logado |
| Prioridade: | Desejável |
| Entradas e pré-condições: | Entradas: As mensagens que devem ser enviadas aos outros usuários; Pré-condições: Estar logado no aplicativo. |
| Saídas e pós-condições: | Saídas: As mensagens enviadas por outros usuários; Pós-condições: Exibição das mensagens de todos os usuários. |

## Coleta de avaliações
A coleta de avaliações é uma seção desejável do aplicativo. Ela é dividida em 2 requisitos. Esses requisitos visam coletar feedbacks dos usuários acerca dos resultados do teste vocacional do aplicativo e de cada um dos cursos oferecidos pela universidade.

| RF023 | Avaliar a sugestão de cursos |
| --- | --- |
| Descrição: | O usuário deverá ser capaz de avaliar a sugestão de curso exposta pelo aplicativo.  A avaliação tem um caráter de obtenção de feedback para ajustar as perguntas do questionário do teste vocacional na tentativa de melhorar o questionário e obter previsões mais precisas e sugestões mais compatíveis com as respostas dos usuários. |
| Atores: | Usuário Logado |
| Prioridade: | Importante |
| Entradas e pré-condições: | Entradas: A quantidade de estrelas variando de 1 à 5 estrelas; Pré-condições: Estar logado no aplicativo. |
| Saídas e pós-condições: | Saídas: Não possui saídas; Pós-condições: Exibição de uma mensagem de agradecimento. |


| RF024 | Avaliar determinado curso |
| --- | --- |
| Descrição: | O usuário deverá ser capaz de curtir ou desgostar o curso em que ele entrou. Ele poderá dizer se “curtiu” ou “não curtiu” o curso que está vendo. Esses dados serão utilizados internamente para atestar o grau de popularidade do curso pelos ingressantes. |
| Atores: | Usuário Logado |
| Prioridade: | Importante |
| Entradas e pré-condições: | Entradas: Resposta sendo “curtiu” ou “não curtiu”; Pré-condições: Estar logado no aplicativo e ter selecionado um campus de um curso. |
| Saídas e pós-condições: | Saídas: Não possui saídas; Pós-condições: Exibição de uma mensagem de agradecimento. |

### Autenticação
A autenticação é uma parte essencial do aplicativo, pois somente através dela o usuário poderá ter acesso as principais informações e funcionalidades do sistema. Além disso, será usada para distinguir visualmente o usuário no bate-papo. Ela é composta de apenas um requisito, o de realizar cadastro.

| RF025 | Realizar login |
| --- | --- |
| Descrição: | O usuário deverá ser capaz de fazer login no aplicativo utilizando o serviço de SSO (Single Sign-On) do Google, o OAuth2. |
| Atores: | Usuário Logado |
| Prioridade: | Essencial |
| Entradas e pré-condições: | Entradas: Selecionar conta do Google; Pré-condições: Possuir uma conta Google. |
| Saídas e pós-condições: | Saídas: Confirmação de login; Pós-condições: O usuário será direcionado para tela de Teste Vocacional. |

### Seleção personalizada de cursos
É uma área que tem como objetivo auxiliar o usuário a encontrar informações fornecidas pelo aplicativo de maneira rápida e eficaz. Ela é composta de apenas 1 requisito, o de pesquisar cursos.

| RF026 | Pesquisar Cursos |
| --- | --- |
| Descrição: | O usuário deverá ser capaz de filtrar informações para encontrar determinado curso, através de uma pesquisa pela modalidade, nota esperada, campus e curso. |
| Atores: | Usuário Logado |
| Prioridade: | Essencial |
| Entradas e pré-condições: | Entradas: Selecionar um filtro; Pré-condições: O usuário deve estar logado e ter selecionado o botão na tab “Já sei o que quero”. |
| Saídas e pós-condições: | Saídas: Não possui saída; Pós-condições: Exibição da lista de cursos filtrada de acordo com a escolha do usuário. |

### Notificações do aplicativo
É uma área que tem como objetivo lembrar o usuário de preencher o teste vocacional, para que assim possibilita sua escolha de curso com maior clareza.

| RF027 | Lembrete de Teste Vocacional |
| --- | --- |
| Descrição: | O usuário deverá ser capaz de ser alertado, no intervalo de 3 a 4 horas, sobre o status do preenchimento do seu teste vocacional, com o objetivo de melhorar sua experiência no aplicativo. |
| Atores: | Usuário Logado |
| Prioridade: | Importante |
| Entradas e pré-condições: | Entradas: Notificação no smartphone; Pré-condições: Estar logado no aplicativo e não ter realizado o teste vocacional. |
| Saídas e pós-condições: | Saídas: Não possui saída; Pós-condições: O Usuário é direcionado para a página em que ele possa realizar o teste vocacional. |