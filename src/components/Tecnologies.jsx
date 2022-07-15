import TecnologiesDetails from './TecnologiesDetails'
import { useState, useEffect } from 'react'
import sanityClient from '../database'

const Tecnologies = () => {

    const [singlePost, setSinglePost] = useState([])

    useEffect(() => {
        sanityClient
          .fetch(
            `*[_type == "posts" && $keyword in tags[].label]{
              title,
              slug,
              publishedAt,
              mainImage{
                asset->{
                  _id,
                  url
                 }
               },
             body,
            "name": author->name,
            "authorImage": author->image,
            "keyword": "tecnologies"
           }`
          )
          .then((data) => setSinglePost(data))
          .catch(console.error);
      }, []);

  return (
    <TecnologiesDetails>
        <div className="tecnologies">
            <div className="header">
                <p>Tecnologia</p>
            </div>

            <div className="content">
                {
                    singlePost.map((post, index) => (
                    <a href="#" key={index}>
                        <img src={post.mainImage.asset.url} alt={post.title} title={post.title} />

                        <div className="title">
                            <h1>{post.title}</h1>
                            <i className="uil uil-clock-nine">&nbsp;{post.publishedAt}</i>
                        </div>
                    </a>
                    ))
                }

                <a href="#">
                    <img src="https://web.archive.org/web/20181228112722im_/http://onigirihardcore.com.br/wp-content/uploads/2018/12/Midoriya.Izuku_.full_.2263669-1920x600.png" alt="" />

                    <div className="title">
                        <h1>Dragon Ball Super Broly - Saiyajins estão efurecidos no ...</h1>
                        <i className="uil uil-clock-nine">&nbsp;20/12/2018</i>
                    </div>
                </a>

                <a href="#">
                    <img src="https://web.archive.org/web/20181228112722im_/http://onigirihardcore.com.br/wp-content/uploads/2018/12/Midoriya.Izuku_.full_.2263669-1920x600.png" alt="" />

                    <div className="title">
                        <h1>Dragon Ball Super Broly - Saiyajins estão efurecidos no ...</h1>
                        <i className="uil uil-clock-nine">&nbsp;20/12/2018</i>
                    </div>
                </a>

                <a href="#">
                    <img src="https://web.archive.org/web/20181228112722im_/http://onigirihardcore.com.br/wp-content/uploads/2018/12/Midoriya.Izuku_.full_.2263669-1920x600.png" alt="" />

                    <div className="title">
                        <h1>Dragon Ball Super Broly - Saiyajins estão efurecidos no ...</h1>
                        <i className="uil uil-clock-nine">&nbsp;20/12/2018</i>
                    </div>
                </a>
            </div>

            <div className="secondContent">
                <a href="#">
                    <img src="https://web.archive.org/web/20181228112722im_/http://onigirihardcore.com.br/wp-content/uploads/2018/12/Midoriya.Izuku_.full_.2263669-1920x600.png" alt="" />

                    <div className="title">
                        <h1>Dragon Ball Super Broly - Saiyajins estão efurecidos no ...</h1>
                        <i className="uil uil-clock-nine">&nbsp;20/12/2018</i>
                    </div>
                </a>

                <a href="#">
                    <img src="https://web.archive.org/web/20181228112722im_/http://onigirihardcore.com.br/wp-content/uploads/2018/12/Midoriya.Izuku_.full_.2263669-1920x600.png" alt="" />

                    <div className="title">
                        <h1>Dragon Ball Super Broly - Saiyajins estão efurecidos no ...</h1>
                        <i className="uil uil-clock-nine">&nbsp;20/12/2018</i>
                    </div>
                </a>

                <a href="#">
                    <img src="https://web.archive.org/web/20181228112722im_/http://onigirihardcore.com.br/wp-content/uploads/2018/12/Midoriya.Izuku_.full_.2263669-1920x600.png" alt="" />

                    <div className="title">
                        <h1>Dragon Ball Super Broly - Saiyajins estão efurecidos no ...</h1>
                        <i className="uil uil-clock-nine">&nbsp;20/12/2018</i>
                    </div>
                </a>

                <a href="#">
                    <img src="https://web.archive.org/web/20181228112722im_/http://onigirihardcore.com.br/wp-content/uploads/2018/12/Midoriya.Izuku_.full_.2263669-1920x600.png" alt="" />

                    <div className="title">
                        <h1>Dragon Ball Super Broly - Saiyajins estão efurecidos no ...</h1>
                        <i className="uil uil-clock-nine">&nbsp;20/12/2018</i>
                    </div>
                </a>
            </div>
        </div>
    </TecnologiesDetails>
  )
}

export default Tecnologies