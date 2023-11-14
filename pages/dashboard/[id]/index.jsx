'use client'
import React from 'react';
import postService from "../../../services/post.service";
import PropTypes from 'prop-types';

export async function getServerSideProps(context) {
    const { id } = context.params
    const data = await postService.getPost(id)
    const post = data.data()
    post.date = post.date.toDate().toString(); 
    post.id = id

    return {
        props: {
            post
        }
    }
}

EditPostPage.PropTypes = {
    post: PropTypes.object.isRequired,
}

export default function EditPostPage({ post }) {

    return (
        <div>
      <h1>Detalhes do Post:</h1>
      <ul>
        {Object.entries(post).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {typeof value === "object" ? JSON.stringify(value) : value}
          </li>
        ))}
      </ul>
    </div>
    )
}

