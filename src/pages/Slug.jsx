import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import SlugDetails from "../components/SlugDetails"
import client from "../database"
import BlockContent from "@sanity/block-content-to-react"

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { slug } = useParams()

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && slug.current == $slug][0]{title, "name": author->name} {
        title,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setSinglePost(data[0]))
    setIsLoading(false)
  }, [slug])

  return (
    <SlugDetails>
      {isLoading ? (
        <h1 className="">
          Loading...
        </h1>
      ) : (
        <section>
          <h1> {singlePost.title} </h1>
          {singlePost.mainImage && singlePost.mainImage.asset && (
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              title={singlePost.title}
            />
          )}

          <div className="block__content">
            <BlockContent
              blocks={singlePost.body}
              projectId="1y5aj0uu"
              dataset="production"
            />
          </div>
        </section>
      )}
    </SlugDetails>
  )
}