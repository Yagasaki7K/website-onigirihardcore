import React from 'react'

import posts from '../../server/index.json'

let animeContent = posts.filter(posts => posts.categories === 'Animes')
let firstAnime = animeContent.slice(0, 1)
let lastAnime = animeContent.slice(1, 4)

let gamesContent = posts.filter(posts => posts.categories === 'Games')
let firstGames = gamesContent.slice(0, 1)
let lastGames = gamesContent.slice(1, 4)

let moviesContent = posts.filter(posts => posts.categories === 'Movies')
let firstMovies = moviesContent.slice(0, 1)
let lastMovies = moviesContent.slice(1, 4)

import CategoriesDetails from './CategoriesDetails'

const Categories = () => {
    return (
        <CategoriesDetails>
            <div className="firstCategories" id="animes">
                <div className="header">
                    <p className="animes">&nbsp;&nbsp;Animes {`&`} HQs</p>
                </div>

                {
                    firstAnime && firstAnime.map(post => (
                        post.categories === 'Animes' ? (
                            <a href={post.slug} key={post.id}>
                                <img src={post.image} alt={post.title} />
                                <h1>{post.smalltitle}</h1>

                                <span>
                                    <i className="uil uil-clock-nine">&nbsp;{post.createdAt}</i>
                                    <p>{post.description}</p>
                                </span>
                            </a>
                        ) : (
                            null
                        )
                    ))
                }

                <div className="posts">
                    {
                        lastAnime && lastAnime.map(post => (
                            post.categories === 'Animes' ? (
                                <div className="post" key={post.id}>
                                    <a href={post.slug} >
                                        <img src={post.image} alt={post.title} />

                                        <div className="post-side">
                                            <h3>
                                                {post.smalltitle}
                                            </h3>
                                            <i className="uil uil-clock-nine">&nbsp;{post.createdAt}</i>
                                            <hr />
                                        </div>
                                    </a>
                                </div> 
                            ) : (
                                null
                            )
                        ))
                    }
                </div>
            </div>

            <div className="secondCategories">
                <div className="header">
                    <p className="games">&nbsp;&nbsp;Video Games</p>
                </div>

                {
                    firstGames && firstGames.map(post => (
                        post.categories === 'Games' ? (
                            <a href={post.slug} key={post.id}>
                                <img src={post.image} alt={post.title} />
                                <h1>{post.smalltitle}</h1>

                                <span>
                                    <i className="uil uil-clock-nine">&nbsp;{post.createdAt}</i>
                                    <p>{post.description}</p>
                                </span>
                            </a>
                        ) : (
                            null
                        )
                    ))
                }

                <div className="posts">
                    {
                        lastGames && lastGames.map(post => (
                            post.categories === 'Games' ? (
                                <div className="post" key={post.id}>
                                    <a href={post.slug} >
                                        <img src={post.image} alt={post.title} />

                                        <div className="post-side">
                                            <h3>
                                                {post.smalltitle}
                                            </h3>
                                            <i className="uil uil-clock-nine">&nbsp;{post.createdAt}</i>
                                            <hr />
                                        </div>
                                    </a>
                                </div> 
                            ) : (
                                null
                            )
                        ))
                    }
                </div>
            </div>

            <div className="secondCategories">
                <div className="header">
                    <p  className="movies">&nbsp;&nbsp;Filmes {`&`} Séries</p>
                </div>

                {
                    firstMovies && firstMovies.map(post => (
                        post.categories === 'Movies' ? (
                            <a href={post.slug} key={post.id}>
                                <img src={post.image} alt={post.title} />
                                <h1>{post.smalltitle}</h1>

                                <span>
                                    <i className="uil uil-clock-nine">&nbsp;{post.createdAt}</i>
                                    <p>{post.description}</p>
                                </span>
                            </a>
                        ) : (
                            null
                        )
                    ))
                }

                <div className="posts">
                    {
                        lastMovies && lastMovies.map(post => (
                            post.categories === 'Movies' ? (
                                <div className="post" key={post.id}>
                                    <a href={post.slug} >
                                        <img src={post.image} alt={post.title} />

                                        <div className="post-side">
                                            <h3>
                                                {post.smalltitle}
                                            </h3>
                                            <i className="uil uil-clock-nine">&nbsp;{post.createdAt}</i>
                                            <hr />
                                        </div>
                                    </a>
                                </div> 
                            ) : (
                                null
                            )
                        ))
                    }
                </div>
            </div>
        </CategoriesDetails>
    )
}

export default Categories