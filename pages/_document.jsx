import { ServerStyleSheet } from 'styled-components';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { NextSeo } from 'next-seo';

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
                <Head>
                    <link rel="shortcut icon" type="image/png" href="/logo.png" />
                    <link rel="apple-touch-icon" href="/logo.png" />
                    <meta name="keywords" content="anime, noticia, filme, serie, entretenimento, onigiri, hardcore, nerd, geek" />
                    <meta name="author" content="Anderson 'Yagasaki' Marlon" />
                    <meta name="robots" content="index, follow" />

                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

                    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>

                    {/*

                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://onigirihardcore.vercel.com/" />
                    <meta property="og:title" content="Onigiri Hardcore | Portal de Notícias e Entretenimento" />
                    <meta property="og:description" content="Um site nerd com conteúdos nerds" />
                    <meta property="og:image" content="https://i.imgur.com/VoOogmx.png" />

                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://onigirihardcore.vercel.com/" />
                    <meta property="twitter:title" content="Onigiri Hardcore | Portal de Notícias e Entretenimento" />
                    <meta property="twitter:description" content="Um site nerd com conteúdos nerds" />
                    <meta property="twitter:image" content="https://i.imgur.com/VoOogmx.png" /> */}
                </Head>
                <NextSeo
                    title='Onigiri Hardcore | Portal de Notícias e Entretenimento'
                    description='Um site nerd com conteúdos nerds'
                    canonical={`https://onigirihardcore.com.br/`}
                    openGraph={{
                        url: 'https://onigirihardcore.com.br/',
                        title: 'Onigiri Hardcore | Portal de Notícias e Entretenimento',
                        description: 'Um site nerd com conteúdos nerds',
                        images: [
                            {
                                url: 'https://i.imgur.com/VoOogmx.png',
                                width: 460,
                                height: 460,
                                alt: 'Onigiri Hardcore | Portal de Notícias e Entretenimento',
                                type: 'image/jpeg' || 'image/png',
                            }
                        ],
                        siteName: 'Onigiri Hardcore',
                    }}
                    twitter={{
                        handle: '@OnigiriHardcore',
                        site: '@OnigiriHardcore',
                        cardType: 'summary_large_image',
                    }}
                />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
