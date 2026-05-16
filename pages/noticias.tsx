import React, { useState } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import LastNewsDetails from "../src/components/LastNewsDetails";
import Head from "next/head";
import ContentDetails from "../src/components/ContentDetails";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import formatDate from "../src/utils/formatDate";
import calculateReadingTime from "../src/utils/calculateReadingTime";

export async function getServerSideProps({ res }) {
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
    // Get files from the posts dir
    const files = fs.readdirSync(path.join("posts"));

    // Get slug and frontmatter from posts
    const posts = files.map((filename) => {
        // Create slug
        let slug = "";
        slug = filename.replace(".mdx", "");

        const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");

        const { data: frontmatter, content: markdownContent } = matter(markdownWithMeta);
        const readingTime = calculateReadingTime(markdownContent);

        return {
            slug,
            frontmatter,
            readingTime,
        };
    });

    return {
        props: {
            postData: posts.sort((a, b) => {
                if (a.frontmatter.date && b.frontmatter.date) {
                    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
                } else {
                    console.error("Erro: Uma das datas está ausente nos posts.");
                    return 0;
                }
            }),
        },
    };
}

const renderCategory = (cat) => {
    switch (cat) {
        case "Movies":
            return <span className="movies">Filmes & Séries</span>;
        case "Games":
            return <span className="games">Video Games</span>;
        case "Technologies":
            return <span className="tecnologies">Ciência & Tecnologia</span>;
        case "Animes":
            return <span className="animes">Animes & HQs</span>;
        case "Development":
            return <span className="development">4Devs</span>;
        default:
            return null;
    }
};

const Noticias = ({ postData }) => {
    const [search, setSearch] = useState("");

    function handleSearch(event) {
        const query = event.target.value;

        setSearch(query);
    }

    const filteredPosts =
        search !== ""
            ? postData.filter(
                  (post) =>
                      post.frontmatter.title.toLowerCase().includes(search.toLocaleLowerCase()) ||
                      post.frontmatter.categories.toLowerCase().includes(search.toLocaleLowerCase()) ||
                      post.frontmatter.description.toLowerCase().includes(search.toLocaleLowerCase()),
              )
            : postData;

    return (
        <>
            <Head>
                <title>Notícias | Onigiri Hardcore</title>
            </Head>

            <Header />
            <ContentDetails>
                <LastNewsDetails>
                    <div className="container">
                        <input type="text" placeholder="O que vamos descobrir hoje?" onChange={handleSearch} />

                        <div className="header">
                            <p>&nbsp;&nbsp;&nbsp;Notícias ({filteredPosts.length})</p>
                        </div>
                        {filteredPosts &&
                            filteredPosts.map((post, index) => (
                                <div className="content" key={index}>
                                    <div className="leftContent">
                                        <a href={post.slug}>
                                            <img src={post.frontmatter.image} alt={post.frontmatter.title} width={150} height={150} loading="lazy" />
                                        </a>
                                    </div>
                                    <div className="rightContent">
                                        <a href={post.slug}>
                                            <h1>{post.frontmatter.title}</h1>

                                            <div className="categories">
                                                {renderCategory(post.frontmatter.categories)}
                                                <i className="uil uil-clock-nine">&nbsp;{formatDate(post.frontmatter.date)}</i>
                                            </div>
                                            <p>{post.frontmatter.description}</p>
                                        </a>
                                    </div>
                                </div>
                            ))}
                    </div>
                </LastNewsDetails>
            </ContentDetails>
            <Footer />
        </>
    );
};

export default Noticias;
