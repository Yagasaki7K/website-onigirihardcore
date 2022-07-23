import CoverImage from '../components/cover-image'
import SlugDetails from '../components/SlugDetails'
import formatDate from '../components/date'

export default function PostHeader({ title, coverImage, date}) {
    return (
        <SlugDetails>
            <div className="hidden md:block md:mb-10">

            </div>
            <div className="mb- md:mb-16 sm:mx-25">
                <CoverImage title={title} image={coverImage} />
            </div>

            <section>
                <h1>{title}</h1>

                <p className="date">Publicado em: {formatDate(date)} // <a href="https://yagasaki.vercel.app/" target="_blank" rel="noreferrer">Anderson "Yagasaki" Marlon</a></p>
            </section>
        </SlugDetails>
    )
}
