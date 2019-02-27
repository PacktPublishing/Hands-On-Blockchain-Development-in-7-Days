pragma solidity 0.5.0;

contract Gaming {
    /* Our Online gaming contract */
    address owner;
    bool online;


    struct Player {
        uint wins;
        uint losses;
    }

    mapping (address => Player) public players;
    
    
    constructor() public payable {
        owner = msg.sender;
        online = true;
    }

    modifier isOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    event GameFunded(address funder, uint amount);

    function mysteryNumber() private view returns (uint) {
        uint randomNumber = uint(blockhash(block.number-1))%10 + 1;
        return randomNumber;
    }

    function determineWinner(uint number, uint display, bool guess) public pure returns (bool) {
        if (guess == true) {
            if (number > display) {
                return true;
            }
            if (number < display) {
                return false;
            }
        } else if (guess == false) {
            if (number > display) {
                return false;
            }
        }
    }

    function winOrLose(uint display, bool guess) external payable returns (bool, uint) {
        /* Use true for a higher guess, false for a lower guess */
        require(online == true, "The game is not online");
        require(msg.sender.balance > msg.value, "Insufficient funds");
        uint mysteryNumber_ = mysteryNumber();
        bool isWinner = determineWinner(mysteryNumber_, display, guess);
        if (isWinner == true) {
            /* Player won */
            msg.sender.transfer(msg.value * 2); 
            return (true, mysteryNumber_);
        } else if (isWinner == false) {
            /* Player lost */
            return (false, mysteryNumber_);
        }
    }

    function withdrawFunds() public isOwner {
        msg.sender.transfer(address(this).balance);
    }

    function fundGame() public isOwner payable {
        emit GameFunded(msg.sender, msg.value);
    }

    function() external payable {
    }

}
