# 🎯 Desafio Frontend Junior - Card de Perfil

Este repositório contém a solução para o desafio técnico da **Frontend Fusion**. O objetivo foi desenvolver um componente de **Card de Perfil** interativo, responsivo e fiel ao design proposto no Figma.

---

## 🔗 Deploy

Acesse o projeto online clicando abaixo:  
👉 [Link da Vercel Aqui](https://desafio-frontend-jr-livid.vercel.app/)

---

## ✨ Funcionalidades

- **Card Reutilizável:** Componente `CardProduto` estruturado para receber dados dinâmicos.  
- **Interatividade:** Botão "Seguir" com gerenciamento de estado (`useState`), alternando entre estilos e textos ("Seguir" / "Seguindo").  
- **Responsividade:** Layout adaptável para dispositivos móveis e desktop usando classes do Tailwind (`flex-col`, `md:flex-row`, etc).  
- **Otimização:** Uso do componente `<Image />` do Next.js para carregamento otimizado de imagens.  
- **Testes Automatizados:** Cobertura de testes para garantir a renderização correta e a lógica do botão.  

---

## 🧪 Testes Unitários

Um dos diferenciais deste projeto é a implementação de **testes unitários**.  
O ambiente foi configurado para utilizar o **SWC** (compilador nativo do Next.js) ao invés do Babel, garantindo maior performance.

Os testes cobrem:

- Renderização das informações do perfil (Nome, Cargo, Estatísticas)  
- Presença e acessibilidade da imagem (Alt text)  
- Estado inicial do botão  
- Mudança de estado visual e textual ao clicar no botão  

Para rodar localmente:
```bash
# Clone o repositório
git clone https://github.com/Marcos1Guerra/desafio-frontend-jr

# Instale dependências
npm install

# Execute o servidor
npm run dev
```

Acesse http://localhost:3000

Para rodar os testes:
```bash
npm run test
```
