import { ethers } from "ethers";
import World3 from "./World3.json";

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = provider.getSigner();
    const contractReader = new ethers.Contract(
      "0xdF3073768De7e417E55d764f881e144477d39b5e",
      World3.abi,
      signer
    );

    return contractReader;
  }
};
