import Moralis from 'moralis';
import ABIJSON from './abi.json'

Moralis.start({
    serverUrl: process.env.REACT_APP_MORALIS_SERVER_URL, 
    appId: process.env.REACT_APP_MORALIS_APPLICATION_ID,
});

export const getPrice = async () =>{
    const ABI =ABIJSON;
    const options = {
        chain: process.env.REACT_APP_CHAIN_NAME === 'TEST' ? 'mumbai': 'polygon',
        address: process.env.REACT_APP_BOOKERS_CONTRACT_ADDRESS,
        function_name: "cost",
        abi: ABI,
    };
    const price = await Moralis.Web3API.native.runContractFunction(options);
    return Moralis.Units.FromWei(price);
}


export const getLive = async () =>{
    const ABI =ABIJSON;
    const options = {
        chain: process.env.REACT_APP_CHAIN_NAME === 'TEST' ? 'mumbai': 'polygon',
        address: process.env.REACT_APP_BOOKERS_CONTRACT_ADDRESS,
        function_name: "saleIsActive",
        abi: ABI,
    };
    const isLive = await Moralis.Web3API.native.runContractFunction(options);
    return isLive? 'Mint Activo': 'Mint Inactivo';
}

export const getWhitelist = async (address) =>{
    const ABI = ABIJSON;
    const options = {
        chain: process.env.REACT_APP_CHAIN_NAME === 'TEST' ? 'mumbai': 'polygon',
        address: process.env.REACT_APP_BOOKERS_CONTRACT_ADDRESS,
        function_name: "userWhitelistAmount",
        abi: ABI,
        params: { whitelistedAddress: address },
    };
    const whitelistAmount = await Moralis.Web3API.native.runContractFunction(options);
    return whitelistAmount;
}

export const getMintedAmount = async () =>{
    const ABI = ABIJSON;
    const options = {
        chain: process.env.REACT_APP_CHAIN_NAME === 'TEST' ? 'mumbai': 'polygon',
        address: process.env.REACT_APP_BOOKERS_CONTRACT_ADDRESS,
        function_name: "GetMintendToken",
        abi: ABI,
    };
    const whitelistAmount = await Moralis.Web3API.native.runContractFunction(options);
    return whitelistAmount;
}

export const mintFunction = async(quantity) =>{
    const ABI = ABIJSON;
    const price = await getPrice();
    const options = {
        contractAddress: process.env.REACT_APP_BOOKERS_CONTRACT_ADDRESS,
        functionName: "createABooker",
        abi: ABI,
        params: {
            _quantity: quantity,
          },
        msgValue: Moralis.Units.ETH(price * quantity)
    };
    const tx = await Moralis.executeFunction(options);
    return await tx.wait();

}