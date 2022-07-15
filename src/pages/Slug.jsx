import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import SlugDetails from "../components/SlugDetails"
import sanityClient from "../database"
import BlockContent from "@sanity/block-content-to-react"
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

          {singlePost.slug && singlePost.slug.current && (
            <div className="block__content">
                <BlockContent
                blocks={singlePost.body}
                projectId="1y5aj0uu"
                dataset="production"
                />
            </div>
            )}
        </section>
      )}
      <Footer/>
    </SlugDetails>
    </>
  )
}