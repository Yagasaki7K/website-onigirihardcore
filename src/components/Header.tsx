import Link from "next/link";
import { useRouter } from "next/router";
import { HeaderDetails, HeaderMobile } from "./HeaderDetails";

import { useState, useEffect, useRef } from "react";

import { AnimatePresence, motion } from "framer-motion";

const getInitialWidth = () => (typeof window !== "undefined" ? window.innerWidth : 1024);

const Header = () => {
    const [width, setWidth] = useState<number>(getInitialWidth);
    const [open, setOpen] = useState(false);
    const drawnerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        setWidth(window.innerWidth);

        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (drawnerRef.current && event.target instanceof Node && !drawnerRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        if (typeof document !== "undefined") {
            document.addEventListener("click", handleClickOutside);
        }

        return () => {
            window.removeEventListener("resize", handleResize);

            if (typeof document !== "undefined") {
                document.removeEventListener("click", handleClickOutside);
            }
        };
    }, []);

    const router = useRouter();
    const uwuUrl = router.asPath;
    const [uwu, setUwu] = useState(false);

    useEffect(() => {
        if (uwuUrl !== undefined && uwuUrl !== null) {
            if (uwuUrl.includes("uwu=true")) {
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
                        {uwu ? <img src="/uwu.png" className="logotipo" alt="logo" /> : <img src="/logotipo.png" className="logotipo" alt="logo" />}
                    </div>
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                className="drawner"
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
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </HeaderMobile>
            ) : (
                <HeaderDetails>
                    <div className="header">
                        <Link href="/">
                            {uwu ? <img src="/uwu.png" className="uwu" alt="logo" /> : <img src="/logotipo.png" className="logotipo" alt="logo" />}
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
                                    <Link href="https://kalify.vercel.app" target="_blank" rel="noreferrer">
                                        Kalify Inc
                                    </Link>
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
                                    <Link href="/#news">Ciência {`&`} Tecnologia</Link>
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
