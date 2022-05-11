Os requisitos não funcionais são aqueles requisitos que impactam na forma como o software será construído, especificando restrições e premissas que impactam do ponto de vista da qualidade como os requisitos funcionais deverão ser implementados. Veja os requisitos não funcionais do **Seja UPE**:

### Desempenho
Esta área define as métricas de desempenho que deverão ser atingidas para que o sistema tenha uma boa usabilidade e não afete a experiência do usuário.

| RNF001 | Tempo de Resposta |
| --- | --- |
| Descrição: | O aplicativo deverá apresentar tempos de resposta inferiores a 1000 ms, de forma a apresentar um carregamento suficientemente rápido. |
| Prioridade: | Importante |


| RNF002 | Usuários online |
| --- | --- |
| Descrição: | O aplicativo deverá permitir a conexão de até 100 usuários online simultaneamente. |
| Prioridade: | Importante |

### Disponibilidade
Esta área define metricamente o quão disponível o sistema estaria para uso, isto é, quão disponível o sistema estaria para efetuar um serviço solicitado por algum usuário.

| RNF003 | Período ativo |
| --- | --- |
| Descrição: | O aplicativo deve permanecer online 24 horas por dia, 7 dias por semana, com tolerância a interrupções de no máximo 2 horas em situações excepcionais para manutenções ou atualizações planejadas. |
| Prioridade: | Importante |

### Hardware
Está área define requisitos que relacionam o sistema com recursos físicos, retratando como ele se comporta em hardwares com diferentes especificações.

| RNF004 | Compatibilidade |
| --- | --- |
| Descrição: | O sistema deve essencialmente funcionar na plataforma Android, visto que o iOS é uma plataforma cara e não é acessível para o momento. |
| Prioridade: | Essencial |

### Segurança
Esta área busca caracterizar a segurança como a não permissão de acessos não autorizados ao sistema e aos dados associados. Portanto, é assegurada a integridade do sistema quanto a ataques intencionais ou acidentes.

| RNF005 | Proteção contra ataques DDoS |
| --- | --- |
| Descrição: | O sistema deverá utilizar CloudFlare para proteção contra ataques DDoS. |
| Prioridade: | Desejável |

| RNF006 | Criptografia |
| --- | --- |
| Descrição: | O sistema deverá utilizar o HTTPS (Hyper Text Transfer Protocol Secure) como forma de criptografia. |
| Prioridade: | Importante |

| RNF007 | Autenticação |
| --- | --- |
| Descrição: | O usuário deve ser capaz de realizar login através de sua conta Google utilizando o serviço SSO (Single Sign-On) da Google. |
| Prioridade: | Essencial |

### Documentação
Essa área aborda as documentações de caráter importante para o desenvolvimento do sistema.

| RNF008 | Documentação das APIs REST |
| --- | --- |
| Descrição: | O endpoint do aplicativo deve ser bem documentado para facilitar integrações futuras com outros sistemas ou correções de implementações no front-end. |
| Prioridade: | Importante |