# Hangman
## Description

Hangman is a game played between two players, one person who choses a word and another who takes turns guessing letters. If the guesser choses 6 letters that are not in the word before completing the word, they lose the game. If they correctly guess all letters in the word, they win the game.

The code contained in this repository composses an online version of the classic game.

## Gameplay

Upon opening the game, the user is prompted to enter in a word for the second player to guess:

![Opening screen](./img/start-screen.png)

After a word is sibmited, the entry screen is hidden and a series of blank spaces representing each letter appear. The second player takes turns guessing letters. If they guess correctly, the corresponding blank space fills in and is colored green. If they guess incorectly, one feature of the hanging man is added. If they complete the whole word, a winning message is displayed. If they incorrectly guess 6 times a lossing message is displayed along with the complete word they were trying to guess.

![mid game](./img/mid-game.png)

## Technologies Used

This webpage is structured in HTMl and styled in CSS. Interaction with the webage is acheived through Javascript DOM manipulation.

