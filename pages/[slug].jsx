import { useRouter } from 'next/router'
import { Head } from 'next/head'

import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import SlugDetails from '../src/components/SlugDetails'

export async function getStaticProps() {
    const response = await fetch('https://raw.githubusercontent.com/Yagasaki7K/website-onigirihardcore/main/server/index.json')
    const data = await response.json()
    return {
        props: {
            data
        }
    }
}

export async function getStaticPaths() {
    const request = await fetch('https://raw.githubusercontent.com/Yagasaki7K/website-onigirihardcore/main/server/index.json')
    const posts = await request.json()
    const paths = posts.map(client => ({
        params: { slug: client.slug.toString() },
    }))

    return {
        paths,
        fallback: false
    }
}

const Post = ({ data }) => {
    const router = useRouter()
    const { slug } = router.query

    return (
        <>
            <Header />

            <SlugDetails>
                {
                    data && data.map((post, index) => (
                        post.slug === slug ? (
                            <div key={index}>
                                <Head>
                                    <title>{post.title}</title>
                                    <meta name="description" content={post.description} />
                                    <meta name="keywords" content={post.keywords} />
                                    <meta name="author" content={post.author} />
                                    <meta name="robots" content="index, follow" />
                                    <meta name="language" content="pt-br" />
                                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                                    <meta property="og:title" content={post.title} />
                                    <meta property="og:description" content={post.description} />
                                    <meta property="og:url" content="https://onigirihardcore.vercel.app/" />
                                    <meta property="og:image" content={post.image} />
                                    <meta property="og:image:width" content="1200" />
                                    <meta property="og:image:height" content="630" />
                                    <meta property="og:image:alt" content={post.title} />
                                    <meta property="twitter:card" content="summary_large_image" />
                                    <meta property="twitter:description" content={post.description} />
                                    <meta property="twitter:title" content={post.title} />
                                    <meta property="twitter:image" content={post.image} />
                                    <meta property="twitter:site" content="@onigirihardcore" />
                                    <meta property="twitter:creator" content="@onigirihardcore" />
                                </Head>

                                <img src={post.image} />
                                <section key={post.id}>
                                    <p className="block__content">{post.createdAtExtended} | {post.author}</p>
                                    <h1 className="title__content">{post.title}</h1>
                                    <p className="block__content" style={{ whiteSpace: "pre-wrap" }}>{post.body}</p>

                                    {
                                        post.citation != '' ? (
                                            <a href={post.linkCitation} className="citation" target="_blank">
                                                <p className="block__content">“{post.citation}”</p>
                                            </a>
                                        ) : null
                                    }

                                    <p className="block__content" style={{ whiteSpace: "pre-wrap" }}>{post.body2}</p>

                                    {
                                        post.ytid ?
                                            <iframe width="550" height="480" src={'https://www.youtube.com/embed/' + post?.ytid} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : null
                                    }
                                </section>
                            </div>
                        ) : (
                            null
                        )
                    ))
                }
            </SlugDetails>
            <Footer />
        </>
    )
}
export default Post
