import { ServerStyleSheet } from 'styled-components';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {

    // Fast refresh with NextJS doesn't broken the CSS
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }
    // Finish Here

    render() {
        return (
            <Html lang="pt-br">
                <title>Onigiri Hardcore | Portal de Notícias e Entretenimento</title>
                <Head>
                    <link rel="shortcut icon" type="image/png" href="/logo.png" />
                    <link rel="apple-touch-icon" href="/logo.png" />

                    <meta name="application-name" content="Onigiri Hardcore | Portal de Notícias e Entretenimento" />
                    <meta name="description" content="Um site nerd com conteúdos nerds" />
                    <meta name="keywords" content="anime, noticia, filme, serie, entretenimento, onigiri, hardcore, nerd, geek" />
                    <meta name="author" content="Anderson 'Yagasaki' Marlon" />
                    <meta name="robots" content="index, follow" />

                    <meta name="theme-color" content='#00acff' />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                    <meta name="apple-mobile-web-app-title" content="Essentials" />

                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

                    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>

                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://onigirihardcore.vercel.com/" />
                    <meta property="og:title" content="Onigiri Hardcore | Portal de Notícias e Entretenimento" />
                    <meta property="og:description" content="Um site nerd com conteúdos nerds" />
                    <meta property="og:image" content="https://i.imgur.com/VoOogmx.png" />

                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://onigirihardcore.vercel.com/" />
                    <meta property="twitter:title" content="Onigiri Hardcore | Portal de Notícias e Entretenimento" />
                    <meta property="twitter:description" content="Um site nerd com conteúdos nerds" />
                    <meta property="twitter:image" content="https://i.imgur.com/VoOogmx.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
