import Head from "next/head";
import "antd/dist/antd.css";

export default function App({ Component, pageProps }) {
  // console.log("Component : ", Component);
  // console.log("pageProps : ", pageProps);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

// _app.js는 완전 공통으로 사용되는 부분들만 여기서 정의.
// 부분적으로 공통으로 사용된다면, layout 폴더에서 따로 UI를 정의하여 사용하도록.
