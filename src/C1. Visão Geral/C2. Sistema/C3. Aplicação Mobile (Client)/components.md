### C3.1 Como foi idealizado o uso do framework Expo com o React Native?

Elaborar um sistema para dispositivos móveis utilizando 4 diferentes linguagens de programação para que sejam minimamente interoperáveis e protáteis não é uma tarefa fácil. Imagine ter que manter 2 projetos separados para Android e iOS, respectivamente, cada um sendo desenvolvido em Java, Kotlin, Objective-C e Swift? O **Seja UPE** foi idealizado para ser potencialmente extensível para outras plataformas, e, para tal, é necessário utilizar uma tecnologia que permita esse intercâmbio utilizando a mesma base de código, esse framework é o **React Native**.

A maioria das aplicações móveis precisa interagir com serviços de baixo nível do sistemaa operacional, como notificações, câmera, microfone, geolocalização, entre outros. Fazer isso a partir do TypeScript não é uma tarefa fácil pois requer uma biblioteca wrapper que forneça uma camada de abstração acessível ao TypeScript para isso. Nesse cenário, quem realiza essa interoperabilidade é o **Expo**. O **Expo** possui uma quantidade enorme de bibliotecas wrappers para acessar os mais comuns casos de uso que envolvem os serviços de baixo nível e ele os disponibiliza como pacotes NPM. Existe bibliotecas para interagir até com a bateria do dispositivo. Há raras situações em que não existe uma biblioteca para utilizar algum recurso nativo a partir do **Expo**, por exemplo, o **bluetooth**.

De forma resumida, o **Seja UPE** foi idealizado para utilizar tecnologias que favoreçam a **produtividade**, **escalabilidade**, **portabilidade** em detrimento do **formalismo** e da **ultra performance**.

- **Como o Expo e o React Native interagem entre si?**<br>
  O projeto em React Native foi criado e nele instalado o Expo Managed Flow que é um fluxo de desenvolvimento idealizado para não se ter no projeto dependências nativas expostas (Java, Kotlin, Swift, Objective-C). As bibliotecas nativas estão instaladas mas não há um pacote ``android`` ou ``ios`` presente pois o APK é compilado nas nuvens a partir de um processo de build baseada no DevOps descrito na seção 3.2 desta documentação.

- **Como o Expo coopera com a produtividade e a escalabilidade?**<br>
  Simples, com trabalho já feito e compartilhado. Devido ao seu acervo de bibliotecas prontas e recursos de ícones, plugins e funções ``facade`` disponíveis para realizar certas atividades, não é necessário implementar nada do zero. Com o **Expo**, por exemplo, é possível resolver o problema da página do aplicativo ficar por baixo da barra de tarefas android pois o **Expo** já possui um componente chamado ``<StatusBar />`` que permite a correção dessa anomalia muito conhecida entre quem programa no android. Além disso, com o **Expo** é muito fácil estender o comportamento do sistema pois ele abstrai muito trabalho permitindo o foco nas regras de negócio e não em como interagir com o sistema operacional subjacente.

- **Como o React Native coopera com a portabilidade?**<br>
  Manter uma aplicação móvel em uma linguagem de programação é muito mais fácil que manter em 4 outras linguagens diferentes. O **React Native** utiliza uma **JSVM** por baixo dos panos para interpretar o código **JavaScript** na bundle final e fazer uma ponte com o mundo nativo **Java**. Graças a essa tecnologia, o código **JavaScript** gerado pelo **React Native** pode rodar em diferentes sistemas operacionais desde que haja uma **JSVM** para interpretá-lo para **Java**, **Kotlin**, **Swift** ou **Objective-C**.

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

Os serviços são uma espécie de componente do sistema. Não se tem uma definição formal do que vem a ser um serviço na aplicação móvel do **Seja UPE** mas se entende como serviço qualquer arquivo que exporte classes, funções e principalmente métodos que contenham regras de negócio ou facilitadores para se implementar um caso de uso. No **Seja UPE** há 4 serviços principais que são utilizados pelos Hooks, componentes e em raras circunstâncias pelas páginas.

