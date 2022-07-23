import markdownStyles from './markdown-styles.module.css'
import { PortableText } from '@portabletext/react'

export default function PostBody({ content, ytid }) {
    return (
        <div className={`max-w-4xl mx-auto ${markdownStyles.markdown}`}>
            <PortableText value={content} />
            {ytid ? <iframe src={"https://www.youtube.com/embed/" + ytid} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" width="100%" height="400" allowFullScreen /> : null}
        </div>
    )
}
