import React, { useEffect, useState } from 'react';
import postService from '../services/post.service';

const APIPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        try {
            const data = await postService.getAllPosts();
            const sortedPosts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                .sort((a, b) => b.moreDate - a.moreDate); // Sort by moreDate in descending order
            setPosts(sortedPosts);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    return (
        <div>
            <pre>[</pre>
            {posts.map((post) => (
                <div key={post.id} className="post">
                    <pre>

                        {posts.slice(0, 10).map((post) => (
                            <div key={post.id}>
                                {JSON.stringify(post, null, 2)},
                            </div>
                        ))
                        }
                    </pre>
                </div>
            ))}
            <pre>]</pre>
        </div>
    );
};

export default APIPage;
