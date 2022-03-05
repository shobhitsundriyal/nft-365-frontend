import Web3 from "web3";
import abi from "../assets/abi.json";
const interactionParams = {
    contractaddress: "0xD86E2da82CCD5246eA081840fC2cBBBf205a85A9",
};

export const getContractInstance = () => {
    let web3 = new Web3(window.web3.currentProvider);
    const contractInstace = new web3.eth.Contract(
        abi,
        interactionParams.contractaddress
    );
    debugger;
    return contractInstace;
};
