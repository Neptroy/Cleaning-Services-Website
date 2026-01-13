# Cleaning Services Co. - Website Profissional

Site institucional de alto desempenho desenvolvido para empresas de limpeza e conservação, focado em conversão de leads (B2B e B2C) e SEO local.

## 🚀 Principais Funcionalidades

- **Formulário de Orçamento Inteligente:** Gerenciamento de campos dinâmicos baseado no serviço selecionado (Condomínios, Escritórios, Fachadas, Eventos).
- **SEO & Dados Estruturados:** Implementação de JSON-LD para busca local e metadados otimizados por página.
- **Rastreamento de Conversão:** Integração com Google Tag Manager (GTM) para eventos de envio de formulário (`form_submission_success`).
- **Prova Social Dinâmica:** Carrossel de logos de clientes com animações em CSS puro e seção de depoimentos humanizada.
- **Design Premium:** UI moderna utilizando Tailwind CSS, ícones da biblioteca Lucide e animações sutis de hover.

## 🛠️ Tecnologias Utilizadas

- **Core:** [Next.js 15](https://nextjs.org/) (App Router)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Tracking:** [@next/third-parties](https://www.npmjs.com/package/@next/third-parties)
- **Linguagem:** TypeScript

## 📦 Como Instalar e Rodar Localmente

1.  Clone o repositório:
    ```bash
    git clone https://github.com/Neptroy/Cleaning-Services-Website.git
    cd Cleaning-Services-Website
    ```

2.  Instale as dependências:
    ```bash
    npm install
    ```

3.  Configure o ID do seu GTM no arquivo `src/app/layout.tsx`:
    ```tsx
    <GoogleTagManager gtmId="GTM-XXXXXXX" />
    ```

4.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

5.  Acesse `http://localhost:3000` no seu navegador.

## 📁 Estrutura do Projeto

- `src/app`: Rotas e layout (incluindo página específica de /servicos/fachadas).
- `src/components`: Componentes reutilizáveis (Formulários, Cards, Seções).
- `public/images`: Ativos visuais (Avatares e Logos gerados por IA).

---
Desenvolvido com foco em performance e resultados.
