pragma solidity 0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Gaming.sol";

contract TestGaming {
    uint public initialBalance = 10 ether;
    Gaming gaming;

    function beforeAll() public {
        gaming = Gaming(DeployedAddresses.Gaming());
    }

    function testPlayerWonGuessHigher() public {
        bool expected = true;
        bool result = gaming.determineWinner(5, 4, true);

        Assert.equal(expected, result, "The player should have won by guessing the mystery number was higher than their number");
    }

    function testPlayerLostGuessLower() public {
        bool expected = false;
        bool result = gaming.determineWinner(5, 4, false);

        Assert.equal(expected, result, "The player should have lost by guessing the mystery number was lower than their number");
    }

    function testPlayerAdded() public {
        address playerAddress;
        string memory playerName;
        uint playerBalance;
        uint playerWins;
        uint playerLosses;

        (playerAddress, playerName, playerBalance, playerWins, playerLosses) = gaming.players(0);
        Assert.equal(playerName, "Test Player", "The player should have the name Test Player");
        Assert.equal(playerBalance, 0, "The player should have a zero balance");
        Assert.equal(playerWins, 1, "The player should have 1 win");
        Assert.equal(playerLosses, 2, "The player should have 2 losses");
    }

    function testGameIsOnline() public {
        bool online = gaming.online();

        Assert.isTrue(online, "The game should be initially online");
    }
}
