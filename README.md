# Popsicle crash

## This is definitely not a copy of candy crush that didn't take inspiration from the senior project of a friend of mine (Ziying <3)

### _Nope, definitely not_

#

PS: I'll be using the pronoun "He" for the player because it's just simpler to write than "He/She/It/They". It's also because I couldn't care less.

#

## <u>**1. Base idea and board setup**</u>

<br>

### <u>1.1 Idea of the game</u>

The base idea of candy crush is pretty simple and know to most.

For those who have been living under a rock for the past decade, here's how the game works:

When the level begins, the player is met with a grid of candies that he has to match in lines of 3 to get rid of them and to get points. Matching in a line of 4, 5 or in a "L" shape gives different kinds of powerups.

<br>

### <u>1.2 Board setup</u>

When I first thought of making this game from scratch, I immediately thought of how to store the game state in a grid inspired by other grid games such as chess.

To represent a chess game using a bitmap array, there's basically 2 solutions: using a 2d array or using a single line array and modulo operations.

I have already experimented the latter in another project so I decided to use a 2d array to store the game state.

However, I decided to not declare the array as you would expect where the outer array is the colums and the inner one, the rows as such:

    cols[rows[]]

Instead, i opted for the outer array hosting the rows and the inner one, the colums.<br>

My reasoning behind this is that when the game is played, the items in the colums are going to fall down which, in code, will be translated to pushing new values up the array.

<br>

### <u>1.3 Identifying candies</u>

Since it's a bitmap, every item in the arrays are represented using a number whose bits are arranged to represent different things

The first 3 bits represent the states that the candy is in: lvl 1 jelly, level 2 jelly, cage, etc.

The following 3 bits represents either an empty square or any of the 6 colors of candies
<br>

    state    candy
    1 1 1    1 1 1

This, for example, is to represent a red candy in a level 1 jelly

    jelly   red
    0 0 1   0 0 1

<br>

### <u>1.4 Candy generation</u>

The method to generate candies is pretty simple: random integer from 1 to 7 (0 being an empty square)

<br>

### <u>1.5 Clearing candies</u>

The candy clearing detection is only on the candies that moved either from player action or falling.

The way it works is that it checkes 2 candies on either side and orientation of the moved candy.

To remove redundant checking, a candy that is moved against another candy of the same color doesn't trigger the check.

The checked candies would look like so:

            + - + - +
            |   |   |
            + - + - +
            |   |   |
    + - + - + - + - + - + - +
    |   |   | 1 | 2 |   |   |
    + - + - + - + - + - + - +
            |   |   |
            + - + - +
            |   |   |
            + - + - +

This function will also trigger on candy creation since we don't want the game to start and candies get cleared by themselves

