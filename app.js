// ## Tasks

// Completing the following tasks will result in a working *Guess the Number* game:

// 1. Add a `prevGuesses` property to the `game` object initialized to an empty array.
// 2. Add a `getGuess` method to `game` that prompts the player to enter a guess with a message formatted as: *Enter a guess between [smallestNum] and [biggestNum].*
// Hint - use a template literal for the prompt message.
// 3. Ensure that the `getGuess` method returns a value that:
//     - Is a *number*, not a *string*.
//     - Is between `smallestNum` and `biggestNum`, inclusive.
//     - Hints:
//         - This is a great use case for a `while` loop.
//         - `parseInt` returns `NaN` if the string cannot be parsed into a number.
// 4. From within the `play` method, invoke the `getGuess` method from inside a loop, and add the new guess to the `prevGuesses` array.
//     - Hint: this is an excellent use for a while loop (or even a do...while loop!)
// 5. Add a `render` method to `game` that `play` will call after a guess has been made that alerts:
//     - If the secret has been guessed: `Congrats! You guessed the number in [number of prevGuesses]!`
//     - Otherwise: `Your guess is too [high|low] Previous guesses: x, x, x, x`
//     - Hints:
//         - `render` won’t be able to access any of `play`’s local variables, e.g., `guess`, so be sure pass `render` any arguments as needed (you may not have built your program to use any, that's ok if that's the case!)
//         - Template literals not only have interpolation, but they also honor whitespace - including line breaks!
//         - The list of previous guesses can be generated using the array `join` method.
// 6. The `play` method should end (`return`) when the guess matches `secretNum`.



const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  render : function(){
    let guessNum = this.prevGuesses.length
    if(this.prevGuesses[guessNum -1] === this.secretNum){
      alert(`HURRAY! You got it right. You guessd the right number in ${guessNum} tries!`)
    }else if(this.prevGuesses[guessNum - 1] > this.secretNum){
        alert(`Guess is too high. Try Again! Previous guesses: ${this.prevGuesses.join()}`)
      }else if(this.prevGuesses[guessNum -1] < this.secretNum){
          alert(`Guess is too low. Try Again! Previous guesses: ${this.prevGuesses.join()}`)
      
      }
    },  
  getGuesses: function(){        
    guess = parseInt(
      prompt(`Let's Play A Game! Guess a number between ${this.smallestNum} and ${this.biggestNum}`)
      )
      while(isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum){
        guess = parseInt(
          prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
        )
      }return guess
    },
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
        while(this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum){
          this.prevGuesses.push(this.getGuesses())
          this.render()
        }
        this.render()
        return this.secretNum;
      }
    }
game.play()

