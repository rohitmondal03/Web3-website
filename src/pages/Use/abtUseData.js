import coin_img from "../../assets/coin_front.png"
import locker_img from "../../assets/locker.png"
import wallet_img from "../../assets/wallet.png"
import coinPile_img from "../../assets/coins.png"

const data = [
    {
        id: 1,
        type: 'Education',
        heading: 'Inform Yourself',
        abt: "Before you begin to use X Coin, there are several facts you should keep in mind so that you can make the best use of the currency and be secure in your transactions.",
        btnText: "Learn More",
        img: coin_img
    },

    {
        id: 2,
        type: 'Treasury tools',
        heading: 'Choose your wallet',
        abt: 'You can choose to install an app on your smartphone or create a wallet only for online payments on your computer. In either case, choosing a Web3 wallet is fast and easy.',
        btnText: 'Choose your wallet',
        img: wallet_img
    },
    
    {
        id: 3,
        type: 'Treasury Growth',
        heading: 'Get X Coin',
        abt: 'You can get X Coin by accepting it as a payment for goods and services. There are also several ways you can buy X Coin.',
        btnText: 'Buy X Coin',
        img: locker_img 
    },
    
    {
        id: 4,
        type: 'Staking Rewards',
        heading: 'Spend X Coin',
        abt: 'There is a growing number of services and merchants accepting Web3 payments all over the world. Use X Coin to pay them, and rate your experience to help them gain more visibility.',
        btnText: 'Find products',
        img: coinPile_img
    }
    
];

export default data;