import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import SlugDetails from "../components/SlugDetails"
import sanityClient from "../database"
import BlockContent from "@sanity/block-content-to-react"
import formatDate from "../components/services/formatDate"
import getImages from "../components/services/getImages"

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { slug } = useParams()

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          publishedAt,
          ytid,
          description,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
      setIsLoading(false)
  }, [slug]);

  return (
    <>
        <Header/>
        <SlugDetails>
        {isLoading ? (<h1 className="">Loading...</h1>) : (
            <section>
            { singlePost.mainImage && singlePost.mainImage.asset && (
                <img src={singlePost.mainImage.asset.url} alt={singlePost.title} title={singlePost.title}/>
            )}

                <h1> {singlePost.title} </h1>
                <p className="date">Publicado em: {formatDate(singlePost.publishedAt)} por <a href="https://yagasaki.vercel.app/" target="_blank">{singlePost.name}</a>
                </p>

            {singlePost.slug && singlePost.slug.current && (
                <div className="block__content">
                    {/* <head>
                        <meta name="twitter:card" content="summary_large_image"/>
                        <meta name="twitter:site" content="https://onigirihardcore.vercel.app" />
                        <meta name="twitter:creator" content="@yagasaki7k" />
                        <meta property="og:url" content="https://onigirihardcore.vercel.app" />
                        <meta property="og:title" content={singlePost?.title} />
                        <meta property="og:description" content={singlePost?.description} />
                        <meta property="og:image" content={getImages(singlePost?.mainImage.asset._ref)} />
                    </head> */}

                    <BlockContent
                    blocks={singlePost.body}
                    projectId="1y5aj0uu"
                    dataset="production"
                    />

                    {singlePost.ytid ? <iframe src={"https://www.youtube.com/embed/" + singlePost.ytid} title={singlePost.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/> : null}
                </div>
                )}
            </section>
        )}
        <Footer/>
        </SlugDetails>
    </>
  )
}