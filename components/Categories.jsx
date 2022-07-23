import React from 'react'
import { Link } from 'next/link'
import Image from 'next/image'

import CategoriesDetails from './CategoriesDetails'
import formatDate from './services/formatDate'
import getImages from './services/getImages'

const Categories = (props) => {
    return (
        <CategoriesDetails>
            <div className="firstCategories" key={props._id}>
                <div className="header">
                    <p>Animes {`&`} HQs</p>
                </div>

                {
                    props.value && props.value.map((items, index) => (
                        <a href={items?.slug.current} key={index}>
                            <img src={getImages(items?.mainImage.asset._ref)} alt="" />
                            <h1>{items?.title}</h1>
                        </a>
                    ))
                }
                {
                    props.value && props.value.map((items, index) => (
                        <span key={index}>
                            <i className="uil uil-clock-nine">&nbsp;{formatDate(items._createdAt)}</i>
                            <p>
                            {items?.body.children}
                            </p>
                        </span>
                    ))
                }
                

                <div className="posts">
                    <div className="post">
                        <Image src="https://web.archive.org/web/20181228112722im_/http://onigirihardcore.com.br/wp-content/uploads/2018/12/Midoriya.Izuku_.full_.2263669-1920x600.png" alt="" />
                        <div className="post-side">
                        <Link href="">
                            <h3>
                                My Hero Academia – Pôster confirma 4ª temporada para 2019
                            </h3>
                        </Link>
                        <i className="uil uil-clock-nine">&nbsp;20/12/2018</i>
                        <hr/>
                        </div>   
                    </div> 
                </div>
            </div>

            {/* /// */}

            <div className="secondCategories">
            <div className="header">
                    <p>&nbsp;&nbsp;Nas Telonas</p>
                </div>

                <Image src="https://web.archive.org/web/20181228112722im_/http://onigirihardcore.com.br/wp-content/uploads/2018/12/Midoriya.Izuku_.full_.2263669-1920x600.png" alt="" />

                <Link href="#">
                    <h1>Dragon Ball Super Broly - Saiyajins estão efurecidos no ...</h1>
                </Link>

                <span>
                    <i className="uil uil-clock-nine">&nbsp;20/12/2018</i>
                    <p>
                    Um novo trailer dublado de Dragon Ball Super Broly foi divulgado, e ele traz Goku, Vegeta e Broly enfurecidos em uma grande batalha …
                    </p>
                </span>

                <div className="posts">
                    <div className="post">
                        <Image src="https://web.archive.org/web/20181228112722im_/http://onigirihardcore.com.br/wp-content/uploads/2018/12/Midoriya.Izuku_.full_.2263669-1920x600.png" alt="" />
                        <div className="post-side">
                        <Link href="">
                            <h3>
                                My Hero Academia – Pôster confirma 4ª temporada para 2019
                            </h3>
                        </Link>
                        <i className="uil uil-clock-nine">&nbsp;20/12/2018</i>
                        <hr/>
                        </div>   
                    </div> 
                </div>
            </div>

            {/* /// */}

            <div className="thirdCategories">
            <div className="header">
                    <p>&nbsp;&nbsp;Las Jogatinas</p>
                </div>

                <Image src="https://web.archive.org/web/20181228112722im_/http://onigirihardcore.com.br/wp-content/uploads/2018/12/Midoriya.Izuku_.full_.2263669-1920x600.png" alt="" />

                <Link href="#">
                    <h1>Dragon Ball Super Broly - Saiyajins estão efurecidos no ...</h1>
                </Link>

                <span>
                    <i className="uil uil-clock-nine">&nbsp;20/12/2018</i>
                    <p>
                    Um novo trailer dublado de Dragon Ball Super Broly foi divulgado, e ele traz Goku, Vegeta e Broly enfurecidos em uma grande batalha …
                    </p>
                </span>

                <div className="posts">
                    <div className="post">
                        <Image src="https://web.archive.org/web/20181228112722im_/http://onigirihardcore.com.br/wp-content/uploads/2018/12/Midoriya.Izuku_.full_.2263669-1920x600.png" alt="" />
                        <div className="post-side">
                        <Link href="">
                            <h3>
                                My Hero Academia – Pôster confirma 4ª temporada para 2019
                            </h3>
                        </Link>
                        <i className="uil uil-clock-nine">&nbsp;20/12/2018</i>
                        <hr/>
                        </div>   
                    </div> 
                </div>
            </div>
        </CategoriesDetails>
    )
}

export default Categories