import { useRouter } from 'next/router'
import Head from 'next/head'

import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import SlugDetails from '../src/components/SlugDetails'

import posts from '../src/posts/index'

const Post = () => {
    const router = useRouter()
    const { slug } = router.query
    return (
        <>
            <Header/>
            <SlugDetails>
                {
                    posts && posts.map(post => (
                        post.slug === slug ? (
                            <section key={post?.id}>
                                <img src={post?.image}></img>
                                    <h1>{post?.title}</h1>
                                    <p className="block__content">{post?.body}</p>
                                    <p className="block__content">{post?.body2}</p>
                                    <p className="block__content">{post?.body3}</p>
                                    <p className="block__content">{post?.body4}</p>
                                    <p className="block__content">{post?.body5}</p>

                                    {
                                        post?.ytid ?
                                            <iframe width="555" height="480" src={'https://www.youtube.com/embed/' + post?.ytid} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : null
                                    }

                                <Head>
                                    <title>{post?.title}</title>
                                    <meta name="description" content={post?.description} />
                                    <meta property="og:title" content={post?.title} />
                                    <meta property="og:description" content={post?.description} />
                                    <meta property="og:image" content={post?.image} />
                                    <meta property="og:url" content={post?.url} />
                                    <meta property="og:type" content="website" />
                                    <meta property="og:site_name" content="Onigiri Hardcore" />
                                    <meta property="og:locale" content="pt_BR" />
                                    
                                    <meta name="twitter:card" content="summary_large_image" />
                                    <meta name="twitter:title" content={post?.title} />
                                    <meta name="twitter:description" content={post?.description} />
                                    <meta name="twitter:image" content={post?.image} />
                                    <meta name="twitter:url" content={post?.url} />
                                    <meta name="twitter:site" content="@KalifyInc" />
                                    <meta name="twitter:creator" content="@KalifyInc" />
                                </Head>
                            </section>
                        ) : (
                            null
                        )
                    ))
                }
            </SlugDetails>
            <Footer/>
        </>
    )
}

export default Post