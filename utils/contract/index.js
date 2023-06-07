import { ethers } from "ethers";
import World3 from "./World3.json";

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = provider.getSigner();
    const contractReader = new ethers.Contract(
      "0xF03fF9536A6d0D53d292A67056bcaDB487fc8eA7",
      World3.abi,
      signer
    );

    return contractReader;
  }
};
