import React, { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

/**
* @author
* @function NewPost
**/

const NewPost = () => {

    const [postTitle, setPostTitle] = useState('');
    const [postDescrip, setPostDescrip] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = { title: postTitle, descrip: postDescrip };
        try {
            await axios.post('/postMessage', newPost);
            setPostTitle('');
            setPostDescrip('');
            navigate('/');

        } catch (err) {
            console.log(`Error: ${err.message}`)
        }
    }

    return (
        <div className="NewPost">
            <h2>New Post</h2>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Title:</label>
                <input
                    id="postTitle"
                    type="text"
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                />
                <label htmlFor="postDescrip">Post:</label>
                <textarea
                    id="postDescrip"
                    required
                    value={postDescrip}
                    onChange={(e) => setPostDescrip(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default NewPost;