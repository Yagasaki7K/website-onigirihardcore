'use client'
import React, { useEffect, useState } from 'react'

import fs from 'fs';
import path from 'path';
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import SlugDetails from '../src/components/SlugDetails'
import { toast } from 'sonner'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { marked } from 'marked';
import matter from 'gray-matter';
import formatDate from '../src/utils/formatDate';

export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('posts'));

    const paths = files.map((filename) => {
        const slug = filename.replace('.mdx', '');
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
}

export const getStaticProps = async ({ params }) => {
    if (!params || !params.slug) {
        return {
            notFound: true,
        };
    }

    const { slug } = params;
    const filePath = path.join('posts', `${slug}.mdx`);
    const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter, content } = matter(markdownWithMeta);
    const renderedContent = await marked(content);

    return {
        props: {
            frontmatter,
            slug,
            content: renderedContent,
        },
    };
}

const Post = ({ frontmatter, slug, content }) => {
    const [htmlContent, setHtmlContent] = useState(null);
    useEffect(() => {
        dontCopy()

        const fetchContent = async () => {
            const markedContent = content;
            setHtmlContent(markedContent);
        };

        fetchContent();
    }, [content])

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
            document.body.style.userSelect = 'none';
        };

        document.addEventListener('contextmenu', preventRightClick);
        document.addEventListener('keydown', preventCopyPaste);
        disableTextSelection();

        return () => {
            document.removeEventListener('contextmenu', preventRightClick);
            document.removeEventListener('keydown', preventCopyPaste);
            document.body.style.userSelect = '';
        };
    }

    function copyToClipboard() {
        let copyText = frontmatter.title + '\n\nhttps://onigirihardcore.com.br/' + slug;

        toast.success('Link copiado no seu clipboard!');
        navigator.clipboard.writeText(copyText);
    }

    return (
        <>
            <Header />
            <SlugDetails>
                <NextSeo
                    title={frontmatter.title}
                    description={frontmatter.description}
                    canonical={`https://onigirihardcore.com.br/` + slug}
                    openGraph={{
                        url: 'https://onigirihardcore.com.br/' + slug,
                        title: frontmatter.title,
                        description: frontmatter.description,
                        images: [
                            {
                                url: frontmatter.image,
                                width: 460,
                                height: 460,
                                alt: frontmatter.title,
                                type: 'image/jpeg' || 'image/png',
                            }
                        ],
                        siteName: 'Onigiri Hardcore',
                    }}
                    twitter={{
                        handle: '@Yagasaki7K',
                        site: '@Yagasaki7K',
                        cardType: 'summary_large_image',
                    }}
                />

                <Head>
                    <title>{frontmatter.title + ' | Onigiri Hardcore'}</title>
                </Head>

                {frontmatter.image && (<img src={frontmatter.image} alt={frontmatter.title} width={1024} height={768} />)}

                <section key={frontmatter.id}>
                    <p className="block__content">{formatDate(frontmatter.date)} | {frontmatter.categories === 'Movies' ? 'Filmes & Séries' : null || frontmatter.categories === 'Games' ? 'Video Games' : null || frontmatter.categories === 'Technologies' ? 'Ciência & Tecnologia' : null || frontmatter.categories === 'Development' ? '4Devs' : null || frontmatter.categories === 'Animes' ? 'Animes & HQs' : null} | {frontmatter.author} | <i onClick={copyToClipboard} className="uil uil-share"></i></p>

                    <h1 className="title__content">{frontmatter.title}</h1>

                    <div className="image__content"><div dangerouslySetInnerHTML={({ __html: htmlContent || '' })} /></div>

                    <div className="touch">
                        <div className="leftContent">
                            <h2>Fique atualizado!</h2>
                            <p>Mantenha-se atualizado sobre todas as novidades do <strong>Onigiri Hardcore</strong> e siga-nos também no Twitter para não perder nenhum destaque da semana!</p>
                        </div>
                        <div className="rightContent">
                            <span>
                                <a href="https://twitter.com/OHNewsOficial" target="_blank"><i className="uil uil-twitter" /> Siga-nos!</a>
                            </span>
                        </div>
                    </div>

                    {frontmatter.ytid ?
                        <iframe width="550" height="480" src={'https://www.youtube.com/embed/' + frontmatter.ytid} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : null}
                </section>
                <Footer />
            </SlugDetails>
        </>
    )
}

export default Post
