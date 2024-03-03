# Blackjack Game

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

This is a simple Blackjack game created using JavaScript, HTML, CSS, Bootstrap library and Vite. It was developed as part of the first practice for the JavaScript course on the [DevTalles](https://cursos.devtalles.com/) platform by Fernando Herrera. The game focuses on practicing basic JavaScript concepts, DOM manipulation, and the Module concepts.

## Technologies Used
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
- ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
- ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
- ![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

## Development
The project was set up and built using Vite, which is a fast build tool for modern web development. Node.js and npm were used to manage dependencies and run the development server.

## Features
- Simple Blackjack game for one player versus the computer.
- Basic UI using Bootstrap for styling.
- Ability to hit and stop.
- The computer automatically plays its turn.
- Alerts the player when they win, lose, or tie.

![Blackjack Game Preview](https://github.com/xSarscov/lab-1-curso-js-blackjack/assets/110932159/e97f8911-b07c-4a3c-ae6a-36de49626f64)

## Installation
Follow these steps to run the project using Node.js and npm:
1. Clone this repository to your local machine:
```
git clone https://github.com/xSarscov/blackjack-js.git
```
2. Change your current directory to the cloned repository:
```
cd blackjack-js
```
3. Install the required dependencies:
```
npm install
```
4. Start the development server:
```
npm run dev
```
5. Open your web browser and visit http://localhost:5173 to play the Blackjack game.

You can also try the live demo [here](blackjack-game-vite-js.netlify.app).

## Usage
To start the game, click the "New Game" button. Then, use the "Hit" button to draw a new card from the deck, and the "Stop" button to end your turn.

If you reach a score of 21 or if your score exceeds 21, the game will automatically stop your turn and display the result.
