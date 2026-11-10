# Portfólio — Lucas Santos Nascimento

Landing page profissional em Next.js e React, com tema dark em tons de roxo, animação de habilidades em órbita, conteúdo baseado no currículo, experiência, formação, contatos e carrossel de projetos.

## Requisitos e execução local

- Node.js 20.9 ou superior (o projeto foi iniciado com Node 22).
- pnpm 11.25.0 (versão fixada no `package.json`).

```bash
pnpm install
pnpm dev
```

Abra `http://localhost:3000`. Para compilar a versão de produção e verificar os tipos:

```bash
pnpm typecheck
pnpm build
pnpm start
```

## Estrutura

```text
src/
  app/
    globals.css         tema, animações, órbitas e breakpoints responsivos
    layout.tsx          metadados, viewport e shell da aplicação
    page.tsx            composição da landing page
  components/
    about.tsx           seção Sobre mim
    contact.tsx         formação, contato e rodapé
    experience.tsx      linha do tempo profissional
    hero.tsx            apresentação e sistema solar animado
    navigation.tsx      navegação fixa e menu mobile
    projects.tsx        carrossel acessível alimentado por JSON
    reveal.tsx          entrada suave por rolagem
    section-heading.tsx cabeçalho reutilizável de seção
    skills.tsx          grupos de tecnologias e habilidades
    solar-system.tsx    órbitas interativas, mouse, teclado e toque
  data/
    profile.ts          habilidades, trajetória, formação, idioma e contatos
    projects.json       lista editável dos projetos do carrossel
public/
  favicon.svg
  logo.svg
  manus-routes.json
  projects/             capas SVG de exemplo para os projetos
```

## Adicionar ou remover projetos

Edite `src/data/projects.json`. Cada objeto possui este formato:

```json
{
  "id": "id-unico",
  "name": "Nome do projeto",
  "description": "Resumo curto do projeto.",
  "url": "https://exemplo.com",
  "image": "/projects/capa.svg",
  "imageAlt": "Descrição acessível da imagem",
  "category": "Categoria",
  "stack": ["React", "TypeScript"]
}
```

Coloque a imagem de capa em `public/projects/` e informe o caminho começando com `/projects/`. O nome, a descrição, as etiquetas e os controles do carrossel são gerados a partir do mesmo JSON; a imagem e o link “Abrir projeto” apontam para `url`. Para remover um projeto, retire o objeto correspondente do array. Se o array ficar vazio, a página mostra uma mensagem informativa.

A lista inicial contém os dois canais de portfólio identificados no currículo: a página da oferta SKY Móvel e o perfil GitHub. São links de portfólio, não estudos de caso individuais; as capas fornecidas são ilustrações de apresentação. Quando quiser, substitua os itens pelas URLs, nomes e imagens dos projetos específicos.

## Atualizar perfil e habilidades

Em `src/data/profile.ts`, ajuste `orbitSkills` (as habilidades que orbitam o hero), `skillGroups` (os cartões de tecnologias), `experience`, `education`, `languages` e `contact`. Os componentes de interface consomem esses dados diretamente. Os textos narrativos da seção “Sobre mim” ficam em `src/components/about.tsx`; os textos do hero ficam em `src/components/hero.tsx`.

O sistema solar interativo fica em `src/components/solar-system.tsx`: o ponteiro destaca uma tecnologia, pausa somente sua órbita e inclina suavemente a cena; clicar ou tocar seleciona/deseleciona uma habilidade, e `Tab` mais `Enter` permitem operar por teclado. A seleção pausa o sistema; ao desmarcá-la, as órbitas retomam, mantendo apenas a órbita atualmente sob o ponteiro em destaque. A interface respeita `prefers-reduced-motion`.

O tema, tipografia, cores, órbitas, transições e regras para telas menores estão centralizados em `src/app/globals.css`. As fontes Manrope e DM Mono são carregadas via Google Fonts, com fontes de sistema como fallback. Os metadados do site ficam em `src/app/layout.tsx`; os links profissionais, em `src/data/profile.ts`.

## Stack

- Next.js 15 (App Router), React 19 e TypeScript.
- CSS responsivo próprio; ícones Lucide.
- Projetos e perfil carregados localmente, sem banco de dados nem API externa.
