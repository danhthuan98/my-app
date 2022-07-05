import { Link } from 'react-router-dom';

const Post = ({ post }) => {

    const date = new Date(post?.createdAt);
    return (
        <article className="post">
            <Link to={`/post/${post._id}`}>
                <h2>{post.title}</h2>
                <p className="postDate">{`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`}</p>
            </Link>
            <p className="postBody">{
                post.descrip
            }</p>
        </article>
    )
}

export default Post;