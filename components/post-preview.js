import formatDate from '../services/formatDate'
import CoverImage from './cover-image'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug
}) {
  return (
    <div className="content">
        <a href={slug}>
            <CoverImage slug={slug} title={title} image={coverImage} />
        </a>
        <div className="left-content">
            <a href={slug}>
                <h1>{title}</h1>
            </a>
            <i className="uil uil-clock-nine">&nbsp;{formatDate(date)}</i>
            <p>
                {excerpt}
            </p>
        </div>
    </div>
  )
}