- ``Http Service``<br>
  Exporta as funcionalidades de ``GET``, ``POST``, ``PUT``, ``DELETE`` que são utilizadas pelos hooks de requisição HTTP, principalmente o ``useRequest``.

- ``Notification Service``<br>
  Exporta as funcionalidades de envio de notificações através de um objeto ``Notification`` quee contém os seguintes métodos:
  - ``init``: Que é responsável por inicializar o serviço de notificação e a definir se há ou não som, badge da notificação, entre outras configurações;
  - ``schedule``: Que é responsável por agendar a notificação para uma data específica;
  - ``listen``: Que coloca o aplicativo/dispositivo em estado alertável para receber notificações externas (via push).

- ``OAuth2 Service``<br>
  Exporta a função de realizar a autenticação com o Google Single Sign-On chamada ``OAuth2LoginAsync``.

- ``Survey Service``<br>
  Exporta a função de realizar a contabilização dos pontos do teste vocacional e retornar os resultados do teste vocacional através, respectivamente, de ``sumSurveyValues`` e ``getSurveyResults``.

Criar novos serviços é uma tarefa fácil, felizmente, pois pode ser feito criando um arquivo no pacote ``src.core.services`` contendo uma estrutura similar a seguinte:

``MyServiceName.ts``
```ts
export function myServiceFunction1() {
  /* Business rules and operations */
}

export function myServiceFunction2() {
  /* Business rules and operations */
}
```

Para finalizar a criação do serviço uma diretiva de exportação deve ser adicionada no arquivo ``index.tsx`` contendo uma referência para o serviço criado. Em outras palavras, cada serviço deve exportar suas funções e objetos de forma não-default e, por fim, deve ser incluído  um ``export * from './MyServiceName'`` no final do arquivo ``index.tsx`` mencionado.

> [!ATTENTION]
> O estilo de exportação das funções, objetos e demais recursos deve ser feita através da palavra reservada ``export`` sem acompanhar a palavra reservada ``default`` pois a exportação ``default`` impedirá a junção da exportação da função em um único ``export`` no arquivo ``index.tsx`` residente no pacote ``src.core.services``. Essa decisão arquitetural foi tomada visando permitir que vários serviços possam ser importados utilizando um único ``import``.

#### C3.2.3 Os Componentes

Os componentes são uma parte importante e fundamental da aplicação móvel **Seja UPE** pois permitem que as páginas do sistema possam ser escritas como composições de componentes ou partes menores de uma página, sendo eles reaproveitáveis entre si. Uma parte da página pode ser utilizada em vários lugares diferentes, como por exemplo o cabeçalho. No **Seja UPE** há **45** componentes disponíveis para uso, sendo eles os seguintes:

