import Header from '/src/components/Header'
import Slide from '/src/components/Slide'
import groq from 'groq'
// import Categories from '/src/components/Categories'
// import Tecnologies from '/src/components/Tecnologies'
import LastNews from '/src/components/LastNews'
import Footer from '/src/components/Footer'
import sanityClient from '/src/database'
import { useEffect, useState } from 'react'

function App() {

    const [newsData, setNewsData] = useState([])
    const [lastNews, setLastNews] = useState([])
    const [lastSlides, setLastSlides] = useState([])
    
    useEffect(() => {
        sanityClient
        .fetch(groq`*[_type == "post" && publishedAt < now()] | order(publishedAt desc)`)
        .then((data) => {setNewsData(data)})
        .then(() => {setLastNews(newsData.slice(0, 15))})
        .then(() => {setLastSlides(newsData.slice(0, 3))})
        .catch(console.error);
    }, [!newsData]);

    return (
        <>
            <Header value={lastSlides}/>
            <Slide />
            {/* <Categories value={newsData}/> */}
            {/* <Tecnologies value={newsData}/> */}
            <LastNews value={lastNews}/>
            <Footer/>
        </>
    )
}

export default App
