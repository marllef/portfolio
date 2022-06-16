import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Head>
        <title>Marllef H. Alves | Portfólio</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
