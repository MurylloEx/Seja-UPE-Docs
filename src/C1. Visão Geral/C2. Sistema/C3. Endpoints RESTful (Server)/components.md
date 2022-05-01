### C3.1 Implementando uma nova funcionalidade respeitando a arquitetura

#### C.3.1.1 Frameworks

#### C.3.1.1 Padrões arquiteturais

### C3.2 Camadas da API REST

#### C3.2.1 Os Controllers

#### C3.2.2 As Exceptions

#### C3.2.3 Os Filters

#### C3.2.4 Os Hooks/Interceptors

#### C3.2.5 Os Models

#### C3.2.6 Os Modules

#### C3.2.7 As Guards

#### C3.2.8 Os Services

#### C3.2.9 Os Validators

#### C3.2.10 As Views

#### C3.2.11 O Gateway Websocket

### C3.3 Padrões e convenções de nomenclatura

- Para nome de variáveis:
  - Camel Case;
- Para nome de funções:
  - Camel Case;
- Para nome de classes:
  - Pascal Case;
- Para nome de pastas:
  - Uma palavra só toda em minúsculo;
- Para nome de arquivos:
  - `<nome do arquivo>.<tipo do arquivo>.<extensão do arquivo>``;
  - Ex.: `user.model.ts`, `user.service.ts`, `user.guard.ts`;
- Para código de versionamento:
  - Foi utilizado semantic versioning, com uma leve alteração do número referente ao patch (ex.: x.y.1); A alteração feita no patch, foi que mesmo aumentada o número referente ao major (ex.: 1.y.z) ou minor (ex.: x.1.z), a patch não era resetada, de acordo como é escrita na documentação do semantic versioning;
  - O uso do semantic versioning,
- Para commits [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/) em conjunto com o [Gitmoji](https://gitmoji.dev/).
- O conventional commits ainda entra em congruência com o padrão de versionamento semantic versioning, visto que o número dos tipos de commits (ex.: feat, fix, chore e etc.) influenciará no número da versão. Mais detalhes sobre isso pode ser visto no [seguinte link](https://www.conventionalcommits.org/pt-br/v1.0.0/#qual-a-rela%C3%A7%C3%A3o-com-o-semver);