#!/bin/bash

# 📱 Projeto Vite + React + TypeScript

# Este é um projeto de exemplo utilizando Vite como bundler, React para construção de interfaces e TypeScript para tipagem estática.

# --- 🛠️ Tecnologias Utilizadas ---
echo "🛠️ Tecnologias Utilizadas"
echo " - Vite: Para desenvolvimento rápido com HMR (Hot Module Replacement)."
echo " - React: Biblioteca para criação de interfaces de usuário."
echo " - TypeScript: Tipagem estática para JavaScript."

# --- 🚀 Como Rodar o Projeto ---
echo ""
echo "🚀 Como Rodar o Projeto"

# Requisitos
echo "⚡ Requisitos: Você precisará ter instalado Node.js (versão 14+) e NPM ou Yarn."

# Clone o repositório
echo ""
echo "1️⃣ Clonando o repositório..."
git clone https://github.com/seu-usuario/seu-repositorio.git

# Entre no diretório do projeto
echo "2️⃣ Entrando no diretório do projeto..."
cd seu-repositorio

# Instale as dependências
echo "3️⃣ Instalando dependências..."
read -p "Você usa npm ou yarn? " pkgmgr

if [ "$pkgmgr" == "npm" ]; then
  npm install
elif [ "$pkgmgr" == "yarn" ]; then
  yarn
else
  echo "Gerenciador de pacotes não reconhecido. Execute manualmente npm install ou yarn."
  exit 1
fi

# Execute o servidor de desenvolvimento
echo "4️⃣ Rodando o servidor de desenvolvimento..."
if [ "$pkgmgr" == "npm" ]; then
  npm run dev
else
  yarn dev
fi

# Acesse o projeto no navegador
echo "5️⃣ Acesse o projeto em http://localhost:5173"

# --- 📦 Scripts Disponíveis ---
echo ""
echo "📦 Scripts Disponíveis"
echo " - npm run dev ou yarn dev: Executa o projeto em modo de desenvolvimento."
echo " - npm run build ou yarn build: Compila o projeto para produção."
echo " - npm run preview ou yarn preview: Pré-visualiza o build de produção."