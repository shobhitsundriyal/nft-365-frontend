import { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { AppContext } from "../state/Appcontext";
import { Actions, getStateObject } from "../utils/stateobjecthelper";

function NavBar() {
    const [state, dispatch] = useContext(AppContext);
    const currentAccount = state.wallet;
    useEffect(() => {
        checkWallet();
    }, []);

    const checkWallet = async () => {
        try {
            const { ethereum } = window;
            if (!ethereum) {
                console.log("Make sure you have metamask");
                return;
            } else {
                console.log("Ethereum object is present");
            }

            /*
             * Check if we're authorized to access the user's wallet
             */
            const accounts = await ethereum.request({ method: "eth_accounts" }); //checks if any account is connected
            if (accounts.length !== 0) {
                const [account] = accounts;
                console.log("Found an authorized account:", account);
                dispatch(getStateObject(Actions.UPDATE_WALLET, account));
            } else {
                console.log("No authorized account found");
            }
        } catch (err) {
            console.log(err);
        }
    };
    const connectWallet = async () => {
        try {
            const { ethereum } = window;
            if (!ethereum) {
                alert("Make sure you have MetaMask!");
                return;
            }
            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            }); //request coonection
            console.log("Connected", accounts[0]);
            dispatch(getStateObject(Actions.UPDATE_WALLET, accounts[0]));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="bg-black p-6 rounded-b-md flex space-x-16 font-semibold">
            {/**Logo */}
            <Link to="/">
                <div className="font-serif text-white cursor-pointer outline-none text-xl md:text-3xl font-extrabold">
                    365W3<sup>✦</sup>
                </div>
            </Link>

            {/* <div className='text-white md:flex items-center space-x-6 hidden'>
				<Link to='/mynfts'>
					<p className='cursor-pointer'>My NFTs</p>
				</Link>
				<Link to='/months'>
					<p className='cursor-pointer'>Get a date</p>
				</Link>
				<Link to={{ pathname: '/merge', date: true }}>
					<p className='cursor-pointer'>Merge</p>
				</Link>
			</div> */}
            {/**connect wallet */}
            <div className=" grow md:flex justify-end hidden font-mono">
                {!currentAccount ? (
                    <button
                        className="btn p-3 font-semibold"
                        onClick={connectWallet}
                    >
                        Connect Wallet
                    </button>
                ) : (
                    <span className="btn text-black cursor-default p-3 font-semibold">
                        Hi {currentAccount.substring(0, 8)}...
                    </span>
                )}
            </div>
            <div className="text-white md:flex items-center space-x-6 hidden">
                <a href="#about">
                    <p className="cursor-pointer">About</p>
                </a>
                <a href="/#roadmap">
                    <p className="cursor-pointer">Roadmap</p>
                </a>
                <a href="/#team">
                    <p className="cursor-pointer">Team</p>
                </a>
            </div>
            <div className="flex grow md:flex justify-end font-mono">
                <a href="/#airdrop" className="btn sm:p-2 sm:font-semibold">
                    Airdrop
                </a>
            </div>
        </div>
    );
}

export default NavBar;
