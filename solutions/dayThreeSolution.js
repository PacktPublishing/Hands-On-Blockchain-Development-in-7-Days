/******************************************************************************
  Congratulations! You found the solutions file for today's homework!
  If you're here, you are probably stuck so let's review the solutions:
******************************************************************************/

/******************************************************************************
  Add code to determineWinner if the player correctly guesses the mystery number
  is going to be lower than their number
******************************************************************************/
function determineWinner(uint number, uint display, bool guess) public pure returns (bool) {
    if (guess == true) {
        if (number > display) {
            return true;
        }
        if (number < display) {
            return false;
        }
    } else if (guess == false) { //the player guessed lower, so this block will execute
        if (number > display) {
            return false;
        }
        // This if block will return true if the mystery number (number) is 
        // lower than the display number, resulting in a WIN for our player
        if (number < display) {
            return true;
        }
    }
}

/******************************************************************************
  Create events for PlayerWon and PlayerLost
  Your events should look like this. 
******************************************************************************/
event PlayerWon(address player, uint amount, uint mysteryNumber, uint displayedNumber);
event PlayerLost(address player, uint amount, uint mysteryNumber, uint displayedNumber);

/******************************************************************************
  Emit events when a player wins, and an event win a player loses
  This code will go in our winOrLose function
******************************************************************************/
function winOrLose(uint display, bool guess) external payable returns (bool, uint) {
    require(online == true, "The game is not online");
    require(msg.sender.balance > msg.value, "Insufficient funds");
    uint mysteryNumber_ = mysteryNumber();
    bool isWinner = determineWinner(mysteryNumber_, display, guess);
    Player storage player = players[msg.sender];
    if (isWinner == true) {
        /* Player won */
        msg.sender.transfer(msg.value * 2); 
        // Right here- we emit the event just before we exit the function with the return
        emit PlayerWon(msg.sender, msg.value, mysteryNumber_, display);
        return (true, mysteryNumber_);
    } else if (isWinner == false) {
        /* Player lost */
        // And here if the player lost
        emit PlayerLost(msg.sender, msg.value, mysteryNumber_, display);
        return (false, mysteryNumber_);
    }
}


/******************************************************************************
  Increment player stats for wins and losses
  This code will go in our winOrLose function, but first - note that the code
  for the Player struct and mapping is different than what I had you build 
  yesterday (that's why I had you stash your changes)
******************************************************************************/
struct Player {  // some fields have been removed
    uint wins;
    uint losses;
}

mapping (address => Player) public players; // it now maps an address instead of uint

/******************************************************************************
  And the code...
******************************************************************************/
function winOrLose(uint display, bool guess) external payable returns (bool, uint) {
    require(online == true, "The game is not online");
    require(msg.sender.balance > msg.value, "Insufficient funds");
    uint mysteryNumber_ = mysteryNumber();
    bool isWinner = determineWinner(mysteryNumber_, display, guess);
    Player storage player = players[msg.sender]; // here we grab the current player from the mapping
    if (isWinner == true) {
        /* Player won */
        player.wins += 1; // then increment the wins
        msg.sender.transfer(msg.value * 2); 
        emit PlayerWon(msg.sender, msg.value, mysteryNumber_, display);
        return (true, mysteryNumber_);
    } else if (isWinner == false) {
        /* Player lost */
        player.losses += 1; // or increment the losses
        emit PlayerLost(msg.sender, msg.value, mysteryNumber_, display);
        return (false, mysteryNumber_);
    }
}