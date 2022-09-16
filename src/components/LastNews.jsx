import LastNewsDetails from './LastNewsDetails'
import post from '../../server/index.json'

const posts = post.slice(0, 4)
const secondPosts = post.slice(4, 8)
const thirdPosts = post.slice(8, 12)

const LastNews = () => {
  return (
    <LastNewsDetails>
        <div className="tecnologies" id="news">
            <div className="header">
                <p>Últimas Notícias</p>
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
                    secondPosts.map((post, index) => (
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

            <div className="thirdContent">
                {
                    thirdPosts.map((post, index) => (
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