const Gaming = artifacts.require('./Gaming.sol')

contract('Gaming', async (accounts) => {
  let gaming
  const owner = accounts[0]
  const player1 = accounts[1]

  before(async () => {
    gaming = await Gaming.deployed()
    const fundGame = await gaming.fundGame({from: owner, value: web3.utils.toWei('10', 'ether')})
  })

  it('Should record player losses', async() => {
    const initialBalance = await web3.eth.getBalance(player1)
    const initialBalanceInEther = Number(web3.utils.fromWei(initialBalance, 'ether'))
    const gameRound = await gaming.winOrLose(10, true, {
      from: player1,
      value: web3.utils.toWei('1', 'ether')
    })
    const postBalance = await web3.eth.getBalance(player1)
    const postBalanceInEther = Number(web3.utils.fromWei(postBalance, 'ether'))
    const playerStats = await gaming.players(player1)
    assert.equal(playerStats[1].toNumber(), 1, 'The player should have 1 loss')
    assert.isAtLeast(initialBalanceInEther, postBalanceInEther + 1, 'Player account should have decreased by the amount of the wager')
  })

  it('Should record player wins', async() => {
    const gameRound = await gaming.winOrLose(10, false, {
      from: player1,
      value: web3.utils.toWei('1', 'ether')
    })
    const playerStats = await gaming.players(player1)
    assert.equal(playerStats[0].toNumber(), 1, 'The player should have 1 win')
  })
})
