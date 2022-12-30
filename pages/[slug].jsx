import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

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
    const postImage = `https://www.onigirihardcore.vercel.app/ + ${slug}`

    return (
        <>
            <Header />

            <SlugDetails>
                {
                    data && data.map((post, index) => (
                        post.slug === slug ? (
                            <div key={index}>
                                <NextSeo
                                    title={post.title}
                                    description={post.description}
                                    canonical="https://www.onigirihardcore.vercel.app/"
                                    twitter={{
                                        handle: '@Yagasaki7K',
                                        site: '@Yagasaki7K',
                                        cardType: 'summary_large_image',
                                    }}
                                    openGraph={{
                                        title: post.title,
                                        description: post.description,
                                        images: [
                                            {
                                                url: postImage,
                                                width: 800,
                                                height: 600,
                                                alt: post.title,
                                            }
                                        ]
                                    }}
                                    datePublished={post.createdAt}
                                    authorName='Anderson "Yagasaki" Marlon'
                                />
                                <img src={post.image}></img>
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
