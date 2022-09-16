import { useRouter } from 'next/router'
import Head from 'next/head'

import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import SlugDetails from '../src/components/SlugDetails'

import posts from '../server/index.json'

const Post = () => {
    const router = useRouter()
    const { slug } = router.query
    return (
        <>
            <Header />

            <SlugDetails>
                {
                    posts && posts.map(post => (
                        post.slug === slug ? (
                            <>
                                <img src={post?.image}></img>
                                <section key={post?.id}>
                                    <p className="block__content">{post.createdAtExtended} | {post.author}</p>
                                    <h1 className="title__content">{post?.title}</h1>
                                    <p className="block__content">{post?.body}</p>
                                    <p className="block__content">{post?.body2}</p>

                                    {
                                        post.citation != '' ? (
                                            <a href={post?.linkCitation} className="citation" target="_blank">
                                                <p className="block__content">“{post?.citation}”</p>
                                            </a>
                                        ) : null
                                    }

                                    <p className="block__content">{post?.body3}</p>
                                    <p className="block__content">{post?.body4}</p>
                                    <p className="block__content">{post?.body5}</p>

                                    {
                                        post?.ytid ?
                                            <iframe width="550" height="480" src={'https://www.youtube.com/embed/' + post?.ytid} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : null
                                    }
                                </section>

                                <Head>
                                    <title>{post?.title}</title>
                                    <meta name="title" content={post?.title} />
                                    <meta name="author" content="Anderson 'Yagasaki' Marlon" />

                                    <meta name="description" content={post.description} />
                                    <meta property="og:url" content={'https://onigirihardcore.vercel.app/' + post.slug} />
                                    <meta property="og:title" content={post.title} />
                                    <meta property="og:description" content={post.description} />
                                    <meta property="og:image" content={post.image} />

                                    <meta property="twitter:url" content={'https://onigirihardcore.vercel.app/' + post.slug}/>
                                    <meta property="twitter:title" content={post.title} />
                                    <meta property="twitter:description" content={post.description} />
                                    <meta property="twitter:image" content={post.image} />
                                </Head>
                            </>
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