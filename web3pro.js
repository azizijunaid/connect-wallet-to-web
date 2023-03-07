const ethereum = window.ethereum;
const web3 = new Web3(ethereum);

// Check if MetaMask is installed
const isMetaMaskAvailable = () => typeof ethereum !== 'undefined';

// Request permission to connect to MetaMask

const accountsDetails = async () =>
  await ethereum.request({ method: 'eth_requestAccounts' });
  const accounts = accountsDetails();
  console.log("🚀 ~ file: web3pro.js:12 ~ accounts:", accounts)
// Connect to the user's wallet
web3.eth.defaultAccount = accounts[0];

// web3.getBalance(accounts[0], (error, balance) => {
//     if(!error){
//         console.log('balance: ' + balance);
//     }
// });


