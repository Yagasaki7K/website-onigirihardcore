import LastNewsDetails from './LastNewsDetails'
import PostPreview from './post-preview'

export default function MoreStories({ posts }) {
  return (
    <LastNewsDetails>
    <div className="lastnews">
        <div className="header">
            <p>&nbsp;&nbsp;Últimas Notícias</p>
        </div>
        
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
    </div>  
    </LastNewsDetails>
  )
}
