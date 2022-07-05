import useAxiosFetch from "../hooks/useAxiosFetch";
import Post from "./Post";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";

const Home = () => {

    const [current, setCurrent] = useState(1);

    const [url, setUrl] = useState(`/getPost?page=${current - 1}`);

    const onChange = (page) => {
        setCurrent(page)
    }

    useEffect(() => {
        setUrl(`/getPost?page=${current - 1}`)
    }, [current]);


    const { data, fetchError, isLoading } = useAxiosFetch(url);

    return (
        <div className="Home">
            {isLoading && <p className="statusMsg">Loading posts...</p>}
            {!isLoading && fetchError && <p className="statusMsg" style={{ color: "red" }}>{fetchError}</p>}
            {!isLoading && !fetchError && (data?.posts?.length ?
                data?.posts.map((post) => (
                    <Post key={post._id} post={post} />
                ))
                : <p className="statusMsg">No posts to display.</p>)}
            {
                !isLoading && !fetchError && data?.posts?.length ?
                    <div style={{ marginTop: 25 }}>
                        <Pagination current={current} total={data?.total} onChange={onChange} />
                    </div> : null
            }
        </div>
    )
}

export default Home