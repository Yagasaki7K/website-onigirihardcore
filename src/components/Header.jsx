import Link from "next/link";
import { useRouter } from "next/router";
import { HeaderDetails, HeaderMobile } from "./HeaderDetails";

import { useState, useEffect, useRef } from 'react';

import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
    const [width, setWidth] = useState();
    const [open, setOpen] = useState(false);
    const drawnerRef = useRef(null);

    useEffect(() => {
        setWidth(window.innerWidth);
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        function handleClickOutside(event) {
            if (drawnerRef.current && !drawnerRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener('click', handleClickOutside);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    const router = useRouter();
    const uwuUrl = router.asPath;
    const [uwu, setUwu] = useState(false);

    useEffect(() => {
        if (uwuUrl !== undefined && uwuUrl !== null) {
            if (uwuUrl.includes('uwu=true')) {
                setUwu(true);
            } else {
                setUwu(false);
            }
        }
    }, [uwuUrl]);

    return (
        <>
            {width <= 600 ? (
                <HeaderMobile ref={drawnerRef}>
                    {/*<MenuOutlined className={open ? `menu active` : `menu`} onClick={() => setOpen(!open)} />*/}
                    <div className="logo-drawner">
                        {
                            uwu ? (
                                <img
                                    src="/uwu.png"
                                    className="logotipo"
                                    alt="logo"
                                />
                            ) : (
                                <img
                                    src="/logotipo.png"
                                    className="logotipo"
                                    alt="logo"
                                />
                            )
                        }
                    </div>
                    <AnimatePresence>
                        {open && (
                            <motion.div className="drawner"
                                layout
                                initial={{ top: "-200px", opacity: 0 }}
                                animate={{ top: "50px", opacity: 1 }}
                                exit={{ top: "-200px", opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="content-drawner">
                                    {/*<CloseOutlined className="close-icon" onClick={() => setOpen(false)} />*/}
                                    <p>Navegar</p>
                                    <div className="navigation-drawner">
                                        <Link href="/">Início</Link>
                                        <Link href="/noticias">Notícias</Link>
                                        <Link href="/#animes">
                                            Animes {`&`} HQ{`'`}s
                                        </Link>
                                        <Link href="https://github.com/Yagasaki7K/website-onigirihardcore/raw/main/onigirihardcore.apk" target="_blank" rel="noreferrer"><i className="uil uil-android"></i> Download App</Link>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </HeaderMobile >
            ) : (
                <HeaderDetails>
                    <div className="header">
                        <Link href="/">
                            {
                                uwu ? (
                                    <img src="/uwu.png" className="uwu" alt="logo" />
                                ) : (
                                    <img src="/logotipo.png" className="logotipo" alt="logo" />
                                )
                            }
                        </Link>
                    </div>

                    <div className="navigation">
                        <ul id="ul-menu">
                            <div className="burguer">
                                <li>
                                    <Link href="/">Início</Link>
                                </li>
                                <li>
                                    <Link href="/noticias">Notícias</Link>
                                </li>
                                <li>
                                    <Link href="https://kalify.vercel.app" target="_blank" rel="noreferrer">Kalify Inc</Link>
                                </li>
                            </div>
                            <span id="item-menu">
                                <li>
                                    <Link href="/">Início</Link>
                                </li>
                                <li>
                                    <Link href="/noticias">Notícias</Link>
                                </li>
                                <li>
                                    <Link href="/#animes">
                                        Animes {`&`} HQ{`'`}s
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#news">
                                        Ciência {`&`} Tecnologia
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://github.com/Yagasaki7K/website-onigirihardcore/raw/main/onigirihardcore.apk" target="_blank" rel="noreferrer"><i className="uil uil-android"></i> Download App</Link>
                                </li>
                                <li>
                                    <Link href="https://twitter.com/OHNewsOficial" target="_blank" rel="noreferrer">
                                        <i className="uil uil-twitter" /> @OHNewsOficial
                                    </Link>
                                </li>
                            </span>
                        </ul>
                    </div>
                </HeaderDetails>
            )}
        </>
    );
};

export default Header;
