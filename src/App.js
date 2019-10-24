import React from 'react';
import Onboard from 'bnc-onboard';
import './App.css';

const BLOCKNATIVE_KEY = 'INSERT_KEY';
const FORTMATIC_KEY = 'INSERT_KEY';
const PORTIS_KEY = 'INSERT_KEY';
const NETWORK_ID = 1;

const renderWalletSelect = async () => {
    const initializedOnboard = Onboard.init({
        networkId: NETWORK_ID,
        dappId: BLOCKNATIVE_KEY,
        subscriptions: {
            address: val => console.log('address', val),
            network: val => console.log('network', val),
            balance: val => console.log('balance', val),
            wallet: val => console.log('wallet', val)
        },
        modules: {
            walletSelect: Onboard.modules.select.defaults({
                fortmaticInit: { apiKey: FORTMATIC_KEY },
                portisInit: { apiKey: PORTIS_KEY },
                networkId: NETWORK_ID
            }),
            walletReady: Onboard.modules.ready.defaults({
                networkId: NETWORK_ID,
                minimumBalance: '0'
            })
        }
    });

    await initializedOnboard.walletSelect();
};

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <button onClick={() => renderWalletSelect()}>
                    Wallet Select
                </button>
            </header>
        </div>
    );
}

export default App;
