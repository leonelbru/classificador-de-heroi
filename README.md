# Classificador de Nível de Heróis

Este projeto foi desenvolvido como desafio da plataforma [DIO](https://www.dio.me), no módulo de **Lógica de Programação - Back-End (nível básico)**.  
O objetivo é criar um classificador que, com base na **quantidade de XP (experiência)** informada pelo usuário, define o nível do herói. O programa também permite que você dê um nome personalizado ao personagem. Por ser uma grande fã de RPG, acrescentei a ideia de escolher raças para o personagem também.

## Tecnologias Utilizadas

- **Node.js** – Para executar o código JavaScript no terminal.
- **JavaScript (ES6+)** – Linguagem usada para desenvolver a lógica do classificador.
- **prompt-sync** – Biblioteca Node.js utilizada para ler entradas do usuário no terminal.
- **Visual Studio Code (VS Code)** – Editor de código utilizado no desenvolvimento.
- **Git Bash** – Ferramenta de terminal usada para versionamento e envio ao GitHub.

## Funcionalidades e Estrutura Lógica

O código implementa os seguintes conceitos da lógica de programação:

- **Variáveis** – Utilizadas para armazenar dados como nome e XP.
- **Operadores** – Usados para realizar comparações numéricas.
- **Laço de repetição (`for`)** – Permite executar o processo de classificação múltiplas vezes.
- **Estruturas de decisão (`if / else if / else`)** – Responsáveis por definir o nível do herói com base no XP.

### Como funciona:
1. O usuário informa o **nome do herói**.
2. Informa a **quantidade de XP**.
3. Escolhe uma raça de acordo com a lista exibida.
4. O programa classifica o herói nos seguintes níveis:
   - XP < 1000 → Ferro
   - 1001 a 2000 → Bronze
   - 2001 a 5000 → Prata
   - 5001 a 7000 → Ouro
   - 7001 a 8000 → Platina
   - 8001 a 9000 → Ascendente
   - 9001 a 10000 → Imortal
   - XP > 10000 → Radiante
5. A mensagem final é exibida com o nome e o nível do herói, e também com sua raça escolhida.
