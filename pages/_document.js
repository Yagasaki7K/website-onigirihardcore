import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
        <Html lang="pt-br">
        <title>Onigiri Hardcore &#8211; Portal de Notícias e Entretenimento</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Head>
            <meta charSet="UTF-8" />
            <link rel="icon" href="/icone.png" sizes="32x32" />
            <link rel="icon" href="/icone.png" sizes="192x192" />
            <link rel="apple-touch-icon-precomposed" href="/icone.png" />
            <meta name="msapplication-TileImage" content="/icone.png" />

            <meta name="title" content="Onigiri Hardcore" />
            <meta name="description" content="Um site nerd com conteúdos nerds" />
            <meta name="keywords" content="onigiri, hardcore, notícias, animes, mangás, filmes, séries, tecnologia, novidade, whatsapp, twitter, facebook, instagram, hqs, estréia, lançamento" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="author" content="Anderson 'Yagasaki' Marlon" />

            <meta property="og:site_name" content="Onigiri Hardcore" />
            <meta property="og:url" content="http://www.onigirihardcore.vercel.app" />
            <meta name="og:title" content="Onigiri Hardcore" />
            <meta name="og:image" content="/logotipo.png" />
            <meta name="og:description" content="Um site nerd com conteúdos nerds" />
            <meta property="og:type" content="website" />
            <meta property="og:image:height" content="418" />
            <meta property="og:image:width" content="800" />

            <meta name="twitter:site" content="@KalifyInc" />
            <meta name="twitter:creator" content="@KalifyInc" />
            <meta name="twitter:card" content="summary_large_image" />

            <meta name="twitter:image:src" content="/logotipo.png" />

            <link rel="image_src" href="/logotipo.png" />

            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
    )
  }
}
