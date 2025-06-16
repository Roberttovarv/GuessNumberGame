
**Guess Number Game** is an interactive React Native app where **the app tries to guess the number you’ve picked** (between 1 and 99). Using a smart binary search strategy, the app narrows down the possibilities and attempts to guess the number in as few tries as possible.

---

## Used Technologies

Built using:

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- `expo-font` – for custom fonts
- `expo-linear-gradient` – for gradient backgrounds
- `@expo/vector-icons` – for interactive icons and visuals

---

## Features

-  **Start Screen**: the user inputs a number between 1 and 99.
-  **Game Screen**: the app tries to guess the number using binary search logic.
-  **Hint Buttons**: the user provides hints indicating if the number is higher or lower.
-  **Guess History List**: displays all past guesses with round numbers.
-  **Game Over Screen**: shows a summary with the total number of attempts and the guessed number.
-  **Liar Detection**: if the user gives contradictory hints, an alert is triggered to prevent cheating.

---

## Game Logic

- A **Binary Search** strategy is used to guess the number efficiently.
- `min` and `max` values are adjusted dynamically based on user hints.
- Duplicate guesses are avoided.
- A logic check ensures that hints align with the actual number, preventing false input.

---


## How to Run the Project

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/GuessNumberGame.git
   cd GuessNumberGame
   npm install
   npm start

Then, scan the QR code using Expo Go on your device or run it in an emulator.




  
  
