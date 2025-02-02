import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <link rel="manifest" href="/manifest.json" />
            <link rel="icon" href="/logo.svg" type="image/svg+xlm" />
            <link rel="icon" href="/pp-s.jpg" sizes="192x192" type="image/jpg" />
            <link rel="icon" href="/pp.jpg" sizes="512x512" type="image/jpg" />
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
