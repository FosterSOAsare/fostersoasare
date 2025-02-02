import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <link rel="manifest" href="/manifest.json" />
            <link rel="icon" href="/logo.svg" type="image/svg+xlm" />
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