- ``Accordion``: Sanfona de informações usada em cursos e nos campus.
- ``Avatar``: Um componente que exiba uma foto (robozinho ou a de um professor, por exemplo) em um componente arredondado.
- ``Badge``: Tag usada em cards de professores, áreas e até no chat.
- ``Button``: Um botão genérico utilizado nas páginas com interação.
- ``ButtonCourse``: Botão do curso que fica na lista de cursos do Campus.
- ``ButtonEvent``: Botão do evento que fica na lista de eventos do Campus.
- ``ButtonGoogle``: Botão de login com o OAuth2 da Google.
- ``ButtonLattes``: Botão para abrir o currículo Lattes do professor.
- ``ButtonLink``: Botão usado para abrir links como e-mails, contato, etc.
- ``ButtonSocial``: Botão utilizado para redes sociais do Campus.
- ``ButtonStep``: Botão de avançar/voltar utilizado em telas como a do questionário.
- ``ButtonSuggestion``: Botão de sugestão de curso que contém o nome do curso dentro.
- ``ButtonWidget``: Botão do tipo Widget para o menu superior em Campus e Cursos.
- ``CardBaloon``: Card para utilizar falas como as do robô mascote do aplicativo.
- ``CardBaloonBottom``: Card para utilizas falas apontando para a parte de cima onde fica o robô mascote do aplicativo.
- ``CardConcurrency``: Card contendo as notas de corte e a maior nota do curso para a modalidade de ampla concorrência.
- ``CardCourse``: Card de curso que fica no topo da página de um Curso.
- ``CardProfessor``: Card de informações básicas de um professor.
- ``CardSuggestion``: Card contendo uma sugestão de curso, incluindo o percentual de relação com o perfil do usuário.
- ``CardVacancy``: Card contendo o número de vagas ofertadas para o curso.
- ``Carousel``: Um paginador/carrossel em bolinhas para a página Welcome.
- ``Chart``: Um gráfico genérico que será utilizado na página de evolução de concorrência.
- ``DividerConcurrency``: Divisória da página de Notas de Corte.
- ``Header``: Cabeçalho padrão do aplicativo.
- ``HorizontalContent``: Componente utilizado para organizar horizontalmente os elementos gráficos como numa linha.
- ``MapView``: Mapa Google usado para apresentar a localização do Campus.
- ``Messages``: Mensagem enviada ou recebida no bate-papo do aplicativo.
- ``ModalChat``: Modal que exibe o bate-papo para o usuário.
- ``ModalEvaluation``: Modal para realizar a avaliação do questionário e do curso sugerido.
- ``ModalWebView``: Modal para exibir uma página dentro de uma WebView no aplicativo.
- ``MultiSlider``: Um componente de Multi Slider Range para delimitar as notas do vestibular como filtro.
- ``PageLayout``: Componente genérico que representa o layout de uma página (com bordas, cabeçalhos padrões).
- ``Paragraph``: Um componente de parágrafo com uma tipografia padrão (cor, tamanho, nome da fonte, etc).
- ``Progress``: Uma barra de progresso usada no teste vocacional para indicar quantas perguntas já foram feitas.
- ``Radio``: Um componente para selecionar uma única opção dente várias opções.
- ``Render``: Um componente de estrutura de controle para renderizar condicionalmente outros componentes.
- ``Select``: Um componente para selecionar um único valor dentre várias opções.
- ``Spacer``: Um componente de espaçamento para ser utilizado de forma vertical ou horizontal nas páginas.
- ``Title``: Um título padrão de página.
- ``TitleOutline``: Um título customizado de página podendo ter um sublinhado, imagem ou fonte diferente.
- ``ToggleGroup``: Um componente Toggle (Switch) para alternar entre a modalidade SISU e SSA.
- ``ToggleView``: Um componente Toggle (Switch) para alternar entre o modo de visualização em lista horizontal e vertical.
- ``VerticalContent``: Componente utilizado para organizar verticalmente os elementos gráficos como numa coluna.

Criar um componente é uma tarefa fácil, felizmente, pois você precisará criar um arquivo no pacote ``src.core.components`` e adicionar o código a seguir:

```tsx
import React, { Fragment, FunctionComponent } from "react";
import { Text } from "react-native";

export interface MyComponentProps {
  /* Props declaration */
}

//The component should be a FunctionComponent.
export const MyComponent: FunctionComponent<MyComponentProps> = () => {
  return (
    <Fragment>
      <Text>Hello world from Seja UPE!</Text>
    </Fragment>
  );
}
```

> [!ATTENTION]
> Pelo mesmo motivo que os serviços, você deverá criar um componente e exportá-lo utilizando a palavra reservada ``export`` sem acompanhar ``default``. Essa decisão foi tomada visando permitir que vários componentes possam ser importados utilizando uma única diretiva ``import``.

#### C3.2.4 As Páginas

As páginas são uma outra camada do sistema, responsáveis por intermediar a interação do usuário com o sistema. Cada página possui uma rota interna associada a um componente pois, de fato, páginas também são componentes aos olhos do React Native. Dessa forma, o **Seja UPE** possui um conjunto de páginas as quais implementam seus casos de uso, essas páginas são:

