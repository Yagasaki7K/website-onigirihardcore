import TecnologiesDetails from './TecnologiesDetails'

const Tecnologies = () => {

    const [singlePost, setSinglePost] = useState([])

    const keyword = 'tecnologia'

    useEffect(() => {
        sanityClient
          .fetch(
            `*[_type == "posts" && ${keyword} in categories[]->slug.current] {
                ...,
                categories[] -> {
                        title,
                        slug,
                        image{
                            asset->{
                                _id,
                                url
                            }
                        }
                },
              }`
          )
          .then((data) => setSinglePost(data))
          .catch(console.error);
      }, [!singlePost]);

  return (
    <TecnologiesDetails>
        <div className="tecnologies">
            <div className="header">
                <p>Tecnologia</p>
            </div>

            <div className="content">
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