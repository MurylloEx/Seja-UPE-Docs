## 1.1 Requisitos do Sistema

### 1.1.1 Requisitos Funcionais

| Requisito | Descrição | Classificação |
| --- | --- | --- |
| Exibir cursos de um determinado Campus | O usuário deverá ser capaz de visualizar quais cursos são ofertados pela UPE em todo o estado. | Essencial | 
| Transparecer informações de concorrência | O usuário deverá ser capaz de visualizar as informações de concorrência de cada um dos cursos ofertados pela UPE. | Essencial | 
| Indicar notas de corte | O usuário deverá ser capaz de visualizar as notas de corte de cada um dos cursos ofertados pela UPE. | Essencial | 
| Divulgar maiores notas do curso no ano anterior | O usuário deverá ser capaz de visualizar as maiores notas alcançadas em cada um dos cursos da UPE no ano anterior. |Essencial |
| Informar maneiras de ingressar | O usuário deverá ser capaz de visualizar quais são as maneiras possíveis de ingressar em um dos cursos da UPE. | Desejável |
| Apresentar informações sobre o curso | O usuário deverá ser capaz de visualizar informações gerais sobre cada um dos cursos ofertados pela UPE. | Desejável |
| Exibir perfil do curso | O usuário deverá ser capaz de visualizar informações detalhadas sobre como cada um dos cursos ofertados pela UPE é estruturado. | Desejável |
| Informar corpo docente | O usuário deverá ser capaz de visualizar o corpo docente de cada um dos cursos ofertados pela UPE. | Desejável |
| Detalhar docentes | O usuário deverá ser capaz de visualizar detalhes sobre cada um dos docentes dos cursos ofertados pela UPE. | Desejável |
| Apresentar áreas de atuação | O usuário deverá ser capaz de visualizar as possíveis áreas de atuação de cada um dos cursos ofertados pela UPE. | Desejável |
| Mostrar visão do mercado de trabalho | O usuário deverá ser capaz de visualizar as perspectivas de mercado de trabalho para cada um dos cursos ofertados pela UPE. | Desejável |
| Disponibilizar Programa Pedagógico do Curso | O usuário deverá ser capaz de visualizar o PPC (Plano Pedagógico de Curso) de cada um dos cursos ofertados pela UPE. | Desejável |
| Retratar contexto histórico do Curso | O usuário deverá ser capaz de visualizar o contexto histórico de cada um dos cursos ofertados pela UPE. | Desejável |
| Realizar Teste Vocacional | O usuário deverá ser capaz de responder um tipo de teste vocacional lúdico para identificar quais cursos se encaixam melhor no meu perfil. | Essencial |
| Ilustrar potencial de vocação para o curso | O usuário deverá ser capaz de visualizar através de porcentagens quais cursos me identifico mais dentro das opções ofertadas pela UPE em todo o estado. | Essencial |
| Ofertar possibilidade de refazer teste | O usuário deverá ser capaz de poder refazer o teste visando aprimorar preferências do curso. | Essencial |
| Exibir descrição do Campus | O usuário deverá ser capaz de visualizar a descrição dos Campus da UPE. | Importante |
| Informar redes sociais | O usuário deverá ser capaz de visualizar a informação das principais redes sociais pertencentes aos Campus da UPE. | Desejável |
| Apresentar localização do Campus | O usuário deverá ser capaz de visualizar com exatidão a localização dos Campus da UPE. | Importante |
| Exibir principais eventos | O usuário deverá ser capaz de visualizar os principais eventos dos Campus da UPE. | Desejável |
| Informar meios de contato | O usuário deverá ser capaz de visualizar todos os meios de contatos importantes. | Desejável |
| Interagir pelo bate-papo | O usuário deverá ser capaz de se comunicar com outros usuários através de um chat online em tempo real. | Desejável |
| Avaliar a sugestão de cursos | O usuário deverá ser capaz de avaliar a sugestão de curso exposta pelo aplicativo. | Importante |
| Avaliar determinado curso | O usuário deverá ser capaz de “curtiu” ou não “curtiu” o curso em que ele entrou. | Importante |
| Realizar login | O usuário deverá ser capaz de realizar login via SSO com sua conta do Google. | Essencial |
| Pesquisar cursos | O usuário deverá ser capaz de filtrar informações para encontrar determinado curso. | Essencial |
| Lembrete de Teste Vocacional | O usuário deverá ser capaz de ser alertado sobre o status do preenchimento do seu teste vocacional, com o objetivo de melhorar sua experiência no aplicativo. | Importante |

### 1.1.2 Requisitos Não Funcionais

| Requisito | Descrição | Classificação |
| --- | --- | --- |
| Tempo de Resposta | O aplicativo deverá apresentar tempos de resposta inferiores a 1000 ms, de forma a apresentar um carregamento suficientemente rápido. | Importante |
| Usuário Online | O aplicativo deverá permitir a conexão de até 100 usuários online simultaneamente. | Importante |
| Período Ativo | O aplicativo deve permanecer online 24 horas por dia, 7 dias por semana, com tolerância a interrupções de no máximo 2 horas em situações excepcionais para manutenções ou atualizações planejadas. | Importante |
| Compatibilidade | O sistema deve essencialmente funcionar na plataforma Android, visto que o iOS é uma plataforma cara e não é acessível para o momento. | Essencial |
| Proteção contra ataques DDoS | O sistema deverá utilizar CloudFlare para proteção contra ataques DDoS. | Desejável |
| Criptografia | O sistema deverá utilizar o HTTPS (Hyper Text Transfer Protocol Secure) como forma de criptografia. | Importante |
| Autenticação | O usuário deve ser capaz de realizar login através de sua conta Google utilizando o serviço SSO (Single Sign-On) da Google. | Essencial |
| Documentação das APIs REST | O endpoint do aplicativo deve ser bem documentado para facilitar integrações futuras com outros sistemas ou correções de implementações no front-end. | Importante |

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