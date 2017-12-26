import Eth from 'ethjs';
window.Eth = Eth;

const eth = window.web3 && window.web3.currentProvider ?
  new Eth(window.web3.currentProvider) :
  new Eth(new Eth.HttpProvider('https://mainnet.infura.io/'));

window.eth = eth;

export default eth;
