Sorry this is so late, this one may be kinda tricky, let me know if you need any explanations or help. Happy to offer some assistance on this one if its needed. I attached a video of how the end product should look.

1) Ensure you are working in your practice branch not your main/master branch

2) Create a new file named app3.js, ensure that index.html is pointing at that file

3) Create an object with the name of "game"

4) The "game" object should have two properties, "win" & "loss" both properties values should be the number 0

5) Create an array named choices, it should have the following elements, "rock", "paper", & "scissors" they should all be of type string

6) Create two variables, "random1" & "random2", each variables value should equal to a random number integer between 0 & 2.

7) Create two more variables, "bot1" and "bot2", I don't really know how to explain this one so I'm going to spell it out, they should look like this: var bot1 = choices[random1]; var bot2 = choices[random2];

8) Next using if/else if/else statements or switch statements determine who was the winner, if bot1 was the winner set the "win" property of game equal to 1. If bot1 loses set the "loss" property of game equal to 1.

9) Create a variable named "results" and set its value equal to an empty string

10) Write an if statement to check if the win property is greater than 0. If true the code block...
a) ...should append the value of the bot1 variable to the results variable
b) append the string " beats " to the results variable
c) append the value of bot2 to the results variable

11) Write an else if statement to check if the loss property is greater than 0. If true the code block...
a) ...should append the value of the bot2 variable to the results variable
b) append the string " beats " to the results variable
c) append the value of bot2 to the results variable

12) Write an else statement in which the code block should append "Tie game" to the results variable

13) Write the results variable to the console

14) Push your work

15) Open a pull request from practice -> master, merge your pull request