import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" href="/logo.svg" type="image/svg+xml" />
                <link rel="icon" href="/profile.png" sizes="192x192" type="image/png" />
                <link rel="icon" href="/profile.png" sizes="512x512" type="image/png" />
                <link href="https://api.fontshare.com/v2/css?f[]=clash-display@300,400,700,500&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
