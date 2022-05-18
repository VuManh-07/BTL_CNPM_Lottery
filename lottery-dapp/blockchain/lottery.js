import abi from './contracts/lottery.json'

const lotteryAbi = abi.abi

const lotteryContract = web3 => {
    return new web3.eth.Contract(
        lotteryAbi,
        "0xa5275c1B6A51983D935da1D7c0f27a2C814d41A5"
    )
}

export default lotteryContract