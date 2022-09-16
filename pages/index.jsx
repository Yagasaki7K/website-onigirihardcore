import posts from '../server/index.json'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Slide from '../src/components/Slide'
import Categories from '../src/components/Categories'
import LastNews from '../src/components/LastNews'

export default function Home() {
    return (
        <>
        <Header/>
        <Slide />
        <Categories data={posts}/>
        <LastNews/>
        <Footer/>
        </>
    )
}