- ``Campus``: Página do campus.
- ``CampusContact``: Página dos contatos do campus.
- ``CampusCourses``: Páginas dos cursos do campus.
- ``CampusEvents``: Páginas dos eventos do campus.
- ``Course``: Página do curso.
- ``CourseConcurrency``: Página de concorrência do curso.
- ``CoursePlanning``: Página que contém o planejamento pedagógico do curso.
- ``CourseProfessor``: Página de um professor específico do curso.
- ``CourseProfessors``: Página dos professores de um curso.
- ``SearchResults``: Página de resultados de pesquisa de cursos pela filtragem da tela de sugestões.
- ``Suggestions``: Página de sugestões de cursos.
- ``Survey``: Página do testes vocacional.
- ``Welcome``: Página inicial do aplicativo.

Criar uma página é uma tarefa um pouco mais complicada que criar um componente, é necessário primeiramente:

- Criar o componente da página com a abordagem que o tópico anterior descreve;
  - O componente da página deve ser criado no pacote ``src.pages`` ao invés de ``src.core.components``, pois este componente é uma página;
  - O componente da página deve ser exportado no arquivo ``index.tsx`` do pacote ``src.pages``, analogamente ao que é feito com os componentes e serviços;
- Definir a rota da página para o componente criado.
  - Cada página deve possuir uma rota associada, essa rota é definida no pacote ``src.routes`` no arquivo ``Stack.tsx``. O componente da página deve ser importado assim como os demais presentes no arquivo e então deve ser criada uma diretiva dentro do ``Stack.Navigator`` conforme a seguir:
    ```tsx
    export const StackRoutes: FunctionComponent<StackRoutesProps> = () => {
      return (
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerShown: false
          }}
        >
          {/*(...)*/}
          <Stack.Screen 
            name="MyPage" 
            component={MyPage} 
          />
          {/*(...)*/}
        </Stack.Navigator>
      );
    }
    ```
  - Por fim, cada página pode receber propriedades de navegação, os chamados parâmetros de rota. Defini-los é uma tarefa fácil no **Seja UPE** pois há um espaço predefinido também no pacote ``src.routes`` no arquivo ``Types.tsx``. Este é o arquivo onde os tipos dos parâmetros de rotas são especificados. Veja o exemplo a seguir:
    ```tsx
    import { DrawerNavigationProp } from "@react-navigation/drawer"
    import { MyPage } from "../core/hooks";

    export type RoutesParamList = {
      //(...)
      MyPage: any,
      //(...)
    }

    type ParameterizedRoute<T extends keyof RoutesParamList> = DrawerNavigationProp<RoutesParamList, T>;

    //(...)
    export type MyPageNavigationProp           = ParameterizedRoute<"MyPage">;
    //(...)
    ```

    > [!ATTENTION]
    > Conforme observado anteriormente, há um padrão tanto de criação do componente da página, como do nome da página, o nome da sua propriedade de navegação e a forma de definir os tipos dos parâmetros de rota. Seguir estes padrões é fundamental para manter a arquitetura ao longo das iterações futuras.

#### C3.2.5 Os Providers

Os providers são importantes aliados na arquitetura do **Seja UPE** pois permitem que alguns Hooks possam utilizar o mais novo conceito no React, a **Context API**. A API de Contexto, assim também chamada, é o que permite que diferentes componentes e páginas possam utilizar estados globais na aplicação sem necessitar utilizar o conceito de **Prop Drilling**, o qual aliás é uma péssima prática de programação. Antigamente as aplicações utilizavam o **Prop Drilling** para simular estados globais, tendo que passar setters como propriedade para outros componentes poderem alterar estados de seus componentes ancestrais. O React mudou isso introduzindo o provider.

No **Seja UPE** os providers são usados para basicamente 3 situações:

- **Memória volátil de estados globais;**
- **Manutenção de sessão volátil;**
- **Aplicação de temas nas páginas e componentes;**

Há dois providers criados para esses propósitos, são eles ``Global.tsx`` e o ``Theme.tsx`` que estão localizados no pacote ``src.core.providers``.

Cada provider possui pelo menos um hook associado que consome ou gere o estado envolvido no provider, vejamos os hooks de cada um dos providers mencionados:

