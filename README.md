# Sistema de Co-faturamento TIP Brasil

Sistema estatico para importar notas extraidas do IXC e gerar uma planilha unica no modelo da TIP Brasil.

## Como usar

1. Abra `index.html` no navegador.
2. Importe varios PDFs, um arquivo ZIP com PDFs, ou um relatorio XLSX/CSV do IXC.
3. Confira a previa e as pendencias.
4. Clique em **Baixar TIP** para gerar a planilha final.

## Estrutura

```text
sistema_faturamento_mvno/
  index.html
  assets/
    css/
      styles.css
    js/
      app.js
  data/
    entrada/
    saida/
  docs/
    fluxo-mensal.md
```

## Observacao

O sistema roda no navegador e usa bibliotecas via CDN para ler Excel, PDF e ZIP.
