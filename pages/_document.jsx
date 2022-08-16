import { ServerStyleSheet } from 'styled-components';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {

    render() {
        return (
            <Html lang="pt-br">
                    <title>Onigiri Hardcore</title>
                <Head>
                    {/* PWA primary color */}
                    <link rel="shortcut icon" href="/icone.png" type="image/png"></link>
                    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>

                    <meta name="title" content="Onigiri Hardcore - Site nerd com conteúdos nerds"/>
                    <meta name="robots" content="index, follow"/>
                    <meta name="author" content="Anderson 'Yagasaki' Marlon"/>

                    <meta name="description" content="Notícias sobre filmes, séries, HQs, games, animes, ciência, tecnologia e humor, porque conhecimento, nunca é demais!"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:url" content="https://onigirihardcore.vercel.app/"/>
                    <meta property="og:title" content="Onigiri Hardcore - Site nerd com conteúdos nerds"/>
                    <meta property="og:description" content="Notícias sobre filmes, séries, HQs, games, animes, ciência, tecnologia e humor, porque conhecimento, nunca é demais!"/>
                    <meta property="og:image" content="https://c4.wallpaperflare.com/wallpaper/998/145/207/onigiri-hardcore-onigiri-hardcore-wallpaper-preview.jpg"/>

                    <meta property="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:url" content="https://onigirihardcore.vercel.app/"/>
                    <meta property="twitter:title" content="Onigiri Hardcore - Site nerd com conteúdos nerds"/>
                    <meta property="twitter:description" content="Notícias sobre filmes, séries, HQs, games, animes, ciência, tecnologia e humor, porque conhecimento, nunca é demais!"/>
                    <meta name="twitter:site" content="https://onigirihardcore.vercel.app/" />
                    <meta name="twitter:creator" content="@KalifyInc" />
                    <meta property="twitter:image" content="https://c4.wallpaperflare.com/wallpaper/998/145/207/onigiri-hardcore-onigiri-hardcore-wallpaper-preview.jpg"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
                    )
    }

    static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
                });

        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: (
        <>
            {initialProps.styles}
            {sheet.getStyleElement()}
        </>
        )
        };
    } finally {
        sheet.seal();
    }
  }
}