- ``Global.tsx``
  - ``useGlobal``: responsável por proporcionar um estado global acessível por todas as páginas e componentes do **Seja UPE**;
    - ``useSession``: responsável por retornar os dados da sessão atual do usuário logado. Este hook utiliza diretamente o ``useGlobal`` por baixo dos panos;
      - ``useIsSessionActive``: responsável por verificar se o usuário atual possui uma sessão válida ativa. Este hook utiliza diretamente o ``useSession`` e indiretamente o ``useGlobal`` por baixo dos panos;
- ``Theme.tsx``:  
  - ``useTheme``: responsável por proporcionar o acesso de leitura e alteração da paleta de cores atualmente definida, disponível para todas as páginas e componentes;
    - ``useThemeSchema``: responsável por proporcionar o acesso somente leitura ao tema atualmente selecionado. Este hook utiliza diretamente o ``useTheme`` por baixo dos panos;

Criar providers não é uma tarefa muito comum depois que já se tem um conjunto de providers definidos, portanto, não é de interesse da arquitetura envolver a raiz dos componentes em muitos providers. A API de Contexto do React tem uma degradação de desempenho significativa em comparação com outras abordagens de manutenção de estados globais, como por exemplo o Redux. Dessa forma, quanto menos providers envolvendo a aplicação inteira, melhor. **E assim espera-se que continue por um bom tempo!** 

#### C3.2.6 Os Themes

Os Temas da aplicação são, na realidade, paletas de cores envolvidas por um objeto fortemente tipado no TypeScript. Uma paleta de cor ou tema é definido de acordo com a seguinte estrutura:

```ts
export interface ThemeValue {
  schemaName: string;
  blue: string;
  blueNeon: string;
  red: string;
  black: string;
  yellow: string;
  gray: string;
  white: string;
  whiteSmoke: string;
  evaluationColor: string;
  textColor: string;
  concurrencyGreen: string;
  concurrencyRed: string;
  chartDatasetColor: string;
  chartGradientFrom: string;
  chartGradientTo: string;
  chartColor: string;
  chartLabelColor: string;
  chartDotColor: string;
  chatOwnTextColor: string;
  chatOwnBackgroundColor: string;
  chatTextColor: string;
  chatTextBackgroundColor: string;
  chatBackgroundColor: string;
}
```

Os temas podem ser utilizados e acessados a partir do Hook de tema ``useTheme`` ou ``useThemeSchema``. Estes dois hooks permitem que os componentes obtenham as cores para, por exemplo, o vermelho do tema atual, o cinza, e assim por diante. A maioria dos componentes do **Seja UPE** utiliza o hook ``useTheme`` para adaptar a sua visualização aos aspectos daquele tema, vejamos um exemplo prático:

```tsx
export interface AvatarProps {
  source: ImageSourcePropType;
  diameter: number;
  padding?: number;
  style?: StyleProp<ViewStyle>;
}

export const Avatar: FunctionComponent<AvatarProps> = ({ source, diameter, style, padding = 4 }) => {
  const [theme] = useTheme();

  return (
    <Container style={style} diameter={diameter + padding} {...theme}>
      <Image diameter={diameter} source={source} resizeMode="cover" {...theme}/>
    </Container>
  );
}
```

Criar uma nova paleta de cores é uma tarefa fácil, felizmente, pois tudo o que o programador deverá fazer é criar um arquivo no pacote ``src.core.themes`` com o padrão de nomenclatura ``palette-name.palette.tsx`` e exportar um objeto contendo a definição da paleta de cores. A seguir podemos ver um exemplo de uma paleta de cores:

