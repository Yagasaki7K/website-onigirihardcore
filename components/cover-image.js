import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '../lib/sanity'

export default function CoverImage({ title, slug, image: source }) {
  const image = source ? (
      <Image
        layout="responsive"
        width={2000}
        height={1000}
        alt={title}
        src={urlForImage(source).height(1000).width(2000).url()}
      />
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  )

  return (
    <div className="sm:mx-0">
      {slug ? (
        <a href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </a>
      ) : (
        image
      )}
    </div>
  )
}
