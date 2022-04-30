Requisitos são, além de funções, objetivos, propriedades, restrições que o sistema deve possuir para satisfazer contratos, padrões ou especificações de acordo com o(s) usuário(s). De forma mais geral um requisito é uma condição necessária para satisfazer um objetivo. Nos próximos tópicos você verá uma lista resumida dos requisitos funcionais que existem e dos requisitos não-funcionais

> [!ATTENTION]
> Você pode visualizar todos os requisitos arquiteturais completos do sistema e sua relação com requisitos funcionais e não funcionais na **seção 1.3** desta documentação.

### 1.1 Requisitos Funcionais

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

> [!TIP]
> Você pode visualizar todos os requisitos funcionais na **seção 1.1** com maior nível de detalhes.

### 1.2 Requisitos Não Funcionais

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

> [!TIP]
> Você pode visualizar todos os requisitos não funcionais na **seção 1.2** com maior nível de detalhes.