"use client";
import { useEffect, useState } from "react";

import fs from "fs";
import path from "path";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import SlugDetails from "../src/components/SlugDetails";
import { toast } from "sonner";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { marked } from "marked";
import matter from "gray-matter";
import formatDate from "../src/utils/formatDate";

export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join("posts"));

    const paths = files.map((filename) => {
        const slug = filename.replace(".mdx", "");
        return {
            params: {
                slug: slug,
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    if (!params || !params.slug) {
        return {
            notFound: true,
        };
    }

    const { slug } = params;
    const filePath = path.join("posts", `${slug}.mdx`);
    const markdownWithMeta = fs.readFileSync(filePath, "utf-8");
    const { data: frontmatter, content } = matter(markdownWithMeta);
    const renderedContent = await marked(content);

    return {
        props: {
            frontmatter,
            slug,
            content: renderedContent,
        },
    };
};

const Post = ({ frontmatter, slug, content }) => {
    const [htmlContent, setHtmlContent] = useState(null);
    useEffect(() => {
        dontCopy();

        const fetchContent = async () => {
            const markedContent = content;
            setHtmlContent(markedContent);
        };

        fetchContent();
    }, [content]);

    const dontCopy = () => {
        const preventRightClick = (e) => {
            e.preventDefault();
        };

        const preventCopyPaste = (e) => {
            if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86)) {
                e.preventDefault();
            }
        };

        const disableTextSelection = () => {
            document.body.style.userSelect = "none";
        };

        document.addEventListener("contextmenu", preventRightClick);
        document.addEventListener("keydown", preventCopyPaste);
        disableTextSelection();

        return () => {
            document.removeEventListener("contextmenu", preventRightClick);
            document.removeEventListener("keydown", preventCopyPaste);
            document.body.style.userSelect = "";
        };
    };

    function copyToClipboard() {
        let copyText = frontmatter.title + "\n\nhttps://onigirihardcore.vercel.app/" + slug;

        toast.success("Link copiado no seu clipboard!");
        navigator.clipboard.writeText(copyText);
    }

    useEffect(() => {
        // Executa apenas no cliente
        if (typeof window === "undefined") return;

        const userAgent = window.navigator.userAgent;
        const osPlatform = window.navigator.platform;

        const browser = (() => {
            if (/Edg\//.test(userAgent)) return "Edge";
            if (/OPR\//.test(userAgent) || /Opera/.test(userAgent)) return "Opera";
            if (/Chrome/.test(userAgent) && !/Edg\//.test(userAgent) && !/OPR\//.test(userAgent)) return "Chrome";
            if (/Safari/.test(userAgent) && !/Chrome/.test(userAgent)) return "Safari";
            if (/Firefox/.test(userAgent)) return "Firefox";
            return "Desconhecido";
        })();

        const getOS = () => {
            if (/Win/.test(osPlatform)) return "Windows";
            if (/Mac/.test(osPlatform)) return "MacOS";
            if (/Linux/.test(osPlatform)) return "Linux";
            if (/Android/.test(userAgent)) return "Android";
            if (/iPhone|iPad|iPod/.test(userAgent)) return "iOS";
            return "Desconhecido";
        };

        const operatingSystem = getOS();
        const accessTime = new Date().toLocaleString("pt-BR", {
            timeZone: "America/Sao_Paulo",
        });

        // Envio do log
        fetch("https://discord.com/api/webhooks/1438232691702239416/cybJ0WWaB3jTu1MZLYdQ1mLtZJs8LSS6zTtExCBSQWC4SzwaUIKSgHTxZ2mpEo9mZIX8", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                content: `**Novo Acesso:** OS: ${operatingSystem} / Navegador: ${browser} / Acesso: ${accessTime}\n\nPágina: ${window.location.href}`,
            }),
        }).catch((err) => console.error("Erro ao enviar para Discord:", err));
    }, []);

    return (
        <>
            <Header />
            <SlugDetails>
                <NextSeo
                    title={frontmatter.title}
                    description={frontmatter.description}
                    canonical={`https://onigirihardcore.vercel.app/` + slug}
                    openGraph={{
                        url: "https://onigirihardcore.vercel.app/" + slug,
                        title: frontmatter.title,
                        description: frontmatter.description,
                        images: [
                            {
                                url: frontmatter.image,
                                width: 460,
                                height: 460,
                                alt: frontmatter.title,
                                type: "image/png",
                            },
                        ],
                        siteName: "Onigiri Hardcore",
                    }}
                    twitter={{
                        handle: "@Yagasaki7K",
                        site: "@Yagasaki7K",
                        cardType: "summary_large_image",
                    }}
                />

                <Head>
                    <title>{frontmatter.title + " | Onigiri Hardcore"}</title>
                </Head>

                {frontmatter.image && <img src={frontmatter.image} alt={frontmatter.title} width={1920} height={1080} />}

                <section key={frontmatter.id}>
                    <p className="block__content">
                        {formatDate(frontmatter.date)} |{" "}
                        {{
                            Movies: "Filmes & Séries",
                            Games: "Video Games",
                            Technologies: "Ciência & Tecnologia",
                            Development: "4Devs",
                            Animes: "Animes & HQs",
                        }[frontmatter.categories] || "Sem categoria"}{" "}
                        | {frontmatter.author} | <i onClick={copyToClipboard} className="uil uil-share" />
                    </p>

                    <h1 className="title__content">{frontmatter.title}</h1>

                    <div className="image__content">
                        <div dangerouslySetInnerHTML={{ __html: htmlContent || "" }} />
                    </div>

                    {frontmatter.ytid ? (
                        <iframe
                            width="550"
                            height="480"
                            src={"https://www.youtube.com/embed/" + frontmatter.ytid}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                    ) : null}
                </section>
                <Footer />
            </SlugDetails>
        </>
    );
};

export default Post;
