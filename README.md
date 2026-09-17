# Amor à Palavra

Landing page da Loja Amor à Palavra — cadernos devocionais, estudo bíblico,
planners e agendas artesanais, feitos à mão por Gabi Andrade em Recife-PE.

## Stack

- [Vite](https://vite.dev/) + [React](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) para ícones

## Rodando localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
```

## Conteúdo

Este projeto foi criado a partir da estrutura da landing page da Mahut
Arquitetura, adaptada para a Amor à Palavra. Os textos e a paleta são um
rascunho baseado na bio e no feed públicos do Instagram (@amor_apalavra) —
ajuste em `src/data.js` com os textos reais da marca.

A seção "Galeria" (`src/components/Galeria.jsx`) usa placeholders
ilustrados no lugar de fotos reais dos produtos, para evitar reutilizar
imagens do Instagram sem autorização. Para trocar por fotos reais, o mais
simples é seguir o padrão usado na Mahut: colocar as imagens em
`src/assets/produtos/<categoria>/*.webp` e carregar com `import.meta.glob`
em `data.js`, como feito em `PROJETOS` no projeto original.

## Identidade visual

A logo oficial da loja está em `src/assets/logo.jpg` (também usada como
favicon em `public/favicon.jpg`) e é exibida em `src/components/Logo.jsx`,
usado no cabeçalho, no rodapé, no hero e na seção "Sobre". Paleta extraída
dela: `#faf3e4` (creme), `#d8527d` (rosa), `#55231f` (vinho), `#cf9a4c`
(dourado). Tipografia de exibição: Playfair Display; destaques
manuscritos: Caveat; corpo de texto: Nunito.

Os cadernos com espiral em `src/components/NotebookMock.jsx` são uma
referência ao produto real da loja, usada como placeholder na galeria
até termos fotos de verdade.
