# 2048-Game-
The 2048 Game is a browser-based puzzle game developed using HTML, CSS, and JavaScript. The objective is to combine tiles with the same numbers to reach the 2048 tile. Players use arrow keys to slide tiles in four directions. When two tiles with the same number collide, they merge into one with double the value.
# 2048 Game

A fully functional 2048 puzzle game built using HTML, CSS, and JavaScript.

## 🎮 How to Play

- Use **Arrow Keys** to move tiles:
  - ⬅ Left
  - ➡ Right
  - ⬆ Up
  - ⬇ Down
- When two tiles with the same number touch, they merge.
- After each move, a new tile (2 or 4) appears.
- Reach the **2048 tile** to win.
- Game ends when no moves are possible.

## 📌 Features

- 4x4 grid layout
- Real-time score tracking
- Tile merging logic
- Restart button
- Responsive design
- No external libraries

## 📂 Project Structure

2048-Game/
│
├── index.html
├── style.css
└── script.js

## ⚙️ Game Logic Overview

1. Board is initialized with two random tiles.
2. Player moves tiles using arrow keys.
3. Tiles slide in the selected direction.
4. Matching tiles merge and increase score.
5. A new tile spawns after every valid move.
6. Game continues until no empty spaces and no possible merges.

## 🛠️ Customization

### Change Grid Size
Modify board size in script.js (advanced modification required).

### Change Tile Colors
Edit color styles in style.css:
```css
