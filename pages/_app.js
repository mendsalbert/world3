import Head from "next/head";
import { Fragment } from "react";
import "../styles/globals.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }) {
  const activeChain = "mumbai";

  return (
    <ThirdwebProvider activeChain={activeChain}>
      <Fragment>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          {/* <script src="https://cdn.tailwindcss.com"></script> */}
          <link
            rel="shortcut icon"
            href="assets/images/favicon.png"
            type="image/x-icon"
          />
          <link
            rel="icon"
            href="assets/images/favicon.png"
            type="image/x-icon"
          />
          <title>Web3 </title>
        </Head>
        <Component {...pageProps} />
      </Fragment>
    </ThirdwebProvider>
  );
}

export default MyApp;
