import LastNewsDetails from './LastNewsDetails'
import post from '../posts/index'

const posts = post.slice(0, 4)
const secondposts = post.slice(4, 9)

const LastNews = () => {
  return (
    <LastNewsDetails>
        <div className="tecnologies">
            <div className="header">
                <p>Últimas notícias</p>
            </div>

            <div className="content">
                {
                    posts.map((post, index) => (
                    <a href={post.slug} key={index}>
                        <img src={post.image} alt={post.title} title={post.title} />

                        <div className="title">
                            <h1>{post.smalltitle}</h1>
                            <i className="uil uil-clock-nine">&nbsp;{post.createdAt}</i>
                        </div>
                    </a>
                    ))
                }
            </div>

            <div className="secondContent">
                {
                    secondposts.map((post, index) => (
                    <a href={post.slug} key={index}>
                        <img src={post.image} alt={post.title} title={post.title} />

                        <div className="title">
                            <h1>{post.smalltitle}</h1>
                            <i className="uil uil-clock-nine">&nbsp;{post.createdAt}</i>
                        </div>
                    </a>
                    ))
                }
            </div>
        </div>
    </LastNewsDetails>
  )
}

export default LastNews