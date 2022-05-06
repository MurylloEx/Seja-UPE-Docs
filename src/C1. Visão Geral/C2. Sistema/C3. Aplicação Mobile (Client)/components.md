### C3.1 Como foi idealizado o uso do framework NestJS?

### C3.2 Camadas da Aplicação Móvel

Para entender como as camadas funcionam no front-end móvel, precisamos visualizar a sua estrutura de pacotes e então percorrer camada por camada a fim de visualizar o fluxo de um caso de uso complexo. Vejamos como a estrutura de arquivos está dividida:

```
\ root
  \-> __mocks__
  \-> node_modules
  \-> assets
  \-> tests
  \-> src
    \-> assets
    \-> core
      \-> components
      \-> config
      \-> hooks
      \-> providers
      \-> services
      \-> themes
    \-> pages
    \-> routes
```

Como você pode ver, há uma pasta src que contém todo o código da aplicação e dentro dela há ramificações de diretórios para ``assets``, ``core``, ``pages`` e ``routes``. Cada diretório desse possui um propósito, veremos todos eles a seguir.

- **assets** - É onde todos os arquivos de recursos visuais (svgs, pngs, jpgs, jpegs, gifs, etc) são armazenados. Essa pasta possui arquivos que que seguem o seguinte padrão de nomenclatura:

  - **Imagens:** ``res_image_name_image.ext``<br>
  - **Ícones:** ``res_icon_name_icon.ext``<br>
  - **Logos:** ``res_logo_name_logo.ext``<br>
  - **Exemplo:** ``res_robot_hand_on_the_waist_icon.png``

  Dentro deste diretório há um arquivo index.tsx que exporta todas as imagens com seus nomes aderentes ao padrão de nome seguinte: 

  ```tsx
  (...)
  export const AssetProfessorPhotoIcon            = require("./res_professor_photo_icon.png");
  export const AssetSocialFacebookIcon            = require("./res_social_facebook_icon.png");
  export const AssetSocialInstagramIcon           = require("./res_social_instagram_icon.png");
  export const AssetSocialTwitterIcon             = require("./res_social_twitter_icon.png");
  export const AssetSocialYoutubeIcon             = require("./res_social_youtube_icon.png");
  (...)
  ```

- **core** - É o diretório mais importante da aplicação, onde os serviços, componentes, hooks, providers, temas e a configuração da aplicação são armazenados. Esse diretório se ramifica nos seguintes:
  - **components** - É o diretório que contém todos os componentes react do sistema;
  - **config** - É o diretório que contém todos os arquivos JSON com configurações do teste vocacional, das rotas da API;
  - **hooks** - É o diretório que contém os arquivos que agrupam os Hooks do sistema, sendo divididos por categoria e não por nome;
  - **providers** - É o diretório que contém os providers do react, que são como componentes mas proporcionam o acesso à API de Contexto do React, sea para tema ou estados globais;
  - **services** - É um dos diretórios mais importantes, junto dos hooks, é onde se pode encontrar os serviços de requisição, serviços do teste vocacional e notificações do sistema. Tudo que envolve regras de negócio deve estar contido nesse diretório;
  - **themes** - É um diretório que contém as paletas de cores dos temas disponíveis, atualmente o ``Dark Palette`` e o ``Light Palette``.

- **pages** - É o diretório que contém todas as páginas da aplicação móvel. São ditas como páginas, pois as páginas ocupam parcialmente a área do monitor do dispositivo móvel (excetuando a área da barra de status). Alguns desenvolvedores costumam utilizar o termo **screens** para diferenciar das páginas Web, mas não há nenhum consenso quanto a esse termo;

- **routes** - É o diretório que contém todas as rotas e definições de parâmetros que as páginas recebem. Qualquer alteração no fluxo de exibição das páginas ou a navegação deve ser feita nesse diretório.

#### C3.2.1 Os Hooks
Os hooks são uma abordagem funcional para gestão de estados e adição de efeitos no React. A partir dos hooks é possível criar variáveis que preservam seu valor entre diferentes renderizações (chamadas da função do componente). É importante notar que um componente funcional no React possui uma forma semelhante a seguinte:

```tsx
import React, { FunctionComponent } from 'react';

export interface MyComponentProps {
  /* Props declaration */
}

export const MyComponent: FunctionComponent<MyComponentProps> = () => {
  return (
    <View>
      <Text>Hello World!</Text>
    </View>
  );
}
```

Dessa forma, quando o componente tem um de seus estados alterado, a função responsável por renderizar o componente é executada novamente e, como é de se advinhar, todas as variáveis seriam redeclaradas e, por fim, teriam seus valores redefinidos. Para resolver esse problema o React introduziu os hooks os quais são amplamente utilizados pelo **Seja UPE**. Há vários hooks que podem ser reaproveitados no **Seja UPE**, são eles:

- ``APIS``
  - useAuthorize
  - useCampus
  - useCampusRef
  - useCampusCourses
  - useCampusEvents
  - useCampusContacts
  - useCampusWithCourses
  - useRatingSurvey
  - usePopularityCourse
  - useProfessors
  - useProfessorRef
  - useAllCourses
  - useCourses
  - useCourseProfessors

- ``DADOS DE CAMPUS``
  - useCampusData

- ``BATE-PAPO``
  - useChatWebSocket

- ``AVALIAÇÃO DE CURSO/QUESTIONÁRIO``
  - useEvaluation

- ``ESTADO GLOBAL``
  - useGlobal

- ``OAUTH2``
  - useGoogleAuth

- ``LIFECYCLE``
  - useEnterScreen
  - useLeaveScreen

- ``HTTP/S``
  - useRequest
  - useAuthorizedRequest

- ``INTERFACE GRÁFICA``
  - usePageScroll
  - useTheme
  - useThemeSchema

- ``SESSÃO``
  - useSession
  - useIsSessionActive

- ``TESTE VOCACIONAL``
  - useSurveyResults

Por fim, você pode criar seu próprio Hook, ele deve ter o seguinte formato:

```ts
export function useMyHook(): string {
  /* Hooks can use another hooks */
  /* Hooks must have a name beginning with 'use' */
  return 'hello world';
}
```

> [!ATTENTION]
> Todos os Hooks do **Seja UPE** devem conter o padrão de nomenclatura **useHookName**. O prefixo **use** é utilizado pelo React para identificar quando uma função é um Hook e deve ser tratado como tal.

#### C3.2.2 Os Services

#### C3.2.3 Os Componentes

#### C3.2.4 As Páginas

#### C3.2.5 Os Providers

#### C3.2.6 Os Themes

### C3.3 Quais são as restrições e limitações do projeto e como são contornadas?

### C3.4 Implementando uma nova funcionalidade respeitando a arquitetura

#### C3.4.1 Quais camadas devem ser implementadas?

#### C3.4.2 Padrões e convenções de nomenclatura

#### C3.4.3 Padrões de projeto utilizados

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

#### C3.4.4 Módulos e serviços disponíveis para utilização

