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

Paleta: `#f7f1e8` (papel), `#b8636f` (rosa), `#4a2f35` (vinho), `#b08d57`
(dourado), `#7c8a6a` (sálvia). Tipografia de exibição: Cormorant Garamond;
corpo de texto: Jost.