``ocean.palette.tsx``
```ts
export const OceanPalette = {
  schemaName:               "ocean",
  blue:                     "#324A76", 
  blueNeon:                 "#1ED8D8", 
  red:                      "#ED3237", 
  black:                    "#252525", 
  yellow:                   "#FFE60A", 
  gray:                     "#C4C4C4", 
  white:                    "#FFFFFF", 
  whiteSmoke:               "#F4F5F8", 
  evaluationColor:          "#CBC4CC", 
  textColor:                "#FFFFFF", 
  concurrencyGreen:         "#17B41E", 
  concurrencyRed:           "#D7292D", 
  chartDatasetColor:        "#ED3238", 
  chartGradientFrom:        "#F3ECEC", 
  chartGradientTo:          "#FFFFFF", 
  chartColor:               "#620101", 
  chartLabelColor:          "#324A76", 
  chartDotColor:            "#830408", 
  chatOwnTextColor:         "#FFFFFF", 
  chatOwnBackgroundColor:   "#324A76", 
  chatTextColor:            "#676767", 
  chatTextBackgroundColor:  "#DBDBDB", 
  chatBackgroundColor:      "#E4E4E4"  
}
```

> [!TIP]
> Lembre-se, este objeto deve estar em conformidade com o tipo ``ThemeValue``, ou seja, todas as propriedades devem estar presentes e com o tipo compatível, bem como valores definidos. Para modificar o tema atual, basta utilizar o hook ``useTheme`` e através de seu setter definir o tema para a nova paleta de cores criada.

### C3.3 Quais são as restrições e limitações do projeto e como são contornadas?

As principais limitações e restrições do projeto são impostas devido a questões financeiras, requisitos do cliente, condições de hardware, escopo, tempo e vários outros desafios. A seguir podemos ver algumas dessas limitações e restrições.

- **Restrição**: Uma linguagem de programação única (JavaScript) tanto para backend como para frontend mobile;
- **Limitação**: O sistema ter que funcionar, de início, somente para android, devido ao alto custo de disponibilização de aplicativo na **Apple Store**;
  - **Solução**: Para contornar esta limitação o usuário poderá acessar o aplicativo em modo de pré-release/desenvolvimento através do **QR Code** gerado pelo **Expo**;
- **Limitação**: Não é possível interagir com o código nativo em Java/Kotlin pois o **Expo** incorpora esses arquivos apenas em tempo de compilação, por consequência, não é possível compilar localmente o **APK** ou a **bundle**;
  - **Solução**: Utilizar o serviço de compilação do **Expo** nas nuvens, isso fará o processo de compilação da forma mais prática possível;

### C3.4 Implementando uma nova funcionalidade respeitando a arquitetura

Para se implementar uma nova funcionalidade você deverá seguir o fluxo de implementação habitual de um caso de uso no front-end. Primeiro mapear seus serviços, hooks que irão consumir esses serviços e traduzir as regras de negócio e chamadas de processamento de dados em chamadas compatíveis com o paradigma funcional, depois os componentes gráficos deverão ser modelados para compor as partes das páginas do usuário e por fim as rotas de navegação e definição dos tipos de propriedades de navegação das páginas devem ser especificados no pacote ``src.routes`` a fim de tornar acessível as páginas e expor suas funcionalidades. Nos tópicos a seguir você verá como realizar essa implementação respeitando a arquitetura subjacente ilustrada no diagrama no topo desta página.

#### C3.4.1 Quais camadas devem ser implementadas?

As camadas que devem ser implementadas para se criar um novo caso de uso na aplicação móvel são as seguintes, em ordem de prioridade:

1. **Services**<br>
  É o primeiro elemento que deve ser pensado em ser implementado no front-end pois serve de base para o processamento dos dados necessários pelo caso de uso e sua realização. Os services devem conter a regra de negócio e a sua manipulação, toda a lógica que diz respeito ao front-end deve ser tratada, em grande parte, nos services. **O foco é na realização do caso de uso em nível de processamento de dados.**
2. **Hooks**<br>
  O segundo elemento a ser implementado é o Hook. Os Hooks devem consumir parcial ou totalmente as funcionalidades expostas pelos serviços condizentes com o caso de uso que realizam. Hooks são a forma que o React utiliza para mudar o efeito colateral da renderização de um componente, logo, estão intimamente ligados à interface gráfica. Os Hooks de requisição devem ser implementados primeiro, seguido pelos hooks de interface gráfica e ciclo de vida do componente. Outros Hooks como os de controle de sessão e tema já estão disponíveis e não necessitam de retrabalho por parte do desenvolvedor. **O foco é na regra de negócio.**
