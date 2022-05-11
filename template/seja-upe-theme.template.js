const settings = {
  "flexible-alerts": {
    note: {
      label: "Nota"
    },
    tip: {
      label: "Informação"
    },
    warning: {
      label: "Aviso"
    },
    attention: {
      label: "Atenção"
    }
  }
}

module.exports = (options) => {
  return `
  <!DOCTYPE html>
  <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>${options.name}</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="description" content="Um sistema para você que está indeciso sobre qual curso de graduação escolher, Seja UPE!">
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify-sidebar-collapse/dist/sidebar.min.css">
      <link rel="stylesheet" href="${options.stylesheet}">
      <style>
        p:not([align]), td, th {
          text-align: justify!important;
        }
        table {
          width: 100%!important;
          display: table!important;
        }
      </style>
    </head>
  
    <body>
      <div id="app"></div>
      <script>
        window.$docsify = ${JSON.stringify({...settings, ...options}, null, 2)};
      </script>
    </body>

    <script src="//unpkg.com/docsify/lib/docsify.min.js"></script>
    <script src="//unpkg.com/docsify-plugin-flexible-alerts"></script>
    <script src="//unpkg.com/docsify-plantuml/dist/docsify-plantuml.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/zoom-image.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/docsify-darklight-theme@latest/dist/index.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/docsify-sidebar-collapse/dist/docsify-sidebar-collapse.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/prismjs@1.22.0/components/prism-jsx.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/prismjs@1.22.0/components/prism-tsx.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/prismjs@1.22.0/components/prism-javascript.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/prismjs@1.22.0/components/prism-typescript.min.js"></script>

  </html>
  `;
}