import React, { Component } from 'react';
import eth from './eth';
import './App.css';
import Network from './Network';

const tubAbi = require('./abi/tub.json')
const dsreadAbi = require('./abi/dsread.json')

class App extends Component {
  state = {
    tub: '',
    pip: '',
    pep: '',
    ethusd: '',
    mkrusd: '',
  }
  componentDidMount() {
    eth.net_version().then(network => this.setState({network}))
    this.init('0x448a5065aeBB8E423F0896E6c5D525C040f59af3'); // dai v1.0 deployment
  }
  init = async (address) => {
    const tub = eth.contract(tubAbi).at(address)
    window.tub = tub
    const pipAddress = await tub.pip();
    const pepAddress = await tub.pep();
    const pip = eth.contract(dsreadAbi).at(pipAddress[0]);
    const pep = eth.contract(dsreadAbi).at(pepAddress[0]);
    const res = await pip.read();
    const res2 = await pep.read();
    console.log(res, res2)
    this.setState({
      tub: tub.address
    })
  }
  render() {
    return (
      <div>
        <h1>Herro</h1>
        <p>
          <Network id={this.state.network} />
        </p>
      </div>
    );
  }
}

export default App;
