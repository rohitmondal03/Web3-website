import mag_img from "../../assets/magnify.png"
import lock_img from "../../assets/locker.png"
import prot_img from "../../assets/shield.png"
import coins_img from "../../assets/coins.png"


const Data= [
    {
        id: 1,

        first_head: "How does X Coin works ?",

        small_head: "The basics for a new user",

        abt_para: `As a new user, you can get started with X Coin without understanding the technical details. Once you've installed an X Coin wallet on your computer or mobile, it will generate your first X Coin address. You can just create more whenever you need one!`,

        img: mag_img,

        alt_text: "mag-glass",

        btn_text: "Learn More",

        link_redirect: "/how-to-use"
    },

    {
        id: 2,

        small_head: "X Coin and the blockchain",

        abt_para: "X coin is the next currency of the internet. X Coin's blockchain is a decentralized open-source,public good that anyone can rely on. It's low-cost, fast, accessible anywhere in the world, and available to anyone. It's place for  Web3 applications to run in full decentralization.",
        
        img: lock_img,

        alt_text: "locker-img",

        btn_text: "Get started with X Coin"
    },

    {
        id: 3,

        small_head: "Revolutionize the downstream digital supply chain",

        abt_para: "X Coin Web3 enables organizations to unbundle the traditionally bundled service values across the downstream supply chain, thereby transforming the way organizations create value for their customers.",

        img: prot_img,

        alt_text: "protection-img",

        btn_text: "Learn More"
    },

    {
        id: 4,

        small_head: "Make transactions smarter and faster",

        abt_para: "Learn how X Coin's Web3 technology has helped make it the first company to convert digital transaction data into exchangeable digital coins, paving the way for much more efficient systems across every aspect of the supply chain.",

        img: coins_img,

        alt_text: "coin-img",

        btn_text: "Read our whitepaper",
    }
]

export default Data;