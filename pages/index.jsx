import posts from '../server/index.json'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Slide from '../src/components/Slide'
import Categories from '../src/components/Categories'
import LastNews from '../src/components/LastNews'
import OwnHead from '../src/components/OwnHead'
import SEO from '../src/SEO'

export default function Home() {
    return (
        <>
            <OwnHead title={'Onigiri Hardcore | Portal de Notícias e Entretenimento'}
                description={SEO.description}
                canonicalUrl={SEO.siteUrl}
                ogTwitterImage={SEO.siteThumbnail}
                ogType={SEO.ogType} />

            <Header />
            <Slide />
            <Categories data={posts} />
            <LastNews />
            <Footer />
        </>
    )
}
