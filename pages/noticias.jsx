import React from 'react'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import FullNewsDetails from '../src/components/FullNewsDetails'

import post from '../server/index.json'
const posts = post.reverse()

const FullNews = () => {
  return (
    <>
        <Header/>
        <FullNewsDetails>
            <div className="fullnews">
                <h1>TODAS AS NOTÍCIAS DO ONIGIRI</h1>
                {posts && posts.map((item, index) => {
                    return (
                        <a href={item.slug} key={index}>
                            <img src={item.image} width="320"/>
                            <div className="title">
                                <p>{item.createdAtExtended}</p>
                                <h2>{item.title}</h2>
                            </div>
                        </a>
                    )
                })
            }
            </div>
        </FullNewsDetails>
        <Footer/>
    </>
  )
}

export default FullNews