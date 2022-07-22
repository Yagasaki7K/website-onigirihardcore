import LastNewsDetails from './LastNewsDetails'
import getImages from './services/getImages'
import formatDate from './services/formatDate'

const LastNews = (props) => {
    return (
        <LastNewsDetails>
            <div className="lastnews">
                <div className="header">
                    <p>&nbsp;&nbsp;Últimas Notícias</p>
                </div>
                {
                    props.value && props.value.map((items, index) => (
                        <div className="content" key={index}>
                            
                            <head>
                                <meta name="twitter:card" content="summary_large_image"/>
                                <meta name="twitter:site" content="https://onigirihardcore.vercel.app" />
                                <meta name="twitter:creator" content="@yagasaki7k" />
                                <meta property="og:url" content="https://onigirihardcore.vercel.app" />
                                <meta property="og:title" content={items?.title} />
                                <meta property="og:description" content={items?.description} />
                                <meta property="og:image" content={getImages(items?.mainImage.asset._ref)} />
                            </head>

                            <a href={items?.slug.current}>
                                <img src={getImages(items?.mainImage.asset._ref)} alt="" />
                            </a>
                            <div className="left-content">
                                <a href={items?.slug.current}>
                                    <h1>{items?.title}</h1>
                                </a>
                                <i className="uil uil-clock-nine">&nbsp;{formatDate(items.publishedAt)}</i>
                                <p>
                                    {items?.description}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </LastNewsDetails>
    )
}

export default LastNews