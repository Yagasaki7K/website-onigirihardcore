import Header from './components/Header'
import Slide from './components/Slide'
import groq from 'groq'
// import Categories from './components/Categories'
// import Tecnologies from './components/Tecnologies'
import LastNews from './components/LastNews'
import Footer from './components/Footer'
import sanityClient from './database'
import { useEffect, useState } from 'react'

function App() {

    const [newsData, setNewsData] = useState([])
    
    useEffect(() => {
        sanityClient
        .fetch(groq`*[_type == "post" && publishedAt < now()] | order(publishedAt desc)`)
        .then((data) => {setNewsData(data)})
        .catch(console.error);
    }, [!newsData]);

    return (
        <>
            <Header value={newsData}/>
            <Slide />
            {/* <Categories value={newsData}/> */}
            {/* <Tecnologies value={newsData}/> */}
            <LastNews value={newsData}/>
            <Footer/>
        </>
    )
}

export default App
