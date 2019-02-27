// Here's an example of how you might solve today's homework:

  it('Should withdraw funds', async() => {
    // First get the initial balance of the owner's account
    const initialBalance = await web3.fromWei(web3.eth.getBalance(owner), 'ether').toNumber()
    // Optionally, get the contract ether balance. Note that we use "gaming.address" to denote the contract address
    const initialContract = await web3.fromWei(web3.eth.getBalance(gaming.address), 'ether').toNumber()
    // Handy little log statement to see progress https://imgur.com/gallery/pFAKIXk
    console.log(`Owner balance is ${initialBalance} and contract balance is ${initialContract}`)
    // Execute the withdrawFunds function
    const withdraw = await gaming.withdrawFunds()
    // Get the owner balance after the transaction
    const postBalance = await web3.fromWei(web3.eth.getBalance(owner), 'ether').toNumber()
    // Get the contract balance after the transaction
    const postContract = await web3.fromWei(web3.eth.getBalance(gaming.address), 'ether').toNumber()
    // Another chance to log it out and inspect it
    console.log(`Owner balance is ${postBalance} and contract balance is ${postContract}`)
    // Compare the initial and post balance. Notice that this time, I got the difference between the initial and post balance
    // and asserted it against the initial balance of the contract, minus 0.1 ether.
    // The 0.1 ether allows for the cost of gas, it should not exceed 0.1 ether so it won't cause our test to inadvertently fail
    // but will still reflect enough of a change in balance to confidently state that the function worked
    assert.isAtLeast(postBalance - initialBalance, initialContract - 0.1, 'Contract funds should have transferred to the owner')
  })