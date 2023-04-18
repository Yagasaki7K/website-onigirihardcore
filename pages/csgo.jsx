import HLTV from 'hltv-api'
import Link from 'next/link'
import Header from '../src/components/Header'
import "keen-slider/keen-slider.min.css"
import CSGODetails from '../src/components/CSGODetails'

export async function getStaticProps() {
    const news = await HLTV.getNews()
    const data = news.map((post) => ({
        title: post.title,
        description: post.description,
        link: post.link
    }))

    return {
        props: {
            data
        }
    }
}

const csgo = ({ data }) => {
    return (
        <>
            <Header />

            <CSGODetails>
                <div className="news">
                    <h1>Últimas notícias (via HLTV)</h1>

                    <div className="content">
                        {
                            data && data.map((post, index) => (
                                <div className="news" key={index}>
                                    <Link href={post.link} noreferrer>
                                        <h2>{post.title}</h2>
                                        <p>{post.description}</p>
                                    </Link>
                                </div>
                            )
                            )
                        }
                    </div>
                </div>
            </CSGODetails>
        </>
    )
}

export default csgo
