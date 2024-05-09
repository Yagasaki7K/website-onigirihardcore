import React, { useEffect, useState } from 'react';
import FooterDetails from './FooterDetails';
import { useRouter } from 'next/router';

export default function Footer() {
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
        <FooterDetails>
            <div className="imgfooter">
                <a href="/">
                    {
                        uwu ? (
                            <img src="/uwu.png" className="uwu" alt="logo" />
                        ) : (
                            <img src="/logotipo.png" alt="logo" />
                        )
                    }
                </a>
            </div>

            <div className="footer">
                <p>
                    <a href="/login">©</a> 2015 - {new Date().getFullYear()} <a href="/">Onigiri Hardcore</a> by&nbsp;
                    <a href="https://kalify.vercel.app/" target="_blank" rel="noreferrer">Kalify Inc.</a> |&nbsp;Todas as imagens são marcas registradas dos seus respectivos proprietários
                </p>
            </div>
        </FooterDetails>
    )
}