3. **Componentes**<br>
  Evidentemente nem sempre haverá componentes prontos e disponíveis para a utilização na criação de novas páginas, principalmente se o layout possuir peculiaridades não previstas anteriormente. É papel do desenvolvedor criar os componentes gráficos e lógicos apropriados seguindo a prototipação no **Figma**, com o maior grau de fidelidade possível. Os componentes devem ser implementados utilizando **Styled Components** como biblioteca de estilização ao invés da clássica **React Native Stylesheet**. O **Styled Components** é amplamente adotado pelo **Seja UPE** pois torna muito mais legível para quem realiza a manutenção do sistema compreender o estilo dos componentes. **O foco nesta etapa é em criar os elementos gráficos das páginas.**
4. **Páginas**<br>
  Uma vez que os componentes estão prontos, chega a vez da criação das páginas. As páginas são na realidade componentes, como já foi mencionado, e estas páginas são compostas por outros componentes e Hooks. Páginas não devem utilizar serviços diretamente pois isso viola o preceito da imutabilidade na programação funcional ao introduzir chamadas imperativas/procedurais a funções de serviços. **O foco é em construir a interface gráfica.**
5. **Rotas**<br>
  Por fim, as páginas precisam de uma rota associada e também de uma definição de tipos de parâmetros de navegação. A página criada deverá ser adicionada no arquivo de rota para navegação em pilha ``Stack.tsx`` presente no pacote ``src.routes``. Uma vez adicionada a rota, certifique-se de que a página adicionada às rotas possua uma definição de propriedades de navegação. **Mesmo que a página não receba nenhum argumento de navegação ou passagem de propriedades, a definição dos tipos de propriedades de navegação deverão existir.**

> [!ATTENTION]
> Nunca invoque diretamente um serviço a partir de um componente React. As chamadas em estilo procedural quebrarão o princípio da imutabilidade e poderão ocasionar consecutivas chamadas com efeitos colaterais imprevisíveis devido a renderizações e atualizações de estado do componente.

#### C3.4.2 Padrões e convenções de nomenclatura

Para auxiliar a separação de responsabilidades, a coesão e a manutenção da arquitetura, as pastas, arquivos, funções e variáveis seguem alguns padrões de nomenclatura. As pastas foram divididas para representar as camadas do software, para isso foram nomeadas como: ``pages``, ``routes``, ``core``, etc. Já os arquivos possuem uma estrutura ``name.tsx``, assim um arquivo que armazena os hooks de requisição, por exemplo, terá de ser nomeado ``Apis.tsx`` e ser. Em relação ao nome das funções e variáveis, recomenda-se a utilização do camelCase, pois ele ajuda a legibilidade e é o padrão adotado pelo **Seja UPE** aderente ao **AirBnB JavaScript Code Style**. Em todo o sistema (back e front) foram utilizadas as seguintes convenções:

- **Convenção de Nomenclatura de Arquivos e Diretórios** ([Filenames and File Types | Google Developers](https://developers.google.com/style/filenames));
- **Convenção de Nomenclatura de Variáveis JavaScript** ([AirBnb Naming Conventions](https://airbnb.io/javascript/#naming-conventions));
- **Convenção de Fluxo de Trabalho Git** ([GitFlow](https://danielkummer.github.io/git-flow-cheatsheet/));
- **Convenção de Commits** ([Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/) e o [Gitmoji](https://gitmoji.dev/));
- **Versionamento de Software - Com adaptações e aderência parcial** ([Semantic Versioning](https://semver.org/));

> [!TIP]
> Para obter maiores informações sobre o padrão de nomenclatura de arquivos e classes das camadas citadas, visite os tópicos anteriores e veja mais informações a respeito de cada uma das camadas.

#### C3.4.3 Padrões de projeto utilizados

#### C3.4.4 Módulos e serviços disponíveis para utilização

