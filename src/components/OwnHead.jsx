import Head from "next/head"
import SEO from '../../src/SEO'

const OwnHead = ({ title, description, canonicalUrl, ogTwitterImage, ogType }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={description} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={SEO.twitterHandle} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogTwitterImage} />

            <link rel="canonical" href={canonicalUrl} />

            <meta property="og:locale" content="pt-BR" />
            <meta property="og:site_name" content={SEO.title} />
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogTwitterImage} />
            <meta property="og:url" content={canonicalUrl} />
        </Head>
    )
}

export default OwnHead